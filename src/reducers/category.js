const initialState = {
  categories: []
}

export default function categories(state = initialState, action) {
  switch (action.type) {
    case "LOAD_CATEGORIES":
    {
      return {
        ...state,
        categories: [...action.payload]
      }
    }

    default:
    return state;
  }
}
