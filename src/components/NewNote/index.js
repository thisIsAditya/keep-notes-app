import { Button } from "@mui/material";
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
      <Button size="small" onClick={handleAddNewNote}>
        New Note
      </Button>
    </>
  );
};

export default NewNote;
