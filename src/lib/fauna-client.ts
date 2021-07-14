import { Client } from 'faunadb'

const faunaClient: Client = new Client({
  secret: process.env.FAUNADB_SECRET ?? 'missing faunadb secret key',
})

export default faunaClient
