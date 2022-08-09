import { useState, SyntheticEvent  } from 'react';
import { Link } from 'react-router-dom'
import api from '../services/api'

export default function LoginCoffeeShop() {
  const [coffeeFrontFile, setCoffeeFrontFile] = useState('');
  const [coffeeBackFile, setCoffeeBackFile] = useState('');
  const [name, setName] = useState('');
  const [flavour, setFlavour] = useState('');
  const [acidity, setAcidity] = useState('');
  const [body, setBody] = useState('');
  const [producer, setProducer] = useState('');
  const [localization, setLocalization] = useState('');
  const [altitude, setAltitude] = useState('');
  const [burn, setBurn] = useState('');
  const [grainType, setGrainType] = useState('');
  const [punctuation, setPunctuation] = useState('');
  const [description, setDescription] = useState('');



  function handleSubmit (event: SyntheticEvent) {
    event.preventDefault();

    api.post('sessions/coffeeshop', {
      coffeeFrontFile: coffeeFrontFile,
      coffeeBackFile: coffeeBackFile,
      name: name,
      flavour: flavour,
      acidity: acidity,
      body: body,
      producer: producer,
      localization: localization,
      altitude: altitude,
      burn: burn,
      grainType: grainType,
      punctuation: punctuation,
      description: description
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
        <h1 className='text-center text-blue-600 font-bold text-4xl mb-10'>Cadastro de Café</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="coffeeFrontFile" className="text-gray-500 font-bold">Embalagem do Café (Frente)</label>
          <input type="file" name="coffeeFrontFile" value={coffeeFrontFile} onChange={(e) => setCoffeeFrontFile(e.target.value)} className="bg-gray-200 text-gray-500 p-2 rounded mb-4 outline-none" />

          <label htmlFor="coffeeBackFile" className="text-gray-500 font-bold">Embalagem do Café (Verso)</label>
          <input type="file" name="coffeeBackFile" value={coffeeBackFile} onChange={(e) => setCoffeeBackFile(e.target.value)} className="bg-gray-200 text-gray-500 p-2 rounded mb-4 outline-none" />

          <input type="text" name="name" placeholder="Nome do café" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-200 text-gray-500 p-2 rounded mb-4 outline-none" />
          <input type="text" name="flavour" placeholder="Aroma" value={flavour} onChange={(e) => setFlavour(e.target.value)} className="bg-gray-200 text-gray-500 p-2 rounded mb-4 outline-none" />
          <input type="text" name="acidity" placeholder="Acidez" value={acidity} onChange={(e) => setAcidity(e.target.value)} className="bg-gray-200 text-gray-500 p-2 rounded mb-4 outline-none" />
          <input type="text" name="body" placeholder="Corpo" value={body} onChange={(e) => setBody(e.target.value)} className="bg-gray-200 text-gray-500 p-2 rounded mb-4 outline-none	" />
          <input type="text" name="producer" placeholder="Nome do Produtor" value={producer} onChange={(e) => setProducer(e.target.value)} className="bg-gray-200 text-gray-500 p-2 rounded mb-4 outline-none	" />

          <input type="text" name="localization" placeholder="Localidade" value={localization} onChange={(e) => setLocalization(e.target.value)} className="bg-gray-200 text-gray-500 p-2 rounded mb-4 outline-none	" />
          <input type="text" name="altitude" placeholder="Altitude" value={altitude} onChange={(e) => setAltitude(e.target.value)} className="bg-gray-200 text-gray-500 p-2 rounded mb-4 outline-none	" />
          <input type="text" name="burn" placeholder="Torra" value={burn} onChange={(e) => setBurn(e.target.value)} className="bg-gray-200 text-gray-500 p-2 rounded mb-4 outline-none	" />
          <input type="text" name="grainType" placeholder="Tipo de Grão" value={grainType} onChange={(e) => setGrainType(e.target.value)} className="bg-gray-200 text-gray-500 p-2 rounded mb-4 outline-none	" />
          <input type="text" name="punctuation" placeholder="Pontuação" value={punctuation} onChange={(e) => setPunctuation(e.target.value)} className="bg-gray-200 text-gray-500 p-2 rounded mb-4 outline-none	" />
          <input type="text" name="description" placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} className="bg-gray-200 text-gray-500 p-2 rounded mb-4 outline-none	" />

          <button type="submit" className="bg-blue-600 rounded p-2 text-white font-bold mt-4 mb-4">Cadastrar Café</button>
        </form>
      </div>
    </div>
  )
}
