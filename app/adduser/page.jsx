import React from 'react'

const adduserpage = () => {
    return (
        <>
            <div className="container mx-auto mt-8">
                <form className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
                    <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-2">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter your username"
                    />
                    </div>
                    <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter your password"
                    />
                    </div>
                    <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                        Login
                    </button>
                    </div>
                </form>
            </div>
        </>   
    )
}

export default adduserpage