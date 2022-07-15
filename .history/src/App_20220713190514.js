import './App.css';
import {Route, Routes} from 'react-router-dom';
import MainContainer from './components/MainContainer';
import CreateContainer from './components/CreateContainer';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components';
import { useStateValue } from './context/StateProvider';
import { getALlDrinkItems } from './utils/firebaseFunctions';

function App() {
  const [{}, dispatch] = useStateValue();
  const fetchData = async() => {
    await getALlDrinkItems().then ((data) => {
      console.log(data);
    })
  };

  useEffe

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header/>
        <main className='mt-14 md:mt-24 px-4 md:px-16 py-4 w-full'>
          <Routes>
            <Route path='/*' element={<MainContainer/>}></Route>
            <Route path='/createItem' element={<CreateContainer/>}></Route>
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
