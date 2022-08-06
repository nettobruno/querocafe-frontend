import { useState, SyntheticEvent  } from 'react';

export default function LoginCoffeeShop() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function handleSubmit (event: SyntheticEvent) {
    event.preventDefault();

    console.log(email)
    console.log(password)
  }

  return (
    <div className="min-h-screen bg-blue-400 flex justify-center items-center p-5">
      <div className="w-full max-w-[500px] bg-white rounded p-5 lg:p-20">
        <h1 className='text-center text-blue-600 font-bold text-4xl mb-10'>Login Cafeteria</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input type="email" name="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-200 text-gray-500 p-2 rounded mb-4 outline-none" />
          <input type="password" name="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-gray-200 text-gray-500 p-2 rounded mb-4 outline-none	" />

          <button type="submit" className="bg-blue-600 rounded p-2 text-white font-bold mt-4">Entrar</button>
        </form>
      </div>
    </div>
  )
}
