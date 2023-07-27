import styles from './navbar.module.css'

import {
  DarkThemeToggle,
  Avatar,
  TextInput,
  Navbar as Nav,
} from 'flowbite-react'
import { HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

import { AiOutlineSearch } from 'react-icons/ai'

interface NavbarProps {
  className?: HTMLProps<HTMLElement>['className']
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <Nav fluid rounded className={twMerge(styles.root, className)}>
      <Nav.Toggle />

      <TextInput
        id="base"
        sizing="md"
        type="text"
        placeholder="Search"
        rightIcon={AiOutlineSearch}
      />

      <Nav.Collapse className={styles.collapse}>
        <Nav.Link className={styles.link} href="/movies">
          Movies
        </Nav.Link>
        <Nav.Link>
          <DarkThemeToggle className="rounded-full" />
        </Nav.Link>
        <Nav.Link>
          <Avatar
            bordered
            alt="avatar of Alireza Mohseni"
            img="https://t3.ftcdn.net/jpg/03/42/99/68/360_F_342996846_tHMepJOsXWwbvMpG7uiYpE68wbfQ9e4s.jpg"
            rounded
          />
        </Nav.Link>
      </Nav.Collapse>
    </Nav>
  )
}
