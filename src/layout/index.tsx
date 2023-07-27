import { useCallback, useState } from 'react'
import styles from './layout.module.css'
import { Drawer, Navbar } from '@/components'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false)

  const DrawerToggle: () => void = useCallback(() => {
    setMobileOpen((t) => !t)
  }, [mobileOpen])

  return (
    <div className={styles.root}>
      <div className={styles.sidebarContainer}>
        <Drawer open={mobileOpen} setOpen={DrawerToggle}>
          Sidebar
        </Drawer>
      </div>
      <div className={styles.body}>
        <Navbar className={styles.toolbar} onSidebarClick={DrawerToggle} />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  )
}

export default Layout
