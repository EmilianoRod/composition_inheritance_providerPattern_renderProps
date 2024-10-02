import { ThemeProvider } from "./context/ThemeContext"
import Navbar from "./components/NavBar"
import Panel from "./components/Panel/Panel"

/*
Ejercicio Integrador

- Context API / Provider
- Composicion
- Custom hooks
*/

function App() {
  return (
    <ThemeProvider value={[]} >
      <Navbar />
      <Panel />
    </ThemeProvider>
  );
}

export default App;
