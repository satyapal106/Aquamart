import axios from 'axios';
import BassURl from '../../Api/Api';
import { toast } from 'react-toastify';
export const loginUser = (user) => dispatch => {
    dispatch({ type: "USER_LOGIN_REQUEST" })

    axios.post(`${BassURl}/api/login`, user).then(res => {
        // console.log(res.data.code)
        if (res.data.code == 200) {
            dispatch({ type: "USER_LOGIN_SUCCESS" })
            console.log(res.data.data)
            window.localStorage.setItem('currentUser', JSON.stringify(res.data.data))
            window.location.href = '/'

        } else {
            toast(res.data.msg)

            dispatch({ type: "USER_LOGIN_FAIL", payload: res?.data?.code == 400 })
            console.log(res.data.code == 400)
        }
    }).catch(res => {
        dispatch({ type: "USER_LOGIN_FAIL", payload: res?.data?.code == 400 })
        toast(res.data.msg)
        console.log(res.data.code == 400)
    })
}
export const logoutUser = () => dispatch => {
    alert('delte')

    window.localStorage.removeItem('currentUser')
    window.localStorage.removeItem('cartServiceItem')
    dispatch({ type: "USER_LOGOUT" })

    window.location.href = '/'
}
export const googleLoginUser = (user) => dispatch => {
    dispatch({ type: "GOOGLE_LOGIN_REQUEST" })

    axios.post(`${BassURl}api/login`, user).then(res => {
        dispatch({ type: "GOOGLE_LOGIN_SUCCESS" })
        window.localStorage.setItem('currentUser', JSON.stringify(res.data))
        window.location.href = '/'
    }).catch(err => {
        dispatch({ type: "GOOGLE_LOGIN_FAIL", payload: err })
        console.log(err)
    })

}

export const addNewAdress = (newAddress) => dispatch => {
    dispatch({ type: "ADD_NEW_ADDRESS_REQUEST" })

    axios.post(`${BassURl}api/new-address`, newAddress).then((res) => {
        dispatch({ type: "ADD_NEW_ADDRESS_SUCCESS" })
        window.location.reload();
        console.log(res.data)

    }).catch((err) => {
        dispatch({ type: "ADD_NEW_ADDRESS_FAILED" });
        console.log(err)
    })
}