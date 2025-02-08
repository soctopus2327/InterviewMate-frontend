// // // // import { useState, useEffect, useRef } from "react";
// // // // import { Canvas } from "@react-three/fiber";
// // // // import HeaderImmerse from "../components/header-immerse";
// // // // import { Experience } from "../components/Experience";

// // // // const SpeechBubble = ({ text }: { text: string }) => (
// // // //   <div className="absolute top-10 left-3/4 transform -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg">
// // // //     {text}
// // // //   </div>
// // // // );

// // // // const UserSpeechBubble = ({ text }: { text: string }) => (
// // // //   <div className="absolute top-70 left-3/4 transform -translate-x-1/2 bg-blue-200 p-3 rounded-lg shadow-lg">
// // // //     {text}
// // // //   </div>
// // // // );

// // // // const MeetControls = ({ onToggleMic, onToggleCamera, isMicOn, isCameraOn }: any) => (
// // // //   <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 bg-gray-900 p-3 rounded-lg shadow-lg">
// // // //     <button 
// // // //       onClick={onToggleMic} 
// // // //       className={`p-3 rounded ${isMicOn ? 'bg-green-500' : 'bg-red-500'}`}
// // // //     >🎤︎</button>
// // // //     <button 
// // // //       onClick={onToggleCamera} 
// // // //       className={`p-3 rounded ${isCameraOn ? 'bg-green-500' : 'bg-red-500'}`}
// // // //     >[◉°]</button>
// // // //   </div>
// // // // );

// // // // const VirtualInterview = () => {
// // // //   const [isCameraOn, setCameraOn] = useState(false);
// // // //   const [isMicOn, setMicOn] = useState(false);
// // // //   const [speech, setSpeech] = useState("Hello! Welcome to the interview. Let's get started with the first question. Tell me a bit about yourself!");
// // // //   const [userSpeech, setUserSpeech] = useState("");
// // // //   const videoRef = useRef<HTMLVideoElement | null>(null);
// // // //   const recognitionRef = useRef<any>(null);

// // // //   useEffect(() => {
// // // //     if ("webkitSpeechRecognition" in window) {
// // // //       recognitionRef.current = new (window as any).webkitSpeechRecognition();
// // // //       recognitionRef.current.continuous = true;
// // // //       recognitionRef.current.interimResults = false;
// // // //       recognitionRef.current.lang = "en-US";

// // // //       recognitionRef.current.onresult = (event: any) => {
// // // //         const transcript = event.results[event.results.length - 1][0].transcript;
// // // //         console.log("User Speech:", transcript);
// // // //         setUserSpeech(transcript);
// // // //       };
// // // //     }
// // // //   }, []);

// // // //   const toggleCamera = () => {
// // // //     setCameraOn((prev) => !prev);
// // // //     if (!isCameraOn && navigator.mediaDevices.getUserMedia) {
// // // //       navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
// // // //         if (videoRef.current) videoRef.current.srcObject = stream;
// // // //       });
// // // //     } else {
// // // //       if (videoRef.current) videoRef.current.srcObject = null;
// // // //     }
// // // //   };

// // // //   const toggleMic = () => {
// // // //     setMicOn((prev) => !prev);
// // // //     if (!isMicOn) {
// // // //       recognitionRef.current?.start();
// // // //     } else {
// // // //       recognitionRef.current?.stop();
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="relative flex flex-col h-screen">
// // // //       <HeaderImmerse />
// // // //       <div className="flex-grow relative">
// // // //         <Canvas shadows camera={{ position: [0, 0, 5], fov: 8 }}>
// // // //           <Experience />
// // // //         </Canvas>
// // // //         <SpeechBubble text={speech} />
// // // //         <UserSpeechBubble text={userSpeech} />
// // // //         <MeetControls onToggleMic={toggleMic} onToggleCamera={toggleCamera} isMicOn={isMicOn} isCameraOn={isCameraOn} />
// // // //         {isCameraOn && (
// // // //           <video ref={videoRef} autoPlay className="absolute bottom-10 right-4 w-50 h-38 border rounded" />
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default VirtualInterview;



// // // // import { useState, useEffect, useRef } from "react";
// // // // import { Canvas } from "@react-three/fiber";
// // // // import HeaderImmerse from "../components/header-immerse";
// // // // import { Experience } from "../components/Experience";

// // // // const SpeechBubble = ({ text }: { text: string }) => (
// // // //   <div className="absolute top-10 left-3/4 transform -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg">
// // // //     {text}
// // // //   </div>
// // // // );

// // // // const UserSpeechBubble = ({ text }: { text: string }) => (
// // // //   <div className="absolute top-70 left-3/4 transform -translate-x-1/2 bg-blue-200 p-3 rounded-lg shadow-lg">
// // // //     {text}
// // // //   </div>
// // // // );

// // // // const MeetControls = ({ onToggleMic, onToggleCamera, isMicOn, isCameraOn }: any) => (
// // // //   <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 bg-gray-900 p-3 rounded-lg shadow-lg">
// // // //     <button 
// // // //       onClick={onToggleMic} 
// // // //       className={`p-3 rounded ${isMicOn ? 'bg-green-500' : 'bg-red-500'}`}
// // // //     >🎤︎</button>
// // // //     <button 
// // // //       onClick={onToggleCamera} 
// // // //       className={`p-3 rounded ${isCameraOn ? 'bg-green-500' : 'bg-red-500'}`}
// // // //     >[◉°]</button>
// // // //   </div>
// // // // );

// // // // const VirtualInterview = () => {
// // // //   const [isCameraOn, setCameraOn] = useState(false);
// // // //   const [isMicOn, setMicOn] = useState(false);
// // // //   const [speech, setSpeech] = useState("Welcome to the interview, let's get started.");
// // // //   const [userSpeech, setUserSpeech] = useState("");
// // // //   const [currentQuestion, setCurrentQuestion] = useState("");
// // // //   const [questionIndex, setQuestionIndex] = useState(0);
// // // //   const [isFeedbackPage, setIsFeedbackPage] = useState(false);
// // // //   const videoRef = useRef<HTMLVideoElement | null>(null);
// // // //   const recognitionRef = useRef<any>(null);

// // // //   // Questions array (to simulate fetching questions)
// // // //   const questions = [
// // // //     "Tell me a bit about yourself.",
// // // //     "Why do you want this job?",
// // // //     "What are your strengths?",
// // // //     "Where do you see yourself in 5 years?",
// // // //     "What do you know about our company?"
// // // //   ];

// // // //   useEffect(() => {
// // // //     if ("webkitSpeechRecognition" in window) {
// // // //       recognitionRef.current = new (window as any).webkitSpeechRecognition();
// // // //       recognitionRef.current.continuous = true;
// // // //       recognitionRef.current.interimResults = false;
// // // //       recognitionRef.current.lang = "en-US";

// // // //       recognitionRef.current.onresult = (event: any) => {
// // // //         const transcript = event.results[event.results.length - 1][0].transcript;
// // // //         console.log("User Speech:", transcript);
// // // //         setUserSpeech(transcript);
// // // //       };
// // // //     }
// // // //   }, []);

// // // //   const toggleCamera = () => {
// // // //     setCameraOn((prev) => !prev);
// // // //     if (!isCameraOn && navigator.mediaDevices.getUserMedia) {
// // // //       navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
// // // //         if (videoRef.current) videoRef.current.srcObject = stream;
// // // //       });
// // // //     } else {
// // // //       if (videoRef.current) videoRef.current.srcObject = null;
// // // //     }
// // // //   };

// // // //   const toggleMic = () => {
// // // //     setMicOn((prev) => !prev);
// // // //     if (!isMicOn) {
// // // //       recognitionRef.current?.start();
// // // //     } else {
// // // //       recognitionRef.current?.stop();
// // // //     }
// // // //   };

// // // //   const fetchNextQuestion = () => {
// // // //     if (questionIndex < questions.length) {
// // // //       setCurrentQuestion(questions[questionIndex]);
// // // //       setSpeech("Please answer the following question: " + questions[questionIndex]);
// // // //       setQuestionIndex((prevIndex) => prevIndex + 1);
// // // //     } else {
// // // //       setSpeech("Thank you for your interview responses.");
// // // //       setIsFeedbackPage(false); // End interview after the last question
// // // //     }
// // // //   };

// // // //   const handleSubmitResponse = async () => {
// // // //     if (!userSpeech.trim()) return;

// // // //     // Simulating feedback fetch (this can be replaced with an API request)
// // // //     setIsFeedbackPage(true);
// // // //     setSpeech("Thank you for your response! Here's your feedback...");

// // // //     // Simulate a delay before showing the feedback
// // // //     setTimeout(() => {
// // // //       setSpeech("Great job! You answered well.");
// // // //     }, 2000);
// // // //   };

// // // //   return (
// // // //     <div className="relative flex flex-col h-screen">
// // // //       <HeaderImmerse />
// // // //       <div className="flex-grow relative">
// // // //         <Canvas shadows camera={{ position: [0, 0, 5], fov: 8 }}>
// // // //           <Experience />
// // // //         </Canvas>
// // // //         <SpeechBubble text={speech} />
// // // //         <UserSpeechBubble text={userSpeech} />
// // // //         <MeetControls onToggleMic={toggleMic} onToggleCamera={toggleCamera} isMicOn={isMicOn} isCameraOn={isCameraOn} />
// // // //         {isCameraOn && (
// // // //           <video ref={videoRef} autoPlay className="absolute bottom-10 right-4 w-50 h-38 border rounded" />
// // // //         )}

// // // //         {/* Initial Screen with Get Started Button */}
// // // //         {questionIndex === 0 && !isFeedbackPage && (
// // // //           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
// // // //             <button
// // // //               onClick={() => {
// // // //                 fetchNextQuestion();
// // // //               }}
// // // //               className="bg-purple-500 text-white p-4 rounded-lg shadow-lg hover:bg-purple-600 transition"
// // // //             >
// // // //               Get Started
// // // //             </button>
// // // //           </div>
// // // //         )}

// // // //         {/* User's response and feedback section */}
// // // //         {questionIndex > 0 && !isFeedbackPage && (
// // // //           <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-80 text-center">
// // // //             <textarea
// // // //               value={userSpeech}
// // // //               onChange={(e) => setUserSpeech(e.target.value)}
// // // //               placeholder="Type your response..."
// // // //               className="border p-2 rounded w-full focus:outline-none resize-none overflow-hidden"
// // // //               rows={3}
// // // //             />
// // // //             <button
// // // //               onClick={handleSubmitResponse}
// // // //               className="mt-4 bg-purple-500 text-white p-4 rounded-lg shadow-lg hover:bg-purple-600 transition"
// // // //             >
// // // //               Submit Response
// // // //             </button>
// // // //           </div>
// // // //         )}

// // // //         {/* Feedback page */}
// // // //         {isFeedbackPage && (
// // // //           <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
// // // //             <button
// // // //               onClick={() => {
// // // //                 setIsFeedbackPage(false);
// // // //                 fetchNextQuestion();
// // // //               }}
// // // //               className="bg-purple-500 text-white p-4 rounded-lg shadow-lg hover:bg-purple-600 transition"
// // // //             >
// // // //               Next Question
// // // //             </button>
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default VirtualInterview;










// // // import { useState, useEffect, useRef } from "react";
// // // import { Canvas } from "@react-three/fiber";
// // // import HeaderImmerse from "../components/header-immerse";
// // // import { Experience } from "../components/Experience";

// // // const SpeechBubble = ({ text }: { text: string }) => (
// // //   <div className="absolute top-10 left-1/4 right-2/4 transform -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg">
// // //     {text}
// // //   </div>
// // // );

// // // const UserSpeechBubble = ({ text }: { text: string }) => (
// // //   <div className="absolute top-70 left-3/4 transform -translate-x-1/2 bg-blue-200 p-3 rounded-lg shadow-lg">
// // //     {text}
// // //   </div>
// // // );

// // // const MeetControls = ({ onToggleMic, onToggleCamera, isMicOn, isCameraOn }: any) => (
// // //   <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 bg-gray-900 p-3 rounded-lg shadow-lg">
// // //     <button 
// // //       onClick={onToggleMic} 
// // //       className={`p-3 rounded ${isMicOn ? 'bg-green-500' : 'bg-red-500'}`}
// // //     >🎤︎</button>
// // //     <button 
// // //       onClick={onToggleCamera} 
// // //       className={`p-3 rounded ${isCameraOn ? 'bg-green-500' : 'bg-red-500'}`}
// // //     >[◉°]</button>
// // //   </div>
// // // );

// // // const VirtualInterview = () => {
// // //   const [isCameraOn, setCameraOn] = useState(false);
// // //   const [isMicOn, setMicOn] = useState(false);
// // //   const [speech, setSpeech] = useState("Welcome to the interview, let's get started.");
// // //   const [userSpeech, setUserSpeech] = useState("");
// // //   const [currentQuestion, setCurrentQuestion] = useState("");
// // //   const [questionIndex, setQuestionIndex] = useState(0);
// // //   const [isFeedbackPage, setIsFeedbackPage] = useState(false);
// // //   const [feedback, setFeedback] = useState("");
// // //   const [isInterviewOver, setIsInterviewOver] = useState(false);
// // //   const videoRef = useRef<HTMLVideoElement | null>(null);
// // //   const recognitionRef = useRef<any>(null);

// // //   // Fetch question from the server
// // //   const fetchQuestion = async () => {
// // //     try {
// // //       const response = await fetch("http://localhost:8000/api/practice/question");
// // //       if (!response.ok) throw new Error("Failed to fetch question");
// // //       const data = await response.json();
// // //       setCurrentQuestion(data.ques || "Error fetching question");
// // //     } catch (error) {
// // //       console.error("Error fetching question:", error);
// // //       setCurrentQuestion("Error fetching question");
// // //     }
// // //   };

// // //   // Fetch feedback from the server
// // //   // const getFeedback = async (message: string) => {
// // //   //   try {
// // //   //     let userEmail = ""; 

// // //   //     const userString = localStorage.getItem("user");
// // //   //     if (userString) {
// // //   //       const user = JSON.parse(userString);
// // //   //       userEmail = user.email; 
// // //   //     }
// // //   //     const res = await fetch("http://localhost:8000/api/mock/feedback", {
// // //   //       method: "POST",
// // //   //       headers: { "Content-Type": "application/json" },
// // //   //       body: JSON.stringify({ question: currentQuestion, message, userEmail }),
// // //   //     });
// // //   //     if (!res.ok) throw new Error("Failed to fetch feedback");
// // //   //     const data = await res.json();
// // //   //     setFeedback(data.message || "No feedback available");
// // //   //   } catch (error) {
// // //   //     console.error("Error getting feedback:", error);
// // //   //     setFeedback("Error fetching feedback");
// // //   //   }
// // //   // };

// // //   // Handle mic and camera toggles
// // //   const toggleCamera = () => {
// // //     setCameraOn((prev) => !prev);
// // //     if (!isCameraOn && navigator.mediaDevices.getUserMedia) {
// // //       navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
// // //         if (videoRef.current) videoRef.current.srcObject = stream;
// // //       });
// // //     } else {
// // //       if (videoRef.current) videoRef.current.srcObject = null;
// // //     }
// // //   };

// // //   const toggleMic = () => {
// // //     setMicOn((prev) => !prev);
// // //     if (!isMicOn) {
// // //       recognitionRef.current?.start();
// // //     } else {
// // //       recognitionRef.current?.stop();
// // //     }
// // //   };

// // //   // Fetch next question from the server
// // //   // const fetchNextQuestion = async () => {
// // //   //   if (questionIndex < 5) {
// // //   //     await fetchQuestion();
// // //   //     setSpeech("Please answer the following question: " + currentQuestion);
// // //   //     setQuestionIndex((prevIndex) => prevIndex + 1);
// // //   //   } else {
// // //   //     setIsInterviewOver(true);
// // //   //     setSpeech("Thank you for your responses. Interview Over.");
// // //   //   }
// // //   // };

// // //   // // Handle submitting the response
// // //   // const handleSubmitResponse = async () => {
// // //   //   if (!userSpeech.trim()) return;

// // //   //   // Fetch feedback after response submission
// // //   //   await getFeedback(userSpeech);

// // //   //   // Show feedback after submission
// // //   //   setIsFeedbackPage(true);
// // //   //   setSpeech("Thank you for your response! Here's your feedback...");

// // //   //   setTimeout(() => {
// // //   //     setSpeech(feedback || "Great job! You answered well.");
// // //   //   }, 2000);
// // //   // };

// // //   // Fetch next question from the server
// // // const fetchNextQuestion = async () => {
// // //   if (questionIndex < 5) {
// // //     setSpeech("...");
// // //     await fetchQuestion();
// // //     setSpeech(`Please answer the following question: ${currentQuestion}`);
// // //     setQuestionIndex((prevIndex) => prevIndex + 1);
// // //   } else {
// // //     setIsInterviewOver(true);
// // //     setSpeech("Thank you for your responses. Interview Over.");
// // //   }
// // // };

// // // // Handle submitting the response
// // // const handleSubmitResponse = async () => {
// // //   if (!userSpeech.trim()) return;

// // //   setSpeech("...");
// // //   await getFeedback(userSpeech);
  
// // //   setIsFeedbackPage(true);
// // //   setTimeout(() => {
// // //     setSpeech(feedback || "Great job! You answered well.");
// // //   }, 2000);
// // // };

// // // // Fetch feedback from the server
// // // const getFeedback = async (message: string) => {
// // //   try {
// // //     let userEmail = ""; 
// // //     const userString = localStorage.getItem("user");
// // //     if (userString) {
// // //       const user = JSON.parse(userString);
// // //       userEmail = user.email; 
// // //     }

// // //     const res = await fetch("http://localhost:8000/api/mock/feedback", {
// // //       method: "POST",
// // //       headers: { "Content-Type": "application/json" },
// // //       body: JSON.stringify({ question: currentQuestion, message, userEmail }),
// // //     });

// // //     if (!res.ok) throw new Error("Failed to fetch feedback");
// // //     const data = await res.json();
// // //     setFeedback(data.message || "No feedback available");
// // //     setSpeech(data.message || "Great job! You answered well.");
// // //   } catch (error) {
// // //     console.error("Error getting feedback:", error);
// // //     setFeedback("Error fetching feedback");
// // //     setSpeech("Error fetching feedback.");
// // //   }
// // // };


// // //   useEffect(() => {
// // //     if ("webkitSpeechRecognition" in window) {
// // //       recognitionRef.current = new (window as any).webkitSpeechRecognition();
// // //       recognitionRef.current.continuous = true;
// // //       recognitionRef.current.interimResults = false;
// // //       recognitionRef.current.lang = "en-US";

// // //       recognitionRef.current.onresult = (event: any) => {
// // //         const transcript = event.results[event.results.length - 1][0].transcript;
// // //         setUserSpeech(transcript);
// // //       };
// // //     }
// // //   }, []);

// // //   return (
// // //     <div className="relative flex flex-col h-screen">
// // //       <HeaderImmerse />
// // //       <div className="flex-grow relative">
// // //         <Canvas shadows camera={{ position: [0, 0, 5], fov: 8 }}>
// // //           <Experience />
// // //         </Canvas>
// // //         <SpeechBubble text={speech} />
// // //         <UserSpeechBubble text={userSpeech} />
// // //         <MeetControls onToggleMic={toggleMic} onToggleCamera={toggleCamera} isMicOn={isMicOn} isCameraOn={isCameraOn} />
// // //         {isCameraOn && (
// // //           <video ref={videoRef} autoPlay className="absolute bottom-10 right-4 w-50 h-38 border rounded" />
// // //         )}

// // //         {/* Initial Screen with Get Started Button */}
// // //         {questionIndex === 0 && !isFeedbackPage && !isInterviewOver && (
// // //           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
// // //             <button
// // //               onClick={fetchNextQuestion}
// // //               className="bg-purple-500 text-white p-4 rounded-lg shadow-lg hover:bg-purple-600 transition"
// // //             >
// // //               Get Started
// // //             </button>
// // //           </div>
// // //         )}

// // //         {/* User's response and feedback section */}
// // //         {questionIndex > 0 && !isFeedbackPage && !isInterviewOver && (
// // //           <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-80 text-center">
// // //             <textarea
// // //               value={userSpeech}
// // //               onChange={(e) => setUserSpeech(e.target.value)}
// // //               placeholder="Type your response..."
// // //               className="border p-2 rounded w-full focus:outline-none resize-none overflow-hidden"
// // //               rows={3}
// // //             />
// // //             <button
// // //               onClick={handleSubmitResponse}
// // //               disabled={questionIndex >= 5}
// // //               className="mt-4 bg-purple-500 text-white p-4 rounded-lg shadow-lg hover:bg-purple-600 transition"
// // //             >
// // //               {questionIndex >= 5 ? "Interview Over" : "Submit Response"}
// // //             </button>
// // //           </div>
// // //         )}

// // //         {/* Feedback page */}
// // //         {isFeedbackPage && (
// // //           <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
// // //             <button
// // //               onClick={() => {
// // //                 setIsFeedbackPage(false);
// // //                 fetchNextQuestion();
// // //               }}
// // //               className="bg-purple-500 text-white p-4 rounded-lg shadow-lg hover:bg-purple-600 transition"
// // //             >
// // //               Next Question
// // //             </button>
// // //           </div>
// // //         )}

// // //         {/* Interview Over message */}
// // //         {isInterviewOver && (
// // //           <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
// // //             <button
// // //               onClick={() => window.location.reload()}
// // //               className="bg-purple-500 text-white p-4 rounded-lg shadow-lg hover:bg-purple-600 transition"
// // //             >
// // //               Start a New Interview
// // //             </button>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default VirtualInterview;



// // import { useState, useEffect, useRef } from "react";
// // import { Canvas } from "@react-three/fiber";
// // import HeaderImmerse from "../components/header-immerse";
// // import { Experience } from "../components/Experience";

// // const SpeechBubble = ({ text }: { text: string }) => (
// //   <div className="absolute top-10 left-1/4 right-2/4 transform -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg">
// //     {text}
// //   </div>
// // );

// // const UserSpeechBubble = ({ text }: { text: string }) => (
// //   <div className="absolute bottom-24 left-3/4 transform -translate-x-1/2 bg-blue-200 p-3 rounded-lg shadow-lg">
// //     {text}
// //   </div>
// // );

// // const MeetControls = ({ onToggleMic, onToggleCamera, isMicOn, isCameraOn }: any) => (
// //   <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4 bg-gray-900 p-3 rounded-lg shadow-lg">
// //     <button 
// //       onClick={onToggleMic} 
// //       className={`p-3 rounded ${isMicOn ? 'bg-green-500' : 'bg-red-500'}`}
// //     >🎤︎</button>
// //     <button 
// //       onClick={onToggleCamera} 
// //       className={`p-3 rounded ${isCameraOn ? 'bg-green-500' : 'bg-red-500'}`}
// //     >[◉°]</button>
// //   </div>
// // );

// // const VirtualInterview = () => {
// //   const [isCameraOn, setCameraOn] = useState(false);
// //   const [isMicOn, setMicOn] = useState(false);
// //   const [speech, setSpeech] = useState("Welcome to the interview, let's get started.");
// //   const [userSpeech, setUserSpeech] = useState("");
// //   const [currentQuestion, setCurrentQuestion] = useState("");
// //   const [questionIndex, setQuestionIndex] = useState(0);
// //   const [isFeedbackPage, setIsFeedbackPage] = useState(false);
// //   const [feedback, setFeedback] = useState("");
// //   const [isInterviewOver, setIsInterviewOver] = useState(false);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const videoRef = useRef<HTMLVideoElement | null>(null);
// //   const recognitionRef = useRef<any>(null);
// //   const streamRef = useRef<MediaStream | null>(null);

// //   const toggleCamera = async () => {
// //     if (!isCameraOn) {
// //       try {
// //         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
// //         streamRef.current = stream;
// //         if (videoRef.current) {
// //           videoRef.current.srcObject = stream;
// //         }
// //         setCameraOn(true);
// //       } catch (error) {
// //         console.error("Error enabling camera:", error);
// //       }
// //     } else {
// //       if (streamRef.current) {
// //         streamRef.current.getTracks().forEach(track => track.stop());
// //       }
// //       setCameraOn(false);
// //     }
// //   };

// //   const toggleMic = async () => {
// //     setMicOn((prev) => !prev);
// //   };

// //   const fetchQuestion = async () => {
// //     setIsLoading(true);
// //     try {
// //       const response = await fetch("http://localhost:8000/api/practice/question");
// //       if (!response.ok) throw new Error("Failed to fetch question");
// //       const data = await response.json();
// //       setCurrentQuestion(data.ques || "Error fetching question");
// //       setSpeech("Please answer the following question: " + data.ques);
// //     } catch (error) {
// //       console.error("Error fetching question:", error);
// //       setCurrentQuestion("Error fetching question");
// //       setSpeech("Error fetching question.");
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   const getFeedback = async (message: string) => {
// //     setIsLoading(true);
// //     try {
// //         let userEmail = ""; 
// //         const userString = localStorage.getItem("user");
// //         if (userString) {
// //             const user = JSON.parse(userString);
// //             userEmail = user.email; 
// //         }
        
// //         const res = await fetch("http://localhost:8000/api/mock/feedback", {
// //             method: "POST",
// //             headers: { "Content-Type": "application/json" },
// //             body: JSON.stringify({ question: currentQuestion, message, userEmail }),
// //         });

// //         if (!res.ok) throw new Error("Failed to fetch feedback");

// //         const data = await res.json();
        
// //         if (data.message) {
// //             setFeedback(data.message); // ✅ Ensure feedback is stored
// //             setIsFeedbackPage(true); // ✅ Only set after feedback is ready
// //         } else {
// //             setFeedback("No feedback available.");
// //             setIsFeedbackPage(true);
// //         }
// //     } catch (error) {
// //         console.error("Error getting feedback:", error);
// //         setFeedback("Error fetching feedback");
// //         setIsFeedbackPage(true);
// //     } finally {
// //         setIsLoading(false);
// //     }
// // };


// //   const fetchNextQuestion = async () => {
// //     if (questionIndex < 5) {
// //       await fetchQuestion();
// //       setQuestionIndex((prevIndex) => prevIndex + 1);
// //       setUserSpeech("");  // Reset user response
// //       setIsFeedbackPage(false);
// //     } else {
// //       setIsInterviewOver(true);
// //       setSpeech("Thank you for your responses. Interview Over.");
// //     }
// //   };

// //   const handleSubmitResponse = async () => {
// //     if (!userSpeech.trim()) return;
// //     await getFeedback(userSpeech);
// //     setSpeech("Thank you for your response! Here's your feedback...");
// //   };

// //   return (
// //     <div className="relative flex flex-col h-screen">
// //       <HeaderImmerse />
// //       <div className="flex-grow relative">
// //         <Canvas shadows camera={{ position: [0, 0, 5], fov: 8 }}>
// //           <Experience />
// //         </Canvas>
// //         <SpeechBubble text={isLoading ? "..." : speech} />
// //         <UserSpeechBubble text={userSpeech} />
// //         <MeetControls onToggleMic={toggleMic} onToggleCamera={toggleCamera} isMicOn={isMicOn} isCameraOn={isCameraOn} />

// //         {isCameraOn && (
// //           <video ref={videoRef} autoPlay className="absolute bottom-10 right-4 w-50 h-38 border rounded" />
// //         )}

// //         {/* User Input Box */}
// //         {!isFeedbackPage && !isInterviewOver && (
// //           <div className="absolute bottom-30 left-1/2 transform -translate-x-1/2 w-1/4">
// //             <textarea
// //               value={userSpeech}
// //               onChange={(e) => setUserSpeech(e.target.value)}
// //               placeholder="Type your response here..."
// //               className="w-full p-3 border rounded-lg shadow-lg"
// //               rows={3}
// //             />
// //           </div>
// //         )}

// //         {/* Buttons */}
// //         <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
// //           {!isFeedbackPage && !isInterviewOver && (
// //             questionIndex === 0 ? (
// //               <button onClick={fetchNextQuestion} className="bg-purple-500 text-white p-4 rounded-lg shadow-lg">
// //                 Get Started
// //               </button>
// //             ) : (
// //               <button onClick={handleSubmitResponse} className="bg-green-500 text-white p-4 rounded-lg shadow-lg">
// //                 Submit Answer
// //               </button>
// //             )
// //           )}

// //           {isFeedbackPage && feedback && (
// //               <div className="absolute bottom-1 width-50% transform -translate-x-1/4  bg-gray-100 p-3 rounded-lg shadow-lg">
// //                   <h3 className="font-bold">Feedback:</h3>
// //                   <p>{feedback}</p>
// //                   <button onClick={fetchNextQuestion} className="bg-purple-500 text-white p-4 rounded-lg shadow-lg mt-3">
// //                       Next Question
// //                   </button>
// //               </div>
// //           )}

// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default VirtualInterview;




// import { useState, useEffect, useRef } from "react";
// import { Canvas } from "@react-three/fiber";
// import HeaderImmerse from "../components/header-immerse";
// import { Experience } from "../components/Experience";

// const SpeechBubble = ({ text }: { text: string }) => (
//   <div className="absolute top-10 left-1/4 right-2/4 transform -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg">
//     {text}
//   </div>
// );

// const UserSpeechBubble = ({ text }: { text: string }) => (
//   <div className="absolute bottom-24 left-3/4 transform -translate-x-1/2 bg-blue-200 p-3 rounded-lg shadow-lg">
//     {text}
//   </div>
// );

// const MeetControls = ({ onToggleMic, onToggleCamera, isMicOn, isCameraOn }: any) => (
//   <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4 bg-gray-900 p-3 rounded-lg shadow-lg">
//     <button 
//       onClick={onToggleMic} 
//       className={`p-3 rounded ${isMicOn ? 'bg-green-500' : 'bg-red-500'}`}
//     >🎤︎</button>
//     <button 
//       onClick={onToggleCamera} 
//       className={`p-3 rounded ${isCameraOn ? 'bg-green-500' : 'bg-red-500'}`}
//     >[◉°]</button>
//   </div>
// );

// const VirtualInterview = () => {
//   const [isCameraOn, setCameraOn] = useState(false);
//   const [isMicOn, setMicOn] = useState(false);
//   const [speech, setSpeech] = useState("Welcome to the interview, let's get started.");
//   const [userSpeech, setUserSpeech] = useState("");
//   const [currentQuestion, setCurrentQuestion] = useState("");
//   const [questionIndex, setQuestionIndex] = useState(0);
//   const [isInterviewOver, setIsInterviewOver] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const streamRef = useRef<MediaStream | null>(null);

//   const toggleCamera = async () => {
//     if (!isCameraOn) {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//         streamRef.current = stream;
//         if (videoRef.current) {
//           videoRef.current.srcObject = stream;
//         }
//         setCameraOn(true);
//       } catch (error) {
//         console.error("Error enabling camera:", error);
//       }
//     } else {
//       if (streamRef.current) {
//         streamRef.current.getTracks().forEach(track => track.stop());
//       }
//       setCameraOn(false);
//     }
//   };

//   const toggleMic = async () => {
//     setMicOn((prev) => !prev);
//   };

//   const fetchQuestion = async () => {
//     setIsLoading(true);
//     try {
//       const response = await fetch("http://localhost:8000/api/practice/question");
//       if (!response.ok) throw new Error("Failed to fetch question");
//       const data = await response.json();
//       setCurrentQuestion(data.ques || "Error fetching question");
//       setSpeech("Please answer the following question: " + data.ques);
//     } catch (error) {
//       console.error("Error fetching question:", error);
//       setCurrentQuestion("Error fetching question");
//       setSpeech("Error fetching question.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const getFeedback = async (message: string) => {
//     setIsLoading(true);
//     try {
//         let userEmail = ""; 
//         const userString = localStorage.getItem("user");
//         if (userString) {
//             const user = JSON.parse(userString);
//             userEmail = user.email; 
//         }
        
//         const res = await fetch("http://localhost:8000/api/mock/feedback", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ question: currentQuestion, message, userEmail }),
//         });

//         if (!res.ok) throw new Error("Failed to fetch feedback");

//         const data = await res.json();
        
//         if (data.message) {
//             setSpeech(`Thank you for your response! Here's your feedback: ${data.message}`);
//         } else {
//             setSpeech("No feedback available.");
//         }
//     } catch (error) {
//         console.error("Error getting feedback:", error);
//         setSpeech("Error fetching feedback.");
//     } finally {
//         setIsLoading(false);
//     }
//   };

//   const fetchNextQuestion = async () => {
//     if (questionIndex < 5) {
//       await fetchQuestion();
//       setQuestionIndex((prevIndex) => prevIndex + 1);
//       setUserSpeech("");  // Reset user response
//     } else {
//       setIsInterviewOver(true);
//       setSpeech("Thank you for your responses. Interview Over.");
//     }
//   };

//   const handleSubmitResponse = async () => {
//     if (!userSpeech.trim()) return;
//     await getFeedback(userSpeech);
//   };

//   return (
//     <div className="relative flex flex-col h-screen">
//       <HeaderImmerse />
//       <div className="flex-grow relative">
//         <Canvas shadows camera={{ position: [0, 0, 5], fov: 8 }}>
//           <Experience />
//         </Canvas>
//         <SpeechBubble text={isLoading ? "..." : speech} />
//         <UserSpeechBubble text={userSpeech} />
//         <MeetControls onToggleMic={toggleMic} onToggleCamera={toggleCamera} isMicOn={isMicOn} isCameraOn={isCameraOn} />

//         {isCameraOn && (
//           <video ref={videoRef} autoPlay className="absolute bottom-10 right-4 w-50 h-38 border rounded" />
//         )}

//         {/* User Input Box */}
//         {!isInterviewOver && (
//           <div className="absolute bottom-30 left-1/2 transform -translate-x-1/2 w-1/4">
//             <textarea
//               value={userSpeech}
//               onChange={(e) => setUserSpeech(e.target.value)}
//               placeholder="Type your response here..."
//               className="w-full p-3 border rounded-lg shadow-lg"
//               rows={3}
//             />
//           </div>
//         )}

//         {/* Buttons */}
//         <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
//           {!isInterviewOver && (
//             questionIndex === 0 ? (
//               <button onClick={fetchNextQuestion} className="bg-purple-500 text-white p-4 rounded-lg shadow-lg">
//                 Get Started
//               </button>
//             ) : (
//               <button onClick={handleSubmitResponse} className="bg-green-500 text-white p-4 rounded-lg shadow-lg">
//                 Submit Answer
//               </button>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VirtualInterview;


import { useState, useEffect, useRef } from "react";
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
      const response = await fetch("http://localhost:8000/api/practice/question");
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
        
        const res = await fetch("http://localhost:8000/api/mock/feedback", {
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
      const res = await fetch("http://localhost:8000/api/mock/attempts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userEmail }),
      });
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
