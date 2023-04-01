
import './App.css';

import Navbar from './components/Navbar';
import Content from './components/Content';

function App() {
  return (
   <>
   
   <Navbar/>
   <div className='heading'>
    <h1>Top Headlines</h1>
   </div>
   <Content/>
   
   </>
  );
}

export default App;