import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotePanel from "./components/NotePanel";
import NotFound from "./components/NotFound";
import Layout from "./layout";
import "bootstrap/dist/css/bootstrap.min.css";

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={Layout(NotePanel)} />
          <Route path="*" element={Layout(NotFound)} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
