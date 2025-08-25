import { useEffect, useState } from "react"
import Product from "../Product"

const ProductList = () => {

    const [produtos, setProdutos] = useState([]);


    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await fetch('http://localhost:3001/produto/findAll', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });

                const data = await response.json();

                if (data) {
                    setProdutos(data);
                }
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        };

        fetchProdutos();
    }, []);


    return (
        <section className='flex flex-col mt-5 mx-5 p-5'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold color-primary text-center'>Pratos do dia</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                {produtos.map(produto => (
                    <Product produto={produto} />
                ))}
            </div>
        </section>
    )
}

export default ProductList