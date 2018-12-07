// window is not available in workers so we disable no-restricted-globals
/* eslint-disable no-restricted-globals */

async function handleRequest(request) {
  const response = await fetch(request)
  const headers = new Headers(response.headers)

  headers.set("Hello-Workers", "42")

  const { status, statusText } = response
  const modifiedResponse = new Response(response.body, {
    headers,
    status,
    statusText,
  })

  return modifiedResponse
}

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})
