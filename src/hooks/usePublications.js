import { useEffect, useState } from "react"
import { getPublications, recentPublications } from "../services/Api"
import { toast } from "react-hot-toast"

export const usePublications = () => {
    const [publications, setPublications] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchAll = async () => {
        setLoading(true)
        const res = await getPublications()
        if (res.error) {
            setError("Error al cargar publicaciones")
            toast.error("Error al cargar publicaciones")
        } else {
            setPublications(res.data.publications)
            toast.success("Publicaciones cargadas correctamente")
            setError(null)
        }
        setLoading(false)
    }

    const fetchRecent = async () => {
        setLoading(true)
        const res = await recentPublications()
        if (res.error) {
            setError("Error al cargar publicaciones recientes")
            toast.error("Error al cargar publicaciones recientes")
        } else {
            setPublications(res.data.publications)
            toast.success("Publicaciones recientes cargadas")
            setError(null)
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchAll()
    }, [])

    return { publications, loading, error, fetchRecent, fetchAll }
}