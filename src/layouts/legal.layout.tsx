import { Footer, Navigation } from 'components/layout'

const LegalLayout = ({
  children,
}: {
  children: React.ReactNode
}): React.ReactNode => (
  <>
    <header>
      <Navigation success={true} error={false} />
    </header>

    {children}

    <aside>
      <p>Something which is supposed to be on the side</p>
    </aside>

    <Footer />
  </>
)

export default LegalLayout
