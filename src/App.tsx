import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { store } from './store';
import Header from './components/Header/Header';
import TaskList from './components/TaskList/TaskList';
import TaskDetailsPage from './components/TaskDetailsPage/TaskDetailsPage';
import { theme } from './theme';


function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CssBaseline />
          <Router>
            <div className="min-h-screen bg-black w-full">
              <Header />
              <section className="container mx-auto pt-20">
                <Routes>
                  <Route path="/" element={<TaskList />} />
                  <Route path="/:id" element={<TaskDetailsPage />} />
                </Routes>
              </section>
            </div>
          </Router>
        </LocalizationProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
