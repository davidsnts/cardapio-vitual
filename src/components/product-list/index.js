import Product from "../Product"

const ProductList = () => {
    return (
        <section className='flex flex-col mt-5 mx-5 p-5'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold color-primary text-center'>Pratos do dia</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </section>
    )
}

export default ProductList