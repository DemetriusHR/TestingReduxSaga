const initialState = {
  number: Math.random() * 100,
  text: "",
  colorText: "",
  colorNumber: "#ffffff"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_NUMBER":
      return {
        ...state,
        number: action.number,
        colorNumber: action.colorNumber
      };
    case "CHANGE_TEXT":
      return { ...state, text: action.text, colorText: action.colorText };
    default:
      return state;
  }
};

export default reducer;
