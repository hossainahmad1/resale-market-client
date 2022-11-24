import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes/Routes';

function App() {
  return (
    <div className='w-[1280px] mx-auto'>
     <RouterProvider router={router}>
     </RouterProvider>
    </div>
  );
}

export default App;
