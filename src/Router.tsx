import { Route, Routes } from 'react-router-dom'
import LoginCoffeeShop from './pages/LoginCoffeeShop'
import RegisterCoffeeShop from './pages/RegisterCoffeeShop'

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<LoginCoffeeShop />} />
      <Route path='/registercoffeeshop' element={<RegisterCoffeeShop />} />
    </Routes>
  )
}
