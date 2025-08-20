const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl font-bold text-red-600">404</h1>
      <p className="text-xl mt-3">Página não encontrada</p>
      <a href="/" className="mt-5 bg-primary text-white px-5 py-2 rounded-lg hover:scale-105 transition">
        Voltar para Home
      </a>
    </div>
  );
};

export default NotFound;