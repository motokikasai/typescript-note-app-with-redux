import React, { ChangeEvent, useState } from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

interface NewNoteInputProps {
  addNote(note: string): void;
}

const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = useState('');

  const updateNote = (e: ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const onAddNoteClick = () => {
    addNote(note);
    setNote('');
  };

  return (
    <>
      <TextField
        onChange={updateNote}
        value={note}
        id='outlined-basic'
        label='Outlined'
        variant='outlined'
        className='text-field'
      />
      <Button
        onClick={onAddNoteClick}
        variant='contained'
        color='primary'
        size='large'
      >
        click here!
      </Button>
    </>
  );
};

export default NewNoteInput;
