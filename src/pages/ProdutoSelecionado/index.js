import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { findProductById } from "../../services/produto.service";
import { useEffect, useState } from "react";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { useCart } from "../../Context/CartContext";

const ProdutoSelecionado = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [produto, setProduto] = useState({});
    const [quantidade, setQuantidade] = useState(1);
    const [obs, setObs] = useState('');
    const { addCarrinho } = useCart();

    const getProdutoById = async () => {
        const response = await findProductById(id);

        if (response.data) {
            setProduto(response.data)
        }
    }

    const handleSalvarProdutoCarrinho = () => {
        const prodCompleto = { ...produto, quantidade, obs }
        addCarrinho(prodCompleto);
        navigate('/produtoSelecionadoSucesso')
    };

    const handleObs = (e) => {
        const textoObs = e.target.value
        if (textoObs) {
            setObs(textoObs)
        } else (
            setObs("")
        )
    }

    useEffect(() => {
        getProdutoById()
    }, [])

    return (
        <div className="p-5 flex flex-col justify-center items-center m-2 w-full">
            <div className="border border-slate-300 w-full md:max-w-lg p-5 rounded-lg shadow-2xl  ">
                <h2 className="text-2xl font-bold color-primary">Produto Selecionado</h2>
                <p className="text-center font-bold text-2xl text-gray-600 mt-5">{produto.nome}</p>

                <h3 className="mt-3 font-semibold">Itens:</h3>
                <ul className="list-disc list-inside">
                    {produto.complementos?.map((item, idx) => (
                        <li key={idx}>{item.nome}</li>
                    ))}
                </ul>
                <p className="text-sm text-slate-600">Deseja remover algum item?</p>
                <textarea
                    onChange={handleObs}
                    className="mt-2 w-full h-24 resize-none rounded-lg border border-slate-300 p-2 text-sm shadow-sm focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                    placeholder="Escreva aqui..."
                    maxLength={110}
                />


                <div className="flex flex-col gap-5  justify-between">
                    <div className="flex justify-between">
                        <p>Preço: <span className="font-semibold text-gray-700">R$ {produto.valor}</span></p>
                        <span className="flex items-center gap-2 select-none">
                            <CiSquareMinus onClick={() => setQuantidade(prev => prev === 1 ? 1 : prev - 1)} className="w-8 y-8 text-2xl cursor-pointer" />
                            <span>{quantidade}</span>
                            <CiSquarePlus onClick={() => setQuantidade(prev => prev + 1)} className="w-8 y-8 text-2xl cursor-pointer" />
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <button onClick={() => navigate("/")} className="bg-green-600 rounded-md text-white font-bold p-1"> {'<'} Voltar </button>
                        <button onClick={handleSalvarProdutoCarrinho} className="bg-primary rounded-md text-white font-bold p-1">Salvar no carrinho</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProdutoSelecionado;