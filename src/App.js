import { Route, Routes } from 'react-router-dom';
import './App.css';
import DAO from './components/DAO/DAO';
import Header from './components/Header/Header';
import TokenLifeCycle from './components/TokenLifeCycle/TokenLifeCycle';
import Tokenomics from './components/Tokenomics/Tokenomics';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/ido' element={<TokenLifeCycle />}/>
        <Route path='/tocenomics' element={<Tokenomics />}/>
        <Route path='/dao' element={<DAO />}/>
      </Routes>
    </div>
  );
}

export default App;
