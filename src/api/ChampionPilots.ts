
let driverData: {
  points: number,
  driverFullName: string,
  teamName: string,
}[] | null = null;

export async function Data() {
  const url = "https://f1connectapi.vercel.app/api/current/drivers-championship?limit=20&offset=0"
  try {
    const response = await fetch(url)
    const json = await response.json()
    const rawDrivers = json.drivers_championship;
    return driverData = rawDrivers.map((entry: any) => ({
      points: entry.points,
      driverFullName: `${entry.driver.name} ${entry.driver.surname}`,
      teamName: entry.team.teamName,
    }))
  } catch (e) {
    console.error(e)
  }
}
