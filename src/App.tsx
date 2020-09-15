import React from 'react';
import NewNoteInput from './NewNoteInput';
import { GlobalStyles } from './styles/GlobalStyles';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import { NoteState } from './store/notesReducder';
import { addNote } from './store/actions';

const App = () => {
  const notes = useSelector<NoteState, NoteState['notes']>(
    state => state.notes
  );
  const dispatch = useDispatch();

  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };

  return (
    <>
      <GlobalStyles />
      <Container>
        <h1>Placeholder...</h1>
        <NewNoteInput addNote={onAddNote} />
        <ul>
          {notes.map(note => (
            <li key={note}>{note} </li>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default App;
