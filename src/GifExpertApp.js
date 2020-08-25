import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
	// const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
	const [categories, setcategories] = useState(['One Punch']);
	// const handleAdd = () => {
	// 	// setcategories([...categories, 'Shingeki']);
	// setcategories((cats) => [...cats, 'Shingeki']);
	// };
	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories={setcategories} />
			<hr />
			{/* <button onClick={handleAdd}>Agregar</button> */}
			<ol>
				{categories.map((category) => (
					<GifGrid key={category} category={category} />
				))}
			</ol>
		</>
	);
};

export default GifExpertApp;
