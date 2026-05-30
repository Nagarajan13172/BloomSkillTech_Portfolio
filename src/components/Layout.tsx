import { Outlet } from 'react-router-dom'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { ThemeCustomizer } from './ThemeCustomizer'
import { useReveal } from '../hooks/useReveal'

export function Layout() {
  useReveal()

  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ThemeCustomizer />
    </>
  )
}
