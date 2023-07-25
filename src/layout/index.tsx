import Navbar from '@/components/Navbar'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <h4>hello from header</h4>
    </>
  )
}

export default Layout
