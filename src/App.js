import logo from './logo.svg';
import MainLoading from './components/loading';
import { GeistProvider, CssBaseline } from '@geist-ui/core'
import Main from './components/main';

function App() {
  return (
    <GeistProvider>
      <CssBaseline /> 
      <Main /> 
  </GeistProvider>
  );
}

export default App;
