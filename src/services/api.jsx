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

export const oldPublications = async () => {
    try {
        return await apiBlog.get("/publication/old")
    } catch (e) {
        return {
            error: true,
            e: e
        }
    }
}

export const getPublicationsByCourse = async (name) => {
    try {
        return await apiBlog.get(`/publication/course/${encodeURIComponent(name)}`)
    } catch (e) {
        return {
            error: true,
            e: e
        }
    }
}

export const addComment = async (commentData) => {
    try {
        return await apiBlog.post("/comment/add", commentData)
    } catch (e) {
        return {
            error: true,
            e: e
        }
    }
}

export const getCommentsByPublication = async (postId) => {
    try {
        return await apiBlog.get(`/comment/publication/${postId}`)
    } catch (e) {
        return {
            error: true,
            e: e
        }
    }
}