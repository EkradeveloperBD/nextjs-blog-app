'use client'

import React, { useState } from 'react';
import validateForm from '../../lib/utils/validateForm';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        website: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };



    const handleSubmit = (event) => {
        event.preventDefault();

        const newErrors = validateForm(formData);

        if (Object.keys(newErrors).length === 0) {
            // Perform your form submission or API call here
            alert('Form submitted:');
        } else {
            console.log('formData:', formData);
            setErrors(newErrors);
        }
    };

    return (
        <div>
            <div className='min-h-screen bg-gray-100'>
                <div className='container mx-auto p-4 max-w-xl'>
                    <div className='bg-white rounded-lg shadow-md p-6'>
                        <h1 className='text-3xl font-semibold mb-4'>Contact Us</h1>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-4'>
                                <label className='block text-sky-400 text-sm font-bold mb-2'>
                                    Name
                                </label>
                                <input
                                    type='text'
                                    className='border rounded w-full py-2 px-3'
                                    placeholder='Your Name'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            {errors.name && (
                                <p className='text-red-500 text-sm mt-1'>{errors.name}</p>
                            )}
                            <div className='mb-4'>
                                <label className='block text-sky-400 text-sm font-bold mb-2'>
                                    Email
                                </label>
                                <input
                                    type='email'
                                    className='border rounded w-full py-2 px-3'
                                    placeholder='Your Email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            {errors.email && (
                                <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
                            )}
                            <div className='mb-4'>
                                <label className='block text-sky-400 text-sm font-bold mb-2'>
                                    Website
                                </label>
                                <input
                                    type='text'
                                    className='border rounded w-full py-2 px-3'
                                    placeholder='Your Website'
                                    name='website'
                                    value={formData.website}
                                    onChange={handleInputChange}
                                />
                            </div>
                            {errors.website && (
                                <p className='text-red-500 text-sm mt-1'>{errors.website}</p>
                            )}
                            <div className='mb-4'>
                                <label className='block text-sky-400 text-sm font-bold mb-2'>
                                    Message
                                </label>
                                <textarea
                                    className='border rounded w-full py-2 px-3 h-32'
                                    placeholder='Your Message'
                                    name='message'
                                    value={formData.message}
                                    onChange={handleInputChange}
                                />
                            </div>
                            {errors.message && (
                                <p className='text-red-500 text-sm mt-1'>{errors.message}</p>
                            )}
                            <button
                                type='submit'
                                className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

