"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function editCmsfrom({title,content,author,category,pub_date,mod_date,status,action}){

    const [newTitle, setNewTitle] = useState(title);
    const [newContent, setNewContent] = useState(content);
    const [newAuthor, setNewAuthor] = useState(author);
    const [newCategory, setNewCategory] = useState(category);
    const [newPub_date, setNewPub_date] = useState(pub_date);
    const [newMod_date, setNewMod_date] = useState(mod_date);
    const [newStatus, setNewStatus] = useState(status);
    const [newAction, setNewAction] = useState(action);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const res = await fetch(`/api/cms/${id}`, {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({ newTitle, newContent,newAuthor,
                newCategory,newPub_date,newMod_date,newStatus,newAction }),
          });
    
          if (!res.ok) {
            throw new Error("Failed to update topic");
          }
    
          router.refresh();
          router.push("/");
        } catch (error) {
          console.log(error);
        }
      };

    return(
       <>
            <div className="container mx-auto mt-4">
                <form  onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded-md">
                    <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-600">
                        Title
                    </label>
                    <input
                        onChange={(e) => setNewTitle(e.target.value)}
                        value={newTitle}
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
                        id="content"
                        name="content"
                        value={newContent}
                        onChange={(e) => setNewContent(e.target.value)}
                        rows="4"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        ></textarea>
                    </div>
                    
                    <div className="mb-4">
                        <label htmlFor="author" className="block text-sm font-medium text-gray-600">
                        Author
                        </label>
                        <input
                        type="text"
                        id="author"
                        name="author"
                        value={newAuthor}
                        onChange={(e) => setNewAuthor(e.target.value)}
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
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
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
                            value={newPub_date}
                            onChange={(e) => setNewPub_date(e.target.value)}
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
                        value={newMod_date}
                        onChange={(e) => setNewMod_date(e.target.value)}
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
                        value={newStatus}
                        onChange={(e) => setNewStatus(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        >
                        <option value="published">Published</option>
                        <option value="draft">Draft</option>
                        <option value="archived">Archived</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="action" className="block text-sm font-medium text-gray-600">
                        Action
                        </label>
                        <select
                        id="action"
                        name="action"
                        value={newAction}
                        onChange={(e) => setNewAction(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        >
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