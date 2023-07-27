import styles from './drawer.module.css'

import { HTMLProps } from 'react'

import { twMerge } from 'tailwind-merge'

import { HiOutlineX } from 'react-icons/hi'
import { Avatar, DarkThemeToggle } from 'flowbite-react'

interface DrawerProps {
  open: boolean
  setOpen?: () => void
  children?: React.ReactNode
  className?: HTMLProps<HTMLElement>['className']
}

export const Drawer: React.FC<DrawerProps> = ({
  open = false,
  setOpen,
  children,
  className,
}): React.JSX.Element | null => {
  return open ? (
    <div className={twMerge(styles.root, className)}>
      <div className="flex flex-col gap-8">
        <div className={styles.header}>
          <h1 className={styles.brand}>Filmpire</h1>
          <button onClick={setOpen} className={styles.toggleButton}>
            <HiOutlineX />
          </button>
        </div>

        {children}
      </div>

      <div className={styles.footer}>
        <Avatar
          bordered
          alt="avatar of Alireza Mohseni"
          img="https://t3.ftcdn.net/jpg/03/42/99/68/360_F_342996846_tHMepJOsXWwbvMpG7uiYpE68wbfQ9e4s.jpg"
          rounded
        >
          Alireza Mohseni
        </Avatar>
        <DarkThemeToggle className="rounded-full" />
      </div>
    </div>
  ) : null
}
