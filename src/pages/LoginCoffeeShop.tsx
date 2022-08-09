import { useState, SyntheticEvent  } from 'react';
import { Link } from 'react-router-dom'
import api from '../services/api'

export default function LoginCoffeeShop() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function handleSubmit (event: SyntheticEvent) {
    event.preventDefault();

    api.post('sessions/coffeeshop', {
      email: email,
      password: password,
    })
    .then(() => {
      console.log('Deu bom:)')
    })
    .catch(() => {
      console.log('Deu ruim :(')
    });
  }

  return (
    <div className="min-h-screen bg-blue-400 flex justify-center items-center p-5">
      <div className="w-full max-w-[550px] bg-white rounded p-5 lg:p-20 flex flex-col">
        <h1 className='text-center text-blue-600 font-bold text-4xl mb-10'>Login Cafeteria</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input type="email" name="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-200 text-gray-500 p-2 rounded mb-4 outline-none" />
          <input type="password" name="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-gray-200 text-gray-500 p-2 rounded mb-4 outline-none	" />

          <button type="submit" className="bg-blue-600 rounded p-2 text-white font-bold mt-4 mb-4">Entrar</button>
        </form>
        <Link to='/registercoffeeshop' className="text-center text-gray-400">Ainda não tem uma conta? <span className='font-bold hover:underline'>Criar</span></Link>
      </div>
    </div>
  )
}
