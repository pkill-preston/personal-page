import {MetadataRoute} from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://heron-lorena.vercel.app";

	return [
		{
			url: `${baseUrl}/`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1
		},
		{
			url: `${baseUrl}/en`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8
		},
		{
			url: `${baseUrl}/pt`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8
		},
		{
			url: `${baseUrl}/es`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8
		}
	];
}
