import { useEffect, useState } from 'react'
import styles from './services.module.scss'
import { fetchAPI } from '../../lib/api'
import clsx from 'clsx'
import Image from 'next/image'
import List from '../../components/List/List.component'
import Markdown from '../../components/Markdown/Markdown.component'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import SectionHeader from '../../components/SectionHeader/SectionHeader.component'
import Button from '../../components/Button/Button.component'

export default function Services({ services }) {
  const [serviceCategories, setServiceCategories] = useState([])
  const [catSelected, setCatSelected] = useState(2)

  const serviceImages = [
    '/images/services/tuneup_green.svg',
    '/images/services/config_blue.svg',
    '/images/services/one_on_one.svg'
  ]

  function buildServiceCategories(services) {
    if (services && services.length) {
      let categories = []

      services.forEach((service) => {
        let isFound = categories.find(
          (cat) => cat.id === service.service_category.id
        )

        if (!isFound) {
          categories.push(service.service_category)
        }
      })

      setServiceCategories(categories)
    }
  }

  function setServiceCategoryHandler(id) {
    setCatSelected(id)
  }

  useEffect(() => {
    buildServiceCategories(services)
  }, [])
  return (
    <div className='mt-3 '>
      <SectionHeader header='Services' center />
      <div className={clsx(styles.TypeOfTrader, 'bg-dark')}>
        {serviceCategories &&
          serviceCategories.map((cat) => {
            return (
              <div
                className={clsx(styles.typeCard, {
                  [styles.selected]: cat.id === catSelected
                })}
                key={cat.id}
                onClick={() => setServiceCategoryHandler(cat.id)}
              >
                {
                  <Image
                    src={serviceImages[cat.id - 1]}
                    height='150'
                    width='150'
                  />
                }
                <p className={clsx(styles.selectedLabel, 'mt-1')}>{cat.name}</p>
              </div>
            )
          })}
      </div>
      <div className='bg-light'>
        <div className={styles.serviceRows}>
          {services &&
            services.length &&
            services.map((service) => {
              if (service.service_category.id === catSelected) {
                return (
                  <div className={styles.serviceItem} key={service.id}>
                    <div className={styles.serviceCard}>
                      <a href={service?.booking_url} target='_blank'>
                        <ServiceCard
                          name={service.name}
                          price={service.price}
                          id={service?.service_category.id}
                        />
                      </a>
                    </div>
                    <div>
                      <h2 className='bold mb-1'>Features</h2>
                      <List
                        items={service?.features.map(
                          (feature) => feature?.feature
                        )}
                      />
                      <div className='mt-2'>
                        <a href={service?.booking_url} target='_blank'>
                          <Button type='cta'>Book Now</Button>
                        </a>
                      </div>
                      <p className='mt-3 text-green '>
                        <span className='bold'>Price: </span>
                        {service.price}
                      </p>

                      <div className='mt-2 text-accent fs-300'>
                        <Markdown>{service.disclaimer}</Markdown>
                      </div>
                    </div>
                  </div>
                )
              } else {
                null
              }
            })}
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async (ctx) => {
  const services = await fetchAPI('/services')

  return {
    props: {
      services,
      data: null
    }
  }
}
