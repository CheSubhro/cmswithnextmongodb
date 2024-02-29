"use client";

import {FaTrash } from 'react-icons/fa'
import { useRouter } from "next/navigation";

export default function Removebtn({ id }){

    const router = useRouter();
    const removeCms = async () => {
        const confirmed = confirm("Are you sure?");

        if (confirmed) {
        const res = await fetch(`/api/cms?id=${id}`, {
            method: "DELETE",
        });

        if (res.ok) {
            router.refresh();
        }
        }
    };
    return(
        <button onClick={removeCms} className="bg-red-500 text-white py-1 px-2 rounded">
            <FaTrash/>
        </button>
    )
}