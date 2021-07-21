/* ------ ACTION TYPES GOES HERE ------ */

export const GET_DATA_REQUESTED = 'HOME/GET_DATA_REQUESTED'
export const GET_DATA_START = 'HOME/GET_DATA_START'
export const GET_DATA_SUCCESS = 'HOME/GET_DATA_SUCCESS'
export const GET_DATA_FAIL = 'HOME/GET_DATA_FAIL'

/* ------ ACTION CREATORS GOES HERE ------ */

export const getData = () => ({
  type: GET_DATA_REQUESTED
})

/* ------ INITIAL STATE GOES HERE ------ */

const initialState = {
  data: [],
  loading: false
}

/* ------ DEFAULT REDUCER GOES HERE ------ */

const reducer =  (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DATA_START: {
      return {
        ...state,
        loading: true
      }
    }
    case GET_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: payload
      }
    }
    case GET_DATA_FAIL: {
      return {
        ...state,
        loading: false,
        data: []
      }
    }

    default:
      break
  }
  return state
}

export default reducer