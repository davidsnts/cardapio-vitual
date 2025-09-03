import React from 'react'
import { useCart } from '../../Context/CartContext';

const ConfirmarPedido = () => {
  const { carrinho } = useCart();

  return (
    <div className="flex flex-col items-center mt-6 px-4">
      <div className="bg-white w-full max-w-md border-2 border-dashed border-gray-400 rounded-xl p-6 shadow-md">
        <h1 className="text-xl font-bold text-center border-b border-gray-300 pb-2 mb-4 tracking-wide">
          🧾 Confirmação do Pedido
        </h1>

        <ol className="flex flex-col gap-5 font-mono text-gray-800">
          {carrinho.map((prod, idx) => (
            <li key={idx} className="border-b border-gray-200 pb-3">
              <h2 className="text-lg font-semibold">{prod.nome}</h2>

              {prod.complementos?.length > 0 && (
                <ul className="ml-4 mt-1 list-disc text-sm text-gray-600">
                  {prod.complementos.map((item, i) => (
                    <li key={i}>{item.nome}</li>
                  ))}
                </ul>
              )}

              {prod.obs && (
                <p className="text-sm text-gray-500 mt-1">
                  Obs: {prod.obs}
                </p>
              )}
            </li>
          ))}
        </ol>

        <div className="mt-6 text-center text-sm text-gray-500 border-t border-gray-300 pt-2">
          Obrigado pelo pedido! 🍽️
        </div>
      </div>
    </div>
  );
};

export default ConfirmarPedido;