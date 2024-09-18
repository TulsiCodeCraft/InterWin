import React, { useState } from 'react';
import { Mic, Paperclip, Send } from 'lucide-react';
import chatbot from '../../assets/images/chatbot.png';

const ChatbotUI = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { role: 'user', content: 'Suggest productivity tips for remote work' },
    { role: 'bot', content: 'Here are some tips for working remotely and staying productive:' +
      '\n• Set a schedule: Create a personal schedule for your workday, and consider working out a schedule with your family. You can also set office hours and times for checking email.' +
      '\n• Designate a workspace: Choose a dedicated space that you can make your own. You can try to embrace natural light, invest in ergonomic furniture, and use blue-light blocking glasses.' +
      '\n• Eliminate distractions: Try to minimize distractions from social media and other sources. You can also turn off notifications and disconnect.' +
      '\n• Set goals and make to-do lists: Set goals for yourself and create to-do lists every day. You can also prioritize tasks.' +
      '\n• Take breaks: Take breaks to recharge and avoid overworking.' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { role: 'user', content: input }]);
      setInput('');
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40" 
        onClick={onClose}
        style={{ top: '64px' }} // Adjust this value based on your navbar height
      ></div>
      <div className="fixed top-20 right-4 w-96 h-[calc(100vh-80px)] bg-white rounded-lg shadow-xl z-50 flex flex-col">
        <div className="bg-white p-4 rounded-t-lg flex items-center justify-between shadow-md">
          <div className="flex items-center space-x-2">
          <img
                src={chatbot}
                alt="Chatbot"
                className="h-8 w-8 rounded-sm"
              />
            <h2 className="text-xl font-semibold">InterWin</h2>
          </div>
          <p className="text-xs text-gray-500">Copilot uses AI. Check for mistakes.</p>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 rounded-lg ${
                message.role === 'user' ? 'bg-purple-100 text-purple-900' : 'bg-white shadow-md'
              }`}>
                {message.content.split('\n').map((line, i) => (
                  <p key={i} className="mb-1 last:mb-0">{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 bg-white rounded-b-lg">
          <div className="flex items-center bg-gray-100 rounded-full p-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me Anything"
              className="flex-1 bg-transparent focus:outline-none px-2"
            />
            <button className="text-gray-500 hover:text-gray-700 mx-1">
              <Mic size={20} />
            </button>
            <button className="text-gray-500 hover:text-gray-700 mx-1">
              <Paperclip size={20} />
            </button>
            <button onClick={handleSend} className="text-purple-600 hover:text-purple-800 ml-1">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatbotUI;