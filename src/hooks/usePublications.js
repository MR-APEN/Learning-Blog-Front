import { useEffect, useState } from "react"
import { getPublications } from "../services/Api"
import { toast } from "react-hot-toast"

export const usePublications = () => {
    const [publications, setPublications] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const res = await getPublications()
            if (res.error) {
                setError("Error al cargar publicaciones")
                toast.error("Error al cargar publicaciones")
            } else {
                setPublications(res.data.publications)
                toast.success("Publicaciones cargadas correctamente")
            }
            setLoading(false)
        }
        fetchData()
    }, [])

    return { publications, loading, error }
}