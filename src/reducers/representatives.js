// const initialState = {
//     state: "",
//     city: "",
//     zipcode: "",
//     officials: ""
// }  
     const initialState = []   
export default function representatives(state = initialState, action) {
    switch (action.type) {
      case "ALL":
        return action.representatives
      default:
        return state
    }
  }