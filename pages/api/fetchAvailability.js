import fetch from 'node-fetch'

export default async function handler(req, res) {
  const calendlyApiUrl = 'https://api.calendly.com/scheduled_events'
  const apiKey = 'YOUR_CALENDLY_API_KEY' // Replace with your actual API Key

  const response = await fetch(calendlyApiUrl, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
    },
  })

  if (!response.ok) {
    return res.status(500).json({ message: 'Failed to fetch data from Calendly' })
  }

  const data = await response.json()
  // Format and send events to client
  const events = data.collection.map(event => ({
    title: event.name,
    date: event.start_time, // Format as needed
  }))
  
  res.status(200).json({ events })
}
