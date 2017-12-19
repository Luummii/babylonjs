import url from 'url'

const env = process.env.NODE_ENV === 'production'
const params = env ? url.parse(process.env.DATABASE_URL) : ''
const auth = env ? params.auth.split(':') : ''

export default {
  db: {
    client: 'pg',
    host: env ? params.hostname : 'ec2-54-247-189-141.eu-west-1.compute.amazonaws.com',
    database: env ? params.pathname.split('/')[1] : 'd94pqt20su9mti',
    user: env ? auth[0] : 'gqswjtqsokubom',
    password: env ? auth[1] : 'e34082e719ffd96621208e690137d0def244ae30f2b9bf3be1fbcb51a531846e', 
    port: env ? params.port : 5432
  }
}
