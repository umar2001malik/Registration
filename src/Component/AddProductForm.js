import React, { useState } from 'react';
import axios from 'axios';

const AddProductForm = () => {
    const [submitting, setSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        fathersName: '',
        aridNo: '',//msd
        department: '',// dnsdjk
        degreeProgram: '',
        semester: '',
        section: '',
        contactNumber: '',
        email: '',
        poll1: '',
        poll2: ''
    });

    const semesters = ['Semester 1', 'Semester 2', 'Semester 3']; // Populate this with actual semesters
    const sections = ['Section A', 'Section B', 'Section C'];
    const coursesPoll1 = ['Course 1', 'Course 2', 'Course 3']; 
    const coursesPoll2 = ['Course 4', 'Course 5', 'Course 6'];

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name) errors.name = 'Name is required';
        if (!formData.fathersName) errors.fathersName = 'Father\'s Name is required';
        if (!formData.aridNo) errors.aridNo = 'ARID No is required';
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        try {
            setSubmitting(true);
            const response = await axios.post('http://localhost:8080/api/products/addProduct', formData);
            console.log(response.data);
            alert('Form submitted successfully!');
            setFormData({
                name: '',
                fathersName: '',
                aridNo: '',
                department: '',
                membershipId: '',
                degreeProgram: '',
                semester: '',
                section: '',
                contactNumber: '',
                email: '',
                poll1: '',
                poll2: ''
            });
        } catch (error) {
            console.error('There was an error submitting the form!', error);
            alert('There was an error submitting the form. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };


    return (
        <div className='lg:p-20 bg-slate-200  '>

    

        {/* <div className='min-h-screen flex items-center justify-center'> */}

            <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-slate-50 rounded shadow-md space-y-4 ">
                <div className='m-10'>
                    <h1 className='text-center font-bold md:text-4xl text-2xl    text-blue-600'>
                        Registration Form
                    </h1>
                </div>

                <div>
                <label className="block text-sm md:text-base lg:text-lg  text-gray-700 font-bold">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter Name"
                        className={`mt-1 block w-full px-3 py-2 border-b-2 focus:outline-none focus:ring-0 focus:border-indigo-500 sm:text-sm font-bold md:placeholder:text-xl  placeholder:text-slate-400 ${errors.name ? 'border-red-500' : 'border-slate-400'}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                    <label className="block text-sm  text-gray-700 font-bold">Father's Name:</label>
                    <input
                        type="text"
                        name="fathersName"
                        value={formData.fathersName}
                        onChange={handleChange}
                        placeholder="Enter Father's Name"
                        className={`mt-1 block w-full px-3 py-2 border-b-2 focus:outline-none focus:ring-0 focus:border-indigo-500 sm:text-sm font-bold md:placeholder:text-xl placeholder:text-slate-400 ${errors.fathersName ? 'border-red-500' : 'border-slate-400'}`}
                    />
                    {errors.fathersName && <p className="text-red-500 text-xs mt-1">{errors.fathersName}</p>}
                </div>

                <div>
                    <label className="block text-sm md:text-base lg:text-lg  text-gray-700 font-bold">ARID No:</label>
                    <input
                        type="text"
                        name="aridNo"
                        value={formData.aridNo}
                        onChange={handleChange}
                        placeholder="Enter ARID No"
                        className={`mt-1 block w-full px-3 py-2 border-b-2 focus:outline-none focus:ring-0 focus:border-indigo-500 sm:text-sm font-bold md:placeholder:text-xl placeholder:text-slate-400 ${errors.aridNo ? 'border-red-500' : 'border-slate-400'}`}
                    />
                    {errors.aridNo && <p className="text-red-500 text-xs mt-1">{errors.aridNo}</p>}
                </div>

                <div>
                    <label className="block text-sm md:text-base lg:text-lg  text-gray-700 font-bold">Membership ID:</label>
                    <input
                        type="text"
                        name="membershipId"
                        value={formData.membershipId}
                        onChange={handleChange}
                        placeholder="Enter Membership ID"
                        className={`mt-1 block w-full px-3 py-2 border-b-2 focus:outline-none focus:ring-0 focus:border-indigo-500 sm:text-sm font-bold md:placeholder:text-xl placeholder:text-slate-400 ${errors.membershipId ? 'border-red-500' : 'border-slate-400'}`}
                    />
                    {errors.membershipId && <p className="text-red-500 text-xs mt-1">{errors.membershipId}</p>}
                </div>

                <div>
                    <label className="block text-sm md:text-base lg:text-lg  text-gray-700 font-bold">Department:</label>
                    <input
                        type="text"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        placeholder="Enter Department"
                        className={`mt-1 block w-full px-3 py-2 border-b-2 focus:outline-none focus:ring-0 focus:border-indigo-500 sm:text-sm font-bold md:placeholder:text-xl placeholder:text-slate-400 ${errors.department ? 'border-red-500' : 'border-slate-400'}`}
                    />
                    {errors.department && <p className="text-red-500 text-xs mt-1">{errors.department}</p>}
                </div>

                <div>
                    <label className="block text-sm md:text-base lg:text-lg  text-gray-700 font-bold">Degree Program:</label>
                    <input
                        type="text"
                        name="degreeProgram"
                        value={formData.degreeProgram}
                        onChange={handleChange}
                        placeholder="Enter Degree Program"
                        className={`mt-1 block w-full px-3 py-2 border-b-2 focus:outline-none focus:ring-0 focus:border-indigo-500 sm:text-sm font-bold md:placeholder:text-xl placeholder:text-slate-400 ${errors.degreeProgram ? 'border-red-500' : 'border-slate-400'}`}
                    />
                    {errors.degreeProgram && <p className="text-red-500 text-xs mt-1">{errors.degreeProgram}</p>}
                </div>

                <div className="flex flex-col items-start w-full">
    <label className="block text-sm md:text-base lg:text-lg  text-gray-700 font-bold mb-1">Semester</label>
    <div className="relative md:w-64 mb-4">
        <select
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            required
            className="block w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-0 focus:border-indigo-500 sm:text-sm font-bold text-gray-400 bg-white"
        >
            <option value="" disabled className="text-gray-400">Select Semester</option>
            {semesters.map((semester, index) => (
                <option key={index} value={semester}>{semester}</option>
            ))}
        </select>
    </div>
    <div className="w-full border-b-2 border-gray-300 mb-4"></div>
</div>

<div className="flex flex-col items-start w-full">
    <label className="block text-sm md:text-base lg:text-lg  text-gray-700 font-bold mb-1">Section</label>
    <div className="relative md:w-64 mb-4">
        <select
            name="section"
            value={formData.section}
            onChange={handleChange}
            required
            className="block w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-0 focus:border-indigo-500 sm:text-sm font-bold text-gray-400 bg-white"
        >
            <option value="" disabled className="text-gray-400">Select Section</option>
            {sections.map((section, index) => (
                <option key={index} value={section}>{section}</option>
            ))}
        </select>
    </div>
    <div className="w-full border-b-2 border-gray-300"></div>
</div>


                <div>
                    <label className="block text-sm md:text-base lg:text-lg  text-gray-700 font-bold">Contact Number (WhatsApp):</label>
                    <input
                        type="text"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        placeholder="Enter Contact Number"
                        className={`mt-1 block w-full px-3 py-2 border-b-2 focus:outline-none focus:ring-0 focus:border-indigo-500 sm:text-sm font-bold md:placeholder:text-xl placeholder:text-slate-400 ${errors.contactNumber ? 'border-red-500' : 'border-slate-400'}`}
                    />
                    {errors.contactNumber && <p className="text-red-500 text-xs mt-1">{errors.contactNumber}</p>}
                </div>

                <div>
                    <label className="block text-sm md:text-base lg:text-lg  text-gray-700 font-bold">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter Email"
                        className={`mt-1 block w-full px-3 py-2 border-b-2 focus:outline-none focus:ring-0 focus:border-indigo-500 sm:text-sm font-bold md:placeholder:text-xl placeholder:text-slate-400 ${errors.email ? 'border-red-500' : 'border-slate-400'}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div className="flex flex-col items-start w-full">
    <label className="block text-sm  md:text-base lg:text-lg  text-gray-700 font-bold   mb-1">Poll 1</label>
    <div className="relative md:w-64 mb-4">
        <select
            name="poll1"
            value={formData.poll1}
            onChange={handleChange}
            required
            className="block w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-0 focus:border-indigo-500 sm:text-sm font-bold  text-gray-400 bg-white"
        >
            <option value="" disabled className="text-black">Choose Course</option>
            {coursesPoll1.map((course, index) => (
                <option key={index} value={course} className="text-black">{course}</option>
            ))}
        </select>
    </div>
    <div className="w-full border-b-2 border-gray-300"></div>
</div>

<div className="flex flex-col items-start w-full">
    <label className="block text-sm  md:text-base lg:text-lg  text-gray-700 font-bold   mb-1">Poll 2</label>
    <div className="relative md:w-64 mb-4">
        <select
            name="poll2"
            value={formData.poll2}
            onChange={handleChange}
            required
            className="block w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-0 focus:border-indigo-500 sm:text-sm font-bold  text-gray-400 bg-white"
        >
            <option value="" disabled className="text-black">Choose Course</option>
            {coursesPoll2.map((course, index) => (
                <option key={index} value={course} className="text-black">{course}</option>
            ))}
        </select>
    </div>
    <div className="w-full border-b-2 border-gray-300"></div>
</div>

                {submitMessage && (
                    <p className="text-green-500 text-sm mt-2">{submitMessage}</p>
                )}

<div className="flex justify-center">
    <button
        type="submit"
        disabled={submitting}
        className="w-1/2 bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
        {submitting ? 'Submitting...' : 'Submit'}
    </button>
</div>

            </form>
        {/* </div> */}
        </div>

    );
};

export default AddProductForm;