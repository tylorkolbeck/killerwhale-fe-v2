import React from 'react'

// Sections
import Navbar from '../../sections/Navbar/Navbar.component'
import Footer from '../../sections/Footer/Footer.component'
import Chat from '../../components/Chat/Chat.component'

export default function GlobalLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
      <Chat />
    </div>
  )
}
