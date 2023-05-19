import { useState } from "react";
// import List, { PeopleType } from "./List";
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Typography
} from "@mui/material";
import data from "../data/data";
import List from "./List";

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
            m: 4,
            p: 2,
            // width:'30%'
          }}
        >
          <Typography letterSpacing={3} fontSize={26} variant="h3" gutterBottom>
            {peoples.length} birthdays today !
          </Typography>
          <Divider sx={{m : 2}}></Divider>
          {boolean ? <List /> : ""}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              sx={{
                m: 2,
                backgroundColor: "#f28ab2",
                width: '100%'
              }}
              variant="contained"
              onClick={() => {
                setBoolean(false);
                setPeoples([]);
              }}
            >
              Clear All
            </Button>
          </Box>
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
