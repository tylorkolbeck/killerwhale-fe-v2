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
  const [catSelected, setCatSelected] = useState(1)
  const [catNameSelected, setCatNameSelected] = useState('install')

  const serviceImages = [
    '/images/services/tuneup_green.svg',
    '/images/services/config_blue.svg',
    '/images/services/one_on_one.svg'
  ]

  const serviceDescriptions = {
    install:
      'Wanting to start with automated bot trading, but need some help in setting it all up? The Killer Whale Install Service, can help you setup your exchanges, create your cryptohopper account and configure your strategies/signals in no time. We take into consideration your trading style, requirements, and can guide you on the best exchange, most appropriate Cryptohopper plan, and most optimal strategy or signals to maximise your profits.',
    tune: 'Are we in a Bear Market or a Bull Market? Do you have enough funds to reserve in the case of a market upswing, or downturn? Are you seeing multiple green positions or a sea of red? Killer Whale Tune Up Service provides a health check and review of your cryptohoper account, Killer Whale Strategy or Signal, to ensure that your configuration is tuned appropriately for current market conditions.. We do it all reserve, split and merge funds, and adjust settings to ensure configuration is adjusted for remaining capital.',
    custom:
      'Want a custom trading bot? Unique strategy, or have large starting capital?  We bring you Killer Whale Custom Services. This strategic VIP service leverages our team’s years of expertise in cryptocurrency, understanding the markets, trends as well as  managing our clients and our own portfolios in delivering a balanced cryptocurrency portfolio. Let Killer Whale Crypto come up with a tailor made solution specific for your needs. '
  }

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
      <div className='bg-light'>
        <div
          style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '2rem' }}
        >
          <SectionHeader header={catNameSelected}>
            {serviceDescriptions[catNameSelected]}
          </SectionHeader>
        </div>
        <div className={styles.serviceRows} style={{ paddingBottom: '2rem' }}>
          {services &&
            services.length &&
            services.map((service) => {
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
