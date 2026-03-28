import { useState, useRef, useEffect } from "react"

import { ChatbotIcon } from "./ChatbotIcon"

import { FiSend, FiChevronUp } from "react-icons/fi"

export function Chatbot() {
  const [ open, setOpen ] = useState(true)
  const [ messages, setMessages ] = useState([
    { 
        type: "bot", 
        text: "Hi, how can I help you today?" 
    }
  ])
  const [ input, setInput ] = useState("")

  const messagesEndRef = useRef(null)

  const handleSend = (e) => {
    e.preventDefault()

    if (!input.trim())
    return

    setMessages((prev) => [
      ...prev,
      { type: "user", text: input }
    ])
    setInput("")

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "Got it!" }
      ])
    }, 800)
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [ messages ])

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        className={`w-80 bg-white shadow-2xl rounded-2xl overflow-hidden transition-all duration-300 ${
          open ? "h-[500px]" : "h-14"
        }`}
      >
        <div className="bg-gray-800 text-white px-4 py-1 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center gap-2">
            <ChatbotIcon className="text-white w-6 h-6" />
            <h2 className="font-semibold text-white">Chatbot</h2>
          </div>

          <button onClick={() => setOpen(!open)}>
            <FiChevronUp
              className={`text-white transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {open && (
          <>
            <div className="p-4 flex flex-col gap-3 h-[350px] overflow-y-auto bg-gray-100">
              {messages.map((msg, index) =>
                msg.type === "bot" ? (
                    <div 
                        key={ index } 
                        className="flex gap-2 items-start"
                    >
                    <ChatbotIcon className="text-gray-700 w-5 h-5 mt-1" />
                    <div className="bg-gray-200 text-gray-800 p-3 rounded-xl max-w-[75%]">
                      { msg.text }
                    </div>
                  </div>
                ) : (
                  <div 
                    key={ index } 
                    className="flex justify-end"
                >
                    <div className="bg-gray-800 text-white p-3 rounded-xl max-w-[75%]">
                      { msg.text }
                    </div>
                  </div>
                )
              )}

              <div ref={ messagesEndRef } />
            </div>

            <form
              onSubmit={ handleSend }
              className="p-3 border-t flex items-center gap-2 bg-white"
            >
              <input
                type="text"
                placeholder="Message..."
                value={ input }
                onChange={ (e) => setInput(e.target.value) }
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-gray-400 transition"
              />

              <button
                type="submit"
                className="bg-gray-800 text-white p-2 rounded-lg hover:bg-black transition"
              >
                <FiSend />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}