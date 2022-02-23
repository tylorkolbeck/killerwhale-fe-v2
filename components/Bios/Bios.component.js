import React, { useEffect } from 'react'
import styles from './Bios.module.scss'
import { useState } from 'react'
import Bio from './Bio/Bio.component'
import Markdown from '../Markdown/Markdown.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faYoutube,
  faLinkedin,
  faFacebook,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'
import Link from '../Link/Link.component'

export default function AboutUs({ bios }) {
  const [bioShown, setBioShown] = useState(null)
  const [bioPairs, setBioPairs] = useState(null)
  const [bioRows, setBioRows] = useState([])

  useEffect(() => {
    if (!bioShown && bioRows && bioPairs) {
      onViewBio(1, 0)
    }
  }, [bioRows, bioPairs])

  useEffect(() => {
    if (bios && bios?.length) {
      let rows = []

      const pairs = bios.reduce((result, value, index, array) => {
        if (index % 2 === 0) result.push(array.slice(index, index + 2))
        return result
      }, [])

      pairs.forEach(() => rows.push([]))
      setBioRows(rows)
      setBioPairs(pairs)
    }
  }, [])

  function onViewBio(bioId, row) {
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

  function renderSocialIcon(platform) {
    switch (platform.toLowerCase()) {
      case 'twitter':
        return <FontAwesomeIcon icon={faTwitter} />
        break
      case 'linkedin':
        return <FontAwesomeIcon icon={faLinkedin} />
        break
      case 'facebook':
        return <FontAwesomeIcon icon={faFacebook} />
        break
      case 'youtube':
        return <FontAwesomeIcon icon={faYoutube} />
        break
      case 'instagram':
        return <FontAwesomeIcon icon={faInstagram} />
        break
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

                    {bioRows[index][0]?.BioSocials?.map((bioSocial) => (
                      <div className={styles.icon} key={bioSocial.id}>
                        <Link linkTo={bioSocial.url} type='nav' newTab>
                          <h1>{renderSocialIcon(bioSocial.platform)}</h1>
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div>
                    <Markdown>{bioRows[index][0]?.bio}</Markdown>
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
