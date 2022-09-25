import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserNotes } from "../../redux/reducers/note";
import NoteCard from "../NoteCard";

const NotePanel = () => {
  const dispatch = useDispatch();
  const noteList = useSelector((state) => state.notes.noteList);

  useEffect(() => {
    dispatch(getUserNotes());
  }, []);

  return (
    <Container>
      List of Notes Below
      {noteList.map((note) => (
        <NoteCard noteId={note.id} />
      ))}
    </Container>
  );
};

export default NotePanel;
