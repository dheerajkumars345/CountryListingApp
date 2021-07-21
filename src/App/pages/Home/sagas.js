/* eslint-disable import/no-anonymous-default-export */
import { call, put, takeLatest } from 'redux-saga/effects'

import {
   GET_DATA_REQUESTED,
    GET_DATA_START,
    GET_DATA_SUCCESS,
    GET_DATA_FAIL
} from './dux'

export function* fetchData() {
  try {
    yield put({ type: GET_DATA_START })
    const response = yield call(fetch, 'http://localhost:3001/body')
    const data = yield response.json()
    yield put({ type: GET_DATA_SUCCESS, payload: data })
  } catch (error) {
    yield put({ type: GET_DATA_FAIL, payload: error })
  }
}

export default [takeLatest(GET_DATA_REQUESTED, fetchData)]