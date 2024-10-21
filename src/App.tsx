import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { store } from './store';
import Header from './components/Header/Header';
import TaskList from './components/TaskList/TaskList';


const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(204 153 255)',
    },
    secondary: {
      main: '#dc004e',
    },

  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '80px',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: '80px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '40px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '80px',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '80px',
        },
        notchedOutline: {
          borderRadius: '80px',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: 'rgb(204 153 255)',
          },
          color: 'rgb(102 0 153)',
          fontSize: '1.2rem',
          textTransform: 'none',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: 'rgb(153 51 204)',
          '&.Mui-checked': {
            color: 'rgb(204 153 255)',
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          color: 'rgb(153 51 204)',
          '& .MuiTypography-root': {
            color: 'rgb(153 51 204)',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CssBaseline />
          <Router>
            <div className="min-h-screen bg-black">
              <Header />
              <div className="container mx-auto p-4">
                <Routes>
                  <Route path="/" element={<TaskList />} />
                </Routes>
              </div>
            </div>
          </Router>
        </LocalizationProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
