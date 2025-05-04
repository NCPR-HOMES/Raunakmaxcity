"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useContactModal } from "@/hooks/use-contact-modal"

type Message = {
  text: string
  isBot: boolean
}

type QuickReply = {
  text: string
  action: () => void
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "👋 Hi there! I'm your Raunak Max City assistant. How can I help you today?",
      isBot: true,
    },
  ])
  const [input, setInput] = useState("")
  const [showChatbot, setShowChatbot] = useState(false)
  const { openModal } = useContactModal()

  useEffect(() => {
    // Show chatbot after 8 seconds
    const timer = setTimeout(() => {
      setShowChatbot(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  const quickReplies: QuickReply[] = [
    {
      text: "Show me floor plans",
      action: () => {
        handleBotResponse("Here are our floor plans:")
        document.getElementById("floor-plans")?.scrollIntoView({ behavior: "smooth" })
        setIsOpen(false)
      },
    },
    {
      text: "Where is it located?",
      action: () => {
        handleBotResponse("Let me show you our location:")
        document.getElementById("location")?.scrollIntoView({ behavior: "smooth" })
        setIsOpen(false)
      },
    },
    {
      text: "Download brochure",
      action: () => {
        handleBotResponse("Fill out the form to download the brochure:")
        openModal
      },
    },
    {
      text: "I want a callback",
      action: () => {
        handleBotResponse("I'll help you schedule a callback:")
        openModal()
      },
    },
  ]

  const handleBotResponse = (text: string) => {
    setMessages((prev) => [...prev, { text, isBot: true }])
  }

  const handleSendMessage = () => {
    if (!input.trim()) return

    // Add user message
    setMessages((prev) => [...prev, { text: input, isBot: false }])

    // Simulate bot response
    setTimeout(() => {
      handleBotResponse(
        "I recommend speaking with our sales team for the most accurate information. Would you like to contact them now?",
      )
    }, 1000)

    setInput("")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  if (!showChatbot) return null

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-card rounded-2xl shadow-lg border mb-4 w-[320px] sm:w-[350px] max-h-[500px] flex flex-col overflow-hidden"
          >
            <div className="p-4 gradient-primary text-white rounded-t-2xl flex justify-between items-center">
              <h3 className="font-semibold">Raunak Max City Assistant</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 text-white hover:bg-white/10 rounded-full"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[300px]">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.isBot
                        ? "bg-muted text-foreground rounded-tl-none"
                        : "bg-primary text-primary-foreground rounded-tr-none"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t">
              <div className="mb-4 flex flex-wrap gap-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={reply.action}
                    className="text-xs bg-muted hover:bg-muted/80 text-foreground px-3 py-1.5 rounded-full"
                  >
                    {reply.text}
                  </button>
                ))}
              </div>

              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  className="flex-1 rounded-full"
                />
                <Button size="icon" onClick={handleSendMessage} disabled={!input.trim()} className="rounded-full">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 10 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="rounded-full h-14 w-14 shadow-lg gradient-primary hover:opacity-90"
          aria-label="Chat with us"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </motion.div>
    </div>
  )
}
