import { query as q } from 'faunadb'
import type {
  GetStaticPropsContext,
  NextLayoutPage,
  /*
   * GetStaticPropsResult,
   * InferGetStaticPropsType,
   */
} from 'next'
import { useEffect, useState } from 'react'

import DefaultLayout from 'layouts/default.layout'
import faunaClient from 'lib/fauna-client'

type ShowQueryType = {
  data: ShowType[]
}

type ShowQueryType1 = {
  data: [ref: any, ts: number, data: {}]
}
type ShowType = {
  ref: Record<string, unknown>
  ts: number
  data: {
    title: string
    watched: boolean
  }
}

const fetcher = async (url: RequestInfo) => {
  const response = await fetch(url)
  return response.json()
}

// async function getStaticProps(
const getStaticProps = async () =>
  // ): Promise<GetStaticPropsResult<ShowType[]>> => {
  {
    const showsQuery: ShowQueryType = await faunaClient.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection('shows'))),
        q.Lambda(show => q.Get(show))
      )
    )
    /*
     *   const shows = showsQuery.data
     * const shows = showsQuery.data.forEach(show => {delete show.ref as showType});
     * const newArray = array.map(({keepAttr1, keepAttr2}) => ({keepAttr1, newPropName: keepAttr2}))
     */
    const shows = showsQuery.data.map(({ ref, ...keepAttributes }) => keepAttributes)

    // this would 404
    if (!shows) {
      return {
        notFound: true,
      }
    }

    // instead of 404 I could also redirect
    if (!shows) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }

    /*
     *  console.log('get static props shows')
     *  console.log(shows)
     *  console.log(shows[0])
     */

    return {
      //  props: shows,
      props: { shows },
      //    props: JSON.parse(JSON.stringify({shows}))
    }
  }

/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument */
const Fauna2: NextLayoutPage = ({
  shows,
}: // }: InferGetStaticPropsType<typeof getStaticProps>) => {
ShowType[]) => {
  const [newShow, setNewShow] = useState('')

  function handleNewShow(event: {
    target: { value: string; checked: unknown }
  }) {
    setNewShow(event.target.value)
  }

  async function handleAddShow() {
    const response = await fetch('/api/add-show', {
      body: JSON.stringify({
        title: newShow,
      }),
      method: 'POST',
    })
    const body = await response.json()
    // add the new show to the existing list
    const newShows = Array.from(shows)
    newShows.push(body.data)
    /* setShows(newShows) */
    setNewShow('')
  }

  async function handleUpdateShow(event: React.MouseEvent<HTMLInputElement>) {
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
    // setShows(newShows)
  }

  if (shows === undefined) {
    shows = []
  }

  console.log(shows)

  return (
    <main>
      <h1>Some example data from FaunaDB</h1>
      <p>This will be pre-rendered on build time.</p>
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

          {shows.map(show => (
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

Fauna2.Layout = DefaultLayout

export { getStaticProps }
export default Fauna2
/* eslint-enable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument*/
