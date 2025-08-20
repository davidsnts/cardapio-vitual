const Register = () => {
    return (
        <>
            <section className="bg-primary w-full h-28 flex items-center justify-center">
                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center text-white select-none">Realize seu cadastro aqui!</h1>

            </section>
            <section>
                <form className="w-screen flex flex-col items-center mt-5 gap-5">
                    <div className="flex flex-col w-96 ">
                        <label labelFor="telefone" className="font-bold text-slate-600">Telefone com DDD ex: 32991563718</label>
                        <input type="text" id="telefone" placeholder="telefone com DDD" className="border border-slate-500 p-1"></input>
                    </div>
                    <div className="flex flex-col w-96 ">
                        <label labelFor="nome" className="font-bold text-slate-600">Nome completo:</label>
                        <input type="text" id="nome" placeholder="Seu nome completo" className="border border-slate-500 p-1"></input>
                    </div>
                    <div className="flex flex-col w-96 ">
                        <label labelFor="bairro" className="font-bold text-slate-600">Bairro:</label>
                        <input type="text" id="bairro" placeholder="Seu bairro" className="border border-slate-500 p-1"></input>
                    </div>
                    <div className="flex flex-col w-96 ">
                        <label labelFor="rua" className="font-bold text-slate-600">Rua:</label>
                        <input type="text" id="rua" placeholder="Rua para entrega" className="border border-slate-500 p-1"></input>
                    </div>
                    <div className="flex flex-col w-96 ">
                        <label labelFor="numero" className="font-bold text-slate-600">Numero:</label>
                        <input type="text" id="rua" placeholder="Número para entrega" className="border border-slate-500 p-1"></input>
                    </div>

                    <button type="submit" className="bg-primary w-96 text-white  py-2 cursor-pointer hover:scale-105">Salvar</button>
                </form>
            </section>

        </>
    )
}

export default Register