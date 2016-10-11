import React, {Component} from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component {


    render() {
        if(!this.props.activeBook) {
            return (
                <div>
                    Select a Book on the left!
                </div>
            )
        }

        var activeBook = this.props.activeBook;

        return(

            <div>
                <h3>
                    Details
                </h3>
                <div>
                    Title : {activeBook.title}
                </div>

                <div>
                    Author : {activeBook.author}
                </div>

                <div>
                    Pages : {activeBook.pages}
                </div>
            </div>
        )
    }
}

// 4. Filters the states required for this particular container
// Makes the state available to the container under this.props.activeBook
function mapStateToProps(state) {
    return (
        {
            activeBook: state.activeBook
        }
    )
}

// 3. Reducers setup in step 1 and 2 are now connected to this container BookDetail
// In essence, redux will now pass the state of the entire application to mapStateToProps
// its the responsibility of mapStateToProps to filter out which states it needs
export default connect(mapStateToProps)(BookDetail);