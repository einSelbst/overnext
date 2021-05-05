/* import  */

const Vercel = () => {
  return (
    <a href='https://vercel.com' target='_blank' rel='noopener noreferrer'>
      Powered by{' '}
      <img
        src='/vercel.svg'
        alt='Vercel Logo'
        width='71px'
        height='16px'
        className='logo'
      />
    </a>
  )
}

const Netlify = () => {
  return (
    <a href='https://www.netlify.com'>
      <img
        src='https://www.netlify.com/img/global/badges/netlify-color-accent.svg'
        alt='Deploys by Netlify'
      />
    </a>
  )
}

export const Footer = (): JSX.Element => {
  return (
    <footer>
      {process.env.platform === 'vercel' ? <Vercel /> : <Netlify />}

      <p>Hosted on {process.env.platform}</p>
      <a href='https://www.netlify.com'>
        <img
          src='https://www.netlify.com/img/global/badges/netlify-color-bg.svg'
          alt='Deploys by Netlify'
        />
      </a>

      <a href='https://www.netlify.com'>
        <img
          src='https://www.netlify.com/img/global/badges/netlify-light.svg'
          alt='Deploys by Netlify'
        />
      </a>
      <p>©Copyright 2050 by nobody. All rights reversed.</p>
    </footer>
  )
}
