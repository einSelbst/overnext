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

    <aside aria-labelledby='comp1' className='left'>
      <h2 id='comp1'>Title for complementary area 1</h2>
      <p>Something which is supposed to be on the left side</p>
      <p>Some more text</p>
    </aside>

    {children}

    <aside aria-labelledby='comp2' className='right'>
      <h2 id='comp2'>Title for complementary area 2</h2>
      <p>Something which is supposed to be on the right side</p>
    </aside>

    <Footer />
  </>
)

export default DefaultLayout
