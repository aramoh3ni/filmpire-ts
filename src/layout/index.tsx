import Navbar from '@/components/Navbar'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-gray-200 dark:bg-gray-700 min-h-screen">
      <Navbar />
      <div className="container mx-auto">{children}</div>
    </div>
  )
}

export default Layout
