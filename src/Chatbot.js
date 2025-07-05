import React, { useState } from "react";
import avatar from "./assets/avatar.png"; 
import closeIcon from "./assets/close-icon.png";
import sendIcon from "./assets/send-icon.png";


const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hello! I'm Mr. Bean, an AI Agent here to help. How may I assist you today?",
    },
  ]);
  const [userInput, setUserInput] = useState("");
  const [showQuestions, setShowQuestions] = useState(false);
  const [showResolveOptions, setShowResolveOptions] = useState(false);

  const faqList = [
    {
      question: "Does Provide on-demand GPUs?",
      answer:
        "Offer on-demand GPUs to your customers with a white labeled API of thousands of hard to find GPUs at low cost with no lock-ins.",
    },
    {
      question: "High performance file access.",
      answer:
        "Offer the fastest file access on the market that plugs into any S3 compatible storage with the responsiveness of local storage.",
    },
    {
      question: "Contact us",
      answer: "project@admin.mail.com",
    },
  ];

  const handleSend = () => {
    if (!userInput.trim()) return;

    const newMessages = [...messages, { from: "user", text: userInput }];
    setMessages(newMessages);

    // Show clickable questions
    setShowQuestions(true);
    setShowResolveOptions(false);
    setUserInput("");
  };

  const handleQuestionClick = (faq) => {
    const newMessages = [
      ...messages,
      { from: "user", text: faq.question },
      { from: "bot", text: faq.answer },
    ];
    setMessages(newMessages);

    setShowQuestions(false);
    setShowResolveOptions(true); // Show "query resolved" options after answer
  };

  const handleResolvedClick = () => {
    const newMessages = [...messages, { from: "bot", text: "Thank you for contacting us!" }];
    setMessages(newMessages);
    setShowResolveOptions(false);
  };

  const handleAnotherQueryClick = () => {
    setShowQuestions(true);
    setShowResolveOptions(false);
  };

  return (
    <>
      <button
        style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            padding: "10px",
            borderRadius: "50%",
            background: "#ffffff",
            border: "none",
            cursor: "pointer",
        }}
        onClick={() => setIsOpen(!isOpen)}
        >
        <img
            src={isOpen ? closeIcon : avatar}
            alt="Toggle"
            style={{
            width: "30px",
            height: "30px",
            }}
        />
        </button>


      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: 80,
            right: 20,
            width: 350,
            height: 500,
            border: "1px solid #ccc",
            borderRadius: "10px",
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 0 15px rgba(0,0,0,0.2)",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "#004AAD",
              color: "white",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={avatar}
                alt="Avatar"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              <div>
                <div style={{ fontWeight: "bold" }}>
                  Mr. Bean{" "}
                  <span
                    style={{
                      background: "white",
                      color: "#004AAD",
                      fontSize: "12px",
                      borderRadius: "4px",
                      padding: "2px 4px",
                      marginLeft: "5px",
                    }}
                  >
                    AI
                  </span>
                </div>
                <div style={{ fontSize: "12px" }}>Customer Support Agent</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "transparent",
                color: "white",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              padding: "10px",
              overflowY: "auto",
              background: "#f5f5f5",
            }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  textAlign: msg.from === "user" ? "right" : "left",
                  margin: "8px 0",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    background: msg.from === "user" ? "#4caf50" : "#ffffff",
                    color: msg.from === "user" ? "white" : "black",
                    padding: "8px 12px",
                    borderRadius: "16px",
                    maxWidth: "80%",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Clickable questions */}
            {showQuestions && (
              <div style={{ textAlign: "center", marginTop: "10px" }}>
                {faqList.map((faq, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuestionClick(faq)}
                    style={{
                      display: "block",
                      width: "100%",
                      margin: "5px 0",
                      padding: "8px",
                      background: "#004AAD",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    {faq.question}
                  </button>
                ))}
              </div>
            )}

            {/* Resolve or Another Query buttons */}
            {showResolveOptions && (
              <div style={{ textAlign: "center", marginTop: "10px" }}>
                <button
                  onClick={handleResolvedClick}
                  style={{
                    margin: "5px",
                    padding: "8px 12px",
                    background: "#4caf50",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Query resolved
                </button>
                <button
                  onClick={handleAnotherQueryClick}
                  style={{
                    margin: "5px",
                    padding: "8px 12px",
                    background: "#004AAD",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Another query
                </button>
              </div>
            )}
          </div>

          {/* Input */}
          <div style={{ display: "flex", borderTop: "1px solid #ccc" }}>
            <input
              style={{
                flex: 1,
                padding: "10px",
                border: "none",
                outline: "none",
              }}
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type here"
            />
            <button
                onClick={handleSend}
                style={{
                    padding: "10px",
                    border: "none",
                    background: "#00CFFF ",
                    cursor: "pointer",
                }}
                >
                <img
                    src={sendIcon}
                    alt="Send"
                    style={{
                    width: "20px",   
                    height: "20px",
                    }}
                />
            </button>

          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
