"use client"
import { useEffect, useState } from "react"

export default function AdminMenu() {
    const [menu, setMenu] = useState<any[]>([])

    useEffect(() => {
        fetch("http://localhost:5000/api/menu")
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Menu Items</h2>

            <table className="w-full border">
                <thead>
                    <tr>
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {menu.map(item => (
                        <tr key={item.id}>
                            <td className="border p-2">{item.name}</td>
                            <td className="border p-2">{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
