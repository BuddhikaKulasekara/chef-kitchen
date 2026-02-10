"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

type MenuItem = {
    id: number
    name: string
    description: string
    price: number
}

export default function AdminMenuPage() {
    const router = useRouter()

    const [menu, setMenu] = useState<MenuItem[]>([])
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [editingId, setEditingId] = useState<number | null>(null)
    const [loading, setLoading] = useState(true)

    // READ
    const fetchMenu = async () => {
        const res = await fetch("http://localhost:5000/api/menu")
        const data = await res.json()
        setMenu(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchMenu()
    }, [])

    // CREATE + UPDATE
    const submitMenuItem = async (e: React.FormEvent) => {
        e.preventDefault()

        const url = editingId
            ? `http://localhost:5000/api/menu/${editingId}`
            : "http://localhost:5000/api/menu"

        const method = editingId ? "PUT" : "POST"

        await fetch(url, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name,
                description,
                price: Number(price)
            })
        })

        resetForm()
        fetchMenu()
    }

    // DELETE
    const deleteMenuItem = async (id: number) => {
        if (!confirm("Delete this menu item?")) return

        await fetch(`http://localhost:5000/api/menu/${id}`, {
            method: "DELETE"
        })
        fetchMenu()
    }

    // EDIT MODE
    const startEdit = (item: MenuItem) => {
        setEditingId(item.id)
        setName(item.name)
        setDescription(item.description)
        setPrice(String(item.price))
    }

    const resetForm = () => {
        setEditingId(null)
        setName("")
        setDescription("")
        setPrice("")
    }

    return (
        <div className="px-8 pb-8 pt-20">
            {/* HEADER WITH BACK BUTTON */}
            <div className="flex items-center mb-6">
                <button
                    onClick={() => router.push("/admin/dashboard")}
                    className="mr-4 text-blue-600 hover:underline"
                >
                    ← Back
                </button>

                <h1 className="text-3xl font-bold flex-1 text-center">
                    Menu Management
                </h1>
            </div>

            {/* CREATE / UPDATE FORM */}
            <form
                onSubmit={submitMenuItem}
                className="bg-white p-6 rounded shadow mb-8"
            >
                <h2 className="text-xl font-semibold mb-4">
                    {editingId ? "Edit Menu Item" : "Add Menu Item"}
                </h2>

                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full border p-2 mb-3"
                    required
                />

                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    className="w-full border p-2 mb-3"
                    required
                />

                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    className="w-full border p-2 mb-4"
                    required
                />

                <div className="flex gap-3">
                    <button className="bg-green-600 text-white px-4 py-2 rounded">
                        {editingId ? "Update" : "Add"}
                    </button>

                    {editingId && (
                        <button
                            type="button"
                            onClick={resetForm}
                            className="bg-gray-400 text-white px-4 py-2 rounded"
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </form>

            {/* READ TABLE */}
            {loading ? (
                <p>Loading...</p>
            ) : (
                <table className="w-full bg-white rounded shadow">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-3 border">Name</th>
                            <th className="p-3 border">Description</th>
                            <th className="p-3 border">Price</th>
                            <th className="p-3 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menu.map(item => (
                            <tr key={item.id}>
                                <td className="p-3 border">{item.name}</td>
                                <td className="p-3 border">{item.description}</td>
                                <td className="p-3 border">${item.price}</td>
                                <td className="p-3 border flex gap-2">
                                    <button
                                        onClick={() => startEdit(item)}
                                        className="bg-blue-500 text-white px-3 py-1 rounded"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => deleteMenuItem(item.id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}
