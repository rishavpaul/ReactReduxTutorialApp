import { combineReducers } from 'redux';
import BookReducer from './reducer_books'
import ActiveBook from './reducer_active_book'

// 1. we are registering all reducers which are part of the application
// Whatever values are obtained in steps 2(a) and 2(b) are stored here initially
const rootReducer = combineReducers({
    books: BookReducer,
    activeBook: ActiveBook
});

export default rootReducer;
