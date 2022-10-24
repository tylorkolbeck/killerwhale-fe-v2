import styles from './Hamburger.module.scss'

export default function Hamburger({ isOpen }) {
  return (
    <>
      <div className={styles.hamburger}>
        <div className='burger burger1' />
        <div className='burger burger2' />
        <div className='burger burger3' />
      </div>

      <style jsx>{`
        .burger {
          width: 2rem;
          height: 0.25rem;
          border-radius: 10px;
          background-color: rgb(250, 249, 246);
          transform-origin: 1px;
          transition: all 0.3s linear;
          z-index: 26;
        }
        .burger1 {
          transform: ${isOpen ? 'rotate(45deg)' : 'rotate(0)'};
        }
        .burger2 {
          transform: ${isOpen ? 'translateX(100%)' : 'translateX(0)'};
          opacity: ${isOpen ? 0 : 1};
        }
        .burger3 {
          transform: ${isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
        }
      `}</style>
    </>
  )
}
