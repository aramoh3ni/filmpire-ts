import styles from './layout.module.css'
import { Drawer, Navbar, Sidebar } from '@/components'
import { useSidebarStore } from '@/store/useSidebarStore'

import { Outlet } from 'react-router-dom'

const Layout: React.FC = () => {
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen)
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar)

  return (
    <div className={styles.root}>
      <div className={styles.sidebarContainer}>
        <Drawer open={isSidebarOpen} setOpen={toggleSidebar}>
          <Sidebar />
        </Drawer>
      </div>
      <div className={styles.body}>
        <Navbar className={styles.toolbar} onSidebarClick={toggleSidebar} />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
