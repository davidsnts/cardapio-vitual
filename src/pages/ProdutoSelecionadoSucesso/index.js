import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const ProdutoSelecionadoSucesso = () => {
    const navigate = useNavigate()
    return (
        <div className='flex mt-20 flex-col items-center justify-center '>
            <h1 className='font-bold text-2xl'>Produto selecionado com suscesso!</h1>
            <p className='font-semibold my-10'>O que deseja fazer agora!? </p>
            <div className='flex flex-col md:flex-row'>
                <button onClick={() => navigate('/')} className='transform duration-500 hover:scale-105 text-white font-bold uppercase bg-primary font-bold p-2 m-2'> {'<'} Escolher mais itens</button>
                <button onClick={() => navigate('/carrinho')} className='transform duration-500 hover:scale-105 text-white font-bold uppercase bg-green-600 font-bold p-2 m-2'>Ir para o carrinho {'>'}</button>
            </div>
        </div>
    )
}

export default ProdutoSelecionadoSucesso