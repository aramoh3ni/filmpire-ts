// import styles from './navbar.module.css'

import styles from './navbar.module.css'

import { DarkThemeToggle } from 'flowbite-react'
import { HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface NavbarProps {
  className?: HTMLProps<HTMLElement>['className']
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <nav className={twMerge(styles.root, className)} aria-label="Global">
      <a className={styles.brand} href="#">
        Filmpire
      </a>

      <div className={styles.linkContainer}>
        <DarkThemeToggle />

        <a className={styles.active} href="#" aria-current="page">
          Landing
        </a>
        <a className={styles.link} href="#">
          Account
        </a>
      </div>
    </nav>
  )
}

export default Navbar
