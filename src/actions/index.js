// selectBook is an action creator, it needs to return an action,
// which is an object with a type field
export function selectBook(book) {
    return (
        {
            type: 'BOOK_SELECTED', //always upper case, a string
            payload: book
        }
    )
}