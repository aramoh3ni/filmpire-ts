import styles from './layout.module.css'
import { Drawer, Navbar } from '@/components'
import { useSidebarStore } from '@/store/useSidebarStore'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen)
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar)

  return (
    <div className={styles.root}>
      <div className={styles.sidebarContainer}>
        <Drawer open={isSidebarOpen} setOpen={toggleSidebar}>
          Sidebar
        </Drawer>
      </div>
      <div className={styles.body}>
        <Navbar className={styles.toolbar} onSidebarClick={toggleSidebar} />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  )
}

export default Layout
