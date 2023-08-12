import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotePanel from 'components/NotePanel';
import NotFound from 'components/NotFound';
import Layout from 'layout';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';

const App = ({ store }) => {
  const customTheme = theme();
  return (
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <Router>
          <Routes>
            <Route path="/" element={Layout(NotePanel)} />
            <Route path="*" element={Layout(NotFound)} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
