const initialState = []

export default function representatives(state = initialState, action) {
    switch (action.type) {
      case "FETCH_REPRESENTATIVES":
        return {
            ...state,
            representatives: action.payload,
          };
      default:
        return state
    }
  }