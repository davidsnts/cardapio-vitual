import { FaTrash, FaTrashAlt } from 'react-icons/fa';
import emptyCart from '../../assets/empty-cart.png'
import { useCart } from '../../Context/CartContext';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";

const Carrinho = () => {
    const { carrinho, removeItem, updateItem } = useCart();
    const [total, setTotal] = useState(0);

    const navigate = useNavigate();

    const updateQuantidade = (id, quantidade) => {
    const item = carrinho.find((prod) => prod._id === id)

    if (!item) return;

    if (quantidade > 0) {
        const updatedItem = { ...item, quantidade }
        updateItem(updatedItem)
    } else {
        // removeItem(id) 
    }
}

    useEffect(() => {
        let somaTotal = 0
        carrinho.map(c => (
            somaTotal += (c.valor || 0) * (c.quantidade || 0)
        ))
        setTotal(somaTotal)
    }, [carrinho])

   

    if (!carrinho[0]) {
        return <div className='flex flex-col items-center gap-10 justify-center'>
            <h1 className='color-primary text-2xl text-center'>Seu carrinho está vazio!</h1>
            <img className='w-56 h-46' src={emptyCart} alt='carrinho vazio'></img>
            <div>
                <p className='w-full mt-5 font-semibold text-left'>Deseja voltar para o cardápio?</p>
                <button className='font-bold w-full my-2 bg-primary text-white cursor-pointer px-3 
                    py-3 transition hover:scale-105 duration-500' onClick={() => navigate('/')}>
                    Voltar para o cardápio
                </button>
            </div>
        </div>
    }

    return (
        <div className="flex flex-col mx-4 md:mx-10 mt-5">
            <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-6">
                <div>
                    <ol className="w-full grid grid-cols-1 gap-4">
                        {carrinho.map((p) => p.nome && (
                            <li
                                key={p.id}
                                className="bg-white shadow-lg rounded-2xl p-5 flex flex-col gap-3 border border-gray-200 hover:shadow-xl transition duration-300"
                            >
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-lg text-gray-900">{p.nome}</span>
                                    <FaTrashAlt
                                        onClick={() => removeItem(p._id)}
                                        className="cursor-pointer text-red-500 hover:text-red-600 transition hover:scale-125 duration-300"
                                    />
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 text-sm sm:text-base">
                                        Un. <strong className="text-gray-900">R${Number(p.valor).toFixed(2)}</strong>
                                    </span>
                                    <span className="flex items-center gap-3 select-none">
                                        <CiSquareMinus onClick={() => updateQuantidade(p._id, p.quantidade - 1)} className="w-7 h-7 text-gray-700 cursor-pointer hover:text-red-500 transition" />
                                        <span className="font-semibold text-gray-800">{p.quantidade}</span>
                                        <CiSquarePlus onClick={() => updateQuantidade(p._id, p.quantidade + 1)} className="w-7 h-7 text-gray-700 cursor-pointer hover:text-green-600 transition" />
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>

                {/* Resumo da Compra */}
                <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between border border-gray-200">
                    <h2 className="font-bold border-b border-gray-300 pb-3 mb-4 text-2xl text-gray-800">
                        Resumo da compra
                    </h2>

                    <div className="flex flex-col gap-5">
                        <div className="flex justify-between w-full text-lg">
                            <h1 className="font-semibold text-gray-700">Valor Total</h1>
                            <h2 className="font-bold text-gray-900">R$ {total?.toFixed(2)}</h2>
                        </div>

                        <div className="flex flex-col gap-3">
                            <p className="font-medium text-gray-700">Deseja voltar para o cardápio?</p>
                            <button
                                className="font-bold w-full bg-green-700 text-white rounded-xl py-3 transition hover:scale-105 hover:bg-green-800 shadow-md"
                                onClick={() => navigate("/")}
                            >
                                Voltar para o cardápio
                            </button>
                        </div>

                        <div className="flex flex-col gap-3">
                            <p className="font-medium text-gray-700">Deseja finalizar seu pedido?</p>
                            <button onClick={() => navigate('/EnderecoPedido')} className="w-full font-bold bg-primary text-white rounded-xl py-3 transition hover:scale-105 hover:brightness-110 shadow-md">
                                Fazer meu pedido
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Carrinho