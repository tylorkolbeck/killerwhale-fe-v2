import styles from './AboutUs.module.scss'

const bios = [
  {
    name: 'Albert Einstein',
    title: 'Creator',
    bio: 'Adipisicing eu dolor deserunt occaecat voluptate proident Lorem. Eiusmod dolor aliquip nulla voluptate. Duis commodo esse laboris voluptate laborum magna quis adipisicing sit cupidatat.'
  },
  {
    name: 'Albert Einstein',
    title: 'Creator',
    bio: 'Adipisicing eu dolor deserunt occaecat voluptate proident Lorem. Eiusmod dolor aliquip nulla voluptate. Duis commodo esse laboris voluptate laborum magna quis adipisicing sit cupidatat.'
  },
  {
    name: 'Albert Einstein',
    title: 'Creator',
    bio: 'Adipisicing eu dolor deserunt occaecat voluptate proident Lorem. Eiusmod dolor aliquip nulla voluptate. Duis commodo esse laboris voluptate laborum magna quis adipisicing sit cupidatat.'
  },
  {
    name: 'Albert Einstein',
    title: 'Creator',
    bio: 'Adipisicing eu dolor deserunt occaecat voluptate proident Lorem. Eiusmod dolor aliquip nulla voluptate. Duis commodo esse laboris voluptate laborum magna quis adipisicing sit cupidatat.'
  }
]

export default function AboutUs() {
  return (
    <div>
      {bios.map((bio) => (
        <div class='grid'>
          <div>Image</div>
          <div>
            <p>{bio.name}</p>
            <p>{bio.title}</p>
          </div>
          <div>
            <div>
              <h3>{bio.name}</h3>
              <h4>{bio.title}</h4>
            </div>
            <div>
              <p>{bio.bio}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
