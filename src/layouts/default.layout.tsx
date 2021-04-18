import { Navigation, Footer } from 'components/layout'

const DefaultLayout = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  return (
    <>
      <header>
        <Navigation />
      </header>

      {children}

      <aside>
        <p>Something which is supposed to be on the side</p>
      </aside>

      <Footer />
    </>
  )
}

export default DefaultLayout
