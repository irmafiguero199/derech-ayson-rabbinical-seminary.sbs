import { Outlet } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import OrganizationSchema from '../seo/OrganizationSchema.jsx'

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-primary-50">
      <OrganizationSchema />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout