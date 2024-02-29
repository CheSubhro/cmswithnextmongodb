import Link from "next/link";
import Removebtn from './Removebtn'
import { FaEdit } from 'react-icons/fa'

const getCms= async() => {
    const apiUrl= process.env.API_URL;
    try {
        const res= await fetch (`${apiUrl}/api/cms`,{
                    cache: "no-store",
        });

        if(!res.ok){
        throw new Error("Failed to fetch topics");
        }
        return res.json();
    } catch (error) {
        console.log("Error loading topics: ", error);
    }
};

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

export default async function CmsList(){

    const {cms} = await getCms();
    return(
        <>
            <div class="container mx-auto">
                <table class="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th class="py-2 px-4 border-b">ID</th>
                            <th class="py-2 px-4 border-b">Title</th>
                            <th class="py-2 px-4 border-b">Content</th>
                            <th class="py-2 px-4 border-b">Author</th>
                            <th class="py-2 px-4 border-b">Category</th>
                            <th class="py-2 px-4 border-b">Published Date</th>
                            <th class="py-2 px-4 border-b">Last Modified Date</th>
                            <th class="py-2 px-4 border-b">Status</th>
                            <th class="py-2 px-4 border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {cms.map((c) => (
                        <tr key={c._id}>
                            <td class="py-2 px-4 border-b">{c._id}</td>
                            <td class="py-2 px-4 border-b">{c.title}</td>
                            <td class="py-2 px-4 border-b">{c.content}</td>
                            <td class="py-2 px-4 border-b">{c.author}</td>
                            <td class="py-2 px-4 border-b">{c.category}</td>
                            <td class="py-2 px-4 border-b">{formatDate(c.pub_date)}</td>
                            <td class="py-2 px-4 border-b">{formatDate(c.mod_date)}</td>
                            <td class="py-2 px-4 border-b">{c.status}</td>
                            <td class="py-2 px-4 border-b">
                                <Link href={`/editCms/${c._id}`} className="bg-red-500 text-white py-1 px-2 rounded">
                                    <FaEdit/>
                                </Link>
                                <Removebtn id= {c._id}/>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}