import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header className='flex justify-between px-4 md:px-10 h-28  items-center bg-white w-screen'>
      <div className="header-logo">
        <Link to={"/"}>        <img className='w-28 h-28' src="https://img.freepik.com/vetores-premium/modelo-de-design-de-logotipo-de-vetor-de-alimentos_600323-3904.jpg" alt="logo-do-site"></img>
        </Link>
      </div>

      <div className="flex gap-5">
        <Link to={"/login"}><button className="color-primary font-bold sm:text-sm md:text-xl lg:text-2xl hover:scale-105">Entrar</button></Link>
        <Link to={"/cadastrar"}><button className="font-bold sm:text-sm md:text-xl lg:text-2xl text-white bg-primary px-5 py-2 rounded-lg hover:scale-105" >Cadastrar</button></Link>
        <div className="relative hover:scale-105 cursor-pointer">
          <i class="bi bi-cart4 text-4xl color-primary cursor-pointer "></i>
          <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center absolute top-6 left-4">
            0
          </span>
        </div>
      </div>

    </header>
  )
}

export default Navbar