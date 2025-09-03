import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";

const EnderecoPedido = () => {
  const { user } = useContext(AuthContext);

  // Criando estados já com valores vindos do user
  const [nome, setNome] = useState(user?.nome || "");
  const [telefone, setTelefone] = useState(user?.telefone || "");
  const [bairro, setBairro] = useState(user?.endereco?.bairro || "");
  const [rua, setRua] = useState(user?.endereco?.rua || "");
  const [numero, setNumero] = useState(user?.endereco?.numero || "");
  const [complemento, setComplemento] = useState(user?.endereco?.complemento || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    const dados = {
      nome,
      telefone,
      endereco: {
        bairro,
        rua,
        numero,
        complemento,
      },
    };

    console.log("Endereço atualizado:", dados);

  };

  return (
    <div className="w-screen flex flex-col items-center mt-5 gap-5">
      <h1 className="text-xl font-bold text-slate-700">
        {user?.nome}, verifique o endereço para entrega:
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-96 mt-5"
      >
        <label className="flex flex-col">
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="border border-slate-500 p-1"
          />
        </label>

        <label className="flex flex-col">
          Telefone:
          <input
            type="text"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            className="border border-slate-500 p-1"
          />
        </label>

        <label className="flex flex-col">
          Bairro:
          <input
            type="text"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
            className="border border-slate-500 p-1"
          />
        </label>

        <label className="flex flex-col">
          Rua:
          <input
            type="text"
            value={rua}
            onChange={(e) => setRua(e.target.value)}
            className="border border-slate-500 p-1"
          />
        </label>

        <label className="flex flex-col">
          Número:
          <input
            type="text"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            className="border border-slate-500 p-1"
          />
        </label>

        <label className="flex flex-col">
          Complemento:
          <input
            type="text"
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
            className="border border-slate-500 p-1"
          />
        </label>

        <button
          type="submit"
          className="bg-primary text-white py-2 cursor-pointer hover:scale-105 mt-2"
        >
          Salvar
        </button>
      </form>
    </div>
  );
};

export default EnderecoPedido;
