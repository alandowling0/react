export function myReducer(state, action) {
    if(state === undefined) {
        return {
            thing: 0
        }
    }

    switch(action) {
        default:
            return state;
    }
}
