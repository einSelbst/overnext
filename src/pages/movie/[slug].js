import Link from 'next/link'
import * as PropTypes from 'prop-types'
import * as React from 'react'
/* import BlockContent from "@sanity/block-content-to-react"; */
/* import Layout from 'layouts/default.layout' */
import { imageUrlFor } from 'utils/sanity'
/* import { imageUrlFor, usePreviewSubscription } from 'utils/sanity' */
import { getClient, sanityClient } from 'utils/sanity.server'
/* import listStyles from "../../styles/list"; */
/* import imageUrlFor from "../../utils/imageUrlFor"; */

const moviesQuery = '*[_type == "movie"] {title, _id, slug, poster, name }'

const singleMovieQuery = `*[_type == "movie" && slug.current == $slug] {
  _id,
  title,
  overview,
  releaseDate,
  poster,
  "cast": castMembers[] {
    _key,
    characterName,
    "person": person-> {
      _id,
      name,
      image
    }
  }
}[0]
`

const Movie = ({ movie }) => {
  // const {
  // poster: { crop = { left: 0, top: 0 }, hotspot = { x: 0.5, y: 0.5 } },
  // } = movie
  return (
    <>
      <div className='movie'>
        <div className='header'>
          <div className='header-content'>
            <h1>{movie.title}</h1>
          </div>
        </div>

        <div className='content'>
          <div className='sidebar'>
            <img
              className='poster'
              src={imageUrlFor(movie.poster)
                .ignoreImageParams()
                .width(500)}
              alt={`Movie poster for ${movie.title}`}
            />
          </div>
          <div className='main-content'>
            <div className='overview'>
              <p>Here is the content missing</p>
            </div>
            <h2>Cast</h2>
            <ul className='cast-list'>
              {movie.cast?.map(cast => (
                <li key={cast._key} className='cast-list-item'>
                  <Link href='/person/[id]' as={`/person/${cast.person._id}`}>
                    <a className='cast-list-link'>
                      <span>
                        {cast.person.image && (
                          <img
                            src={imageUrlFor(cast.person.image).width(64)}
                            alt={cast.person.name}
                          />
                        )}
                      </span>
                      <span>
                        <span className='cast-person-name'>
                          {cast.person.name}
                        </span>
                        <span className='cast-character-name'>
                          {cast.characterName}
                        </span>
                      </span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{`
        .content {
          display: flex;
          flex-direction: column-reverse;
          max-width: 80rem;
          margin: 1rem auto;
          padding: 0 1rem;
        }
        .overview {
          font-size: 1.5em;
        }
        .sidebar {
          position: relative;
          box-sizing: border-box;
          overflow: hidden;
          flex-grow: 1;
        }
        .main-content {
          flex-grow: 3;
        }
        .movie > h2 {
          margin: 2rem 0 0 0;
          padding: 0 0.5rem;
          border-bottom: 1px solid #ccc;
        }
        .poster {
          display: block;
          width: 100%;
        }
        .cast-list img {
          width: 2rem;
          height: auto;
          margin: 0.5rem;
          object-fit: cover;
          display: block;
        }
        .header {
          background-size: cover;
          padding-top: 10rem;
        }
        .header h1 {
          font-size: 10vw;
          line-height: 1em;
          margin: 1rem 0 0 0;
          padding: 0;
        }
        .header > img {
          width: 100%;
          display: block;
        }
        .header .header-content {
          color: #fff;
          text-align: center;
          padding-top: 5em;
          padding-bottom: 2em;
          background-image: linear-gradient(
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.9) 90%
          );
        }
        .cast-list {
          margin: 0;
          padding: 0;
          line-height: 2em;
          margin-bottom: 2rem;
        }
        .cast-list-item {
          display: block;
          margin: 0;
          padding: 0;
        }
        .cast-list-link {
          color: inherit;
          text-decoration: none;
          border-bottom: 1px solid #ccc;
          align-items: center;
          display: flex;
        }
        .overview :global(figure) {
          margin: 0;
          padding: 0;
        }
        .overview :global(img) {
          display: block;
          max-width: 100%;
          box-sizing: border-box;
        }
        @media screen and (max-width: 499px) {
          .cast-character-name::before {
            content: ' as ';
          }
        }
        @media screen and (min-width: 500px) {
          .content {
            display: grid;
            grid-gap: 2rem;
            grid-template-columns: 2fr 5fr;
            padding: 1rem;
          }
          .overview :global(p) {
            margin-top: 0;
          }
          .cast-list img {
            margin: 0;
            margin-right: 0.5em;
          }
          .cast-list {
            display: grid;
            line-height: 1em;
            grid-gap: 2rem;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }
          .cast-list-link {
            border: none;
            align-items: flex-start;
          }
          .cast-person-name {
            display: block;
            font-size: 1.2em;
            font-weight: 500;
            line-height: 1.2em;
          }
          .cast-list-link span {
            display: block;
          }
        }
        .overview :global(figure) {
          margin: 0;
          padding: 0;
        }
        .overview :global(img) {
          display: block;
          max-width: 100%;
          box-sizing: border-box;
        }
        @media screen and (max-width: 499px) {
          .cast-character-name::before {
            content: ' as ';
          }
        }
        @media screen and (min-width: 500px) {
          .content {
            display: grid;
            grid-gap: 2rem;
            grid-template-columns: 2fr 5fr;
            padding: 1rem;
          }
          .overview :global(p) {
            margin-top: 0;
          }
          .cast-list img {
            margin: 0;
            margin-right: 0.5em;
          }
          .cast-list {
            display: grid;
            line-height: 1em;
            grid-gap: 2rem;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }
          .cast-list-link {
            border: none;
            align-items: flex-start;
          }
          .cast-person-name {
            display: block;
            font-size: 1.2em;
            font-weight: 500;
            line-height: 1.2em;
          }
          .cast-list-link span {
            display: block;
          }
        }
      `}</style>
      {/* <style jsx>{listStyles}</style> */}
    </>
  )
}

// does this make any sense?
Movie.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  node: PropTypes.node,
  requiredShapeObjectProperties: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    isRecent: PropTypes.bool,
  }).isRequired,
  node1: {
    summaries: PropTypes.string,
    caption: PropTypes.string,
  },
  /* movie: PropTypes.func, */
  movie: {
    title: PropTypes.string,
    cast: PropTypes.any,
  },
}

export const getStaticPaths = async () => {
  const movies = await sanityClient.fetch(moviesQuery)
  const paths = movies.map(movie => ({
    params: { slug: movie.slug.current },
  }))

  return {
    paths,
    fallback: false,
  }
}

// This function gets called at build time on server-side.
export const getStaticProps = async ({ params, preview = false }) => {
  const movie = await getClient(preview).fetch(singleMovieQuery, {
    slug: params.slug,
  })
  return { props: { movie } }
}

export default Movie
