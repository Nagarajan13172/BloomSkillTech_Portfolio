import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { GlobalLoader } from './components/GlobalLoader'
import { Home } from './pages/Home'
import { Services } from './pages/Services'
import { Products } from './pages/Products'
import { About } from './pages/About'
import { Achievements } from './pages/Achievements'
import { Clients } from './pages/Clients'
import { Contact } from './pages/Contact'

export default function App() {
  return (
    <>
      <GlobalLoader />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="clients" element={<Clients />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}
