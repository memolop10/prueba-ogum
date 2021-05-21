import axios from 'axios'

// constantes
const InitialData = {
    studies: []
}

// types
const GET_STUDIES_SUCCESS = 'GET_STUDIES_SUCCESS'

// reducer
export default function studiesReducer(state = InitialData, action){
    switch (action.type) {
        case GET_STUDIES_SUCCESS:
            return { ...state, studies: action.payload }
    
        default:
            return state;
    }
    
}

// actions
export const getStudiesAction = () => async(dispatch) => {
    console.log('Hola mundo')
    try {
        const res = await axios.get('https://preprod-mex.decathlon.net/trabaja-back/preprod/public/index.php/api/data-register');
        dispatch({
            type: GET_STUDIES_SUCCESS,
            payload: res.data.data.cat_studies
        })
        
    } catch (error) {
        console.log(error)
    }
}