import { useEffect, useState } from 'react'
import styles from './services.module.scss'
import { fetchAPI } from '../../lib/api'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import Image from 'next/image'
import List from '../../components/List/List.component'
import Markdown from '../../components/Markdown/Markdown.component'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import SectionHeader from '../../components/SectionHeader/SectionHeader.component'
import Button from '../../components/Button/Button.component'

export default function Services({ services }) {
  const [serviceCategories, setServiceCategories] = useState([])
  const [catSelected, setCatSelected] = useState(1)
  const [catNameSelected, setCatNameSelected] = useState('install')

  const [servicesData, setServiceData] = useState(null)

  const serviceImages = [
    '/images/services/tuneup_green.svg',
    '/images/services/config_blue.svg',
    '/images/services/one_on_one.svg'
  ]

  const router = useRouter()

  useEffect(() => {
    const linkedServices = ['install', 'tune', 'consult']
    let serviceParam = parseInt(router.query.l)
    setCatSelected(serviceParam ? serviceParam : 1)
    setCatNameSelected(linkedServices[serviceParam - 1 ? serviceParam - 1 : 0])
  }, [router.query.l])

  useEffect(() => {
    if (services) {
      let orderedServices = services.sort(
        (serviceA, serviceB) =>
          serviceA?.service_category?.order - serviceB?.service_category?.order
      )

      orderedServices = orderedServices.map((service) => {
        service.img = serviceImages[service.order]
        return service
      })

      setServiceData(orderedServices)
    }
  }, [services])

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

  function setServiceCategoryHandler(id, name) {
    setCatSelected(id)
    setCatNameSelected(name.toLowerCase())
  }

  function getSelectedCatDescription() {
    if (servicesData) {
      let serviceSelected = servicesData.find((service) => {
        return (
          service?.service_category?.name?.toLowerCase() ===
          catNameSelected.toLowerCase()
        )
      })

      return serviceSelected
        ? serviceSelected?.service_category?.description
        : 'sf'
    }
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
                onClick={() => setServiceCategoryHandler(cat.id, cat.name)}
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
      <div className='bg-light' style={{ padding: '1rem' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          <SectionHeader header={catNameSelected}>
            {servicesData && getSelectedCatDescription()}
          </SectionHeader>
        </div>
        <div className={styles.serviceRows} style={{ paddingBottom: '2rem' }}>
          {servicesData &&
            servicesData.length &&
            servicesData.map((service) => {
              if (service.service_category.id === catSelected) {
                return (
                  <div className={styles.serviceItem} key={service.id}>
                    <div className={styles.serviceCard}>
                      <a
                        href={service?.booking_url}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <ServiceCard
                          name={service.name}
                          price={service.price}
                          id={service?.service_category.id}
                        />
                      </a>
                      <div className='mt-2'>
                        <a
                          href={service?.booking_url}
                          target='_blank'
                          rel='noreferrer'
                        >
                          <Button type='cta'>Book Now</Button>
                        </a>
                      </div>
                    </div>
                    <div>
                      <h2 className='bold mb-1'>Features</h2>
                      <List
                        items={service?.features.map(
                          (feature) => feature?.feature
                        )}
                      />

                      {/* <p className='mt-3 text-green '>
                        <span className='bold'>Price: </span>
                        {service.price}
                      </p> */}

                      <div
                        className='mt-2 text-accent fs-300'
                        style={{ fontSize: '14px' }}
                      >
                        <div className='mb-1'>
                          <b>Disclaimer</b>
                        </div>
                        <Markdown lineHeight='1.2rem'>
                          {service.disclaimer}
                        </Markdown>
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
    },
    revalidate: 10
  }
}
