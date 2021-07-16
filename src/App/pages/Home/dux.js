/* ------ ACTION TYPES GOES HERE ------ */

export const GET_COUNTRIES_REQUESTED = 'HOME/GET_COUNTRIES_REQUESTED'
export const GET_COUNTRIES_START = 'HOME/GET_COUNTRIES_START'
export const GET_COUNTRIES_SUCCESS = 'HOME/GET_COUNTRIES_SUCCESS'
export const GET_COUNTRIES_FAIL = 'HOME/GET_COUNTRIES_FAIL'

/* ------ ACTION CREATORS GOES HERE ------ */

export const getCountries = () => ({
  type: GET_COUNTRIES_REQUESTED
})

/* ------ INITIAL STATE GOES HERE ------ */

const initialState = {
  data: [],
  loading: false
}

/* ------ DEFAULT REDUCER GOES HERE ------ */

const reducer =  (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES_START: {
      return {
        ...state,
        loading: true
      }
    }
    case GET_COUNTRIES_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: payload
      }
    }
    case GET_COUNTRIES_FAIL: {
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