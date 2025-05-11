import axios from "axios"

const apiBlog = axios.create({
    baseURL: "http://localhost:3030/blog/v1",
    timeout: 5000,
    httpsAgent: false
})

export const getPublications = async () => {
    try {
        return await apiBlog.get("/publication/all")
    } catch (e) {
        return {
            error: true,
            e: e
        }
    }
}

export const recentPublications = async () => {
    try {
        return await apiBlog.get("/publication/recent")
    } catch (e) {
        return {
            error: true,
            e: e
        }
    }
}