import { publicRequest } from "../requestMethods";
import { loginError, loginStart, loginSuccess, logoutSuccess, registerStart, registerSuccess, registerError, updateStart, updateError, updateSuccess } from "./userRedux"

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const reply = await publicRequest.post("/user/login", user)
        // console.log(reply)
        if (reply.data) {
            dispatch(loginSuccess(reply.data))
            return reply.data
        }
        else {
            return "error"

        }



    }
    catch (e) {

        dispatch(loginError())
        return e.response.data

    }
}

export const logout = (dispatch) => {
    dispatch(logoutSuccess());
}
export const register = async (dispatch, user) => {
    dispatch(registerStart());
    try {
        const reply = await publicRequest.post("/user/register", user)
        // const res=reply.data
        if (reply.data) {
            dispatch(registerSuccess())
            // console.log(reply.data)
            return reply.data
        }
        else {
            return " error "
         }
    }
    catch (e) {
        // console.log(e.response.data)

        dispatch(registerError())
        return e.response.data
    }
}
export const update = async (dispatch, email) => {
    dispatch(updateStart())
    try {
        const reply = await publicRequest.get(`/user/reset/${email}`)
        if (reply.data) {
            dispatch(updateSuccess())
            // console.log(reply.data)
            return reply.data
        }
        else { }
    }
    catch (e) {
        // console.log(e.response.data)

        dispatch(updateError())
        return e.response.data
    }

}
export const forgot = async (dispatch, token, password) => {
    dispatch(updateStart())
    try {
        const reply = await publicRequest.put(`/user/userupdate/${token}`, { password: password })
        if (reply) {
            // console.log(reply)
            dispatch(updateSuccess())
            // console.log(reply.data)
            return reply.data
        }
        else { }
    }
    catch (e) {
        dispatch(updateError())
        return e.response.data

    }
}
export const fetchProducts = async (dispatch, sex, cat) => {
    dispatch(loginStart());
    try{
        const reply = await publicRequest.get(sex && cat ? `product/find?sex=${sex}&catagory=${cat}` : sex ? `product/find?sex=${sex}` : cat ? `product/find?catagory=${cat}` : 'product/find')
        console.log(reply);
        if (reply) {
            dispatch(updateSuccess())
            return reply;
        }
        else {
            return "error"

        }
    }
    catch(e){
        dispatch(loginError());
        return e.response.data;
    }
}
