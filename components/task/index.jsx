// "use client"
// import { useQuery } from "@tanstack/react-query";
import TaskAdd from "./taskAdd";
import TaskList from "./taskList";
import TaskUpdate from "./taskUpdate";
// import { getMemebers } from '@/lib/actions';
// import { useOrganization } from "@clerk/nextjs";
// import Loader from "../ui/loader";
// import { useState } from "react";
// import {  } from 'react'


export default function Task() {


    // let [members,setMembers] = useState();
    // const org = useOrganization();

    // const { isPending, error, data } = useQuery({
    //     queryKey: ['repoData'],
    //     queryFn: () =>
    //         org.organization.getMemberships().then((res) =>
    //           res,
    //         ),
    // })
    // if(isPending) return <><Loader/></>;
    // data?.data.map((e)=>{
    //     console.log(e)
    // })

    // if(isPending) return <Loader/>;

    // const { mutate, isPending } = useMutation({
    //     mutationFn: getMemebers,
    //     onSuccess: () => {
    //      console.log("Members fetched :)")
    //     },
    
    //     onError: () => {
    //         console.log("Members NOT fetched !")
    //     },
    //   });
    

    return (
        <>

            <div className=''>
                <div className="w-fir">
                    <div className="mx-auto mt-8 max-w-screen-lg px-2">
                        <div className="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
                            <p className="flex-1 text-base font-extrabold text-rose-400">
                                T A S K S

                            </p>
                            <div className="mt-4 sm:mt-0">
                                <div className="flex items-center justify-start sm:justify-end">
                                    
                                    
                                </div>
                            </div>
                        </div>
                        {/* Table */}
                        <TaskList/>
                        <TaskAdd/>
                        <TaskUpdate/>
                    </div>
                </div>
            </div>
        </>
    )
}