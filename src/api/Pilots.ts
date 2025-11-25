const url = 'https://f1connectapi.vercel.app/api/current/drivers?limit=20'

export async function Pilots() {
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error('Error al consumir la api')
    const drivers = await response.json()
    return drivers.drivers
  } catch (error) {
    console.error('Error', error);
    return []
  }
}
