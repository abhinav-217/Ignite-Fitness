export const exerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a4072ec998mshdbccde444f2c36bp1b4383jsna7979c229913',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

export const youtubeOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4d350e58a6mshff82f15226b8dcap1586f7jsnadd764e9ac30',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};