import {
  CardMedia,
  Container,
  Grid,
  Typography
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import data from "../data/data";

console.log(data);

const useStyles = makeStyles({
  image: {
    width: "75px",
    height: "85px",
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
            <Grid key={id} container sx={{ m: 1 }}>
              <Grid direction="row" xs={3}>
                <CardMedia
                  className={classes.image}
                  component="img"
                  image={image}
                />
              </Grid>
              <Grid xs={9}>
                <Container>
                  <Typography letterSpacing={1} fontWeight={'bold'} variant="h6">{name}</Typography>
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
