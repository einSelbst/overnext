import { Footer, Navigation } from 'components/layout'

const DefaultLayout = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => (
  <>
    <header>
      <Navigation error={false} success />
    </header>

    <aside className='left'>
      <p>Something which is supposed to be on the left side</p>
      <p>Some more text</p>
    </aside>

    {children}

    <aside className='right'>
      <p>Something which is supposed to be on the right side</p>
    </aside>

    <Footer />
  </>
)

export default DefaultLayout
