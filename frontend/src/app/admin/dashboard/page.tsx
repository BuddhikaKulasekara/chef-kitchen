"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Dashboard() {
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem("adminToken")
        if (!token) {
            router.replace("/admin/login")
        }
    }, [router])

    const handleLogout = () => {
        localStorage.removeItem("adminToken")
        router.replace("/admin/login")
    }

    return (
        <div className="min-h-screen p-10 bg-gray-100">
            <div className="flex justify-between mb-6">
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                >
                    Logout
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded shadow">
                    <h2 className="font-bold">Menu Items</h2>
                    <p>Manage menu items</p>
                </div>

                <div className="p-6 bg-white rounded shadow">
                    <h2 className="font-bold">Reservations</h2>
                    <p>Manage reservations</p>
                </div>

                <div className="p-6 bg-white rounded shadow">
                    <h2 className="font-bold">Messages</h2>
                    <p>Manage messages</p>
                </div>
            </div>
        </div>
    )
}
