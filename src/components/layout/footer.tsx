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

const Footer = (): ComponentReturnType => (
  <footer>
    {process.env.platform === 'vercel' ? <Vercel /> : <Netlify />}
    <p>Hosted on {process.env.platform}</p>
    <p>©Copyright 2050 by nobody. All rights reversed.</p>
  </footer>
)

export { Footer }
