import React from "react";
import { useParticipantsList } from "../Home/state/hooks/useParticipantsList";

const Sort = () => {
	const user = useParticipantsList();
	return (
		<div>
			Sort
			{user.map((user) => user)}
		</div>
	);
};

export default Sort;
