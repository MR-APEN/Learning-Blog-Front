import React, { useState } from "react"
import { usePublications } from "../hooks/usePublications"
import { CommentsSection } from "./CommentsSection"

export const PublicationsList = () => {
    const { publications, loading, error, fetchRecent, fetchAll, fetchOld, fetchByCourse } = usePublications()
    const [course, setCourse] = useState("")

    const handleSearch = (e) => {
        e.preventDefault()
        if (course.trim() !== "") {
            fetchByCourse(course)
        }
    }

    if (loading) return <div className="text-center py-8 text-blue-500 font-semibold">Cargando...</div>
    if (error) return <div className="text-center py-8 text-red-500 font-semibold">{error}</div>

    return (
        <div className="flex flex-col items-center mt-10">
            <form onSubmit={handleSearch} className="mb-6 flex gap-2">
                <input
                    type="text"
                    value={course}
                    onChange={e => setCourse(e.target.value)}
                    placeholder="Buscar por curso..."
                    className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-emerald-900 text-white rounded hover:bg-gray-500 transition"
                >
                    Buscar
                </button>
            </form>
            <div className="mb-8 flex gap-4">
                <button
                    onClick={fetchAll}
                    className="px-4 py-2 bg-emerald-900 text-white rounded hover:bg-gray-500 transition"
                >
                    Todas las publicaciones
                </button>
                <button
                    onClick={fetchRecent}
                    className="px-4 py-2 bg-emerald-900 text-white rounded hover:bg-gray-500 transition"
                >
                    Publicaciones recientes
                </button>
                <button
                    onClick={fetchOld}
                    className="px-4 py-2 bg-emerald-900 text-white rounded hover:bg-gray-500 transition"
                >
                    Publicaciones antiguas
                </button>
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
                {publications.map(pub => (
                    <div
                        key={pub._id}
                        className="bg-white shadow-md rounded-lg p-6 w-80 border border-gray-200 hover:shadow-xl transition-shadow"
                    >
                        <h3 className="text-xl font-bold mb-2 text-gray-800">{pub.title}</h3>
                        <p className="text-gray-600 mb-4">{pub.description}</p>
                        <p className="text-sm text-gray-500">
                            <span className="font-semibold">Curso:</span> {pub.course?.name || "Sin curso"}
                        </p>
                        {/* Aquí se muestra la sección de comentarios */}
                        <CommentsSection postId={pub._id} />
                    </div>
                ))}
            </div>
        </div>
    )
}