# HTTP API

**XMLHttpRequest:** https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

**Fetch API:** https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

## Libraries

**Axios:** https://www.npmjs.com/package/axios

**Superagent:** https://www.npmjs.com/package/superagent

**Got:** https://www.npmjs.com/package/got

**Reqwest:** https://www.npmjs.com/package/reqwest

## Examples

### Fetch API

```javascript
const source = 'https://swapi.dev/api/people/1/'

// Get data with Fetch

fetch(source)
  .then((res) => {
    return res.json()
  })
  .then((body) => {
    console.log(body)
  })

// The same but using async/await

const getResource = async (url) => {
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error(`received ${res.status}`)
  }

  const body = await res.json()
  return body
}

getResource(source)
  .then((body) => {
    console.log(body)
  })
  .catch((err) => {
    console.error('Could not fetch', err)
  })
```
