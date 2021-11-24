import styles from './Bios.module.scss'
import { useState } from 'react'
import Bio from './Bio/Bio.component'

const bios = [
  {
    id: 1,
    name: 'Albert Einstein',
    title: 'Creator',
    bio: 'Adipisicing eu dolor deserunt occaecat voluptate proident Lorem. Eiusmod dolor aliquip nulla voluptate. Duis commodo esse laboris voluptate laborum magna quis adipisicing sit cupidatat.'
  },
  {
    id: 2,
    name: 'Albert Einstein',
    title: 'Creator',
    bio: 'Adipisicing eu dolor deserunt occaecat voluptate proident Lorem. Eiusmod dolor aliquip nulla voluptate. Duis commodo esse laboris voluptate laborum magna quis adipisicing sit cupidatat.'
  },
  {
    id: 3,
    name: 'Albert Einstein',
    title: 'Creator',
    bio: 'Adipisicing eu dolor deserunt occaecat voluptate proident Lorem. Eiusmod dolor aliquip nulla voluptate. Duis commodo esse laboris voluptate laborum magna quis adipisicing sit cupidatat.'
  },
  {
    id: 4,
    name: 'Albert Einstein',
    title: 'Creator',
    bio: 'Adipisicing eu dolor deserunt occaecat voluptate proident Lorem. Eiusmod dolor aliquip nulla voluptate. Duis commodo esse laboris voluptate laborum magna quis adipisicing sit cupidatat.'
  }
]

export default function AboutUs() {
  const [bioShown, setBioShown] = useState(null)

  function onViewBio(bioId) {
    if (bioId === bioShown) {
      setBioShown(null)
    } else {
      setBioShown(bioId)
    }
  }

  return (
    <div>
      {bios.map((bio) => (
        <Bio
          bio={bio}
          key={bio.id}
          shown={bioShown === bio.id}
          onClick={() => onViewBio(bio.id)}
        />
      ))}
    </div>
  )
}
