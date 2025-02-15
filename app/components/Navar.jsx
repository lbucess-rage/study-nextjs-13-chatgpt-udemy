import Link from 'next/link';

const links = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/contact', label: 'Contact' },
	{ href: '/client', label: 'Client' },
	{ href: '/drinks', label: 'Drinks' },
	{ href: '/tasks', label: 'Tasks' },
	{ href: '/prisma-example', label: 'prisma' }
];

import React from 'react';

export const Navbar = () => {
	return (
		<nav className="bg-base-300 py-4">
			<div className="navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row">
				<Link href="/">Next.js</Link>
				<ul className="menu menu-horizontal md:ml-8">
					{links.map((link) => {
						return (
							<li key={link.href}>
								<Link
									href={link.href}
									className="capitalize"
								>
									{link.label}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
