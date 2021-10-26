import React from 'react'

// Sections
import Navbar from '../../sections/Navbar/Navbar.component'
import Footer from '../../sections/Footer/Footer.component'

export default function GlobalLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
