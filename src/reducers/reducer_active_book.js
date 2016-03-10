// state здесь не глобальный, а только тот , за который редусер в ответе
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
