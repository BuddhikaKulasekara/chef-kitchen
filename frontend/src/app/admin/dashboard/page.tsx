"use client"

export default function Dashboard() {
    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>

                <button
                    onClick={() => {
                        localStorage.removeItem("adminToken")
                        window.location.href = "/admin/login"
                    }}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    Logout
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded shadow">Menu Items</div>
                <div className="p-6 bg-white rounded shadow">Reservations</div>
                <div className="p-6 bg-white rounded shadow">Messages</div>
            </div>
        </div>
    )
}
