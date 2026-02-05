"use client"

import { useEffect, useState } from "react"

type MenuItem = {
    id: number
    name: string
    description: string
    price: number
}

export default function AdminMenuPage() {
    const [menu, setMenu] = useState<MenuItem[]>([])
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [loading, setLoading] = useState(true)

    // 🔹 GET MENU
    const fetchMenu = async () => {
        const res = await fetch("http://localhost:5000/api/menu")
        const data = await res.json()
        setMenu(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchMenu()
    }, [])

    // 🔹 ADD MENU
    const addMenuItem = async (e: React.FormEvent) => {
        e.preventDefault()

        await fetch("http://localhost:5000/api/menu", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name,
                description,
                price
            })
        })

        setName("")
        setDescription("")
        setPrice("")
        fetchMenu()
    }

    // 🔹 DELETE MENU
    const deleteMenuItem = async (id: number) => {
        await fetch(`http://localhost:5000/api/menu/${id}`, {
            method: "DELETE"
        })
        fetchMenu()
    }

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Menu Management</h1>

            {/* ADD FORM */}
            <form onSubmit={addMenuItem} className="bg-white p-6 rounded shadow mb-8">
                <h2 className="text-xl font-semibold mb-4">Add Menu Item</h2>

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
                    className="w-full border p-2 mb-3"
                    required
                />

                <button className="bg-green-600 text-white px-4 py-2 rounded">
                    Add Menu Item
                </button>
            </form>

            {/* MENU TABLE */}
            {loading ? (
                <p>Loading...</p>
            ) : (
                <table className="w-full bg-white rounded shadow">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-3 border">Name</th>
                            <th className="p-3 border">Description</th>
                            <th className="p-3 border">Price</th>
                            <th className="p-3 border">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menu.map(item => (
                            <tr key={item.id}>
                                <td className="p-3 border">{item.name}</td>
                                <td className="p-3 border">{item.description}</td>
                                <td className="p-3 border">${item.price}</td>
                                <td className="p-3 border">
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
