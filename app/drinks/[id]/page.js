import Link from 'next/link';
import React from 'react';
import sampleImg from './pexels-sample-1.jpg';
import Image from 'next/image';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

console.log(sampleImg);
const getSingleDrink = async (id) => {
	const res = await fetch(`${url}${id}`);
	if (!res.ok) {
		throw new Error('Failed to fetch drink...');
	}

	return res.json();
};

const SingleDrinkPage = async ({ params }) => {
	const data = await getSingleDrink(params.id);
	console.log(data);

	const title = data?.drinks[0]?.strDrink;
	const imgSrc = data?.drinks[0]?.strDrinkThumb;

	return (
		<div>
			<Link
				href="/drinks"
				className="btn btn-primary mt-8 mb-12"
			>
				back to drinks
			</Link>
			{/* <img
				src={sampleImg.src}
				alt="sample"
			/> */}

			<Image
				src={imgSrc}
				width={300}
				height={300}
				className="w-48 h-48 rounded-lg shadow-lg mb-4"
				priority
				alt={title}
			/>

			{/* <Image
				src={sampleImg}
				// src={imgSrc}
				className="w-48 h-48 rounded-lg"
				alt="sample"
			/> */}
			<h1 className="text-2xl">{title}</h1>
		</div>
	);
};

export default SingleDrinkPage;
