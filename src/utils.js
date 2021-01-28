/**
 * Creates a standardized reducer with "type" and "payload" keys
 * @param initialState
 * @param reducerMap
 * @returns {function(*=, *)}
 */
export function createReducer(initialState, reducerMap) {
    return (state = initialState, action) => {
        const reducer = reducerMap[action.type];

        return reducer
            ? reducer(state, action)
            : state;
    };
}