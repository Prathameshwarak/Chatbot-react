import './App.css';
import Chatbot from "./Chatbot";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="border-text">Prathamesh Warak</h1>
        <p className="middle-text">
          <strong>Hello Everyone! 👋</strong><br /><br />
          I’m Prathamesh Warak, a passionate tech enthusiast with a deep interest in software development and cybersecurity. 
          This is my first React project — an FAQ chatbot that I designed and built for project! 
          I love exploring new technologies, solving real-world problems through code, and constantly learning to grow as a developer.
        </p>

        <a
          className="linkedin-link"
          href="https://www.linkedin.com/in/prathamesh-warak" 
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect on LinkedIn
        </a>
      </header>

      {/* Chatbot component  */}
      <Chatbot />
    </div>
  );
}

export default App;
