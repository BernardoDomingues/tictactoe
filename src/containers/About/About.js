import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

import BasePage from "../../components/BasePage";
import colors from "../../helpers/colors";

import myPhoto from "../../assets/profilephoto.png";

const About = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const getImage = await axios
        .get("https://en.wikipedia.org/api/rest_v1/page/media-list/Tic-tac-toe")
        .then((res) => res.data.items[0].srcset[0].src)
        .catch((error) => error);
      setImageUrl(getImage);
    };
    fetchData();
  }, []);

  console.log(imageUrl);
  return (
    <BasePage>
      <Container>
        <Card>
          <div>
            <img alt="Exemple Tic Tac Toe" src={imageUrl} />
          </div>
          <div>
            <h1>Tic-tac-toe</h1>
            <p>
              Tic-tac-toe (American English), noughts and crosses (Commonwealth
              English), or Xs and Os (Irish English) is a paper-and-pencil game
              for two players who take turns marking the spaces in a
              three-by-three grid with X or O. The player who succeeds in
              placing three of their marks in a horizontal, vertical, or
              diagonal row is the winner. It is a solved game, with a forced
              draw assuming best play from both players.
            </p>
            <p>
              Tic-tac-toe is played on a three-by-three grid by two players, who
              alternately place the marks X and O in one of the nine spaces in
              the grid.
            </p>
            <p>
              There is no universally-agreed rule as to who plays first, but in
              this article the convention that X plays first is used. Players
              soon discover that the best play from both parties leads to a
              draw. Hence, tic-tac-toe is often played by young children who may
              not have discovered the optimal strategy.
            </p>
            <span>Font: </span>
            <span
              onClick={() =>
                window.open(
                  "https://en.wikipedia.org/wiki/Tic-tac-toe",
                  "_blank"
                )
              }
              style={{ cursor: "pointer" }}
            >
              https://en.wikipedia.org/wiki/Tic-tac-toe
            </span>
          </div>
        </Card>
        <Card>
          <div>
            <ProfileImage alt="Bernardo Domingues" src={myPhoto} />
          </div>
          <div>
            <h1>Bernardo Domingues</h1>
            <p>
              Im Bernardo Domingues, im twenty years old, born in Minas Gerais -
              Brazil, near the state capital. Since I was young im a tech lover,
              always learning about computing, softwares, games and thats why i
              decided go to college in this area.
            </p>
            <p>
              In 2020 I started working in a company close to my home and there
              im one of responsibles to make the remake of the internal
              management system (around 100 users), to build it we use React in
              front-end, Node whith express in back-end and PostgreSQL with
              sequelize ORM in database and im present in every step of the
              project, since getting informations about the first version, what
              worked, knowing what would be better talking to the users, plannig
              MVPs and relational tables, choosing technologies, writing the
              codes in front-back.
            </p>
            <CardFooter>
              <span
                onClick={() =>
                  window.open(
                    "https://linkedin.com/in/bernardo-domingues14",
                    "_blank"
                  )
                }
                style={{ cursor: "pointer" }}
              >
                <FaLinkedin />
              </span>
              <span
                onClick={() =>
                  window.open("https://github.com/BernardoDomingues", "_blank")
                }
                style={{ cursor: "pointer" }}
              >
                <FaGithubSquare />
              </span>
            </CardFooter>
          </div>
        </Card>
      </Container>
    </BasePage>
  );
};

const Container = styled.div`
  display: grid;
  gap: 10px;
`;

const Card = styled.div`
  background-color: ${colors.white};
  border-radius: 5px;
  padding: 5px;
  font-family: sans-serif;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  @media screen and (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
`;

const ProfileImage = styled.img`
  border: 1px solid ${colors.black};
  border-radius: 150px;
  width: 250px;
`;

const CardFooter = styled.div`
  font-size: 35px;
`;

export default About;
