import styles from './layout.module.css'
import { Navbar } from '@/components'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.root}>
      <Navbar className={styles.toolbar} />
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default Layout
