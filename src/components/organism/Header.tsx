import DarkMode from '@/components/mollecules/DarkMode'
import DrawerToggler from '@/components/mollecules/DrawerToggler'
import Nav from '@/components/mollecules/Nav'

import { twclsx } from '@/libs/twclsx'

import { useRouter } from 'next/router'

const Header = () => {
  const { pathname } = useRouter()

  if (pathname === '/_error' || pathname === '/404') return null

  return (
    <header className={twclsx('fixed inset-0 h-20', 'bg-white', 'dark:bg-main-5 z-50')}>
      <section
        className={twclsx(
          'layout',
          'border-2 border-l-0 border-r-0 border-b-indigo-900',
          'flex items-center justify-between',
          'h-full -mt-1.5'
        )}
      >
        <Nav />
        <DrawerToggler />
        <DarkMode />
      </section>
    </header>
  )
}

export default Header
