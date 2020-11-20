import './App.scss';
import { StoreProvider } from './store.jsx';

import MainComponent from './components/MainComponent';
// import 'antd/dist/antd.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <StoreProvider>
      <MainComponent />
    </StoreProvider>
  );
}

export default App;
