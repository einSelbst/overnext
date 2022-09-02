import { query as q } from 'faunadb'
import DefaultLayout from 'layouts/default.layout'
import faunaClient from 'lib/fauna-client'
import type {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType,
} from 'next'
import { useCallback, useState } from 'react'
import type { NextLayoutPage } from 'typings/layout'

type ShowType = {
  ts: number
  data: {
    title: string
    watched: boolean
  }
}

type ShowTypeRaw = ShowType & {
  ref: Record<string, unknown>
}

type ShowQueryType = {
  data: ShowTypeRaw[]
}

type FaunaSsgPropsType = {
  locale: string | undefined
  data: ShowType[]
}

const fetcher = async (collection: string) =>
  faunaClient.query(
    /* eslint-disable new-cap */
    q.Map(
      q.Paginate(q.Documents(q.Collection(collection))),
      q.Lambda((show: ShowTypeRaw) => q.Get(show))
    )
    /* eslint-enable new-cap */
  )

const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<FaunaSsgPropsType>> => {
  const { locale } = context
  const showsQuery: ShowQueryType = (await fetcher('shows')) as ShowQueryType

  /*
   * I don't know how to deserialize the 'ref' object which is coming from fauna,
   * so I remove it from the array objects
   *
   * const shows = showsQuery.data
   * const shows = showsQuery.data.forEach(show => {delete show.ref as showType});
   * const newArray = array.map(({keepAttr1, keepAttr2}) => ({keepAttr1, newPropName: keepAttr2}))
   */
  const shows: ShowType[] = showsQuery.data.map(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ ref, ...keepAttributes }) => keepAttributes
  )

  // instead of 404 I could also redirect
  /*
   * if (!shows) {
   *   return {
   *     // notFound: true, // this would 404
   *     redirect: {
   *       destination: '/',
   *       permanent: false,
   *     },
   *   }
   * }
   */

  return {
    props: {
      data: shows,
      locale,
    },
    // props: JSON.parse(JSON.stringify({shows}))
  }
}

const FaunaSSG: NextLayoutPage = ({
  locale,
  data,
}: Readonly<InferGetStaticPropsType<typeof getStaticProps>>) => {
  const [shows, setShows] = useState<ShowType[]>(data as ShowType[])
  const [newShow, setNewShow] = useState('')

  const handleNewShow = useCallback(
    (event: { target: { value: string; checked: unknown } }) => {
      /* event.preventDefault() */
      setNewShow(event.target.value)
    },
    [setNewShow]
  ) // Array of dependencies for which the memoization should update

  const handleAddShow = useCallback(async () => {
    const response = await fetch('/api/add-show', {
      body: JSON.stringify({
        title: newShow,
      }),
      method: 'POST',
    })
    const body: { data: ShowType } = (await response.json()) as {
      data: ShowType
    }

    // add the new show to the existing list
    const newShows = Array.from(shows)
    newShows.push(body.data)
    setShows(newShows)
    setNewShow('')
  }, [newShow, shows])

  const handleUpdateShow = useCallback(
    async (event: React.MouseEvent) => {
      const eventTarget = event.target as HTMLInputElement
      await fetch('/api/update-show', {
        body: JSON.stringify({
          title: eventTarget.value,
          watched: eventTarget.checked,
        }),
        method: 'POST',
      })
      let newShows: ShowType[] = Array.from(shows)
      newShows = newShows.map(show => {
        if (show.data.title === eventTarget.value) {
          return {
            ...show,
            data: {
              title: eventTarget.value,
              watched: eventTarget.checked,
            },
          }
        }
        return show
      })
      setShows(newShows)
    },
    [shows]
  )

  return (
    <main>
      <h1>Some example data from FaunaDB</h1>
      <p>This will be pre-rendered on build time.</p>
      <p>The current locale is: &apos;{locale}&apos;.</p>
      <form>
        <fieldset className='todo-list'>
          <legend className='todo-list__title'>TV Show Watchlist</legend>
          <label htmlFor='newShow'>
            <span>Enter new&nbsp;</span>
            <input
              id='newShow'
              name='newShow'
              placeholder='Movie name'
              type='text'
              value={newShow}
              onChange={handleNewShow}
            />
          </label>
          <button type='submit' onClick={handleAddShow}>
            Add to list
          </button>

          {shows.map((show: ShowType) => (
            <p key={show.data.title}>
              <label className='todo-list__label'>
                <input
                  defaultChecked={show.data.watched}
                  name='showWatched'
                  type='checkbox'
                  value={show.data.title}
                  onClick={handleUpdateShow}
                />
                <i className='check' />
                <span>{show.data.title}</span>
              </label>
            </p>
          ))}
        </fieldset>
      </form>
    </main>
  )
}

FaunaSSG.Layout = DefaultLayout

export { getStaticProps }
export default FaunaSSG
