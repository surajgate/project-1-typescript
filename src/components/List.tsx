import React from "react";
import data from "../data/data";
import {
  Container,
  CardMedia,
  Card,
  Typography,
  Button,
  CardHeader,
  Grid,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

console.log(data);

const useStyles = makeStyles({
  image: {
    width: "75px",
    height: "75px",
    objectFit: "cover",
    borderRadius: "50%",
  },
});

const List = () => {
  const classes = useStyles();

  return (
    <>
      {data.map((person) => {
        const { id, name, age, image } = person;
        return (
          <>
            <Grid container sx={{ m: 1 }}>
              <Grid direction="row" xs={3}>
                <CardMedia
                  className={classes.image}
                  sx={{ width: "100px", height: "100px" }}
                  component="img"
                  image={image}
                />
              </Grid>
              <Grid xs={9}>
                <Container>
                  <Typography variant="h4">{name}</Typography>
                  <Typography paragraph gutterBottom>
                    {age}
                  </Typography>
                </Container>
              </Grid>
            </Grid>
          </>
          // <article key={id} className="person">
          //   <img src={image} alt={name} />
          //   <div>
          //     <h4>{name}</h4>
          //     <p>{age}</p>
          //   </div>
          // </article>
        );
      })}
    </>
  );
};

export default List;
