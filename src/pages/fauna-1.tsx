import { useEffect, useState } from 'react'

const fetcher = async (url: RequestInfo) => {
  const response = await fetch(url)
  return response.json()
}

/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument */
const Fauna1 = () => {
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

  function handleNewShow(error: {
    target: { value: string; checked: unknown }
  }) {
    setNewShow(error.target.value)
  }
  async function handleAddShow() {
    const response = await fetch('/api/addShows', {
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
    const eventTarget = event.target as HTMLInputElement
    await fetch('/api/updateShow', {
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
    <>
    <h1>Some example data from FaunaDB</h1>
    <form>
      <fieldset className='todo-list'>
        <legend className='todo-list__title'>Shows I want to watch</legend>
        <input
          name='newShow'
          type='text'
          value={newShow}
          onChange={handleNewShow}
        />
        <input type='submit' value="Add" onClick={handleAddShow} />
        {shows.map(show => (
          <label key={show.data.title} className='todo-list__label'>
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
        ))}
      </fieldset>
    </form>
    </>
  )
}

export default Fauna1
/* eslint-enable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument*/
