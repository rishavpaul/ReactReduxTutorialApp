import React, {Component} from 'react';

// the link between react and redux.
import { connect } from "react-redux";
import { selectBook } from "../actions/index"
import { bindActionCreators } from "redux";

class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    onClick={() => {this.props.selectBook(book)}}
                    key={book.title}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

// entering a console.log(state) here, will enable you to see the
// state of the entire application after any interaction
function mapStateToProps(state) {
    return(
        {
            books: state.books
        }
    )
}

// make action creator available from the container, so that BookList can call it
function mapDispatchToProps(dispatch) {
    // makes select book available to the container BookList
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

// 5. Reducers setup in step 1 and 2 are now connected to this container BookDetail
// Also, connects the relevant action creators setup in mapDispatchToProps to the container
// Now, whenever, this.props.selectBook(book) is called, the relevant action will be invoked.
// After the relevant action is invoked, all reducers will be invoked again.
// The action has to return a 'type' field, which may be used by the reducer to change its state
export default connect(mapStateToProps, mapDispatchToProps)(BookList);