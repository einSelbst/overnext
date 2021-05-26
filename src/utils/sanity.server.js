/**
 * Server-side Sanity utilities. By having these in a separate file from the
 * utilities we use on the client side, we are able to tree-shake (remove)
 * code that is not used on the client side.
 */
import { createClient } from 'next-sanity'
import { sanityConfig } from 'config/sanity.config'

export const sanityClient = createClient(sanityConfig)

export const previewClient = createClient({
  ...sanityConfig,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

export const getClient = preview => (preview ? previewClient : sanityClient)

export function overlayDrafts (documents = []) {
  /* const documents = docs || [] */
  // eslint-disable-next-line unicorn/no-array-reduce
  const overlayed = documents.reduce((map, document_) => {
    if (!document_._id) {
      throw new Error('Ensure that `_id` is included in query projection')
    }

    const isDraft = document_._id.startsWith('drafts.')
    const id = isDraft ? document_._id.slice(7) : document_._id
    return isDraft || !map.has(id) ? map.set(id, document_) : map
  }, new Map())

  return [...overlayed.values()]
}
