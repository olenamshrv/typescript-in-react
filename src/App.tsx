//===1========useState==useEffect====================

// import React from 'react';
// import './App.css';
// import { JsxElement } from 'typescript';

// import { useState, useEffect } from 'react';

// // const test: JSX.Element=<div>Test</div>;

// // const test =<div>Test</div>;

// type AppProps={
//   test?: JSX.Element;
//   // children: React.ReactNode;
//   children: React.ReactElement;
//   onClick: React.MouseEventHandler;
// }

// const App: React.FC<AppProps> = ({test, children, onClick}) => {
//   const [count,setCount] = useState<number>(0);

//   // const handleClick: React.MouseEventHandler<HTMLParagraphElement> =()=> {
//   //   onClick();
//   //   setCount((value)=> value+1);
//   // }


//   const handleClick = (event: React.MouseEvent<Element, MouseEvent>) => {
//     setCount((value)=> value+1);
//   }

//   const handleAuxClick: React.MouseEventHandler<HTMLElement> = (event) => {}

//   useEffect(()=>{
//     alert(count);
//   }, [count]);
    
//   return (
//     <div className="App">
//       <header onAuxClick={handleAuxClick} className="App-header">
//         {/* <p onClick={handleClick}>Count: {count}</p> */}
//         <p onClick={handleClick}>Count: {count}</p>
//         <p>{test}</p>
//         {children}
//       </header>
//     </div>
//   );
// }

// export default App;

// //=========2=======useReducer=================================

// import React, { useReducer } from 'react';
// import './App.css';

// type InitialState = {
//   count: 0;
// };

// type State = {
//   count: number;
// };

// type Action = {
//   type: ACTION_TYPE;
// };

// enum ACTION_TYPE {
//   INCREMENT = "INCREMENT",
//   DECREMENT = "DECREMENT",
// }

// const stateReducer: React.Reducer<State, Action>=(
//   state: State,
//   action: Action
// ): State => {
//   switch (action.type) {
//     case ACTION_TYPE.INCREMENT:
//       return {...state, count: state.count + 1};
//     case ACTION_TYPE.DECREMENT:
//       return {...state, count: state.count -1};
//     default: return state;
//   }
// };

// const App: React.FC<{}> = () => {
//   // const initState: InitialState={ count: 0 };
  
//   // const initializer = (state: InitialState): State => ({
//   //   ...state,
//   //   count: 1,
//   // });

//   const [state, dispatch] = useReducer<
//       React.Reducer<State, Action>, 
//       InitialState
//     >(stateReducer, 
//       // initState, 
//       { count: 0},
//       (state: InitialState): State => ({
//         ...state,
//         count: 1,
//       }));
  
//   const handleClick = ()=> {
//     dispatch({type: ACTION_TYPE.INCREMENT})
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <p onClick={handleClick}>Count: {state.count}</p>
//       </header>
//     </div>
//   );
// }

// export default App;



// //=========3====useContext====================================

// import React, { useContext, useReducer } from 'react';
// import './App.css';
// import { ProductContext } from '.';

// type InitialState = {
//   count: 0;
// };

// type State = {
//   count: number;
// };

// type Action = {
//   type: ACTION_TYPE;
// };

// enum ACTION_TYPE {
//   INCREMENT = "INCREMENT",
//   DECREMENT = "DECREMENT",
// }

// const stateReducer: React.Reducer<State, Action>=(
//   state: State,
//   action: Action
// ): State => {
//   switch (action.type) {
//     case ACTION_TYPE.INCREMENT:
//       return {...state, count: state.count + 1};
//     case ACTION_TYPE.DECREMENT:
//       return {...state, count: state.count -1};
//     default: return state;
//   }
// };

// const App: React.FC<{}> = () => {
//   const [state, dispatch] = useReducer<
//       React.Reducer<State, Action>, 
//       InitialState
//     >(stateReducer, 
//       { count: 0},
//       (state: InitialState): State => ({
//         ...state,
//         count: 1,
//       }));
  
//   const handleClick = () => {
//     dispatch({type: ACTION_TYPE.INCREMENT})
//   }

//   const context = useContext(ProductContext);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <p onClick={handleClick}>Count: {state.count}</p>
//         <p>Selected product id: {context?.selectedProductId}</p>
//       </header>
//     </div>
//   );
// }

// export default App;


// //=========4====useRef====================================

// import React, { useContext, useReducer, useRef } from 'react';
// import './App.css';
// import { ProductContext } from '.';

// type InitialState = {
//   count: 0;
// };

// type State = {
//   count: number;
// };

// type Action = {
//   type: ACTION_TYPE;
// };

// enum ACTION_TYPE {
//   INCREMENT = "INCREMENT",
//   DECREMENT = "DECREMENT",
// }

// const stateReducer: React.Reducer<State, Action>=(
//   state: State,
//   action: Action
// ): State => {
//   switch (action.type) {
//     case ACTION_TYPE.INCREMENT:
//       return {...state, count: state.count + 1};
//     case ACTION_TYPE.DECREMENT:
//       return {...state, count: state.count -1};
//     default: return state;
//   }
// };

// const App: React.FC<{}> = () => {
//   const [state, dispatch] = useReducer<
//       React.Reducer<State, Action>, 
//       InitialState
//     >(stateReducer, 
//       { count: 0},
//       (state: InitialState): State => ({
//         ...state,
//         count: 1,
//       }));
  
//   const handleClick = () => {
//     dispatch({type: ACTION_TYPE.INCREMENT})
//   }

//   const context = useContext(ProductContext);

//   const ref = useRef<HTMLElement | null>(null);

//   return (
//     <div className="App">
//       <header ref={ref} className="App-header">
//         <p onClick={handleClick}>Count: {state.count}</p>
//         <p>Selected product id: {context?.selectedProductId}</p>
//       </header>
//     </div>
//   );
// }

// export default App;

//=========4====useCallback====================================

import React, { useContext, useReducer, useRef } from 'react';
import './App.css';
import { ProductContext } from '.';

type InitialState = {
  count: 0;
};

type State = {
  count: number;
};

type Action = {
  type: ACTION_TYPE;
};

enum ACTION_TYPE {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

const stateReducer: React.Reducer<State, Action>=(
  state: State,
  action: Action
): State => {
  switch (action.type) {
    case ACTION_TYPE.INCREMENT:
      return {...state, count: state.count + 1};
    case ACTION_TYPE.DECREMENT:
      return {...state, count: state.count -1};
    default: return state;
  }
};

const App: React.FC<{}> = () => {
  const [state, dispatch] = useReducer<
      React.Reducer<State, Action>, 
      InitialState
    >(stateReducer, 
      { count: 0},
      (state: InitialState): State => ({
        ...state,
        count: 1,
      }));
  
  const handleClick = () => {
    dispatch({type: ACTION_TYPE.INCREMENT})
  }

  const context = useContext(ProductContext);

  const ref = useRef<HTMLElement | null>(null);

  return (
    <div className="App">
      <header ref={ref} className="App-header">
        <p onClick={handleClick}>Count: {state.count}</p>
        <p>Selected product id: {context?.selectedProductId}</p>
      </header>
    </div>
  );
}

export default App;



