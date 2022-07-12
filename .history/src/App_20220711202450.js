import './App.css';
import {Route, Routes} from 'react-router-dom';

import { Header } from './components';

function App() {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header/>
      <main className='mt-24 p-8 w-full'>
        <Routes>
          <Route path='/*' element={<Main/>}></Route>
          <Route path='/createItem' element={<CreateContainer/>}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
