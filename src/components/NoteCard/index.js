import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { deleteNote, saveNote } from '../../redux/reducers/notes';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { TextareaAutosize } from '@mui/material';

const NoteCard = ({ noteId }) => {
  const dispatch = useDispatch();
  const noteDetails = useSelector(state => state.notes.noteList.find(note => note.id === noteId));
  const [noteText, setNoteText] = useState(noteDetails.text || '');

  const handleTextAreaChange = e => {
    setNoteText(e.target.value);
  };
  const handleSave = () => {
    const note = {
      id: noteDetails.id,
      text: noteText,
      priority: noteDetails.priority,
    };
    dispatch(saveNote(note));
  };

  const handleDelete = () => {
    dispatch(deleteNote(noteDetails.id));
  };
  return (
    <>
      <Card>
        <CardContent>
          <TextareaAutosize
            maxRows={2}
            placeholder="Start typing your notes"
            defaultValue={noteText}
            onChange={handleTextAreaChange}
            style={{ width: 200 }}
          />
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleSave}>
            Save
          </Button>
          <Button size="small" onClick={handleDelete}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default NoteCard;
