import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	root: {
		minWidth: 200,
		textAlign: 'left'
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 18,
	},
	pos: {
		fontSize: 15,
	},
});

const Contact = (props) => {
	const classes = useStyles();
	const { id, name, address, doorNo, city, postCode, email, phone } = props.contact;

	return (
		<>
			<Grid data-testid={`contactList__contact_${id}`} xs={12} sm={6} md={4} lg={3} item>
				<Card className={classes.root}>
					<CardContent>
						<Typography
							className={classes.title}
							color="textPrimary"
							gutterBottom
						>
							{name}
						</Typography>
						<Typography className={classes.pos} color="textSecondary">
							{doorNo} {address}
						</Typography>
						<Typography className={classes.pos} color="textSecondary">
							{city}
						</Typography>
						<Typography className={classes.pos} color="textSecondary">
							{postCode}
						</Typography>
						<Typography className={classes.pos} color="textSecondary">
							{email}
						</Typography>
						<Typography className={classes.pos} color="textSecondary">
							{phone}
						</Typography>
					</CardContent>
				</Card>
			</Grid>
		</>
	);
};

export default Contact;