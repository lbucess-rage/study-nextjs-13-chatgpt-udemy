import Link from 'next/link';
import React from 'react';

const HomePage = () => {
	return (
		<div>
			<h1 className="text-7xl">Home Page</h1>
			<span>
				<Link
					href="/about"
					className="text-2xl"
				>
					about page
				</Link>
			</span>
			<br />
			<span>
				<Link
					href="/contact"
					className="text-2xl"
				>
					contact page
				</Link>
			</span>
		</div>
	);
};

export default HomePage;
