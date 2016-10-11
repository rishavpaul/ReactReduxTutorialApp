// state is not the application state, it the state
// that this reducer is responsible for
// action flows through all reducers of the app

// 2 (b). After registering the reducer in Step 1, this method is called
export default function (state = null, action) {
    // state will be null initially
    // action.type is present when the state is being changed by an action creator
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;
}