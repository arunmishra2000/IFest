import React from "react";
import { Container, HeadingH1, Wrapper } from "../Commons";
import { CardList } from "../CardList/CardList.component";
import Winner from "./Winners.svg";

const Prizes = () => {
  return (
    <>
      <Container id="prizes">
        <HeadingH1>Prizes</HeadingH1>
        <Wrapper>
          <CardList
            data={[
              {
                id: 1,
                name: "First",
                source:
                  "https://img.icons8.com/doodle/48/000000/first-place-ribbon--v1.png",
              },
              { id: 1, name: "Second" },
              { id: 1, name: "Third" },
              { id: 1, name: "Best Fresher" },
            ]}
          />
        </Wrapper>
      </Container>
    </>
  );
};

export default Prizes;
