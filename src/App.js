import React from 'react';
import './App.css';
// import ImageList from './ImageList';


// function App() {
//   return (
//     <div>
      
//       <ImageList/>
//     </div>
//   );
// }

// export default App;

import ReactDOM from 'react-dom';
import ImageList from './ImageList';
import Loding from './Loding';

function App() {
  return (
    <div>
      {/* <Loding/> */}
       <ImageList /> 
       
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
 export default App;
