import { useState, SyntheticEvent  } from 'react';
import { Link } from 'react-router-dom'
import api from '../services/api'

export default function LoginCoffeeShop() {
  const [logoFile, setLogoFile] = useState('');
  const [backgroundFile, setBackgroundFile] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  function handleSubmit (event: SyntheticEvent) {
    event.preventDefault();

    api.post('sessions/coffeeshop', {
      logoFile: logoFile,
      backgroundFile: backgroundFile,
      name: name,
      email: email,
      cpf: cpf,
      country: country,
      password: password,
      confirmPassword: confirmPassword
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
        <h1 className='text-center text-blue-600 font-bold text-4xl mb-10'>Cadastro Cafeteria</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="logoFile" className="text-gray-500 font-bold">Logo da cafeteria</label>
          <input type="file" name="logoFile" value={logoFile} onChange={(e) => setLogoFile(e.target.value)} className="bg-gray-200 text-gray-500 p-2 rounded mb-4 outline-none" />

          <label htmlFor="backgroundFile" className="text-gray-500 font-bold">Background da cafeteria</label>
          <input type="file" name="backgroundFile" value={backgroundFile} onChange={(e) => setBackgroundFile(e.target.value)} className="bg-gray-200 text-gray-500 p-2 rounded mb-4 outline-none" />

          <input type="text" name="name" placeholder="Nome da cafeteria" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-200 text-gray-500 p-2 rounded mb-4 outline-none" />
          <input type="email" name="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-200 text-gray-500 p-2 rounded mb-4 outline-none" />
          <input type="text" name="cpf" placeholder="CPF ou CNPJ" value={cpf} onChange={(e) => setCpf(e.target.value)} className="bg-gray-200 text-gray-500 p-2 rounded mb-4 outline-none" />
          <input type="text" name="country" placeholder="País" value={country} onChange={(e) => setCountry(e.target.value)} className="bg-gray-200 text-gray-500 p-2 rounded mb-4 outline-none" />
          <input type="password" name="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-gray-200 text-gray-500 p-2 rounded mb-4 outline-none	" />
          <input type="password" name="confirmPassword" placeholder="Confirmar Senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="bg-gray-200 text-gray-500 p-2 rounded mb-4 outline-none	" />

          <button type="submit" className="bg-blue-600 rounded p-2 text-white font-bold mt-4 mb-4 hover:bg-blue-700">Cadastrar</button>
        </form>
        <Link to='/' className="text-center text-gray-400">Já tem uma conta? <span className='font-bold hover:underline'>Entrar</span></Link>
      </div>
    </div>
  )
}
