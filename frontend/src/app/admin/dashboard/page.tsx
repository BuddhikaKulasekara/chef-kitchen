export default function Dashboard() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded shadow">Menu Items</div>
                <div className="p-6 bg-white rounded shadow">Reservations</div>
                <div className="p-6 bg-white rounded shadow">Messages</div>
            </div>
        </div>
    )
}
