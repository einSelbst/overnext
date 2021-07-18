import type { NextLayoutPage } from 'next'
import { useEffect, useState } from 'react'

import DefaultLayout from 'layouts/default.layout'

const fetcher = async (url: RequestInfo) => {
  const response = await fetch(url)
  return response.json()
}

/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument */
const FaunaCSR: NextLayoutPage = () => {
  type show = {
    ref: Record<string, unknown>
    ts: number
    data: {
      title: string
      watched: boolean
    }
  }

  const [shows, setShows] = useState<show[]>([])
  const [newShow, setNewShow] = useState('')

  /*
   * using an async IIFE (Immediately invoked function expression)
   * @see https://stackoverflow.com/questions/53332321/react-hook-warnings-for-async-function-in-useeffect-useeffect-function-must-ret
   */
  useEffect(() => {
    void (async () => {
      let showData = await fetcher('/api/get-shows')
      showData = await showData.data.data
      setShows(showData)
    })()
  }, []) // empty array if effect doesn't need props or state, means will be executed only once on load

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
    setShows(newShows)
    setNewShow('')
  }

  async function handleUpdateShow(event: React.MouseEvent<HTMLInputElement>) {
    /* async function handleUpdateShow(event: { target: HTMLInputElement }) { */
    const eventTarget = event.target as HTMLInputElement
    await fetch('/api/update-show', {
      body: JSON.stringify({
        title: eventTarget.value,
        watched: eventTarget.checked,
      }),
      method: 'POST',
    })
    let newShows = Array.from(shows)
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
  }

  return (
    <main>
      <h1>Some example data from FaunaDB</h1>
      <p>This will be loaded on the client.</p>
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

FaunaCSR.Layout = DefaultLayout

export default FaunaCSR
/* eslint-enable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument*/
