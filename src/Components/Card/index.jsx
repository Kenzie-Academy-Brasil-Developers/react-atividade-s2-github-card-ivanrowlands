import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyle = makeStyles((theme) => ({
  container: {
    width: "95%",
    maxWidth: "400px",
    padding: "10px",
    boxSizing: "border-box",
    margin: "0 auto",
    marginBottom: "5px",
    animation: "FadeIn 1s linear",
  },
  container__row: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  col__information: {
    padding: "5px",
    textAlign: "start",
  },
  col__img: {
    padding: "5px",
  },
  img: {
    width: "50px",
  },
  p: {
    color: "#7d7d7d",
  },
  title: {
    color: "#2e2f31",
  },
}));

function Card({ element }) {
  const classe = useStyle();

  return (
    <Paper className={`${classe.container}`}>
      <Grid className={classe.container__row} item xs={12}>
        <Grid className={classe.col__img} item xs={3}>
          <img
            className={classe.img}
            src={element.owner.avatar_url}
            alt={element.full_name}
          />
        </Grid>
        <Grid className={classe.col__information} item xs={10}>
          <h5 className={classe.title}>{element.full_name}</h5>
          <p className={classe.p}>{element.description}</p>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default Card;
