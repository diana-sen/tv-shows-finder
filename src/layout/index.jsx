import Header from '../components/Header'
import Footer from '../components/Footer'
// minuto 5 del video 17/08
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
export default Layout
