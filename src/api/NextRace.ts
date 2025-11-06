const url = 'https://f1api.dev/api/current/next';

export async function Race() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Error al ejecutar la api');
    return await response.json();
  } catch (error) {
    console.error('Error', error);
    return [];
  }
}

