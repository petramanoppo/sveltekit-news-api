import { writable } from 'svelte/store';

export const news = writable([]);
const fetchNews = async () => {
	const url = `https://saurav.tech/NewsAPI/top-headlines/category/general/us.json`;
	const res = await fetch(url);
	const data = await res.json();
	const loadedNews = data.articles.map((data) => {
		return {
			title: data.title,
			description: data.description,
			image: data.urlToImage,
			homeUrl: data.url
		};
	});
	news.set(loadedNews);
};

fetchNews();
