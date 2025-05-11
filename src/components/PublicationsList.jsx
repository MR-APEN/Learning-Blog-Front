import React from "react"
import { usePublications } from "../hooks/usePublications"

export const PublicationsList = () => {
    const { publications, loading, error, fetchRecent, fetchAll } = usePublications()

    if (loading) return <div className="text-center py-8 text-blue-500 font-semibold">Cargando...</div>
    if (error) return <div className="text-center py-8 text-red-500 font-semibold">{error}</div>

    return (
        <div className="flex flex-col items-center mt-10">
            <div className="mb-8 flex gap-4">
                <button
                    onClick={fetchAll}
                    className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-purple-900 transition"
                >
                    Todas las publicaciones
                </button>
                <button
                    onClick={fetchRecent}
                    className="bg-gray-700 px-4 py-2 text-white rounded hover:bg-purple-900 transition"
                >
                    Publicaciones recientes
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
                    </div>
                ))}
            </div>
        </div>
    )
}