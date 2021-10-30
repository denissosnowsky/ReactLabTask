export const getData = async (url) => {
  const result = await fetch(url);

  if (!result.ok) {
    throw new Error(`Fetch failed ${url}, status: ${result.status}`);
  }

  return await result.json();
};
