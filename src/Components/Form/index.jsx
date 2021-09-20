import "../Font";
import { TextField, Button, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "95%",
    maxWidth: "400px",
    padding: "10px",
    boxSizing: "border-box",
    margin: "0 auto",
    marginTop: "10px",
    background: "lightslategray",
  },
  forRow: {
    marginBottom: "10px",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    width: "100%",
    maxWidth: "280px",
    margin: "0 auto",
  },
  alert: {
    color: "red",
    marginTop: "10px",
  },
  title: {
    marginBottom: "10px",
  },
}));
function Form({ handleSubmit, register, errors, onSubmitFunction }) {
  const classe = useStyles();
  return (
    <Paper className={classe.container}>
      <form onSubmit={handleSubmit(onSubmitFunction)} autoComplete="off">
        <h3 className={classe.title}>API Git Hub</h3>
        <Grid className={classe.forRow} item xs={12}>
          <TextField
            className={classe.input}
            {...register("information")}
            id="outlined-basic"
            label="User/Organization and Repository"
          />
          {errors.information && (
            <span className={classe.alert}>{errors.information.message}</span>
          )}
        </Grid>
        <Grid className={classe.forRow} item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Seach
          </Button>
        </Grid>
      </form>
    </Paper>
  );
}
export default Form;
