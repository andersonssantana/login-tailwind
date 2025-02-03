import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email.includes('@')) {
      setError('Por favor, insira um e-mail válido');
      return;
    }
    
    setError('');
    alert('Login realizado com sucesso!');
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 sm:p-8 lg:p-12">
      <form 
        onSubmit={handleSubmit}
        noValidate
        className="bg-gray-800 w-full h-screen sm:h-auto sm:rounded-2xl shadow-2xl border border-gray-700
                  grid lg:grid-cols-[1fr_2fr] gap-8 sm:gap-16 lg:gap-24 p-8 sm:p-12 lg:p-20"
      >
        {/* Seção Esquerda - Conteúdo */}
        <div className="flex flex-col justify-center space-y-6 lg:space-y-12 
                      lg:pr-16 lg:border-r border-gray-700">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-100 leading-tight">
              Boas vindas à<br/>
              <span className="text-blue-500">sua tela de login</span>
            </h1>
            <p className="text-gray-400 mt-4 sm:mt-6 lg:mt-8 
                        text-sm sm:text-base lg:text-lg xl:text-xl">
              Acesse sua conta para gerenciar todos os recursos da nossa plataforma integrada
            </p>
          </div>
        </div>

        {/* Seção Direita - Formulário */}
        <div className="flex flex-col justify-center">
          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            <div>
              <label className="block text-lg sm:text-xl lg:text-2xl text-gray-300 mb-4">
                E-mail
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                className="w-full px-6 py-4 lg:px-8 lg:py-6 bg-gray-700 border-2 border-gray-600 
                          rounded-xl lg:rounded-2xl text-gray-100 placeholder-gray-400
                          text-base sm:text-lg lg:text-xl
                          focus:ring-4 focus:ring-blue-500 focus:border-blue-500
                          transition-all duration-300"
                placeholder="seu@email.com"
              />
            </div>

            {error && (
              <div className="text-red-400 text-base sm:text-lg lg:text-xl">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white 
                        font-medium lg:font-semibold 
                        py-4 lg:py-6 px-8 rounded-xl lg:rounded-2xl 
                        transition-all duration-300
                        text-lg sm:text-xl lg:text-2xl
                        transform hover:scale-[1.02] hover:shadow-xl"
            >
              Entrar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
