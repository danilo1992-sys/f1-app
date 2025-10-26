export interface NextRace {
  record: number;
  country: string;
  circuitName: string;
  city: string;
  circuitLength: number;
  fasterDriver: string;
  fasterLapYear: number;
}

export async function Race(): Promise<NextRace | null>{  
  const url = "https://f1api.dev/api/current/next"
  try {
    const response = await fetch(url)
    const data: NextRace = await response.json()
    return data;
  } catch (e) {
    console.error(e);  
    return null; 
  }
}
