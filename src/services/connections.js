import axios  from "axios";




const URLGet="http://localhost:8080/api/getAllPost";
const URLREG="http://localhost:8080/api/user-register";

const URLCeratepost="http://localhost:8080/api/create-post";

const URLLog="http://localhost:8080/api/user-login";





 class Services{
    //display
getEmployees(){
    return axios.get(URLGet);
}
//register
createEmployee(employee){
    return axios.post(URLREG,employee);
}
createPost(c){
    return axios.post(URLCeratepost,c);
}

//for update
getEmployeesByID(employeeId){
return axios.get(URL+ '/' +employeeId);//$$
}

UpdateEmployee(employee,employeeId){
    return axios.put(URL+ '/' +employeeId,employee);//$$$
}

deleteEmployee(employeeId){
    return axios.delete(URL + '/' +employeeId);
}


Login(lo){
   // return axios.post(URLLog,lo);
    return axios.post(URLLog,lo)
    .then(Response => {
        const token = Response.data.token;

        localStorage.setItem("token", token);

        setAuthToken(token);

        window.location.href = '/'
    })
  .catch(err => console.log(err));
};
}

export const setAuthToken =  token => {
    if(token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    else
        delete axios.defaults.headers.common["Authorization"];

}
export default new Services()