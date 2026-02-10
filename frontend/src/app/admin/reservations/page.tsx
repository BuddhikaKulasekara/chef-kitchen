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

export default function ReservationsPage() {
    const [data, setData] = useState<Reservation[]>([])

    const fetchReservations = async () => {
        const res = await fetch('http://localhost:5000/api/reservations')
        const json = await res.json()
        setData(json)
    }

    useEffect(() => {
        fetchReservations()
    }, [])

    const approveReservation = async (id: number) => {
        await fetch(
            `http://localhost:5000/api/reservations/${id}/approve`,
            { method: 'PUT' }
        )
        fetchReservations()
    }

    const deleteReservation = async (id: number) => {
        await fetch(
            `http://localhost:5000/api/reservations/${id}`,
            { method: 'DELETE' }
        )
        fetchReservations()
    }

    return (
        <div className='p-8'>
            <h1 className='text-2xl font-semibold mb-6'>Reservations</h1>

            <table className='w-full border'>
                <thead className='bg-gray-100'>
                    <tr>
                        <th className='p-2'>Name</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Guests</th>
                        <th>Status</th>
                        <th>Actions</th>
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
                                    className={`px-3 py-1 rounded-full text-sm ${r.status === 'approved'
                                            ? 'bg-green-200'
                                            : 'bg-yellow-200'
                                        }`}
                                >
                                    {r.status}
                                </span>
                            </td>
                            <td className='space-x-2'>
                                {r.status === 'pending' && (
                                    <button
                                        onClick={() => approveReservation(r.id)}
                                        className='px-3 py-1 bg-green-500 text-white rounded'
                                    >
                                        Approve
                                    </button>
                                )}
                                <button
                                    onClick={() => deleteReservation(r.id)}
                                    className='px-3 py-1 bg-red-500 text-white rounded'
                                >
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
