import React, { useState } from "react"
import { useComments } from "../hooks/useComments"

export const CommentsSection = ({ postId }) => {
    const { comments, loading, submitComment } = useComments(postId)
    const [showForm, setShowForm] = useState(false)
    const [name, setName] = useState("")
    const [content, setContent] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const ok = await submitComment({ name, content })
        if (ok) {
            setName("")
            setContent("")
            setShowForm(false)
        }
    }

    return (
        <div className="mt-4">
            <button
                className="text-2xl text-emerald-900 hover:text-emerald-700 mb-2"
                onClick={() => setShowForm(v => !v)}
                title="Agregar comentario"
            >+</button>
            {showForm && (
                <form onSubmit={handleSubmit} className="mb-4 flex flex-col gap-2 text-gray-800">
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Tu nombre"
                        className="px-2 py-1 border rounded"
                    />
                    <textarea
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        placeholder="Escribe tu comentario..."
                        className="px-2 py-1 border rounded"
                    />
                    <button
                        type="submit"
                        className="self-end px-3 py-1 bg-emerald-900 text-white rounded hover:bg-emerald-700"
                    >Comentar</button>
                </form>
            )}
            <div>
                {loading ? (
                    <div className="text-gray-500">Cargando comentarios...</div>
                ) : (
                    comments.length === 0 ? (
                        <div className="text-gray-400 text-sm">Sin comentarios</div>
                    ) : (
                        <ul className="space-y-2">
                            {comments.map(c => (
                                <li key={c._id} className="border-b pb-1">
                                    <span className="font-semibold text-gray-600">{c.name}:</span>
                                    <br />
                                    <span className="font-semibold text-gray-600">{c.content}</span>
                                    <div className="text-xs text-gray-600">{new Date(c.date).toLocaleString()}</div>
                                </li>
                            ))}
                        </ul>
                    )
                )}
            </div>
        </div>
    )
}
