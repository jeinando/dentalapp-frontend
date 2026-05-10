import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../../modules/landing/views/Home'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}