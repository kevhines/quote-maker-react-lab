export default (state = [], action) => {
  let i 
    
  switch (action.type) {

  case 'ADD_QUOTE':
    return state.concat(action.quote);

  case 'REMOVE_QUOTE':
    return state.filter(quote => quote.id !== action.quoteId)

  case 'UPVOTE_QUOTE':
    i = state.findIndex(quote => quote.id === action.quoteId)
    return [...state.slice(0, i), {...state[i], votes: (state[i].votes += 1)}, ...state.slice(i + 1)];

  case 'DOWNVOTE_QUOTE':
    i = state.findIndex(quote => quote.id === action.quoteId)
    if (state[i].votes > 0) {
      return [...state.slice(0, i), {...state[i], votes: (state[i].votes -= 1)}, ...state.slice(i + 1)];
    } else {
      return state
    }
  default: 
    return state;
  }
}
