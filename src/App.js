import './App.css';
import Index from './Components/index';
import Login from './Components/login';
import Signin2 from './Components/signin2';
import Memorygame from './Components/memorygame';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/gaming-website" element={<Index />} />
        <Route path="login" element={<Login />} />
        <Route path="signin2" element={<Signin2 />} />
        <Route path="memorygame" element={<Memorygame />} />
      </Routes>
    </div>
  );
}

export default App;




// import './App.css';
// import Index from './Components/index';
// import Basket from './Components/Basket ';
// import ReadMore from './Components/ReadMore ';
// import { Route, Routes } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<Index />} />
//         <Route path="basket" element={<Basket />} />
//         <Route path="/readmore/:id" element={<ReadMore />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;






{/* <Route path="basket" element={<Basket />} /> */ }
{/* <Route path="/readmore/:id" element={<ReadMore />} /> */ }