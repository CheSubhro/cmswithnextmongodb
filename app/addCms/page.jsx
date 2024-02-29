"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function addCms(){

    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const [author,setAuthor] = useState('');
    const [category,setCategory] = useState('');
    const [pub_date,setPub_date] = useState('');
    const [mod_date,setMod_date] = useState('');
    const [status,setStatus] = useState('');
    const [action,setAction] = useState('');

    const router = useRouter();

    const handleSubmit =async (e)=>{
        e.preventDefault();

        try {
            const res = await fetch("/api/cms", {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({ title,content,author,category,pub_date,mod_date,status,action }),
            });
      
            if (res.ok) {
              router.push("/");
            } else {
              throw new Error("Failed to create a topic");
            }
          } catch (error) {
            console.log(error);
          }
    }

    return(
        <>
            <div className="container mx-auto mt-4">
                <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded-md">
                    <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-600">
                        Title
                    </label>
                    <input
                        onChange={(e)=>setTitle(e.target.value)}
                        value={title}
                        type="text"
                        id="title"
                        name="title"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                    </div>

                    <div className="mb-4">
                    <label htmlFor="content" className="block text-sm font-medium text-gray-600">
                        Content
                    </label>
                    <textarea
                        onChange={(e)=>setContent(e.target.value)}
                        value={content}
                        id="content"
                        name="content"
                        rows="4"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    ></textarea>
                    </div>
                    
                    <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-600">
                    Author
                    </label>
                    <input
                        onChange={(e)=>setAuthor(e.target.value)}
                        value={author}
                        type="text"
                        id="author"
                        name="author"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                    </div>

                    <div className="mb-4">
                    <label htmlFor="category" className="block text-sm font-medium text-gray-600">
                    Category
                    </label>
                    <select
                    id="category"
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    >
                    <option value="">Select</option>
                    <option value="general">General</option>
                    <option value="technology">Technology</option>
                    <option value="fashion">Fashion</option>
                    </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="publishedDate" className="block text-sm font-medium text-gray-600">
                        Published Date
                        </label>
                        <input
                        type="date"
                        id="publishedDate"
                        name="publishedDate"
                        value={pub_date}
                        onChange={(e) => setPub_date(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>

                    <div className="mb-4">
                    <label htmlFor="modifiedDate" className="block text-sm font-medium text-gray-600">
                    Modified Date
                    </label>
                    <input
                    type="date"
                    id="modifiedDate"
                    name="modifiedDate"
                    value={mod_date}
                    onChange={(e) => setMod_date(e.target.value)}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                    </div>

                    <div className="mb-4">
                    <label htmlFor="status" className="block text-sm font-medium text-gray-600">
                    Status
                    </label>
                    <select
                    id="status"
                    name="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    >
                    <option value="">Select</option>
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                    <option value="archived">Archived</option>
                    </select>
                    </div>

                    <div className="mb-4">
                    <label htmlFor="status" className="block text-sm font-medium text-gray-600">
                    Action
                    </label>
                    <select
                    id="action"
                    name="action"
                    value={action}
                    onChange={(e) => setAction(e.target.value)}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    >
                    <option value="">Select</option>
                    <option value="active">Active</option>
                    <option value="deactive">Deactive</option>
                    </select>
                    </div>

                    <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                    >
                        Submit
                    </button>
                    </div>
                </form>
            </div>
        </>
    )
}