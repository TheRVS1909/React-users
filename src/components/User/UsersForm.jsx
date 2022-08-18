import { useState } from 'react';

function UsersForm({ create }) {

	const [user, setUser] = useState({ name: '', age: '', gender: 'men', profession: '' });

	const addNewUser = (e) => {
		e.preventDefault();
		if ((user.name) && (user.age) && (user.gender) && (user.profession)) {
			const newUser = {
				...user,
			}
			create(newUser);
			setUser({ name: '', age: '', gender: 'men', profession: '' });
		}
	};

	return (
		<>
			<form>
				<h1>Форма создания пользователя:</h1>
				<div>
					<input className='myInp' value={user.name} onChange={e => setUser({ ...user, name: e.target.value })} type='text' placeholder='Имя' />
					<input className='myInp' value={user.age} onChange={e => setUser({ ...user, age: e.target.value })} type='text' placeholder='Возраст' />
					<select value={user.gender} onChange={e => setUser({ ...user, gender: e.target.value })}>
						<option value='men'>men</option>
						<option value='women'>women</option>
					</select>
					<input className='myInp' value={user.profession} onChange={e => setUser({ ...user, profession: e.target.value })} type='text' placeholder='Профессия' />
				</div>
				<button className='myBtn' onClick={addNewUser}>Создать пользователя</button>
			</form>
		</>
	);
}

export default UsersForm;
//<input className='myInp' value={user.gender} onChange={e => setUser({ ...user, gender: e.target.value })} type='text' placeholder='Гендер' />

/*
<select>
	<option>m</option>
	<option>w</option>
</select>
*/
