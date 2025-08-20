import ProductList from "../../components/product-list"

const Home = () => {
  return (
    <>
      <section className="bg-primary w-full h-28 flex items-center justify-center">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center text-white select-none">Confira nosso cardápio aqui!</h1>
      </section>

      <ProductList />

    </>
  )
}

export default Home