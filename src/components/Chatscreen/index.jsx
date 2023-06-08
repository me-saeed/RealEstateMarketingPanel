import React, { useState } from "react";

const ChatScreen = () => {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello!", sender: "sender" },
    { id: 2, text: "Hi there!", sender: "receiver" },
    { id: 3, text: "How are you?", sender: "sender" },
    { id: 4, text: "I am good. Thanks!", sender: "receiver" },
  ]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() === "") {
      return;
    }

    const newMessage = {
      id: messages.length + 1,
      text: inputText.trim(),
      sender: "sender",
    };

    setMessages([...messages, newMessage]);
    setInputText("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      <div className="flex flex-col h-screen p-4">
        <div className="flex flex-col flex-grow mb-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`p-2 rounded-lg max-w-2xl ${
                message.sender === "sender"
                  ? "self-end bg-green-200"
                  : "self-start bg-gray-200"
              }`}
              style={{ marginBottom: "16px" }}
            >
              {message.sender === "sender" && (
                <span className="font-bold">You: </span>
              )}
              {message.text}
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-md flex-grow"
            placeholder="Type a message..."
            value={inputText}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            maxLength={300} // Set maximum character limit
          />
          <button
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatScreen;

// import React, { useState } from "react";

// const Chatscreen = () => {
//   const [messages, setMessages] = useState([]);
//   const [inputText, setInputText] = useState("");
//   const [senderCount, setSenderCount] = useState(0);
//   const [senderName, setSenderName] = useState("");

//   const handleMessageSubmit = (e) => {
//     e.preventDefault();
//     if (inputText.trim() !== "") {
//       setMessages([...messages, { text: inputText, sender: "user" }]);
//       setInputText("");
//     }
//   };

//   const handleSenderChange = (e) => {
//     setSenderName(e.target.value);
//   };

//   const handleSenderCountChange = (e) => {
//     setSenderCount(parseInt(e.target.value));
//   };

//   return (
//     <div className="flex flex-col h-screen">
//       <div className="flex justify-between items-center bg-gray-100 py-2 px-4">
//         <div className="flex items-center">
//           <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full font-chat">
//             Chat
//           </button>
//         </div>
//         <div className="flex items-center flex-col">
//           <div className=" bg-blue-500 text-white rounded-full  p-2 flex items-center justify-center">
//             {/* {senderCount} */}
//             03092970488
//           </div>
//           <div className="mt-3">
//             <p className="text-blue-600">
//               From:- Zohaib Ansar
//               {/* {senderName} */}
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="flex-1 bg-gray-100 overflow-y-auto px-4 py-8 space-y-4">
//         {messages.map((message, index) => (
//           <div
//             key={index}
//             className={`message flex ${
//               message.sender === "user" ? "justify-end" : "justify-start"
//             }`}
//           >
//             <div
//               className={`p-2 rounded-lg max-w-xs ${
//                 message.sender === "user"
//                   ? "bg-blue-500 text-white"
//                   : "bg-white"
//               }`}
//             >
//               {message.text}
//             </div>
//           </div>
//         ))}
//       </div>
//       <form onSubmit={handleMessageSubmit}>
//         <div className="flex items-center border-t border-gray-300 py-2 px-4">
//           <input
//             type="text"
//             value={inputText}
//             onChange={(e) => setInputText(e.target.value)}
//             className="flex-1 bg-gray-200 rounded-full py-2 px-4 outline-none"
//             placeholder="Type a message..."
//           />
//           <button
//             type="submit"
//             className="ml-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
//           >
//             Send
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Chatscreen;

// ----------------------------------------------

// import React from "react";

// const ChatScreen = () => {
//   return (
//     <div className="flex flex-col h-screen">
//       <div className="flex-grow bg-gray-100 p-6">
//         <div className="flex flex-col space-y-4">
//           <div className="flex items-end justify-end">
//             {" "}
//             {/* Update */}
//             <div className="bg-gray-300 rounded-lg p-4 max-w-xs">
//               <p>Hi i am Zohaib </p> {/* Update */}
//             </div>
//           </div>
//           <div className="flex items-start">
//             {" "}
//             {/* Update */}
//             <div className="bg-blue-500 text-white rounded-lg p-4 max-w-xs">
//               <p>Who is this ?</p> {/* Update */}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="bg-white p-4 flex">
//         <input
//           type="text"
//           placeholder="Type a message..."
//           className="border border-gray-300 rounded-lg py-2 px-4 w-full"
//         />
//         <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChatScreen;
