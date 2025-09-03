import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../Context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useCart } from "../../Context/CartContext";

const Navbar = () => {
  const { userLogged, logoutUser, user } = useContext(AuthContext);
  const { carrinho } = useCart();
  const [quantidadeCarrinho,setQuantidadeCarrinho] = useState();
  const navigate = useNavigate();

  const clickCarrinhoHandle = () => {
    navigate("/carrinho")
  }
  useEffect(() => {
    setQuantidadeCarrinho(carrinho.length || 0)
  },[carrinho] )


  return (
    <header className='flex justify-between px-4 md:px-10 h-28  items-center bg-white w-screen'>
      <div className="header-logo">
        <Link to={"/"}>        <img className='w-28 h-28' src="https://img.freepik.com/vetores-premium/modelo-de-design-de-logotipo-de-vetor-de-alimentos_600323-3904.jpg" alt="logo-do-site"></img>
        </Link>
      </div>

      <div className="flex gap-5 items-center">
        {!userLogged ?
          (
            <>
              <Link to={"/login"}><button className="color-primary font-bold sm:text-sm md:text-xl lg:text-2xl hover:scale-105">Entrar</button></Link>
              {/* <Link to={"/cadastrar"}><button className="font-bold sm:text-sm md:text-xl lg:text-2xl text-white bg-primary px-5 py-2 rounded-lg hover:scale-105" >Cadastrar</button></Link> */}
            </>
          )
          :
          (
            <div className="flex gap-2 items-center">
              <div className="font-bold"> Olá, {user.nome ?? 'Usuário'}! </div>
              <button onClick={logoutUser} className="font-semibold  color-primary py-2 rounded-lg hover:scale-105 underline" >Sair</button>
            </div>
            
          )
        }
        <div onClick={clickCarrinhoHandle} className="relative hover:scale-105 cursor-pointer mx-3">
          <i className="bi bi-cart4 text-4xl color-primary cursor-pointer "></i>
          <span className="bg-primary border border-white text-white rounded-full w-6 h-6 flex items-center justify-center absolute top-6 left-4">
            {quantidadeCarrinho}
          </span>
        </div>
      </div>

    </header>
  )
}

export default Navbar