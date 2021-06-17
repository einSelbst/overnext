import ENV from 'config/env.config'

const NOTIFICATION_STATES: Record<string, string> = {
  error: 'Something went wrong ...',
  info: 'Did you know? ...',
  warning: 'Be careful here ...',
} as const

const Vercel = () => (
  <a href='https://vercel.com' rel='noopener noreferrer' target='_blank'>
    Powered by{' '}
    <img
      alt='Vercel Logo'
      className='logo'
      height='16px'
      src='/vercel.svg'
      width='71px'
    />
  </a>
)

const Netlify = () => (
  <>
    <a href='https://www.netlify.com'>
      <img
        alt='Deploys by Netlify'
        height='51'
        src='https://www.netlify.com/img/global/badges/netlify-color-accent.svg'
        width='114'
      />
    </a>
    <a href='https://www.netlify.com'>
      <img
        alt='Deploys by Netlify'
        height='51'
        src='https://www.netlify.com/img/global/badges/netlify-color-bg.svg'
        width='114'
      />
    </a>
    <a href='https://www.netlify.com'>
      <img
        alt='Deploys by Netlify'
        height='51'
        src='https://www.netlify.com/img/global/badges/netlify-light.svg'
        width='114'
      />
    </a>
  </>
)

const Amplify = () => (
  <a
    href='https://main.d2y25he53ruhoy.amplifyapp.com'
    rel='noopener noreferrer'
    target='_blank'>
    Amplify
  </a>
)

const HOSTER: Record<string, React.ReactNode> = {
  AMPLIFY: <Amplify />,
  LOCALHOST: <span>Localhost</span>,
  NETLIFY: <Netlify />,
  VERCEL: <Vercel />,
}

const Footer = ({
  platform = 'VERCEL',
  notification = 'error',
}: {
  platform?: keyof typeof HOSTER
  notification?: keyof typeof NOTIFICATION_STATES
}): ComponentReturnType => {
  console.log(HOSTER[platform])
  console.log(notification)
  console.log(platform)
  console.log(HOSTER.NETLIFY)

  return (
    <footer>
      <div>{NOTIFICATION_STATES[notification]}</div>
      <div>{HOSTER[ENV.PLATFORMX]}</div>
      <div>{HOSTER.VERCEL}</div>
      <p>Hosted on {process.env.platform}</p>
      <p>©Copyright 2050 by nobody. All rights reversed.</p>
    </footer>
  )
}

export default Footer
