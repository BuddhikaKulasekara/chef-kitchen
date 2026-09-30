"use client"

import { useRouter } from "next/navigation"

export default function Dashboard() {
    const router = useRouter()

    return (
        <div className="min-h-screen bg-stone-50 px-4 py-16">
            <div className="container max-w-lg">
                <h1 className="font-serif text-3xl">Dashboard</h1>
                <p className="text-sm text-muted mt-1">Chef Kitchen admin</p>

                <button
                    type="button"
                    onClick={() => router.push("/admin/menu")}
                    className="mt-8 w-full rounded-xl border border-line bg-white p-6 text-left hover:border-brand"
                >
                    <span className="font-semibold">Menu items</span>
                    <span className="block text-sm text-muted mt-1">Add, edit, remove dishes</span>
                </button>

                <button
                    type="button"
                    onClick={() => {
                        localStorage.removeItem("adminToken")
                        router.push("/admin/login")
                    }}
                    className="mt-6 text-sm font-semibold text-brand"
                >
                    Log out
                </button>
            </div>
        </div>
    )
}
