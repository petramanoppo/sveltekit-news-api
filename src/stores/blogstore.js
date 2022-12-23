import { writable } from 'svelte/store';

export const blogs = writable([]);
const fetchBlogs = async () => {
	const url = `https://saurav.tech/NewsAPI/everything/cnn.json`;
	const res = await fetch(url);
	const data = await res.json();
	const loadedBlogs = data.articles.map((data) => {
		return {
			title: data.title,
			description: data.description,
			image: data.urlToImage,
			homeUrl: data.url
		};
	});
	blogs.set(loadedBlogs);
};

fetchBlogs();
