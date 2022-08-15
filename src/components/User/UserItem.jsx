import React from "react";

function UserItem(props) {
	return (
		<div className="user">
			<div className="user__content">
				<div className="user__name">{props.user.name}</div>
				<span></span>
				<div className="user__age">{props.user.age}</div>
				<span></span>
				<div className="user__gender">{props.user.gender}</div>
				<span></span>
				<div className="user__profession">{props.user.profession}</div>
			</div>

		</div>
	);
};

export default UserItem;