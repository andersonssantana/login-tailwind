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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form 
        onSubmit={handleSubmit}
        noValidate
        className="bg-white max-w-md w-full space-y-6 p-8 rounded-lg shadow-lg border border-gray-200"
      >
        <h1 className="text-3xl font-bold text-gray-800 text-center">Login</h1>

        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError('');
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="seu@email.com"
            />
          </div>

          {error && (
            <div className="text-red-600 text-sm mt-1">
              {error}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
