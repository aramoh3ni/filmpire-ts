interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <h2>hello from header</h2>
      {children}
      <h4>hello from header</h4>
    </div>
  )
}

export default Layout
