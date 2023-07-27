import styles from './navbar.module.css'

import { DarkThemeToggle, Avatar, TextInput, Navbar } from 'flowbite-react'
import { HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

import { AiOutlineSearch } from 'react-icons/ai'

interface NavbarProps {
  className?: HTMLProps<HTMLElement>['className']
}

const Nav: React.FC<NavbarProps> = ({ className }) => {
  return (
    <Navbar fluid rounded className={twMerge(styles.root, className)}>
      <Navbar.Toggle />

      <TextInput
        id="base"
        sizing="md"
        type="text"
        color="gray"
        placeholder="Search"
        rightIcon={AiOutlineSearch}
      />

      <Navbar.Collapse className="bg-gray-dark md:bg-transparent z-0 rounded-md mt-4 md:mt-0">
        <Navbar.Link className="md:mt-3" href="/movies">
          Movies
        </Navbar.Link>
        <Navbar.Link>
          <DarkThemeToggle className="rounded-full" />
        </Navbar.Link>
        <Navbar.Link>
          <Avatar
            bordered
            alt="avatar of Alireza Mohseni"
            img="https://t3.ftcdn.net/jpg/03/42/99/68/360_F_342996846_tHMepJOsXWwbvMpG7uiYpE68wbfQ9e4s.jpg"
            rounded
          />
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Nav
