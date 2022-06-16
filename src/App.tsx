import styled from 'styled-components'
import { GlobalStyles } from './styles/global';

const Title = styled.h1`
  color: #8257e6;
`

export function App() {
  return (
    <div className="App">
        <Title>Olá mundo</Title>
        <GlobalStyles/>
    </div>
  );
}