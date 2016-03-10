export function selectBook(book)
{
  // selectBook - ActionCreator
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
