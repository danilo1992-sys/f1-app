

const url = 'https://f1connectapi.vercel.app/api/current/last/race?limit=20'

export default async function lastRace() {
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error('Error')
    const data = await response.json()
    return data.results
  } catch (error) {
    console.error(error);
    return []
  }
}
