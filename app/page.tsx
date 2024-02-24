"use client"

import Image from "next/image";
import Form from "./components/form";
import ChatComponent from "./components/chat";
import { useEffect, useRef, useState } from "react"

function getData() {
  const data = [
    {
    user: "Person 1",
    message: "This is a message"
  },
  {
    user: "Person 2",
    message: "This is a Another message"
  },
  {
    user: "Person 1",
    message: "This is a third message"
  },
]
  return data
}


export default function Home() {
  const data = getData();
  const [ totalComments, setTotalComments ] = useState(data)
  const messageEndRef = useRef<HTMLInputElement>(null)
  const scrollToBottom = () => {
      messageEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  //When total comments array changes, scroll to the bottom
  useEffect(() => {
      scrollToBottom()
  }, [totalComments])

  function submitMessage() {
   
  }

  const newMessage = {
    user: "Person 2",
    message: "A completely new message!"
  }

  return (
    <div className="h-screen bg-gray-200 flex flex-col">
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
        <form className="p-6 fixed bottom-0 w-full bg-white">
            <div className="flex">
                <input type="text" name="message" placeholder="Type your message" className="flex-grow py-2 px-4 outline-none" />
                <button type="submit" onClick={() => setTotalComments((totalComments) => totalComments.concat(newMessage))} className="bg-teal-500 hover: bg-teal-600 text-white py-2 px-4 rounded-xl">Send</button>
            </div>
        </form>

    </div>
  );
}
