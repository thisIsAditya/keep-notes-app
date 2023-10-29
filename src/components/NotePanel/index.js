import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserNotes } from '../../redux/reducers/notes';
import NewNote from 'components/NewNote';
import NoteCard from 'components/NoteCard';
import styled from 'styled-components';
import { Container, Stack } from '@mui/material';

const NoteContainer = styled(Container)(() => ({
  overflow: 'auto',
}));

const NotePanel = () => {
  const dispatch = useDispatch();
  const noteList = useSelector(state => state.notes.noteList);

  useEffect(() => {
    dispatch(getUserNotes());
  }, [dispatch]);

  return (
    <NoteContainer>
      <Stack direction="row" gap={2} flexWrap="wrap">
        {noteList.map(note => (
          <NoteCard key={note.id} noteId={note.id} />
        ))}
      </Stack>
      <NewNote />
    </NoteContainer>
  );
};

export default NotePanel;
