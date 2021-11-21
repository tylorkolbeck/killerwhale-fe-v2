export default function InfoBar({ text, button }) {
  return (
    <section
      className={'section bg-green center'}
      style={{ padding: '1.5rem 0' }}
    >
      <h4 className='fs-500'>{text}</h4>
      <div className='mt-1'>{button}</div>
    </section>
  )
}
