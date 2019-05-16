//import actions here

const initialState = {
  friends: []
};

export const friendsReducer = (state = initialState, action) => {
  switch(action.type){
    case //action:
      return {
        ...state,
        //property 
        //property
      }
      default:
        return state;
  }
};

export default friendsReducer