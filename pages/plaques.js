import dynamic from 'next/dynamic'
const Plaque = dynamic(() => import('../components/plaques/Plaque.component'), {
  ssr: false
})

const plaques = () => {
  return <Plaque />
}

export default plaques
