import React from "react";
import UserItem from "./UserItem";
import UserFilter from "./UserFilter";

function UserList({ filter, cancel, users }) {

	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>Список пользователей:</h1>
			<UserFilter filter={filter} cancel={cancel} />
			{users.map((user) => (
				<UserItem user={user} key={user.id} />
			))}
		</div >
	);
}

export default UserList;
