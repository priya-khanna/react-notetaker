const counter = (state=0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const createStore = (reducer) => {
  let state;
  let listeners = [];
  const getState = () => state;
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener())
  };
  const subscibe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };
  dispatch({});
  return { getState, dispatch, subscribe }
};

--------------------------------------------------
const { createStore } = Redux;
const store = createStore(counter);
// createStore takes reducer fucntion as argument which in this case is counter
//  various redux store methods
// store.getState() - it gets current state of redux store
// store.dispatch({type: 'INCREMENT'});

// store.subscribe(() => {
//   document.body.innerText = store.getState()
// }); coz we are rendering subscibe callback but it doesnt render the very first time, so subscribe render method to the store
const render = (){
  document.body.innerText = store.getState()
};
store.subscribe(render);
render();
document.addEventListener('click', () => {
  store.dispatch({type: 'INCREMENT'});
})
// to subscribe to the changes and rerender the current app state
// it helps to register the callback that the redux store will call anytime action is dispatched so that u can update ui of app to reflect current app state