"use client";
import {useState} from "react";

export default function Page() {
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Name', name);
        console.log('Email', email)
        setName('');
        setEmail('');
    };

    return(
        <div>
            <h2>
                Create New User
            </h2>
            <form onSubmit={handleSubmit} className="nt-2">
                <div>
                    <label htmlfor="name">Name: </label>
                    <input 
                    type="text" 
                    value={name} 
                    onChange={(event) => setName(event.target.value)} 
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlfor="email">Email: </label>
                    <input 
                    type="email" 
                    value={email} 
                    onChange={(event) => setEmail(event.target.value)} 
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div class="col-12">
                    <button class="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}