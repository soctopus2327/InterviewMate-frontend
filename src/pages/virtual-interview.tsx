import { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import HeaderImmerse from "../components/header-immerse";
import { Experience } from "../components/Experience";

const SpeechBubble = ({ text }: { text: string }) => (
  <div className="absolute top-10 left-1/4 right-2/4 transform -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg">
    {text}
  </div>
);

const UserSpeechBubble = ({ text }: { text: string }) => (
  <div className="absolute bottom-24 left-3/4 transform -translate-x-1/2 bg-blue-200 p-3 rounded-lg shadow-lg">
    {text}
  </div>
);

const MeetControls = ({ onToggleMic, onToggleCamera, isMicOn, isCameraOn }: any) => (
  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4 bg-gray-900 p-3 rounded-lg shadow-lg">
    <button 
      onClick={onToggleMic} 
      className={`p-3 rounded ${isMicOn ? 'bg-green-500' : 'bg-red-500'}`}
    >🎤︎</button>
    <button 
      onClick={onToggleCamera} 
      className={`p-3 rounded ${isCameraOn ? 'bg-green-500' : 'bg-red-500'}`}
    >[◉°]</button>
  </div>
);

const VirtualInterview = () => {
  const [isCameraOn, setCameraOn] = useState(false);
  const [isMicOn, setMicOn] = useState(false);
  const [speech, setSpeech] = useState("Welcome to the interview, let's get started.");
  const [userSpeech, setUserSpeech] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isInterviewOver, setIsInterviewOver] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFeedbackShown, setIsFeedbackShown] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const toggleCamera = async () => {
    if (!isCameraOn) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setCameraOn(true);
      } catch (error) {
        console.error("Error enabling camera:", error);
      }
    } else {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      setCameraOn(false);
    }
  };

  const toggleMic = async () => {
    setMicOn((prev) => !prev);
  };

  const fetchQuestion = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://interview-mate-backend-delta.vercel.app/api/practice/question");
      if (!response.ok) throw new Error("Failed to fetch question");
      const data = await response.json();
      setCurrentQuestion(data.ques || "Error fetching question");
      setSpeech("Please answer the following question: " + data.ques);
      setIsFeedbackShown(false); // Reset feedback state for new question
    } catch (error) {
      console.error("Error fetching question:", error);
      setCurrentQuestion("Error fetching question");
      setSpeech("Error fetching question.");
    } finally {
      setIsLoading(false);
    }
  };

  const getFeedback = async (message: string) => {
    setIsLoading(true);
    try {
        let userEmail = ""; 
        const userString = localStorage.getItem("user");
        if (userString) {
            const user = JSON.parse(userString);
            userEmail = user.email; 
        }
        
        const res = await fetch("https://interview-mate-backend-delta.vercel.app/api/mock/feedback", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question: currentQuestion, message, userEmail }),
        });

        if (!res.ok) throw new Error("Failed to fetch feedback");

        const data = await res.json();
        
        if (data.message) {
            setSpeech(`Thank you for your response! Here's your feedback: ${data.message}`);
            setIsFeedbackShown(true); // Mark feedback as shown
        } else {
            setSpeech("No feedback available.");
        }
    } catch (error) {
        console.error("Error getting feedback:", error);
        setSpeech("Error fetching feedback.");
    } finally {
        setIsLoading(false);
    }
  };

  const fetchNextQuestion = async () => {
    if (questionIndex < 5) {
      await fetchQuestion();
      setQuestionIndex((prevIndex) => prevIndex + 1);
      setUserSpeech("");  // Reset user response
      setIsFeedbackShown(false); // Reset feedback status
    } else {
      setIsInterviewOver(true);
      setSpeech("Thank you for your responses. Interview Over.");

      let userEmail = ""; 

      const userString = localStorage.getItem("user");
      if (userString) {
        const user = JSON.parse(userString);
        userEmail = user.email; 
      }
      const res = await fetch("https://interview-mate-backend-delta.vercel.app/api/mock/attempts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userEmail }),
      });
      console.log(res);
    }
  };

  const handleSubmitResponse = async () => {
    if (!userSpeech.trim()) return;
    await getFeedback(userSpeech);
  };

  return (
    <div className="relative flex flex-col h-screen">
      <HeaderImmerse />
      <div className="flex-grow relative">
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 8 }}>
          <Experience />
        </Canvas>
        <SpeechBubble text={isLoading ? "..." : speech} />
        <UserSpeechBubble text={userSpeech} />
        <MeetControls onToggleMic={toggleMic} onToggleCamera={toggleCamera} isMicOn={isMicOn} isCameraOn={isCameraOn} />

        {isCameraOn && (
          <video ref={videoRef} autoPlay className="absolute bottom-10 right-4 w-50 h-38 border rounded" />
        )}

        {/* User Input Box */}
        {!isInterviewOver && (
          <div className="absolute bottom-30 left-1/2 transform -translate-x-1/2 w-1/4">
            <textarea
              value={userSpeech}
              onChange={(e) => setUserSpeech(e.target.value)}
              placeholder="Type your response here..."
              className="w-full p-3 border rounded-lg shadow-lg"
              rows={3}
            />
          </div>
        )}

        {/* Buttons */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
          {!isInterviewOver && (
            questionIndex === 0 ? (
              <button onClick={fetchNextQuestion} className="bg-purple-500 text-white p-4 rounded-lg shadow-lg">
                Get Started
              </button>
            ) : (
              <button 
                onClick={isFeedbackShown ? fetchNextQuestion : handleSubmitResponse} 
                className={`p-4 rounded-lg shadow-lg ${isFeedbackShown ? 'bg-blue-500' : 'bg-green-500'} text-white`}
              >
                {isFeedbackShown ? "Next Question" : "Submit Answer"}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default VirtualInterview;
