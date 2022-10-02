import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserNotes } from "../../redux/reducers/notes";
import NewNote from "components/NewNote";
import NoteCard from "components/NoteCard";

const NotePanel = () => {
  const dispatch = useDispatch();
  const noteList = useSelector((state) => state.notes.noteList);

  useEffect(() => {
    dispatch(getUserNotes());
  }, [dispatch]);

  return (
    <>
      {noteList.map((note) => (
        <NoteCard key={note.id} noteId={note.id} />
      ))}
      <NewNote />
    </>
  );
};

export default NotePanel;
