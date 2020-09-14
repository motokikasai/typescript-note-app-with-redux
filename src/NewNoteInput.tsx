import React from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

interface NewNoteInputProps {
  addNote(note: string): void;
}

const NewNoteInput = () => {
  return (
    <div>
      <TextField id='outlined-basic' label='Outlined' variant='outlined' />
      <Button variant='contained' color='primary'>
        click here!
      </Button>
    </div>
  );
};

export default NewNoteInput;
