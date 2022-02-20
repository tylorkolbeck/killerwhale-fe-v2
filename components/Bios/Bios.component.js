import React, { useEffect } from 'react'
import styles from './Bios.module.scss'
import { useState } from 'react'
import Bio from './Bio/Bio.component'
import Markdown from '../Markdown/Markdown.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faYoutube,
  faDiscord,
  faLinkedin,
  faFacebook,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'
import Link from '../Link/Link.component'

// const bios = [
//   {
//     id: 1,
//     name: 'Dylan Shively',
//     img: '/images/bios/dylan.jpg',
//     title: 'Founder & Killer Whale',
//     bio: `Established in 2019, Killer Whale is the brainchild of Dylan Shively, an experienced trader, software engineer and entrepreneur.

//     Being an early adopter of crypto, Dylan saw a flood of new traders enter the market, some made it big, others lost everything.

//     What sets the successful traders apart from the majority?
//     They understand market conditions, do not let emotions cloud their judgement and look for the optimum time to buy and sell - in summary they had a strategy!

//     Dylan created Killer Whale as a way for new traders to have access to the same skills and strategies of experienced traders, levelling the playing field.
//     `,
//     location: ''
//   },
//   {
//     id: 2,
//     name: 'Chris Freeman',
//     img: '/images/bios/chris.jpg',
//     title: 'Business / Strategic Advisor',
//     bio: `Chris is an entrepreneurial, customer-centric executive who has acquired over 23 years of experience in IT. Success in process excellence, digital and business transformation and operational leadership, integrating business strategy into delivery with exceptional results delivering a superior customer focused experience.
//     With a strong interest in Crypto since 2017, Chris has been involved in several startups within the crypto space, in a business advisory capacity. He has also spoken at local government events around blockchain technologies, and was interviewed by the ABC on "Betting on Bitcoin" back in 2017.
//     `
//   },
//   {
//     id: 3,
//     name: 'Tony Cherven',
//     img: '/images/bios/tony.jpg',
//     title: 'Social Media',
//     bio: `Tony is a professional writer, with experience in both journalism and advertising. He first discovered cryptocurrency back in 2017 and immediately developed a strong passion for both investing and blockchain technology. Tony has been with Killer Whale Crypto since its inception. Tony has spent years researching a wide variety of cryptocurrency projects and crypto related topics. Tony’s other interests include a variety of media production, ranging from audio to video and was one of the first content creators on the YouTube video platform.`
//   },
//   {
//     id: 5,
//     name: 'Tylor Kolbeck',
//     img: '/images/bios/tylor.png',
//     title: 'Software Developer / UX',
//     bio: `Tylor Kolbeck is software engineer with 7 years experience working in web development and User Experience. Tylor is passionate about providing customers with not only high-quality user interfaces but high quality and timeless software design `
//   },
//   {
//     id: 6,
//     name: 'John Kaplanis',
//     img: '/images/bios/john.png',
//     title: 'Software Developer / Analytics',
//     bio: `John is a Full Stack Software Developer with a passion for problem solving and learning. He enjoys collaborating with team members to efficiently build intuitive features and apps. His background in technology-focused sales and marketing has positioned him well to provide unique perspectives on how end-users interact with web-apps and platforms..
//     `
//   }
// ]

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
                    <div className={styles.social}>
                      {/* {bioRows[index][0]?.twitter ? ( */}
                      <Link linkTo='#' type='nav' newTab>
                        <h1 className={styles.icon}>
                          <FontAwesomeIcon icon={faTwitter} />
                        </h1>
                      </Link>
                      {/* ) : null} */}
                      {/* {bioRows[index][0]?.facebook ? ( */}
                      <Link linkTo='#' type='nav' newTab>
                        <h1 className={styles.icon}>
                          <FontAwesomeIcon icon={faFacebook} />
                        </h1>
                      </Link>
                      {/* ) : null} */}
                      {/* {bioRows[index][0]?.instagram ? ( */}
                      <Link linkTo='#' type='nav' newTab>
                        <h1 className={styles.icon}>
                          <FontAwesomeIcon icon={faInstagram} />
                        </h1>
                      </Link>
                      {/* ) : null} */}
                      {/* {bioRows[index][0]?.linkedin ? ( */}
                      <Link linkTo='#' type='nav' newTab>
                        <h1 className={styles.icon}>
                          <FontAwesomeIcon icon={faLinkedin} />
                        </h1>
                      </Link>
                      {/* ) : null} */}
                      {/* {bioRows[index][0]?.youtube ? ( */}
                      <Link linkTo='#' type='nav' newTab>
                        <h1 className={styles.icon}>
                          <FontAwesomeIcon icon={faYoutube} />
                        </h1>
                      </Link>
                      {/* ) : null} */}
                      {/* {bioRows[index][0]?.discord ? ( */}
                      <Link linkTo='#' type='nav' newTab>
                        <h1 className={styles.icon}>
                          <FontAwesomeIcon icon={faDiscord} />
                        </h1>
                      </Link>
                      {/* ) : null} */}
                    </div>
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
