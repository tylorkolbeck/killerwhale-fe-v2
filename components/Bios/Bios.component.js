import React, { useEffect } from 'react'
import styles from './Bios.module.scss'
import { useState } from 'react'
import Bio from './Bio/Bio.component'

const bios = [
  {
    id: 1,
    name: 'Albert Einstein 1',
    title: 'Creator',
    bio: 'Adipisicing eu dolor deserunt occaecat voluptate proident Lorem. Eiusmod dolor aliquip nulla voluptate. Duis commodo esse laboris voluptate laborum magna quis adipisicing sit cupidatat.'
  },
  {
    id: 2,
    name: 'Albert Einstein 2',
    title: 'Creator',
    bio: 'Adipisicing eu dolor deserunt occaecat voluptate proident Lorem. Eiusmod dolor aliquip nulla voluptate. Duis commodo esse laboris voluptate laborum magna quis adipisicing sit cupidatat.'
  },
  {
    id: 3,
    name: 'Albert Einstein 3',
    title: 'Creator',
    bio: 'Adipisicing eu dolor deserunt occaecat voluptate proident Lorem. Eiusmod dolor aliquip nulla voluptate. Duis commodo esse laboris voluptate laborum magna quis adipisicing sit cupidatat.'
  },
  {
    id: 4,
    name: 'Albert Einstein 4',
    title: 'Creator',
    bio: 'Adipisicing eu dolor deserunt occaecat voluptate proident Lorem. Eiusmod dolor aliquip nulla voluptate. Duis commodo esse laboris voluptate laborum magna quis adipisicing sit cupidatat.'
  }
]

export default function AboutUs() {
  const [bioShown, setBioShown] = useState(null)
  const [bioPairs, setBioPairs] = useState(null)
  const [bioRows, setBioRows] = useState([])

  useEffect(() => {
    let rows = []

    const pairs = bios.reduce((result, value, index, array) => {
      if (index % 2 === 0) result.push(array.slice(index, index + 2))
      return result
    }, [])

    pairs.forEach(() => rows.push([]))
    setBioRows(rows)
    setBioPairs(pairs)
  }, [])

  function onViewBio(bioId, row) {
    console.log(bioId, bioShown)
    if (bioId === bioShown) {
      setBioRows(bioRows.map((r) => [])) // reset the rows
      setBioShown(null)
    } else {
      setBioRows(
        bioRows.map((r, i) => {
          if (i === row) {
            let bio = bios.filter((bio) => {
              return bio.id === bioId
            })[0]

            return [bio]
          } else {
            return []
          }
        })
      )
      setBioShown(bioId)
    }
  }

  return (
    <>
      {bioPairs?.map((pair, index) => {
        return (
          <React.Fragment key={index}>
            <div
              key={index}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                maxWidth: '1000px',
                gap: '2rem',
                margin: '0 auto'
              }}
            >
              {pair.map((bio) => (
                <div key={bio.id}>
                  <Bio
                    bio={bio}
                    shown={bioShown === bio.id}
                    onClick={() => onViewBio(bio.id, index)}
                  />
                </div>
              ))}
            </div>

            {bioRows[index]?.length !== 0 && (
              <div
                className={styles.bioBar}
                style={{
                  gridColumn: 'span 2'
                }}
              >
                <div className={styles.bioContent}>
                  <div className={styles.bioNameTitle}>
                    <h3 className='fs-600 ff-good'>
                      {bioRows[index][0]?.name}
                    </h3>
                    <h4 className='fs-500 text-green bold'>
                      {bioRows[index][0]?.title}
                    </h4>
                  </div>
                  <div>
                    <p>{bioRows[index][0]?.bio}</p>
                  </div>
                </div>
              </div>
            )}
          </React.Fragment>
        )
      })}
    </>
  )
}
