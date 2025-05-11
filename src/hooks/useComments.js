import { useEffect, useState } from "react"
import { getCommentsByPublication, addComment } from "../services/Api"
import { toast } from "react-hot-toast"

export const useComments = (postId) => {
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchComments = async () => {
        setLoading(true)
        const res = await getCommentsByPublication(postId)
        if (!res.error) setComments(res.data.comments || [])
        setLoading(false)
    }

    const submitComment = async ({ name, content }) => {
        if (!name.trim() || !content.trim()) {
            toast.error("Completa todos los campos")
            return false
        }
        const res = await addComment({ postId, name, content })
        if (!res.error) {
            toast.success("Comentario agregado")
            fetchComments()
            return true
        } else {
            toast.error("Error al agregar comentario")
            return false
        }
    }

    useEffect(() => {
        fetchComments()
        // eslint-disable-next-line
    }, [postId])

    return { comments, loading, fetchComments, submitComment }
}