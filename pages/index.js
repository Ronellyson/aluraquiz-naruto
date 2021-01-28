/* eslint-disable no-unused-expressions */
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { useState } from 'react';
import db from '../db.json';
import Widget from '../src/components/Widget/index';
import Footer from '../src/components/Footer/index';
import GitHubCorner from '../src/components/GitHubCorner/index';
import QuizBackground from '../src/components/QuizBackground/index';
import QuizLogo from '../src/components/QuizLogo/index';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */

// const BackgraundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Head>
          <title>aluraQuiz - Naruto Shippuden</title>
        </Head>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Naruto Shippuden</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo uma submissão por meio do react');

              // router manda para a próxima página
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="Diz ai seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Quizes da Galera</h1>
          </Widget.Header>
          <Widget.Content>
            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/ronellyson" />
    </QuizBackground>
  );
}
