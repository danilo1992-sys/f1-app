const url = "https://f1api.dev/api/current/constructors-championship?limit=10&offset=0"

export default async function getConstructor() {
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error('Error')
    const data = await response.json()
    return data.constructors_championship
  } catch (error) {
    console.error('Error', error);
    return []
  }
}
