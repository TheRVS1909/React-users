import React from 'react';
import { useState } from 'react';
import UserList from './UserList';
import UsersForm from './UsersForm';

function User() {
	let [users, setUsers] = useState([
		{ name: 'Vadim', age: 21, gender: 'men', profession: 'elder (/n ring)', id: 0 },
		{ name: 'Danil', age: 20, gender: 'men', profession: 'future Jun Frontend', id: 1 },
		{ name: 'Sanya', age: 20, gender: 'men', profession: 'program Men', id: 2 }
	])

	let [copyUsers, setCopyUsers] = useState([
		{ name: 'Vadim', age: 21, gender: 'men', profession: 'elder (/n ring)', id: 0 },
		{ name: 'Danil', age: 20, gender: 'men', profession: 'future Jun Frontend', id: 1 },
		{ name: 'Sanya', age: 20, gender: 'men', profession: 'program Men', id: 2 }
	]);

	const createUser = (newUser) => {
		setCopyUsers([...copyUsers, newUser]);
		cancelFilterUser();
	}

	const filterUser = ({ name }) => {
		setUsers(copyUsers.filter(u => u.name.includes(name)));
	}

	const cancelFilterUser = () => {
		setUsers([...copyUsers]);
	}

	return (
		<>
			<UsersForm create={createUser} />
			<UserList filter={filterUser} cancel={cancelFilterUser} users={users} title="Список пользователей" />
		</>
	);
}

export default User;
