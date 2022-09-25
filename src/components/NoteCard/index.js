import { useDispatch, useSelector } from "react-redux";
import { priorityToDataMap } from "../../constants";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { deleteNote, saveNote } from "../../redux/reducers/notes";
const NoteCard = ({ noteId }) => {
  const dispatch = useDispatch();
  const noteDetails = useSelector((state) =>
    state.notes.noteList.find((note) => note.id === noteId)
  );
  const [noteText, setNoteText] = useState(noteDetails.text);
  const variant = priorityToDataMap[noteDetails.priority].variant;

  const handleTextAreaChange = (e) => {
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
    <Card
      bg={variant.toLowerCase()}
      key={variant}
      text={variant.toLowerCase() === "light" ? "dark" : "white"}
      style={{ width: "18rem" }}
      className="mb-2"
    >
      <Card.Header>
        <Button variant="success" onClick={handleSave}>
          Save
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Card.Header>
      <Card.Body>
        <Form.Control
          as="textarea"
          value={noteText}
          onChange={handleTextAreaChange}
        />
      </Card.Body>
    </Card>
  );
};

export default NoteCard;
