'use client'
import React, { useState, useEffect } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phnumber: '',
    outlet: '',
    time: '',
    people: '',
    Message: '',
  })

  const [showThanks, setShowThanks] = useState(false)
  const [loader, setLoader] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)

  // Check if form is valid
  useEffect(() => {
    const isValid = Object.values(formData).every((value) => value.trim() !== '')
    setIsFormValid(isValid)
  }, [formData])

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  // Reset form
  const reset = () => {
    setFormData({
      fullname: '',
      email: '',
      phnumber: '',
      outlet: '',
      time: '',
      people: '',
      Message: '',
    })
  }

  // Submit form to backend API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoader(true)

    try {
      // Map frontend data to backend DB schema
      const payload = {
        name: formData.fullname,
        email: formData.email,
        phone: formData.phnumber,
        outlet: formData.outlet,
        time: formData.time,
        guests: Number(formData.people),
        message: formData.Message,
      }

      const res = await fetch('http://localhost:5000/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error('Failed to submit reservation')

      setShowThanks(true)
      reset()
      setTimeout(() => setShowThanks(false), 4000)
    } catch (err) {
      console.error(err)
    } finally {
      setLoader(false)
    }
  }

}

export default ContactForm
