import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Cards from '../components/cards';

function App() {
  const [count, setCount] = useState(0);
  
  const myObj = {
    fullName: "Subham Kumar",
    age: 21,
  };

  return (
    <>
      <h1 className='bg-green-400 text-gray-300 rounded-xl'>Tailwind Test</h1>
      <Cards channels="chai aur react" specialObject={myObj} />
      <Cards />
    </>
  );
}

export default App;
