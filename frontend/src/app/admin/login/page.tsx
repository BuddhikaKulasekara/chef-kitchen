"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function AdminLogin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
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
        <div className="min-h-screen flex items-center justify-center bg-stone-50 px-4">
            <form
                onSubmit={handleLogin}
                className="w-full max-w-sm space-y-3 rounded-xl border border-line bg-white p-8"
            >
                <Link href="/" className="font-serif text-xl text-brand block text-center">
                    Chef Kitchen Admin
                </Link>
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-lg border border-line px-3 py-2 text-sm"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full rounded-lg border border-line px-3 py-2 text-sm"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className="btn w-full">Login</button>
            </form>
        </div>
    )
}
