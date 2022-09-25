import { useSelector } from "react-redux";
import { priorityToDataMap } from "../../constants";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
const NoteCard = ({ noteId }) => {
  const noteDetails = useSelector((state) =>
    state.notes.noteList.find((note) => note.id === noteId)
  );
  const variant = priorityToDataMap[noteDetails.priority].variant;
  return (
    <Card
      bg={variant.toLowerCase()}
      key={variant}
      text={variant.toLowerCase() === "light" ? "dark" : "white"}
      style={{ width: "18rem" }}
      className="mb-2"
    >
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Form.Control as="textarea" value={noteDetails.text} />
      </Card.Body>
    </Card>
  );
};

export default NoteCard;
