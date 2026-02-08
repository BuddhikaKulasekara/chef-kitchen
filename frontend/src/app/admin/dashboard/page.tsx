"use client"
import { useRouter } from "next/navigation"

export default function Dashboard() {
    const router = useRouter()

    const Card = ({
        title,
        path,
    }: {
        title: string
        path: string
    }) => (
        <div
            onClick={() => router.push(path)}
            className="p-6 bg-white rounded shadow cursor-pointer
                 hover:shadow-lg hover:scale-[1.02]
                 transition duration-300"
        >
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm text-gray-500 mt-2">
                Manage {title.toLowerCase()}
            </p>
        </div>
    )

    return (
        <div className="p-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Dashboard</h1>


            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card title="Menu Items" path="/admin/menu" />
                <Card title="Reservations" path="/admin/reservations" />
                <Card title="Messages" path="/admin/messages" />
            </div>
            <div>
                <hr></hr>
                <hr></hr>
                <button
                    onClick={() => {
                        localStorage.removeItem("adminToken")
                        router.push("/admin/login")
                    }}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    Logout
                </button>
            </div>
        </div>
    )
}
