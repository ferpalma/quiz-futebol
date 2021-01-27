import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => {
    // eslint-disable-next-line no-console
    console.log(theme);
    return theme.colors.mainBg;
  }};
  border-radius: 6px;
  overflow: hidden;

  h1, h2, h3 {
    font-family: sans-serif;
    font-size: 25px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  p {
    font-family: sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 1;
    text-align: justify;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};

  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding:0;
  }
  input {
    padding: 10px;
    width:280px;
    border-radius: 4px;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    font-family: sans-serif;
    font-size: 20px;
    border:1px solid green;
    margin-bottom: 30px;
    margin: 5 auto;
  }
  button {
    padding: 10px;
    width:280px;
    border-radius: 4px;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    font-family: sans-serif;
    font-size: 20px;
    font-size: 25px;
    border:1px solid green;
    color: #ffff;
    background-color: #52b202;
    margin: 5 auto;
  }
  input:hover {
    background-color: #b0bec5;
    box-shadow: 1px 1px 2px gray;
}
`;
export default Widget;
