import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Send, X, Minimize2, Maximize2, Bot, User } from "lucide-react";
import { useMutation } from "@tanstack/react-query";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function AISalesBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Hi! I'm your Primo Pools design consultant. I'm here to help you create the perfect pool for your Perth property. What type of pool project are you considering?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const chatMutation = useMutation({
    mutationFn: async (userMessage: string) => {
      const conversationHistory = [
        ...messages,
        { role: "user" as const, content: userMessage }
      ].map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ messages: conversationHistory })
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      return data.response;
    },
    onSuccess: (response) => {
      setMessages(prev => [
        ...prev,
        {
          role: "assistant",
          content: response,
          timestamp: new Date()
        }
      ]);
    },
    onError: () => {
      setMessages(prev => [
        ...prev,
        {
          role: "assistant",
          content: "I apologize for the delay. Please try again or contact us directly at info@primopools.com.au",
          timestamp: new Date()
        }
      ]);
    }
  });

  const handleSendMessage = () => {
    if (!inputMessage.trim() || chatMutation.isPending) return;

    const userMessage = inputMessage.trim();
    setInputMessage("");

    // Add user message immediately
    setMessages(prev => [
      ...prev,
      {
        role: "user",
        content: userMessage,
        timestamp: new Date()
      }
    ]);

    // Send to AI
    chatMutation.mutate(userMessage);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Floating chat button
  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-forest-green hover:bg-sage-green text-white rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
          aria-label="Open chat with AI consultant"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-gold rounded-full animate-pulse" aria-hidden="true" />
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`w-96 shadow-2xl transition-all duration-300 ${
        isMinimized ? 'h-16' : 'h-96'
      }`}>
        <CardHeader className="bg-forest-green text-white p-4 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <CardTitle className="text-lg">Primo Pools AI Consultant</CardTitle>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:bg-white/20 p-1 h-8 w-8 rounded transition-colors"
                aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
              >
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-1 h-8 w-8 rounded transition-colors"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <>
            <CardContent className="h-72 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-3 ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.role === "assistant" && (
                    <div className="w-8 h-8 bg-forest-green rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      message.role === "user"
                        ? "bg-forest-green text-white ml-auto"
                        : "bg-surface-secondary text-text-primary"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    <p className={`text-xs mt-1 ${
                      message.role === "user" ? "text-white/70" : "text-text-tertiary"
                    }`}>
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                  {message.role === "user" && (
                    <div className="w-8 h-8 bg-stone-gray rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
              ))}
              {chatMutation.isPending && (
                <div className="flex gap-3 justify-start">
                  <div className="w-8 h-8 bg-forest-green rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-surface-secondary text-text-primary px-4 py-2 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-text-tertiary rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-text-tertiary rounded-full animate-bounce" style={{animationDelay: '0.1s'}} />
                      <div className="w-2 h-2 bg-text-tertiary rounded-full animate-bounce" style={{animationDelay: '0.2s'}} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </CardContent>

            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about pool designs, services, or pricing..."
                  disabled={chatMutation.isPending}
                  className="flex-1"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || chatMutation.isPending}
                  className="bg-forest-green hover:bg-sage-green text-white px-3 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <p className="text-xs text-text-tertiary mt-2 text-center">
                Powered by AI • Response time ~5 seconds
              </p>
            </div>
          </>
        )}
      </Card>
    </div>
  );
}
