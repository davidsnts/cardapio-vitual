const Login = () => {
    return (
        <>
            <section className="bg-primary w-full h-28 flex items-center justify-center">
                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center text-white select-none">Realize seu login aqui!</h1>

            </section>
            <section>
                <form className="w-screen flex flex-col items-center mt-5 gap-5">
                    <div className="flex flex-col w-96 ">
                        <label labelFor="telefone" className="font-bold text-slate-600">Seu telefone com DDD ex: 32991563718</label>
                        <input type="text" id="telefone" placeholder="telefone com DDD" className="border border-slate-500 p-1"></input>
                    </div>

                    <button type="submit" className="bg-primary w-96 text-white  py-2 cursor-pointer hover:scale-105">Entrar</button>
                </form>
            </section>

        </>
    )
}

export default Login