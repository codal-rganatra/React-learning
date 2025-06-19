const initialState = { count: 0 };

function counterReducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'incrementbyAmount':
            return { count: state.count + action.payload };
        case 'decrementbyAmount':
            return { count: state.count - action.payload };
        case 'reset':
            return { count: 0 };
        default:
            return state;
    }
}

export { initialState, counterReducer };