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

	let [copyUsers, setCopyUsers] = useState([]);

	const createUser = (newUser) => {
		setUsers([...users, newUser]);
	}

	const filterUser = (name) => {
		setUsers(users.filter(u => u.name.includes(name)));
	}

	const cancelFilterUser = (copyUsers) => {
		setUsers([...copyUsers]);
	}

	return (
		<>
			<UsersForm create={createUser} users={users} />
			<UserList filter={filterUser} cancel={cancelFilterUser} users={users} copyUsers={copyUsers} setCopyUsers={setCopyUsers} title="Список пользователей" />
		</>
	);
}

export default User;