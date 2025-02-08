import { useState, useEffect, useRef } from "react";
import HeaderImmerse from "../components/header-immerse";
import { FaMicrophone } from "react-icons/fa";
// import { FaStar, FaRegStar } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';


const InterviewPractice = () => {
  const [started, setStarted] = useState(false);
  const [onFeedbackPage, setOnFeedbackPage] = useState(false);
  const [question, setQuestion] = useState("Loading...");
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("Loading feedback...");
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<any | null>(null);

  
  const fetchQuestion = async () => {
    try {
      const response = await fetch("https://interview-mate-backend-delta.vercel.app/api/practice/question");
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();
      setQuestion(data.ques || "Error fetching question");
    } catch (error) {
      console.error("Error fetching question:", error);
      setQuestion("Error fetching question");
    }
  };

  const getFeedback = async (message: string) => {
    try {
      let userEmail = ""; 

      const userString = localStorage.getItem("user");
      if (userString) {
        const user = JSON.parse(userString);
        userEmail = user.email; 
      }
      const res = await fetch("hhttps://interview-mate-backend-delta.vercel.app/api/practice/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, message, userEmail }),
      });
      if (!res.ok) throw new Error("Failed to fetch feedback");
      const data = await res.json();
      console.log(data);
      setFeedback(data.message || "No feedback available");
    } catch (error) {
      console.error("Error getting feedback:", error);
      setFeedback("Error fetching feedback");
    }
  };

  useEffect(() => {
    if (started && !onFeedbackPage) {
      fetchQuestion();
    }
  }, [started, onFeedbackPage]);

  const handleNext = () => {
    if (answer.trim()) {
      setOnFeedbackPage(true);
      getFeedback(answer);
    } else {
      fetchQuestion();
    }
    setAnswer("");
    setFeedback("Loading feedback...");
  };

  const handleFeedbackNext = () => {
    setOnFeedbackPage(false);
    fetchQuestion();
  };


  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true; 
      recognitionRef.current.interimResults = false; 

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[event.results.length - 1][0].transcript;
        setAnswer((prev) => prev + " " + transcript);
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  const toggleListening = () => {
    if (!recognitionRef.current) return;

    if (isListening) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }
    setIsListening(!isListening);
  };

  // const toggleListening = () => {
  //   setIsListening(!isListening);
  //   isListening ? stopListening() : startListening();
  // };

  // const startListening = () => {
  //   const SpeechRecognition =
  //     (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  //   const recognition = new SpeechRecognition();
  
  //   recognition.onresult = (event: any) => {
  //     const transcript = event.results[0][0].transcript;
  //     setAnswer(transcript);
  //   };
  
  //   recognition.onerror = (event: any) => {
  //     console.error("Speech recognition error", event.error);
  //     setIsListening(false);
  //   };
  
  //   recognition.onend = () => {
  //     setIsListening(false);
  //   };
  
  //   recognition.start();
  // };
  
  // const stopListening = () => {
  //   const SpeechRecognition =
  //     (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  //   const recognition = new SpeechRecognition();
  //   recognition.stop();
  // };

  const adjustTextareaHeight = (textarea: HTMLTextAreaElement) => {
    textarea.style.height = "auto"; // Reset height
    textarea.style.height = `${textarea.scrollHeight}px`; 
  };  
  

  return (
    <>
      <HeaderImmerse />
      <div className="bg-purple-100 min-h-screen flex flex-col items-center justify-center">
        {!started ? (
          <>
            <header className="text-center p-10">
              <h1 className="text-5xl font-bold text-purple-600">Interview Practice</h1>
            </header>
            <main className="flex flex-col items-center">
              <button
                onClick={() => setStarted(true)}
                className="bg-purple-500 text-white p-4 rounded-lg shadow-lg hover:bg-purple-600 transition"
              >
                Get Started
              </button>
            </main>
          </>
        ) : onFeedbackPage ? (
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full text-center margin-2">
            <h2 className="text-2xl font-semibold text-purple-700">Here is your feedback!</h2>
            {/* <p>{feedback}</p> */}
            {/* <DisplayFeedback></DisplayFeedback> */}
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {feedback}
            </ReactMarkdown>
            <button
              onClick={handleFeedbackNext}
              className="mt-4 bg-purple-500 text-white p-4 rounded-lg shadow-lg hover:bg-purple-600 transition"
            >
              Next Question
            </button>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full text-center">
            <h2 className="text-2xl font-semibold text-purple-700">{question}</h2>
            <div className="mt-4 flex items-center space-x-4">
              {/* <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Type your answer..."
                className="border p-2 rounded w-full focus:outline-none"
              /> */}
              <textarea
                value={answer}
                onChange={(e) => {
                  setAnswer(e.target.value);
                  adjustTextareaHeight(e.target);
                }}
                placeholder="Type your answer..."
                className="border p-2 rounded w-full focus:outline-none resize-none overflow-hidden"
                rows={1} // Start with one row
                ref={(el) => {
                  if (el) adjustTextareaHeight(el);
                }}
              />
              <button
                onClick={toggleListening}
                className={`p-2 rounded-full transition ${isListening ? "bg-red-500" : "bg-purple-500"}`}
              >
                <FaMicrophone color="white" />
              </button>
            </div>
            <button
              onClick={handleNext}
              className="mt-4 text-purple-500 hover:underline"
            >
              {answer ? "Submit Answer" : "Skip"}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default InterviewPractice;
