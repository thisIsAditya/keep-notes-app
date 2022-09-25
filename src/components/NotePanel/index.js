import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserNotes } from "../../redux/reducers/note";

const NotePanel = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserNotes());
  }, []);

  return <>Note Panel</>;
};

export default NotePanel;
