import { Footer, Navigation } from 'components/layout'

const DefaultLayout = ({
  children,
}: {
  readonly children: React.ReactNode
}): ComponentReturnType => (
  <>
    <header>
      <Navigation success error={false} />
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
