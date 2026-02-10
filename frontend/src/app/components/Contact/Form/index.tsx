'use client'
import React from 'react'
import { useState, useEffect } from 'react'

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
  const [submitted, setSubmitted] = useState(false)
  const [showThanks, setShowThanks] = useState(false)
  const [loader, setLoader] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    const isValid = Object.values(formData).every(
      (value) => value.trim() !== ''
    )
    setIsFormValid(isValid)
  }, [formData])
  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  const reset = () => {
    formData.fullname = ''
    formData.email = ''
    formData.phnumber = ''
    formData.outlet = ''
    formData.time = ''
    formData.people = ''
    formData.Message = ''
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoader(true)

    fetch('https://formsubmit.co/ajax/bhainirav772@gmail.com', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        FullName: formData.fullname,
        Email: formData.email,
        PhoneNo: formData.phnumber,
        Outlet: formData.outlet,
        Time: formData.time,
        People: formData.people,
        Message: formData.Message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSubmitted(true)
          setShowThanks(true)
          reset()

          setTimeout(() => {
            setShowThanks(false)
          }, 5000)
        }

        reset()
      })
      .catch((error) => {
        setLoader(false)
        console.log(error.message)
      })
  }
}

export default ContactForm
