import Link from "next/link";
import Removebtn from './Removebtn'
import {FaAddressBook, FaEdit } from 'react-icons/fa'

export default function User(){
    return(
        <>
            <div class="container mx-auto">

            <div className="flex justify-end mb-4">
                <Link href="/adduser" className="py-1 px-2 rounded">
                    <FaAddressBook />
                </Link>
            </div>
                <table class="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th class="py-2 px-4 border-b">ID</th>
                            <th class="py-2 px-4 border-b">Email</th>
                            <th class="py-2 px-4 border-b">Password</th>
                            <th class="py-2 px-4 border-b"></th>
                            <th class="py-2 px-4 border-b"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="py-2 px-4 border-b">id</td>
                            <td class="py-2 px-4 border-b">email</td>
                            <td class="py-2 px-4 border-b">password</td>
                            <td class="py-2 px-4 border-b">
                                <Link href="/edituser" className="py-1 px-2 rounded">
                                    <FaEdit/>
                                </Link>
                            </td> 
                            <td class="py-2 px-4 border-b">   
                                <Removebtn/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}