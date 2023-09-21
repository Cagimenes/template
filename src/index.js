import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './Dashboard';
import CadastroUsuario from "./pages/CadastroUsuario";
import ErroPage from './pages/ErroPage';
import App from './pages/App';
import CadastroProduto from './pages/CadastroProduto';
import "./App.css";
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#764bbd',
      dark: '#47277f',
      light: '#b18df9',
    },
    secondary: {
      main: '#1e88e5',
      light: '#66b6f5',
      dark: '#05508c',
    },
    text: {
      primary: '#000000',
      secondary: 'rgba(0,0,0,0.6)',
      disabled: 'rgba(92,90,90,0.38)',
      hint: '#5a0469',
    },
    error: {
      main: '#ff0000',
      light: '#e24242',
    },
    warning: {
      main: '#f94d1a',
      light: '#ff7043',
      dark: '#dc3509',
    },
    success: {
      main: '#32b33e',
      contrastText: 'rgba(251,245,245,0.87)',
    },
    background: {
      default: '#e4def9',
      paper: '#d6c1f1',
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErroPage />
  },
  {
    path: "/cadastro",
    element: <CadastroUsuario />,
    errorElement: <ErroPage />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children:[
      {
        path: "produtos",
        element: <App />
      },
      {
        path: "cadastro/produto",
        element: <CadastroProduto />
      },
      {
        path: "editar/produto/:id",
        element: <CadastroProduto />
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <RouterProvider router={router} />
  </ThemeProvider>
);
