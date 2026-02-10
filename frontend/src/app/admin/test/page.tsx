"use client"
import { useRouter } from "next/navigation"

export default function DashboardContent() {
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
            {/* Cards Only */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card title="Menu Items" path="/admin/menu" />
                <Card title="Reservations" path="/admin/reservations" />
                <Card title="Messages" path="/admin/messages" />
            </div>
        </div>
    )
}
