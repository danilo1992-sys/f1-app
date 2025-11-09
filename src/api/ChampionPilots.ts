const url = 'https://f1connectapi.vercel.app/api/current/drivers-championship?limit=20&offset=0'

export default async function getChampion() {
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error('Error')
    const data = await response.json()
    return data.drivers_championship
  } catch (error) {
    console.error('Error', error);
    return [];
  }
} 
