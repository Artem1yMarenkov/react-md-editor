import styled from 'styled-components';

import Edit from './Pages/Edit';

import './App.scss';

const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  padding: 30px;
`;

function App() {
  return (
    <Wrapper className="App">
      <Edit/>
    </Wrapper>
  );
}

export default App;
