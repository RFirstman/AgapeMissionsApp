import axios from "axios";

export const jobSiteService = {
    createJobSite,
    getJobSites
}

export default jobSiteService;

async function createJobSite({ name, address, city, state, phone }) {
    let response = await axios.post("/api/jobSites", { name, address, city, state, phone });
    if (response.status === 200) {
        return Promise.resolve("Group created successfully");
    }
    return Promise.reject("Unable to create group")
}

async function getJobSites() {
    let response = await axios.get("/api/jobSites");
    if (response.status === 200) {
        return response.data;
    }
}