"use client"


import { useEffect, useRef, useState } from "react"

interface iAppProps {
    data: {
        user: string;
        message: string
    }[];
}


export default function ChatComponent({ data }: iAppProps) {
    const [ totalComments, setTotalComments ] = useState(data)
    const messageEndRef = useRef<HTMLInputElement>(null)
    const scrollToBottom = () => {
        messageEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    //When total comments array changes, scroll to the bottom
    useEffect(() => {
        scrollToBottom()
    }, [totalComments])


    return(
        <div className="p-6 flex-grow max-h-screen overflow-y-auto py-32">
            <div className="flex flex-col gap-4">
                { totalComments.map((message, index) => (
                    <div key={ index }>
                        <div className="flex items-center">
                            <div className="rounded-lg bg-white p-4 shadow-md self-start">{ message.message }</div>
                        </div>
                        <p className="font-light text-sm text-gray-600">{ message.user }</p>
                    </div>
                ))}
                <div ref={messageEndRef}></div>
            </div>
        </div>
    )
}