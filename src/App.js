import './App.css';
import TodoList from "./components/TodoList";
import {Box, ThemeProvider, Typography} from "@mui/material";
import {theme} from "./components/customtheme";

function App() {

  return (
      <ThemeProvider theme={theme}>
        <Box className='App'>
            <Typography variant='h2' color={theme.palette.primary.main} textAlign='center' marginBottom='30px'>React Todo App</Typography>
            <TodoList/>
        </Box>
      </ThemeProvider>
  );
}

export default App;
