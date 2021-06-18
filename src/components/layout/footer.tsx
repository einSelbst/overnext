import ENV from 'config/env.config'

const NOTIFICATION_STATES: Record<string, string> = {
  error: 'Something went wrong ...',
  info: 'Did you know? ...',
  warning: 'Be careful here ...',
} as const

const Vercel = () => (
  <a href='https://vercel.com' rel='noopener noreferrer' target='_blank'>
    <img
      alt='Visit vercel.com'
      className='logo'
      height='24px'
      src='/logos/vercel-logo.svg'
      width='106px'
      style={{ margin: '10px auto' }}
    />
  </a>
)

const Netlify = () => (
  <>
    <a href='https://www.netlify.com' rel='noopener noreferrer' target='_blank'>
      <img
        alt='visit netlify.com'
        className='logo'
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
  <center>
    <a
      href='https://main.d2y25he53ruhoy.amplifyapp.com'
      rel='noopener noreferrer'
      target='_blank'>
      <img
        alt='visit AWS Amplify'
        className='logo'
        height='24px'
        src='/logos/aws-amplify-logo.png'
        width='169px'
      />
    </a>
  </center>
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
  return (
    <footer>
      <p>Hosted on</p>
      {HOSTER[ENV.PLATFORMX]}
      <p>©Copyright 2050 by nobody. All rights reversed.</p>
    </footer>
  )
}

export default Footer
