import axios from 'axios'
import React, { useEffect, useState } from 'react'

export function Quote() {
  const [joke, setJoke] = useState('')
  const apiKey = process.env.API_NINJA_KEY // Replace with your API key

  useEffect(() => {
    const fetchJoke = async () => {
      const url = 'https://api.api-ninjas.com/v1/chucknorris'

      try {
        const response = await axios.get(url, {
          headers: {
            'X-Api-Key': 'rAKE7oC5eFB7HEnl8XOCNw==CzwxAZDpMV99n9zV',
          },
        })

        setTimeout(() => {
          setJoke(response.data.joke)
        }, 700)
      } catch (error) {
        console.error('Error:', error)
      }
    }

    fetchJoke()
  }, [])

  return (
    <>
      {joke ? (
        <div className="max-w-lg border-l border-l-gray-500 pl-4 text-xl font-bold italic">
          {joke ? `&quot;${joke}&quot;` : ''}
        </div>
      ) : (
        <div className="space-y-4">
          <div className="h-6 w-full max-w-lg animate-pulse rounded-xl bg-gray-800/10 pl-4 text-xl font-bold italic dark:bg-gray-100/10"></div>
          <div className="h-6 w-full max-w-lg animate-pulse rounded-xl bg-gray-800/10 pl-4 text-xl font-bold italic dark:bg-gray-100/10"></div>
        </div>
      )}
    </>
  )
}
