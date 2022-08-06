import { Route, Routes } from 'react-router-dom'
import LoginCoffeeShop from './pages/LoginCoffeeShop'

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<LoginCoffeeShop />} />
    </Routes>
  )
}
