import { List as MuiList, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { useParticipantsList } from "../../state/hooks/useParticipantsList";

const List = () => {
	const names = useParticipantsList();

	return names ? (
		<MuiList>
			{names.map((name) => (
				<ListItem key={name}>
					<ListItemText>{name}</ListItemText>
				</ListItem>
			))}
		</MuiList>
	) : (
		<></>
	);
};

export default List;
