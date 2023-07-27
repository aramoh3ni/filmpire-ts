import { HTMLProps } from 'react'

import styles from './navbar.module.css'

import {
  DarkThemeToggle,
  Avatar,
  TextInput,
  Navbar as Nav,
} from 'flowbite-react'
import { twMerge } from 'tailwind-merge'

import { HiSearch, HiMenu } from 'react-icons/hi'
// import { Drawer } from '@/components'

interface NavbarProps {
  className?: HTMLProps<HTMLElement>['className']
  onSidebarClick?: () => void
}

export const Navbar: React.FC<NavbarProps> = ({
  className,
  onSidebarClick,
}) => {
  return (
    <>
      {/* <Drawer open={mobileOpen} setOpen={DrawerToggle} className="bg-blue-700">
        saddf
      </Drawer> */}
      <Nav fluid className={twMerge(styles.root, className)}>
        <button onClick={onSidebarClick}>
          <HiMenu />
        </button>

        <TextInput
          id="base"
          sizing="md"
          type="text"
          placeholder="Search"
          rightIcon={HiSearch}
        />

        <div className="hidden md:flex gap-4">
          <DarkThemeToggle className="rounded-full" />

          <Avatar
            bordered
            alt="avatar of Alireza Mohseni"
            img="https://t3.ftcdn.net/jpg/03/42/99/68/360_F_342996846_tHMepJOsXWwbvMpG7uiYpE68wbfQ9e4s.jpg"
            rounded
          />
        </div>
      </Nav>
    </>
  )
}
