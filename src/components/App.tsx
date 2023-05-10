import { useState } from "react";
// import List, { PeopleType } from "./List";
import data from "../data/data";
import List from "./List";
import {
  Container,
  Card,
  Typography,
  Button,
  CardHeader,
  Box,
} from "@mui/material";

function App() {
  const [boolean, setBoolean] = useState<boolean>(true);
  const [peoples, setPeoples] = useState<any>(data);
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            m: 1,
          }}
        >
          <Typography variant="h3" gutterBottom>
            {peoples.length} birthdays today
          </Typography>
          {boolean ? <List /> : ""}
          <Button
            sx={{
              m: 2,
            }}
            variant="contained"
            onClick={() => {
              setBoolean(false);
              setPeoples([]);
            }}
          >
            Clear All
          </Button>
        </Card>

        {/* <section className="container">
        <h3>{peoples.length} birthdays today</h3>
        {boolean ? <List /> : ""}
        <button
          onClick={() => {
            setBoolean(false);
            setPeoples([]);
          }}
        >
          Clear All
        </button>
      </section> */}
      </Container>
    </>
  );
}

export default App;
