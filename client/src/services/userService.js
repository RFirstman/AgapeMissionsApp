import axios from "axios";

export const userService = {
    createUser,
    getUsers
}

export default userService;

async function createUser(firstName, lastName) {
    let response = await axios.post("/api/users", { firstName, lastName });
    if (response.status === 200) {
        return Promise.resolve("User added successfully");
    }
    return Promise.reject("Could not add user");
}

async function getUsers() {
    let response = await axios.get("/api/users");
    if (response.status === 200) {
        return response.data;
    }
}