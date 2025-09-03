import { useContext, useState } from "react";
import { createUserService } from "../../services/user.service";
import { AuthContext } from "../../Context/AuthContext";

const Register = () => {
    const { loginUser } = useContext(AuthContext);
    const [telefone, setTelefone] = useState("");
    const [nome, setNome] = useState("");
    const [bairro, setBairro] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dados = {
            telefone,
            nome,
            endereco: {
                bairro,
                rua,
                numero,
                complemento
            }
        };
        const response = await createUserService(dados)
        if(response.status === 201){
            loginUser({telefone: telefone})
        }
                
    };

    return (
        <>
            <section className="bg-primary w-full h-28 flex items-center justify-center">
                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center text-white select-none">
                    Realize seu cadastro!
                </h1>
            </section>

            <section>
                <form
                    onSubmit={handleSubmit}
                    className="w-screen flex flex-col items-center mt-5 gap-5"
                >
                    <div className="flex flex-col w-96 ">
                        <label htmlFor="telefone" className="font-bold text-slate-600">
                            Telefone com DDD ex: 32991563718
                        </label>
                        <input
                            required
                            type="text"
                            name="telefone"
                            id="telefone"
                            placeholder="telefone com DDD"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            className="border border-slate-500 p-1"
                        />
                    </div>

                    <div className="flex flex-col w-96 ">
                        <label htmlFor="nome" className="font-bold text-slate-600">
                            Nome completo:
                        </label>
                        <input
                            required
                            type="text"
                            name="nome"
                            id="nome"
                            placeholder="Seu nome completo"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            className="border border-slate-500 p-1"
                        />
                    </div>

                    <div className="flex flex-col w-96 ">
                        <label htmlFor="bairro" className="font-bold text-slate-600">
                            Bairro:
                        </label>
                        <input
                            required
                            type="text"
                            name="bairro"
                            id="bairro"
                            placeholder="Seu bairro"
                            value={bairro}
                            onChange={(e) => setBairro(e.target.value)}
                            className="border border-slate-500 p-1"
                        />
                    </div>

                    <div className="flex flex-col w-96 ">
                        <label htmlFor="rua" className="font-bold text-slate-600">
                            Rua:
                        </label>
                        <input
                            required
                            type="text"
                            name="rua"
                            id="rua"
                            placeholder="Rua para entrega"
                            value={rua}
                            onChange={(e) => setRua(e.target.value)}
                            className="border border-slate-500 p-1"
                        />
                    </div>

                    <div className="flex flex-col w-96 ">
                        <label htmlFor="numero" className="font-bold text-slate-600">
                            Número:
                        </label>
                        <input
                            required
                            type="text"
                            name="numero"
                            id="numero"
                            placeholder="Número para entrega"
                            value={numero}
                            onChange={(e) => setNumero(e.target.value)}
                            className="border border-slate-500 p-1"
                        />
                    </div>

                    <div className="flex flex-col w-96 ">
                        <label htmlFor="complemento" className="font-bold text-slate-600">
                            Complemento:
                        </label>
                        <input
                            type="text"
                            name="complemento"
                            id="complemento"
                            placeholder="Complemento"
                            value={complemento}
                            onChange={(e) => setComplemento(e.target.value)}
                            className="border border-slate-500 p-1"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-primary w-96 text-white py-2 cursor-pointer hover:scale-105"
                    >
                        Salvar
                    </button>
                </form>
            </section>
        </>
    );
};

export default Register;
