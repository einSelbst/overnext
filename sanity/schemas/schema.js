// First, we must import the schema creator
// I have no clue what the 'part' thing means
/* eslint-disable import/no-unresolved */
import schemaTypes from 'all:part:@sanity/base/schema-type'
import createSchema from 'part:@sanity/base/schema-creator'
/* eslint-enable import/no-unresolved */

// Then import schema types from any plugins that might expose them

// We import object and document schemas
import blockContent from './block-content'
import castMember from './cast-member'
import crewMember from './crew-member'
import movie from './movie'
import person from './person'
import plotSummaries from './plot-summaries'
import plotSummary from './plot-summary'
import screening from './screening'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: [
    ...schemaTypes,
    // The following are document types which will appear
    // in the studio.
    movie,
    person,
    screening,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    plotSummary,
    plotSummaries,
    castMember,
    crewMember,
  ],
})
