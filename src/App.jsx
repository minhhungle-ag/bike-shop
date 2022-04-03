import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Loading from './components/common/Loading'
import MainLayout from './components/Layout/MainLayout'
import NotFound from './components/Layout/NotFound'
import About from './features/about/About'
import { Contact } from './features/contact/contact'
import HomePage from './features/homePage/pages/HomePage'
import ProductPage from './features/products/pages/ProductPage'

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Outlet />
      <Loading />
    </MainLayout>
  )
}

export default App
