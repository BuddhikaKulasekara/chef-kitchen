"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AdminLogin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    const handleLogin = async (e: any) => {
        e.preventDefault()

        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            })

            const data = await res.json()

            if (!res.ok) {
                alert(data.message)
                return
            }

            localStorage.setItem("adminToken", data.token)
            router.push("/admin/dashboard")
        } catch {
            alert("Backend not reachable")
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form onSubmit={handleLogin} className="p-8 bg-white rounded shadow w-96">
                <h2 className="text-2xl font-bold mb-4">Admin Login</h2>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border p-2 mb-3"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border p-2 mb-4"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="w-full bg-black text-white py-2 rounded">
                    Login
                </button>
            </form>
        </div>
    )
}
