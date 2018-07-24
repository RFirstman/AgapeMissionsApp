import axios from "axios";

export const adminService = {
    login
}
export default adminService;

async function login(email, password) {
    const response = await axios.post("/api/admin/login", { email, password } );
    
    if (response.status === 200) {
        return Promise.resolve(email);
    }

    if (response.status === 403) {
        // Login failed
        return Promise.reject("Invalid email/password combination");
    }

    return Promise.reject("Login failed");
}