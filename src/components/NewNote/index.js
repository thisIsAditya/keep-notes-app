import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { addNote } from "../../redux/reducers/notes";
import "./index.css";
const NewNote = () => {
  const dispatch = useDispatch();
  const handleAddNewNote = () => {
    dispatch(addNote());
  };
  return (
    <>
      <Button id="new-note-btn" variant="primary" onClick={handleAddNewNote}>
        New Note
      </Button>
    </>
  );
};

export default NewNote;
