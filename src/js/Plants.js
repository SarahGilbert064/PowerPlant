//create a plant
export const storeState = () => {
  let currentState = { soil: 0, light: 0, water: 0 };
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

export const stateControl = storeState();

// This is a function factory. We can easily create more specific functions that alter a plant's 
//soil, water, and light to varying degrees.
export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

