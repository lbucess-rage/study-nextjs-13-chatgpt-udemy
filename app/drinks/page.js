import React from 'react';
import DrinksList from '../components/DrinkList';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

const fetchDrinks = async () => {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error('Failed to fetch drinks');
	}

	const data = await response.json();

	return data;
};

const DrinksPage = async () => {
	const data = await fetchDrinks();

	return <DrinksList drinks={data.drinks} />;
};

export default DrinksPage;
