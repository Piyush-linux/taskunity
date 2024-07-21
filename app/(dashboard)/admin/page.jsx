"use client"
import Navbar from '@/components/admin/Navbar';
import { useUser } from "@clerk/nextjs";
import { useState } from 'react';
import { useOrganization, useOrganizationList } from "@clerk/nextjs";

// export const metadata = {
//     title: 'Create Next App',
//     description: 'Generated by create next app',
//   }

export default function Admin() {


    // const {  isLoaded: orgLoaded } = useOrganization();
    

    const { isLoaded, user } = useUser();
    let [modal, setModal] = useState('hidden');
    if (!isLoaded) return;
    // console.log(user);

    // if(!orgLoaded) return;
    let OrgName = user.organizationMemberships[0].organization.name
    let OrgId = user.organizationMemberships[0].organization.id
    // const data = useOrganizationList({organizationId:OrgId}).then((e)=>e.json());
    console.log(data);  

    let openModal = (status) => {
        (status) ? setModal("block") : setModal("hidden")

    }




    return (
        <div>
            {/* Navbar */}
            <Navbar username={user.publicMetadata.username} openModal={openModal} />
            {/* Tasks */}

            <div className=''>
                <div className="w-fir">
                    <div className="mx-auto mt-8 max-w-screen-lg px-2">
                        <div className="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
                            <p className="flex-1 text-base font-bold text-gray-900">
                                T A S K S {user.id}

                            </p>
                            <div className="mt-4 sm:mt-0">
                                <div className="flex items-center justify-start sm:justify-end">
                                    <div className="flex items-center">
                                        <label
                                            htmlFor=""
                                            className="mr-2 flex-shrink-0 text-sm font-medium text-gray-900"
                                        >
                                            {" "}
                                            Sort by:{" "}
                                        </label>
                                        <select
                                            name=""
                                            className="sm: mr-4 block w-full whitespace-pre rounded-lg border p-1 pr-10 text-base outline-none focus:shadow sm:text-sm"
                                        >
                                            <option className="whitespace-no-wrap text-sm">Recent</option>
                                        </select>
                                    </div>
                                    <button
                                        type="button"
                                        className="inline-flex cursor-pointer items-center rounded-lg border border-gray-400 bg-white py-2 px-3 text-center text-sm font-medium text-gray-800 shadow hover:bg-gray-100 focus:shadow"
                                    >
                                        <svg
                                            className="mr-1 h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                className=""
                                            />
                                        </svg>
                                        Export to CSV
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 overflow-hidden rounded-xl border shadow">
                            <table className="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
                                <thead className="hidden border-b lg:table-header-group">
                                    <tr className="">
                                        <td
                                            width="50%"
                                            className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6"
                                        >
                                            Invoice
                                        </td>
                                        <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                                            Date
                                        </td>
                                        <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                                            Amount
                                        </td>
                                        <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                                            Status
                                        </td>
                                    </tr>
                                </thead>
                                <tbody className="lg:border-gray-300">
                                    <tr className="">
                                        <td
                                            width="50%"
                                            className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6"
                                        >
                                            Standard Plan - Feb 2022
                                            <div className="mt-1 lg:hidden">
                                                <p className="font-normal text-gray-500">07 February, 2022</p>
                                            </div>
                                        </td>
                                        <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                                            07 February, 2022
                                        </td>
                                        <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                                            $59.00
                                            <div className="flex mt-1 ml-auto w-fit items-center rounded-full bg-blue-600 py-2 px-3 text-left text-xs font-medium text-white lg:hidden">
                                                Complete
                                            </div>
                                        </td>
                                        <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                                            <div className="inline-flex items-center rounded-full bg-blue-600 py-2 px-3 text-xs text-white">
                                                Complete
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="">
                                        <td
                                            width="50%"
                                            className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6"
                                        >
                                            Standard Plan - Jan 2022
                                            <div className="mt-1 lg:hidden">
                                                <p className="font-normal text-gray-500">09 January, 2022</p>
                                            </div>
                                        </td>
                                        <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                                            09 January, 2022
                                        </td>
                                        <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                                            $59.00
                                            <div className="flex mt-1 ml-auto w-fit items-center rounded-full bg-red-200 py-1 px-2 text-left font-medium text-red-500 lg:hidden">
                                                Canceled
                                            </div>
                                        </td>
                                        <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                                            <div className="inline-flex items-center rounded-full bg-red-200 py-1 px-2 text-red-500">
                                                Canceled
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="">
                                        <td
                                            width="50%"
                                            className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6"
                                        >
                                            Basic Plan - Dec 2021
                                            <div className="mt-1 lg:hidden">
                                                <p className="font-normal text-gray-500">15 December, 2021</p>
                                            </div>
                                        </td>
                                        <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                                            15 December, 2021
                                        </td>
                                        <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                                            $29.00
                                            <div className="flex mt-1 ml-auto w-fit items-center rounded-full bg-blue-600 py-2 px-3 text-left text-xs font-medium text-white lg:hidden">
                                                Complete
                                            </div>
                                        </td>
                                        <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                                            <div className="inline-flex items-center rounded-full bg-blue-600 py-2 px-3 text-xs text-white">
                                                Complete
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="">
                                        <td
                                            width="50%"
                                            className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6"
                                        >
                                            Basic Plan - Nov 2021
                                            <div className="mt-1 lg:hidden">
                                                <p className="font-normal text-gray-500">14 November, 2021</p>
                                            </div>
                                        </td>
                                        <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                                            14 November, 2021
                                        </td>
                                        <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                                            $29.00
                                            <div className="flex mt-1 ml-auto w-fit items-center rounded-full bg-blue-200 py-1 px-2 text-left font-medium text-blue-500 lg:hidden">
                                                Pending
                                            </div>
                                        </td>
                                        <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                                            <div className="inline-flex items-center rounded-full bg-blue-200 py-1 px-2 text-blue-500">
                                                Pending
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="">
                                        <td
                                            width="50%"
                                            className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6"
                                        >
                                            Basic Plan - Oct 2021
                                            <div className="mt-1 lg:hidden">
                                                <p className="font-normal text-gray-500">15 October, 2021</p>
                                            </div>
                                        </td>
                                        <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                                            15 October, 2021
                                        </td>
                                        <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                                            $29.00
                                            <div className="flex mt-1 ml-auto w-fit items-center rounded-full bg-blue-600 py-2 px-3 text-left text-xs font-medium text-white lg:hidden">
                                                Complete
                                            </div>
                                        </td>
                                        <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                                            <div className="inline-flex items-center rounded-full bg-blue-600 py-2 px-3 text-xs text-white">
                                                Complete
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dialog */}
            <div
                id="modelConfirm"
                className={`${modal} fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 `}
            >
                <div className="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-4xl">
                    <div className="flex justify-end p-2">
                        <button
                            onClick={() => openModal(false)}
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="p-6 pt-0 text-center">
                        
                        <h3 className="flex mt-5 mb-6 space-x-3">

                            <input type="text" className="w-full border-2 p-3 rounded-lg" placeholder='task' />
                            <input type="email" className="w-full border-2 p-3 rounded-lg" placeholder='user@gmail.com' />
                            <button className='w-fit p-3 bg-rose-400 text-white rounded-lg'>send</button>

                        </h3>
                    </div>
                </div>
            </div>

        </div>
    );
}
