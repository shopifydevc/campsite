import { Api } from '@campsite/types'

let baseUrl = 'http://api.campsite.test:3001'

if (process.env.NODE_ENV === 'production') {
  baseUrl = process.env.API_BASE_URL
}

export const api = new Api({
  baseUrl,
  baseApiParams: {
    headers: { 'Content-Type': 'application/json' },
    format: 'json'
  }
})
