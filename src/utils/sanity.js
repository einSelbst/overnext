import {
  createImageUrlBuilder,
  createPreviewSubscriptionHook,
} from 'next-sanity'
import { sanityConfig } from 'config/sanity.config'

export const imageBuilder = createImageUrlBuilder(sanityConfig)

export const urlForImage = source =>
  imageBuilder
    .image(source)
    .auto('format')
    .fit('max')

export const imageUrlFor = urlForImage

export const usePreviewSubscription = createPreviewSubscriptionHook(
  sanityConfig
)

/* export async function getSanityContent ({ query, variables = {} }) {
 *   // ToDo: use one of the cool http clients
 *   // eslint-disable-next-line compat/compat
 *   const { data } = await fetch(
 *     'https://sqqecrvt.api.sanity.io/v1/graphql/production/default',
 *     {
 *       method: 'POST',
 *       headers: {
 *         'Content-Type': 'application/json',
 *       },
 *       body: JSON.stringify({
 *         query,
 *         variables,
 *       }),
 *     }
 *   ).then(response => response.json())
 *
 *   return data
 * }
 */
