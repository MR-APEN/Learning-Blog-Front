import React from "react"
import { usePublications } from "../hooks/usePublications"

export const PublicationsList = () => {
    const { publications, loading, error } = usePublications()

    if (loading) return <div className="text-center py-8 text-blue-500 font-semibold">Cargando...</div>
    if (error) return <div className="text-center py-8 text-red-500 font-semibold">{error}</div>

    return (
        <div className="flex flex-wrap gap-6 justify-center mt-20">
            {publications.map(pub => (
                <div
                    key={pub._id}
                    className="bg-gray-300 shadow-md rounded-lg p-6 w-80 border border-gray-200 hover:shadow-xl transition-shadow"
                >
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{pub.title}</h3>
                    <p className="text-gray-700 mb-4">{pub.description}</p>
                    <p className="text-sm text-gray-800">
                        <span className="font-semibold">Curso:</span> {pub.course?.name || "Sin curso"}
                    </p>
                </div>
            ))}
        </div>
    )
}