import { put, takeEvery, all } from "redux-saga/effects";
import generateRandomColors from "./RandomColors";
function* fetchUser(action) {
  const color = generateRandomColors();
  yield put({
    type: "CHANGE_NUMBER",
    number: action.payload.number,
    colorNumber: color
  });
}

function* fetchText() {
  const color = generateRandomColors();
  yield put({
    type: "CHANGE_TEXT",
    text: "testing text fixed",
    colorText: color
  });
}

function* mySaga() {
  yield all([
    yield takeEvery("CHANGE_TEXT_ASYNC", fetchText),
    yield takeEvery("CHANGE_NUMBER_ASYNC", fetchUser)
  ]);
}

export default mySaga;
