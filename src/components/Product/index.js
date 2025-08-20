import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();

  const product = {
    nome: "Frango",
    preco: "00,00",
    itens: ["Filé de Frango", "Arroz", "Feijão", "Salpicão", "Farofa com bacon"]
  };

  const handleClick = () => {    
    const itensStr = encodeURIComponent(JSON.stringify(product.itens));
    navigate(`/produto?nome=${product.nome}&preco=${product.preco}&itens=${itensStr}`);
  };

  return (
    <div
      onClick={handleClick}
      className="border border-slate-300 shadow-xl rounded-lg p-5 m-5 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer"
    >
      <h4 className="color-primary font-bold text-center text-2xl"> {product.nome} </h4>
      <ul className="first-line:font-bold first-line:text-slate-700">
        {product.itens.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <div className="mt-5 flex justify-between">
        <span className="font-bold">R$ {product.preco}</span>
        <span className="bg-primary p-1 text-white rounded-md font-bold hover:scale-105 transition-all duration-300">
          Selecionar
        </span>
      </div>
    </div>
  );
};

export default Product;
