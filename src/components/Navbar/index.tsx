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
      <span className={styles.brand}>Filmpire</span>

      <div className={styles.linkContainer}>
        <DarkThemeToggle />

        <span className={styles.active} aria-current="page">
          Landing
        </span>
        <span className={styles.link}>Account</span>
      </div>
    </nav>
  )
}

export default Navbar
