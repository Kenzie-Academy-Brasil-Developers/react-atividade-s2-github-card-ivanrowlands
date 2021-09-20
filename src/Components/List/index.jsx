import "../Font";
import { Grid } from "@material-ui/core";
import Card from "../Card";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "5px",
  },
}));
function List({ arrRepo }) {
  const classe = useStyles();

  return (
    <Grid container spacing={1} className={classe.root}>
      <Grid item xs={12}>
        {arrRepo.map((element) => (
          <Card key={element.id} element={element} />
        ))}
      </Grid>
    </Grid>
  );
}
export default List;
