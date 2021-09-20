import "../Font";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "../Form";
import List from "../List";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  container__alert: {
    width: "100%",
    height: "30px",
  },
}));
function Home() {
  const formShema = yup.object().shape({
    information: yup.string().required("Campo Obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formShema),
  });
  const [isList, setIsList] = useState(false);
  const [arrRepo, setArrRepo] = useState([]);
  const [error, SetError] = useState();
  const onSubmitFunction = (data) => {
    fetch(`https://api.github.com/repos/${data.information}`)
      .then((response) => response.json())
      .then((response) => {
        if (response.message === "Not Found") {
          SetError(true);
          return response.message;
        }
        SetError(false);
        return setArrRepo([...arrRepo, response]);
      })
      .catch((err) => console.log(err));

    setIsList(true);
  };
  const classe = useStyles();

  return (
    <Grid className={classe.root} container spacing={1}>
      <Grid item xs={12} className={classe.rootContainer}>
        <Grid item xs={12} className={classe.container__alert}>
          {error && (
            <p className="alert FadeIn">Repository not found or private!</p>
          )}
        </Grid>

        <Form
          handleSubmit={handleSubmit}
          register={register}
          errors={errors}
          onSubmitFunction={onSubmitFunction}
        />
        {isList && <List arrRepo={arrRepo} />}
      </Grid>
    </Grid>
  );
}
export default Home;
