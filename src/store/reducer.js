const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    const types = {
        INCREMENT: () => {return {counter: state.counter + 1}},
        DECREMENT: () => {return {counter: state.counter - 1}},
        ADD: () => {return {counter: state.counter + action.value}},
        SUBTRACT: () => {return {counter: state.counter - action.value}},
    }
    if(types[action.type]) {
        return types[action.type]();
    }
    return state;
}

export default reducer;