import axios from "axios";

export const groupService = {
    createGroup
}

export default groupService

async function createGroup(userIds, jobSiteIds, number) {
    let response = await axios.post("/api/groups", { userIds, jobSiteIds, number });
    if (response.status === 200) {
        return Promise.resolve("Group added successfully");
    }
    return Promise.reject("Could not add user");
}