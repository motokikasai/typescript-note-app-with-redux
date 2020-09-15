import React from 'react';
import NewNoteInput from './NewNoteInput';
import { GlobalStyles } from './styles/GlobalStyles';
import Container from '@material-ui/core/Container';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <h1>Placeholder...</h1>
        <NewNoteInput addNote={alert} />
        <ul>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
            in hic debitis minus autem ipsam voluptatum nam, neque eos. Quasi ut
            iste sequi deleniti.
          </li>
        </ul>
      </Container>
    </>
  );
};

export default App;
