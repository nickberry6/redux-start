export function selectBook(book) {
  // function is actioncreator so must return an action -
  // object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}