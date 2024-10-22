import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(189, 127, 252)',
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
          borderRadius: '20px',
          color: 'rgb(102, 0, 153)',
          backgroundColor: 'rgb(237, 233, 254)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '20px',
            color: 'rgb(102, 0, 153)',
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: 'rgb(204, 153, 255)',
          },
          color: 'rgb(102, 0, 153)',
          fontSize: '1.2rem',
          textTransform: 'none',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: 'rgb(153 51 204)',
          '& .MuiSvgIcon-root': {
            fontSize: '34px',

          },
          '&.Mui-checked': {
            color: 'rgb(204, 153, 255)',
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          color: 'rgb(153, 51, 204)',
        },
      },
    },
  },
});