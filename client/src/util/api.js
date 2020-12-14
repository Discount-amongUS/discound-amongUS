import axios from "axios";

const PORT = 5000;
const URL = `/api/`;

const registerUser = (userData) => {
    return axios.post(URL + 'user/register' , userData)
}

const loginUser = (userData) => {
    return axios.post(URL + 'user/login' , userData)
}

const registerBusiness = (businessData) => {
    return axios.post(URL + 'business/create' , businessData)
}

const removeBusiness = (businessID, userID) => {
    return axios.delete(URL + `business/delete?businessID=${businessID}&userID=${userID}`);
}

const addEmployee = (employeeData) => {
    return axios.post(URL + 'employee/add', employeeData)
}

const removeEmployee = (businessID, email, userID) => {
    return axios.delete(URL + `employee/remove?businessID=${businessID}&email=${email}&userID=${userID}`)
}

const getBusinesses = (userID) => {
    return axios.get(URL + `business/owner?owner=${userID}`)
}

const findEmployee = (email) => {
    return axios.get(URL + `employee/find?email=${email}`);
}

export {
    registerUser,
    loginUser,
    registerBusiness,
    removeBusiness,
    addEmployee,
    removeEmployee,
    getBusinesses,
    findEmployee
}
