//======1===========useState======useEffect=====================

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// // const Child=()=><div>Child prop</div>;

// const Child: React.FC<{ style: React.CSSProperties }> =({style})=><div style={style}>Child prop</div>;

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App onClick={()=> alert('123')} test={<div>Hello world</div>}>
//       <Child style={{color: "red"}}/>
//     </App>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// //=======2======useReducer================================



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


//=======3===useContext==============================

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createContext } from 'vm';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

type ProductContextType = {
  selectedProductId: number;
};

export const ProductContext = createContext<ProductContextType | null>(null);

root.render(
  <React.StrictMode>
    <ProductContext.Provider value={{ selectedProductId: 1}}>
      <App />
    </ProductContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

