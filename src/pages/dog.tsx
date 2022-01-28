/* import { GetStaticProps, GetStaticPropsContext } from 'next' */
import { captureMessage } from '@sentry/nextjs'
import type {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType,
} from 'next'
import { useAmp } from 'next/amp'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Byline from 'components/byline'
import DefaultLayout from 'layouts/default.layout'
import type { NextLayoutPage } from 'typings/layout'

/* eslint-disable import/exports-last, import/group-exports */
/* istanbul ignore next */
export const config = {
  amp: 'hybrid',
}
/* eslint-enable import/exports-last, import/group-exports */

type HomeProps = {
  host: string
}

const getStaticProps: GetStaticProps = async (
  _context: GetStaticPropsContext
): Promise<GetStaticPropsResult<HomeProps>> => {
  await Promise.resolve(
    'This is just a placeholder to make my typescript linter happy'
  )
  /* eslint-disable no-console */
  /*
   * console.log('now in getstaticprops')
   *
   * console.log('process.env.URL')
   * console.log(process.env.URL)
   *
   * console.log('process.env.SITE_URL')
   * console.log(process.env.SITE_URL)
   */
  let url = 'https://overnext.vercel.app'
  if (typeof process.env.URL !== 'undefined') {
    url = process.env.URL
  }
  console.log(url)
  /* eslint-enable no-console */

  return {
    props: {
      host: url,
    },
  }
}

const throwError = () => {
  /* throw new Error('Sentry Frontend Error') */
  /* Sentry.captureException(err); */
  captureMessage('Something went wrong with the dog')
}

/* const Dog:NextPage<HomeProps> = (props: HomeProps): JSX.Element => { */
/* const Dog: NextPage = (props: HomeProps): JSX.Element => { */
/* const Dog: NextPage = (props: HomeProps) => { */
/* const Dog: NextPage = () => { */
const Dog: NextLayoutPage = (
  /* props: InferGetStaticPropsType<typeof getStaticProps> */
  { host }: Readonly<InferGetStaticPropsType<typeof getStaticProps>>
) => {
  /* const Dog = (props: HomeProps): JSX.Element => { */
  const isAmp = useAmp()
  const router = useRouter()
  const { locale } = router
  const imageUrl = 'https://picsum.photos/id/237/800/450'

  return (
    <main>
      <Head>
        <title>The Dog</title>
        {/* preload only the LCP image */}
        <link as='image' href={imageUrl} rel='preload' />
      </Head>
      <h1>The Dog (Hybrid AMP Page)</h1>
      <h2>
        Find out more <a href={host as string}>here</a>
      </h2>
      <Byline author='Meow Meow Fuzzyface' />
      The value of platform is: {process.env.platform}
      The value of customKey is: {process.env.customKey}
      {isAmp ? (
        <amp-img alt='a cute pups' height='450' src={imageUrl} width='800' />
      ) : (
        <img alt='a cute pups' height='450' src={imageUrl} width='800' />
      )}
      <p>
        {isAmp ? (
          <Link href='/dog'>
            <a>View Non-AMP Version</a>
          </Link>
        ) : (
          <a
            href={
              locale === undefined ? '/dog/?amp=1' : `/${locale}/dog?amp=1`
            }>
            view {locale} amp version
          </a>
        )}
      </p>
      <button type='button' onClick={throwError}>
        Throw error
      </button>
      <p className='caption'>Woooooooooooof</p>
      <p>
        The redirect from the non-amp version to the amp version is not working
        when using LINK but without using LINK I don&apos;t get it localized. I
        think the reason is that link is doing a local/frontend redirect which
        is not able to load the amp stuff.
      </p>
      <p>
        Wafer donut candy soufflé{' '}
        <a href={isAmp ? '/?amp=1' : '/'}>lemon drops</a> icing. Marzipan gummi
        bears pie danish lollipop pudding powder gummi bears sweet. Pie sweet
        roll sweet roll topping chocolate bar dragée pudding chocolate cake.
        Croissant sweet chocolate bar cheesecake candy canes. Tootsie roll icing
        macaroon bonbon cupcake apple pie candy canes biscuit candy canes.
        Jujubes jelly liquorice toffee gingerbread. Candy tootsie roll macaroon
        chocolate bar icing sugar plum pie. Icing gummies chocolate bar
        chocolate marzipan bonbon cookie chocolate tart. Caramels danish halvah
        croissant. Cheesecake cookie tootsie roll ice cream. Powder dessert
        carrot cake muffin tiramisu lemon drops liquorice topping brownie.
        Soufflé chocolate cake croissant cupcake jelly.
      </p>
      <p>
        Muffin gummies dessert cheesecake candy canes. Candy canes danish cotton
        candy tart dessert powder bear claw marshmallow. Muffin chocolate
        marshmallow danish. Chocolate bar biscuit cake tiramisu. Topping sweet
        brownie jujubes powder marzipan. Croissant wafer bonbon chupa chups cake
        cake marzipan caramels jujubes. Cupcake cheesecake sweet roll
        marshmallow lollipop danish jujubes jelly icing. Apple pie chupa chups
        lollipop jelly-o cheesecake jelly beans cake dessert. Tootsie roll
        tootsie roll bonbon pastry croissant gummi bears cake cake. Fruitcake
        sugar plum halvah gingerbread cookie pastry chupa chups wafer lemon
        drops. Marshmallow liquorice oat cake lollipop. Lemon drops oat cake
        halvah liquorice danish powder cupcake soufflé. Cake tart topping
        jelly-o tart sugar plum. Chocolate bar cookie wafer tootsie roll candy
        cotton candy toffee pie donut.
      </p>
      <p>
        Ice cream lollipop marshmallow tiramisu jujubes croissant. Bear claw
        lemon drops marzipan candy bonbon cupcake powder. Candy canes cheesecake
        bear claw pastry cake donut jujubes. Icing tart jelly-o soufflé bonbon
        apple pie. Cheesecake pie chupa chups toffee powder. Bonbon lemon drops
        carrot cake pudding candy halvah cheesecake lollipop cupcake. Pudding
        marshmallow fruitcake. Gummi bears bonbon chupa chups lemon drops. Wafer
        dessert gummies gummi bears biscuit donut tiramisu gummi bears brownie.
        Tootsie roll liquorice bonbon cookie. Sesame snaps chocolate bar cake
        croissant chupa chups cheesecake gingerbread tiramisu jelly. Cheesecake
        ice cream muffin lollipop gummies. Sesame snaps jelly beans sweet bear
        claw tart.
      </p>
      <p>
        Sweet topping chupa chups chocolate cake jelly-o liquorice danish.
        Pastry jelly beans apple pie dessert pastry lemon drops marzipan
        gummies. Jelly beans macaroon bear claw cotton candy. Toffee sweet
        lollipop toffee oat cake. Jelly-o oat cake fruitcake chocolate bar
        sweet. Lemon drops gummies chocolate cake lollipop bear claw croissant
        danish icing. Chocolate bar donut brownie chocolate cake lemon drops
        chocolate bar. Cake fruitcake pudding chocolate apple pie. Brownie
        tiramisu chocolate macaroon lemon drops wafer soufflé jujubes icing.
        Cheesecake tiramisu cake macaroon tart lollipop donut. Gummi bears
        dragée pudding bear claw. Muffin cake cupcake candy canes. Soufflé candy
        canes biscuit. Macaroon gummies danish.
      </p>
      <p>
        Cupcake cupcake tart. Cotton candy danish candy canes oat cake ice cream
        candy canes powder wafer. Chocolate sesame snaps oat cake dragée
        cheesecake. Sesame snaps marshmallow topping liquorice cookie
        marshmallow. Liquorice pudding chocolate bar. Cake powder brownie
        fruitcake. Carrot cake dessert marzipan sugar plum cupcake cheesecake
        pastry. Apple pie macaroon ice cream fruitcake apple pie cookie. Tootsie
        roll ice cream oat cake cheesecake donut cheesecake bear claw. Sesame
        snaps marzipan jelly beans chocolate tootsie roll. Chocolate bar donut
        dragée ice cream biscuit. Pie candy canes muffin candy canes ice cream
        tiramisu.
      </p>
    </main>
  )
}

Dog.Layout = DefaultLayout

export { getStaticProps } // eslint-disable-line import/group-exports
export default Dog
