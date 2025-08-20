import { useSearchParams } from "react-router-dom";

const ProdutoSelecionado = () => {
    const [searchParams] = useSearchParams();

    const nome = searchParams.get("nome");
    const preco = searchParams.get("preco");
    const itens = JSON.parse(decodeURIComponent(searchParams.get("itens")));

    return (
        <div className="p-5 flex flex-col justify-center items-center  ">
            <div className="border border-slate-400 p-5 rounded-lg shadow-2xl">
                <h2 className="text-2xl font-bold color-primary">Produto Selecionado</h2>
                <p className="text-center font-bold text-slate-700 text-2xl">{nome}</p>

                <h3 className="mt-3 font-semibold">Itens:</h3>
                <ul className="list-disc list-inside">
                    {itens.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
                <p className="text-sm text-slate-600">Deseja remover algum item?</p>
                <textarea
                    className="mt-2 w-full h-24 resize-none rounded-lg border border-slate-300 p-2 text-sm shadow-sm focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                    placeholder="Escreva aqui..."
                    maxLength={110}
                />


                <div className="flex gap-5 items-center">
                    <p>Preço: R$ {preco}</p>
                    <button className="bg-primary text-white font-bold p-2 rounded-md">Salvar no carrinho</button>
                </div>
            </div>
        </div>
    );
};

export default ProdutoSelecionado;