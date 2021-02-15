import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { GET_CONTACTS } from "../graphql/queries";
import Grid from "@material-ui/core/Grid";
import Contact from "./contact";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
	container: {
		marginTop: "20px",
		border: "1px solid black"
	},
	footer: {
		height: "50px",
		textAlign: "center",
		padding: "20px 0px 20px"
	}
});

const ContactList = () => {
	const [offSet, setOffSet] = useState(0);
	const classes = useStyles();
	const { fetchMore, loading, error, data } = useQuery(GET_CONTACTS, {
		variables: {
			"pagination": {
				"offset": 0,
				"limit": 20
			}
		}
	});

	const loadMore = () => {
		fetchMore({
			variables: {
				"pagination": {
					"offset": offSet,
					"limit": 20
				}
			}
		});
		setOffSet(offSet + 20);
	};

	if (error) {
		return <div>Error loading contacts.</div>;
	}

	if (loading) {
		return <div>Loading</div>;
	}

	return (
		<>
			<Grid container direction="row" spacing={2} className={classes.container}>
				{data?.getContacts?.map(contact => 
					<Contact key={contact.id} contact={contact} />)}
			</Grid>
			<div className={classes.footer}>
				<Button onClick={() => loadMore()}>Load More</Button>
			</div>
		</>
	);
};

export default ContactList;