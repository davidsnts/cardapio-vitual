import { useState, useContext } from "react"
import { AuthContext } from "../../Context/AuthContext";

const Login = () => {

    const [telefone, setTelefone] = useState('');
    const { loginUser } = useContext(AuthContext)

    const handleTelefone = (e) => {
        setTelefone(e.target.value);
    }

    const handleForm = (e) => {
        e.preventDefault();

        if (telefone.length !== 11) {
            const msg = document.getElementById('msg');
            msg.style.display = "grid";
            return;
        } else {
            const msg = document.getElementById('msg');
            msg.style.display = "none";
        }
        loginUser({telefone: telefone});
    }

    return (
        <>
            <section className="bg-primary w-full h-28 flex items-center justify-center">
                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center text-white select-none">Realize seu login aqui!</h1>

            </section>
            <section>
                <form onSubmit={handleForm} className="w-screen flex flex-col items-center mt-5 gap-5">
                    <div className="flex flex-col w-96 ">
                        <label className="font-bold text-slate-600">Seu telefone com DDD ex: 32991563718</label>
                        <input type="number" id="telefone" onChange={handleTelefone} placeholder="telefone com DDD" className="border border-slate-500 p-1"></input>
                        <span className="font-bold text-red-600 hidden" id="msg">Telefone no formato incorreto</span>
                    </div>

                    <button type="submit" className="bg-primary w-96 text-white  py-2 cursor-pointer hover:scale-105">Entrar</button>
                </form>
            </section>

        </>
    )
}

export default Login