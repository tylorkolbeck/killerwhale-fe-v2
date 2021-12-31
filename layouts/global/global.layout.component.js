import React from 'react'
import useSWR from 'swr'

// Sections
import Navbar from '../../sections/Navbar/Navbar.component'
import Footer from '../../sections/Footer/Footer.component'
import Chat from '../../components/Chat/Chat.component'
import { fetchAPI } from '../../lib/api'

const navLinkFetcher = (url) => fetchAPI(url).then((res) => res)

export default function GlobalLayout({ children }) {
  const { data, error } = useSWR('/products-v-2-s', navLinkFetcher)

  return (
    <div>
      <Navbar strategies={data} />
      {children}
      <Footer strategies={data} />
      <Chat />
    </div>
  )
}
