import React from "react";
import { useState } from 'react';

function UserFilter({ users, filter, cancel, copyUsers, setCopyUsers }) {
	const [filterName, setFilterName] = useState('');
	const [children, setChildren] = useState('Открыть фильтр');
	const [isFilter, setIsFilter] = useState(false);

	function checkFilterUser(filterName) {

		if (!isFilter) {
			setIsFilter(true);
			setChildren('Применить фильтр');
		} else {
			if (filterName === '') {
				cancel(copyUsers);
				setChildren('Открыть фильтр');
				setIsFilter(false);
			} else {
				setCopyUsers([...users]);
				filter(filterName);
				setFilterName('');
				setChildren('Закрыть фильтр');
			}
		}
	}

	return (
		<>
			{isFilter
				? <input className='myInp' value={filterName} onChange={e => setFilterName(e.target.value)} type='text' placeholder='Имя' />
				: <> </>
			}
			<button className='myBtn' onClick={() => checkFilterUser(filterName)}>{children}</button>
		</>
	);
}

export default UserFilter;