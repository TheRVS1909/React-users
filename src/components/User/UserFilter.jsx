import React from "react";
import { useState } from 'react';

function UserFilter({ filter, cancel }) {
	const [filterName, setFilterName] = useState('');
	const [filterVision, setFilterVision] = useState(false);

	const handleFilter = () => filter({
		name: filterName,
	});
	
	const clearFilter = () => {
		setFilterName('');
		cancel();
	}
	
	const toggleFilterVision = () => setFilterVision(!filterVision);

	return (
		<>
			{filterVision && (
				<>
			 		<input className='myInp' value={filterName} onChange={e => setFilterName(e.target.value)} type='text' placeholder='Имя' />
					<button className='myBtn' onClick={handleFilter}>Применить фильтр</button>
					<button className='myBtn' onClick={clearFilter}>Сбросить фильтр</button>
			 	</>
			)}
			<button className='myBtn' onClick={toggleFilterViison}>{filterVision ? 'Закрыть фильтр' : 'Открыть фильтр'}</button>
		</>
	);
}

export default UserFilter;
