'use client'
import { useEffect, useState } from 'react'

type Reservation = {
    id: number
    name: string
    email: string
    phone: string
    date: string
    time: string
    guests: number
    status: string
}

export default function AdminReservations() {
    const [data, setData] = useState<Reservation[]>([])

    const loadReservations = async () => {
        const res = await fetch('http://localhost:5000/api/reservations')
        const json = await res.json()
        setData(json)
    }

    useEffect(() => {
        loadReservations()
    }, [])

    const approve = async (id: number) => {
        await fetch(
            `http://localhost:5000/api/reservations/${id}/approve`,
            { method: 'PUT' }
        )
        loadReservations()
    }

    const remove = async (id: number) => {
        await fetch(
            `http://localhost:5000/api/reservations/${id}`,
            { method: 'DELETE' }
        )
        loadReservations()
    }

    return (
        <div className='p-8'>
            <h2 className='text-2xl font-bold mb-6'>
                Reservations
            </h2>

            <table className='w-full border'>
                <thead className='bg-gray-100'>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date / Time</th>
                        <th>Guests</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map(r => (
                        <tr key={r.id} className='border-t text-center'>
                            <td>{r.name}</td>
                            <td>{r.email}</td>
                            <td>{r.date} {r.time}</td>
                            <td>{r.guests}</td>
                            <td>
                                <span
                                    className={`px-3 py-1 rounded-full text-sm
                  ${r.status === 'approved'
                                            ? 'bg-green-200'
                                            : 'bg-yellow-200'
                                        }`}>
                                    {r.status}
                                </span>
                            </td>
                            <td className='space-x-2'>
                                {r.status === 'pending' && (
                                    <button
                                        onClick={() => approve(r.id)}
                                        className='bg-green-500 text-white px-3 py-1 rounded'>
                                        Approve
                                    </button>
                                )}
                                <button
                                    onClick={() => remove(r.id)}
                                    className='bg-red-500 text-white px-3 py-1 rounded'>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
