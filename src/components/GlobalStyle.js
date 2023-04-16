import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import backimg from '../image/backimg.jpg';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  background-image: url(${backimg});
  background-repeat: no-repeat;
  background-size: cover;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
li {
    list-style: none;
}
`;
