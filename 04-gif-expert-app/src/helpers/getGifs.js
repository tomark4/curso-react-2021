export const getGifs = async (category) => {
  let url = `https://api.giphy.com/v1/gifs/search?api_key=RVYdMal6qjVceRiZu8aU55VChVtkJ2Wo&q=${encodeURI(category)}&limit=10`;
  try {
    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    }));

    return gifs;

  } catch (err) {
    console.log(err);
  }
};
