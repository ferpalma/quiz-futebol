import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
// import QuizLogo from '../src/components/QuizLogo';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position:  center;
// `

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
  const [name, setName] = React.useState('');
  // eslint-disable-next-line no-console
  console.log('Retorno do useState', name, setName);

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz - Futebol</title>
      </Head>
      <QuizContainer>

        <Widget>
          <Widget.Header>
            <h1>Quiz Futebol Brasileiro</h1>
          </Widget.Header>

          <Widget.Content>
            {/* eslint-disable-next-line max-len */}
            <p>Teste seus conhecimentos relacionados ao futebol Brasileiro e divirta-se tentando descobrir as respostas!</p>
            <form onSubmit={function (infosDoEvento) {
              // router manda para a próxima página
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              // eslint-disable-next-line no-console
              console.log('Fazendo uma submissão por meio do react');
            }}
            >
              <input
                onChange={function (infosDoEvento) {
                  // eslint-disable-next-line no-console
                  console.log(infosDoEvento.target.value);
                  // state
                  // name = infosDoEvento.target.value;
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Diz aí seu nome :)"
              />
              <br />
              <button type="submit" disabled={name.length === 0}>
                Jogar
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            {/* eslint-disable-next-line max-len */}
            <p>Dá uma olhada nesses quizes incríveis que o pessoal da Imersão React Next.js fez: </p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/ferpalma" />
    </QuizBackground>

  );
}
