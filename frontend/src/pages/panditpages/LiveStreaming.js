// // // import React, { useState, useRef, useEffect } from 'react';
// // // import { Link } from 'react-router-dom';

// // // // Icons
// // // const Icons = {
// // //   VideoCamera: () => (
// // //     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
// // //     </svg>
// // //   ),
// // //   Microphone: () => (
// // //     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
// // //     </svg>
// // //   ),
// // //   Camera: () => (
// // //     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
// // //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
// // //     </svg>
// // //   ),
// // //   Record: () => (
// // //     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
// // //     </svg>
// // //   ),
// // //   Stop: () => (
// // //     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// // //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
// // //     </svg>
// // //   ),
// // //   Download: () => (
// // //     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
// // //     </svg>
// // //   ),
// // //   Settings: () => (
// // //     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
// // //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
// // //     </svg>
// // //   ),
// // //   Users: () => (
// // //     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
// // //     </svg>
// // //   )
// // // };

// // // const LiveStreaming = () => {
// // //   // State management
// // //   const [isLive, setIsLive] = useState(false);
// // //   const [isRecording, setIsRecording] = useState(false);
// // //   const [streamTitle, setStreamTitle] = useState('Daily Morning Aarti');
// // //   const [participants, setParticipants] = useState(12);
// // //   const [videoDevices, setVideoDevices] = useState([]);
// // //   const [audioDevices, setAudioDevices] = useState([]);
// // //   const [selectedVideo, setSelectedVideo] = useState('');
// // //   const [selectedAudio, setSelectedAudio] = useState('');
// // //   const [recordings, setRecordings] = useState([]);
  
// // //   // Refs for video elements
// // //   const liveVideoRef = useRef(null);
// // //   const previewVideoRef = useRef(null);
// // //   const mediaRecorderRef = useRef(null);
// // //   const recordedChunksRef = useRef([]);

// // //   // Simulate getting devices
// // //   useEffect(() => {
// // //     // In a real app, you would use navigator.mediaDevices.enumerateDevices()
// // //     setVideoDevices([
// // //       { id: 'cam1', label: 'Front Camera' },
// // //       { id: 'cam2', label: 'External Webcam' }
// // //     ]);
// // //     setAudioDevices([
// // //       { id: 'mic1', label: 'Built-in Microphone' },
// // //       { id: 'mic2', label: 'External Mic' }
// // //     ]);
// // //     setSelectedVideo('cam1');
// // //     setSelectedAudio('mic1');
    
// // //     // Sample recordings
// // //     setRecordings([
// // //       { id: 1, title: 'Morning Aarti - Jan 15', date: '2024-01-15', duration: '45:22', size: '256 MB' },
// // //       { id: 2, title: 'Satyanarayan Puja', date: '2024-01-10', duration: '2:15:42', size: '1.2 GB' },
// // //       { id: 3, title: 'Griha Pravesh Ceremony', date: '2024-01-05', duration: '1:30:15', size: '850 MB' }
// // //     ]);
// // //   }, []);

// // //   // Start live stream
// // //   const startStream = async () => {
// // //     try {
// // //       // In a real app, you would use:
// // //       // const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
// // //       // liveVideoRef.current.srcObject = stream;
// // //       setIsLive(true);
      
// // //       // Simulate participants joining
// // //       const interval = setInterval(() => {
// // //         setParticipants(prev => prev + Math.floor(Math.random() * 3));
// // //       }, 3000);
      
// // //       return () => clearInterval(interval);
// // //     } catch (err) {
// // //       console.error('Error starting stream:', err);
// // //     }
// // //   };

// // //   // Stop live stream
// // //   const stopStream = () => {
// // //     // In a real app: liveVideoRef.current.srcObject.getTracks().forEach(track => track.stop());
// // //     setIsLive(false);
// // //     if (isRecording) stopRecording();
// // //     setParticipants(12);
// // //   };

// // //   // Start recording
// // //   const startRecording = () => {
// // //     // In a real app, you would set up MediaRecorder
// // //     recordedChunksRef.current = [];
// // //     setIsRecording(true);
    
// // //     // Simulate recording
// // //     mediaRecorderRef.current = {
// // //       ondataavailable: (e) => recordedChunksRef.current.push(e.data),
// // //       stop: () => {
// // //         // Create a sample recording entry
// // //         const newRecording = {
// // //           id: recordings.length + 1,
// // //           title: `Recording - ${new Date().toLocaleDateString()}`,
// // //           date: new Date().toISOString().split('T')[0],
// // //           duration: '00:45:00',
// // //           size: '300 MB'
// // //         };
// // //         setRecordings(prev => [newRecording, ...prev]);
// // //       }
// // //     };
// // //   };

// // //   // Stop recording
// // //   const stopRecording = () => {
// // //     if (mediaRecorderRef.current) {
// // //       mediaRecorderRef.current.stop();
// // //       setIsRecording(false);
// // //     }
// // //   };

// // //   // Download recording
// // //   const downloadRecording = (id) => {
// // //     // In a real app, you would use the recorded blob
// // //     alert(`Downloading recording ${id}`);
// // //   };

// // //   return (
// // //     <div className="space-y-6">
// // //       {/* Stream Title and Controls */}
// // //       <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
// // //         <div>
// // //           <h2 className="text-2xl font-bold text-orange-800">Live Streaming</h2>
// // //           <input
// // //             type="text"
// // //             value={streamTitle}
// // //             onChange={(e) => setStreamTitle(e.target.value)}
// // //             className="text-xl font-medium text-gray-700 bg-transparent border-b border-orange-200 focus:border-orange-500 focus:outline-none"
// // //           />
// // //         </div>
        
// // //         <div className="flex space-x-3">
// // //           {!isLive ? (
// // //             <button
// // //               onClick={startStream}
// // //               className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
// // //             >
// // //               <Icons.VideoCamera />
// // //               <span>Go Live</span>
// // //             </button>
// // //           ) : (
// // //             <button
// // //               onClick={stopStream}
// // //               className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg"
// // //             >
// // //               <Icons.Stop />
// // //               <span>End Stream</span>
// // //             </button>
// // //           )}
          
// // //           {isLive && !isRecording ? (
// // //             <button
// // //               onClick={startRecording}
// // //               className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg"
// // //             >
// // //               <Icons.Record />
// // //               <span>Record</span>
// // //             </button>
// // //           ) : null}
          
// // //           {isRecording && (
// // //             <button
// // //               onClick={stopRecording}
// // //               className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
// // //             >
// // //               <Icons.Stop />
// // //               <span>Stop Recording</span>
// // //             </button>
// // //           )}
// // //         </div>
// // //       </div>

// // //       {/* Video Area */}
// // //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// // //         {/* Main Stream */}
// // //         <div className="lg:col-span-2 bg-black rounded-xl overflow-hidden relative">
// // //           {isLive ? (
// // //             <video
// // //               ref={liveVideoRef}
// // //               autoPlay
// // //               muted
// // //               className="w-full h-full object-cover"
// // //               style={{ minHeight: '400px' }}
// // //             />
// // //           ) : (
// // //             <div className="flex items-center justify-center bg-gray-900 text-white h-full min-h-[400px]">
// // //               <div className="text-center p-6">
// // //                 <Icons.VideoCamera className="mx-auto h-12 w-12 text-gray-400" />
// // //                 <p className="mt-4 text-xl">Stream is offline</p>
// // //                 <p className="text-gray-400">Start your live stream to begin</p>
// // //               </div>
// // //             </div>
// // //           )}
          
// // //           {/* Stream Info Overlay */}
// // //           {isLive && (
// // //             <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-2 rounded-lg">
// // //               <div className="flex items-center space-x-2">
// // //                 <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
// // //                 <span>LIVE</span>
// // //                 {isRecording && (
// // //                   <span className="flex items-center ml-4">
// // //                     <span className="w-3 h-3 bg-red-500 rounded-full mr-1"></span>
// // //                     <span>REC</span>
// // //                   </span>
// // //                 )}
// // //               </div>
// // //             </div>
// // //           )}
          
// // //           {/* Participants Count */}
// // //           {isLive && (
// // //             <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-2 rounded-lg flex items-center">
// // //               <Icons.Users className="mr-2" />
// // //               <span>{participants} watching</span>
// // //             </div>
// // //           )}
// // //         </div>
        
// // //         {/* Stream Controls and Info */}
// // //         <div className="space-y-6">
// // //           {/* Device Settings */}
// // //           <div className="bg-white rounded-xl shadow-md p-4">
// // //             <h3 className="font-bold text-orange-800 mb-3 flex items-center">
// // //               <Icons.Settings className="mr-2" />
// // //               Stream Settings
// // //             </h3>
            
// // //             <div className="space-y-4">
// // //               <div>
// // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Video Source</label>
// // //                 <select
// // //                   value={selectedVideo}
// // //                   onChange={(e) => setSelectedVideo(e.target.value)}
// // //                   className="w-full p-2 border rounded-lg"
// // //                 >
// // //                   {videoDevices.map(device => (
// // //                     <option key={device.id} value={device.id}>{device.label}</option>
// // //                   ))}
// // //                 </select>
// // //               </div>
              
// // //               <div>
// // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Audio Source</label>
// // //                 <select
// // //                   value={selectedAudio}
// // //                   onChange={(e) => setSelectedAudio(e.target.value)}
// // //                   className="w-full p-2 border rounded-lg"
// // //                 >
// // //                   {audioDevices.map(device => (
// // //                     <option key={device.id} value={device.id}>{device.label}</option>
// // //                   ))}
// // //                 </select>
// // //               </div>
              
// // //               <div className="flex space-x-2">
// // //                 <button className="flex items-center justify-center p-2 bg-gray-100 hover:bg-gray-200 rounded-lg">
// // //                   <Icons.Microphone className="text-gray-700" />
// // //                 </button>
// // //                 <button className="flex items-center justify-center p-2 bg-gray-100 hover:bg-gray-200 rounded-lg">
// // //                   <Icons.Camera className="text-gray-700" />
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>
          
// // //           {/* Preview */}
// // //           <div className="bg-white rounded-xl shadow-md p-4">
// // //             <h3 className="font-bold text-orange-800 mb-3">Your Preview</h3>
// // //             <div className="bg-gray-200 rounded-lg overflow-hidden">
// // //               <video
// // //                 ref={previewVideoRef}
// // //                 autoPlay
// // //                 muted
// // //                 className="w-full h-32 object-cover"
// // //               />
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
      
// // //       {/* Recordings Section */}
// // //       <div className="bg-white rounded-xl shadow-md p-6">
// // //         <h3 className="text-xl font-bold text-orange-800 mb-4">Previous Recordings</h3>
        
// // //         {recordings.length > 0 ? (
// // //           <div className="overflow-x-auto">
// // //             <table className="min-w-full divide-y divide-gray-200">
// // //               <thead className="bg-gray-50">
// // //                 <tr>
// // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
// // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
// // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
// // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
// // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody className="bg-white divide-y divide-gray-200">
// // //                 {recordings.map(recording => (
// // //                   <tr key={recording.id}>
// // //                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{recording.title}</td>
// // //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{recording.date}</td>
// // //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{recording.duration}</td>
// // //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{recording.size}</td>
// // //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// // //                       <button
// // //                         onClick={() => downloadRecording(recording.id)}
// // //                         className="text-orange-600 hover:text-orange-800 flex items-center"
// // //                       >
// // //                         <Icons.Download className="mr-1" />
// // //                         Download
// // //                       </button>
// // //                     </td>
// // //                   </tr>
// // //                 ))}
// // //               </tbody>
// // //             </table>
// // //           </div>
// // //         ) : (
// // //           <p className="text-gray-500">No recordings available yet</p>
// // //         )}
// // //       </div>
      
// // //       {/* Pooja Resources */}
// // //       <div className="bg-white rounded-xl shadow-md p-6">
// // //         <h3 className="text-xl font-bold text-orange-800 mb-4">Pooja Resources</h3>
// // //         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// // //           {[
// // //             { name: 'Mantras', icon: '📿', count: 24 },
// // //             { name: 'Bhajans', icon: '🎵', count: 15 },
// // //             { name: 'Aartis', icon: '🪔', count: 8 },
// // //             { name: 'Scriptures', icon: '📖', count: 5 }
// // //           ].map((item) => (
// // //             <div key={item.name} className="border rounded-lg p-4 hover:bg-orange-50 transition cursor-pointer">
// // //               <div className="text-3xl mb-2">{item.icon}</div>
// // //               <h4 className="font-medium">{item.name}</h4>
// // //               <p className="text-sm text-gray-500">{item.count} files</p>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default LiveStreaming;

// // import React, { useState, useRef, useEffect } from 'react';
// // import { 
// //   Cast, 
// //   Video, 
// //   Mic, 
// //   Camera, 
// //   Settings, 
// //   Users, 
// //   PhoneCall, 
// //   UserPlus, 
// //   Calendar, 
// //   Watch,
// //   Pause,
// //   Play,
// //   Save
// // } from 'lucide-react';

// // const LiveStreamingPage = () => {
// //   // State Management
// //   const [isLive, setIsLive] = useState(false);
// //   const [isRecording, setIsRecording] = useState(false);
// //   const [streamTitle, setStreamTitle] = useState('Daily Morning Aarti');
// //   const [participants, setParticipants] = useState(0);
// //   const [upcomingPoojas, setUpcomingPoojas] = useState([
// //     {
// //       id: 1,
// //       title: 'Ganesh Puja',
// //       date: '2025-04-15',
// //       time: '10:00 AM',
// //       type: 'Live Stream'
// //     },
// //     {
// //       id: 2,
// //       title: 'Satyanarayan Puja',
// //       date: '2025-04-20', 
// //       time: '11:30 AM',
// //       type: 'Private Consultation'
// //     }
// //   ]);

// //   // Video Call States
// //   const [isVideoCallActive, setIsVideoCallActive] = useState(false);
// //   const [videoCallParticipants, setVideoCallParticipants] = useState([]);

// //   // Recordings Management
// //   const [recordings, setRecordings] = useState([
// //     {
// //       id: 1,
// //       title: 'Morning Aarti',
// //       date: '2025-03-15',
// //       duration: '45:22',
// //       viewCount: 1024
// //     },
// //     {
// //       id: 2, 
// //       title: 'Ganesh Puja Explanation',
// //       date: '2025-03-10',
// //       duration: '1:22:45',
// //       viewCount: 756
// //     }
// //   ]);

// //   // Religious Resources
// //   const [resources, setResources] = useState([
// //     {
// //       id: 1,
// //       name: 'Vedic Mantras',
// //       type: 'Audio',
// //       count: 50,
// //       icon: '🕉️'
// //     },
// //     {
// //       id: 2, 
// //       name: 'Puja Vidhi',
// //       type: 'Document',
// //       count: 25,
// //       icon: '📜'
// //     }
// //   ]);

// //   // Stream Control Functions
// //   const startLiveStream = () => {
// //     setIsLive(true);
// //     setParticipants(Math.floor(Math.random() * 50) + 10);
// //   };

// //   const stopLiveStream = () => {
// //     setIsLive(false);
// //     setParticipants(0);
// //     if (isRecording) {
// //       stopRecording();
// //     }
// //   };

// //   const startRecording = () => {
// //     setIsRecording(true);
// //   };

// //   const stopRecording = () => {
// //     setIsRecording(false);
// //     // Save recording logic would go here
// //     const newRecording = {
// //       id: recordings.length + 1,
// //       title: `${streamTitle} - ${new Date().toLocaleDateString()}`,
// //       date: new Date().toISOString().split('T')[0],
// //       duration: '45:00',
// //       viewCount: 0
// //     };
// //     setRecordings([newRecording, ...recordings]);
// //   };

// //   // Video Call Functions
// //   const initiateVideoCall = () => {
// //     setIsVideoCallActive(true);
// //     // Simulate adding participants
// //     setVideoCallParticipants([
// //       { id: 1, name: 'Devotee 1' },
// //       { id: 2, name: 'Devotee 2' }
// //     ]);
// //   };

// //   const endVideoCall = () => {
// //     setIsVideoCallActive(false);
// //     setVideoCallParticipants([]);
// //   };

// //   return (
// //     <div className="bg-orange-50 min-h-screen p-6">
// //       <div className="container mx-auto space-y-6">
// //         {/* Header */}
// //         <div className="flex justify-between items-center">
// //           <h1 className="text-3xl font-bold text-orange-800">Live Streaming Platform</h1>
// //           <div className="flex space-x-4">
// //             <button 
// //               onClick={initiateVideoCall}
// //               className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
// //             >
// //               <PhoneCall />
// //               <span>Start Video Call</span>
// //             </button>
// //             {isLive ? (
// //               <button 
// //                 onClick={stopLiveStream}
// //                 className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
// //               >
// //                 <Cast />
// //                 <span>End Stream</span>
// //               </button>
// //             ) : (
// //               <button 
// //                 onClick={startLiveStream}
// //                 className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
// //               >
// //                 <Cast />
// //                 <span>Go Live</span>
// //               </button>
// //             )}
// //           </div>
// //         </div>

// //         {/* Main Streaming Area */}
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //           {/* Live Stream Preview */}
// //           <div className="md:col-span-2 bg-black rounded-xl min-h-[400px] relative">
// //             {isLive ? (
// //               <div className="w-full h-full bg-gray-900 flex items-center justify-center text-white">
// //                 Live Stream Active
// //               </div>
// //             ) : (
// //               <div className="w-full h-full bg-gray-900 flex items-center justify-center text-white">
// //                 Stream Offline
// //               </div>
// //             )}

// //             {/* Stream Overlay */}
// //             {isLive && (
// //               <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded-lg flex items-center space-x-2">
// //                 <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
// //                 <span>LIVE</span>
// //                 <span className="ml-2 flex items-center">
// //                   <Users className="mr-2" />
// //                   {participants} Watching
// //                 </span>
// //               </div>
// //             )}
// //           </div>

// //           {/* Stream Controls */}
// //           <div className="space-y-4">
// //             <div className="bg-white rounded-xl p-4 shadow-md">
// //               <h3 className="font-bold text-orange-800 mb-3">Stream Settings</h3>
// //               <input 
// //                 type="text"
// //                 value={streamTitle}
// //                 onChange={(e) => setStreamTitle(e.target.value)}
// //                 placeholder="Enter Stream Title"
// //                 className="w-full p-2 border rounded-lg mb-3"
// //               />
// //               <div className="flex space-x-2">
// //                 {!isRecording ? (
// //                   <button 
// //                     onClick={startRecording}
// //                     className="flex-1 bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2"
// //                   >
// //                     <Save />
// //                     <span>Start Recording</span>
// //                   </button>
// //                 ) : (
// //                   <button 
// //                     onClick={stopRecording}
// //                     className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2"
// //                   >
// //                     <Pause />
// //                     <span>Stop Recording</span>
// //                   </button>
// //                 )}
// //               </div>
// //             </div>

// //             {/* Upcoming Poojas */}
// //             <div className="bg-white rounded-xl p-4 shadow-md">
// //               <h3 className="font-bold text-orange-800 mb-3">Upcoming Poojas</h3>
// //               {upcomingPoojas.map(pooja => (
// //                 <div 
// //                   key={pooja.id} 
// //                   className="flex justify-between items-center border-b py-2 last:border-b-0"
// //                 >
// //                   <div>
// //                     <p className="font-medium">{pooja.title}</p>
// //                     <p className="text-sm text-gray-500">{pooja.date} at {pooja.time}</p>
// //                   </div>
// //                   <span className="text-xs bg-orange-100 px-2 py-1 rounded-full">
// //                     {pooja.type}
// //                   </span>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Recordings Section */}
// //         <div className="bg-white rounded-xl p-6 shadow-md">
// //           <h3 className="text-xl font-bold text-orange-800 mb-4">Previous Recordings</h3>
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //             {recordings.map(recording => (
// //               <div 
// //                 key={recording.id} 
// //                 className="border rounded-lg p-4 hover:bg-orange-50 transition"
// //               >
// //                 <h4 className="font-medium">{recording.title}</h4>
// //                 <div className="flex justify-between text-sm text-gray-500 mt-2">
// //                   <span>{recording.date}</span>
// //                   <span>{recording.duration}</span>
// //                 </div>
// //                 <div className="flex items-center text-sm text-gray-600 mt-2">
// //                   <Watch className="mr-2 w-4 h-4" />
// //                   {recording.viewCount} Views
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Religious Resources */}
// //         <div className="bg-white rounded-xl p-6 shadow-md">
// //           <h3 className="text-xl font-bold text-orange-800 mb-4">Religious Resources</h3>
// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //             {resources.map(resource => (
// //               <div 
// //                 key={resource.id} 
// //                 className="border rounded-lg p-4 hover:bg-orange-50 transition cursor-pointer"
// //               >
// //                 <div className="text-3xl mb-2">{resource.icon}</div>
// //                 <h4 className="font-medium">{resource.name}</h4>
// //                 <p className="text-sm text-gray-500">{resource.count} {resource.type}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Video Call Modal (if active) */}
// //         {isVideoCallActive && (
// //           <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
// //             <div className="bg-white rounded-xl p-6 w-full max-w-md">
// //               <h3 className="text-xl font-bold text-orange-800 mb-4">Video Call</h3>
// //               <div className="space-y-4">
// //                 {videoCallParticipants.map(participant => (
// //                   <div 
// //                     key={participant.id} 
// //                     className="flex items-center justify-between border-b pb-2"
// //                   >
// //                     <span>{participant.name}</span>
// //                     <div className="flex space-x-2">
// //                       <button className="bg-green-500 text-white p-2 rounded-full">
// //                         <Mic />
// //                       </button>
// //                       <button className="bg-red-500 text-white p-2 rounded-full">
// //                         <Camera />
// //                       </button>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //               <button 
// //                 onClick={endVideoCall}
// //                 className="w-full mt-4 bg-red-600 text-white px-4 py-2 rounded-lg"
// //               >
// //                 End Call
// //               </button>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default LiveStreamingPage;

// import React, { useState, useRef, useEffect } from 'react';
// import { 
//   Cast, 
//   Video, 
//   Mic, 
//   Camera, 
//   Settings, 
//   Users, 
//   PhoneCall, 
//   UserPlus, 
//   Download,
//   StopCircle,
//   PlayCircle,
//   Calendar,
//   Watch,
//   Pause,
//   Play,
//   Save,
//   Bell,
//   Book,
//   Clock,
//   FileText
// } from 'lucide-react';

// const LiveStreamingPage = () => {
//   // Media Refs
//   const videoRef = useRef(null);
//   const mediaRecorderRef = useRef(null);
//   const recordedChunksRef = useRef([]);

//   // State Management
//   const [isLive, setIsLive] = useState(false);
//   const [isRecording, setIsRecording] = useState(false);
//   const [isVideoCallActive, setIsVideoCallActive] = useState(false);
//   const [streamTitle, setStreamTitle] = useState('Daily Morning Aarti');
//   const [participants, setParticipants] = useState(0);
//   const [mediaStream, setMediaStream] = useState(null);
//   const [recordings, setRecordings] = useState([]);
//   const [videoCallParticipants, setVideoCallParticipants] = useState([]);

//   // Device Selection States
//   const [videoDevices, setVideoDevices] = useState([]);
//   const [audioDevices, setAudioDevices] = useState([]);
//   const [selectedVideoDevice, setSelectedVideoDevice] = useState('');
//   const [selectedAudioDevice, setSelectedAudioDevice] = useState('');

//   // Religious Content
//   const [upcomingPoojas, setUpcomingPoojas] = useState([
//     {
//       id: 1,
//       title: 'Ganesh Puja',
//       date: '2025-04-15',
//       time: '10:00 AM',
//       type: 'Live Stream'
//     },
//     {
//       id: 2,
//       title: 'Satyanarayan Puja',
//       date: '2025-04-20', 
//       time: '11:30 AM',
//       type: 'Private Consultation'
//     }
//   ]);

//   const [resources, setResources] = useState([
//     {
//       id: 1,
//       name: 'Vedic Mantras',
//       type: 'Audio',
//       count: 50,
//       icon: '🕉️'
//     },
//     {
//       id: 2, 
//       name: 'Puja Vidhi',
//       type: 'Document',
//       count: 25,
//       icon: '📜'
//     },
//     {
//       id: 3,
//       name: 'Bhajans',
//       type: 'Audio',
//       count: 35,
//       icon: '🎵'
//     },
//     {
//       id: 4,
//       name: 'Scriptures',
//       type: 'Document',
//       count: 15,
//       icon: '📖'
//     }
//   ]);

//   // Enumerate and select devices
//   useEffect(() => {
//     const getDevices = async () => {
//       try {
//         const devices = await navigator.mediaDevices.enumerateDevices();
//         const videoInputs = devices.filter(device => device.kind === 'videoinput');
//         const audioInputs = devices.filter(device => device.kind === 'audioinput');
        
//         setVideoDevices(videoInputs);
//         setAudioDevices(audioInputs);
        
//         // Set default devices if available
//         if (videoInputs.length > 0) setSelectedVideoDevice(videoInputs[0].deviceId);
//         if (audioInputs.length > 0) setSelectedAudioDevice(audioInputs[0].deviceId);

//         // Sample recordings
//         setRecordings([
//           {
//             id: 1,
//             title: 'Morning Aarti - Jan 15',
//             date: '2025-01-15',
//             duration: '45:22',
//             size: '256 MB',
//             viewCount: 1024
//           },
//           {
//             id: 2,
//             title: 'Satyanarayan Puja',
//             date: '2025-01-10',
//             duration: '2:15:42',
//             size: '1.2 GB',
//             viewCount: 756
//           }
//         ]);
//       } catch (error) {
//         console.error('Error enumerating devices:', error);
//       }
//     };

//     getDevices();
//   }, []);

//   // Start Live Stream and Access Media
//   const startLiveStream = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({
//         video: { deviceId: selectedVideoDevice ? { exact: selectedVideoDevice } : undefined },
//         audio: { deviceId: selectedAudioDevice ? { exact: selectedAudioDevice } : undefined }
//       });

//       // Set video source and start stream
//       if (videoRef.current) {
//         videoRef.current.srcObject = stream;
//       }

//       setMediaStream(stream);
//       setIsLive(true);
//       setParticipants(Math.floor(Math.random() * 50) + 10);
//     } catch (error) {
//       console.error('Error accessing media devices:', error);
//       alert('Could not access camera or microphone. Please check permissions.');
//     }
//   };

//   // Stop Live Stream
//   const stopLiveStream = () => {
//     // Stop all tracks
//     if (mediaStream) {
//       mediaStream.getTracks().forEach(track => track.stop());
//     }

//     // Clear video source
//     if (videoRef.current) {
//       videoRef.current.srcObject = null;
//     }

//     setMediaStream(null);
//     setIsLive(false);
//     setParticipants(0);

//     // Stop recording if active
//     if (isRecording) {
//       stopRecording();
//     }
//   };

//   // Start Recording
//   const startRecording = () => {
//     if (!mediaStream) {
//       alert('Start live stream first before recording');
//       return;
//     }

//     // Reset recorded chunks
//     recordedChunksRef.current = [];

//     // Create MediaRecorder
//     const mediaRecorder = new MediaRecorder(mediaStream);

//     mediaRecorder.ondataavailable = (event) => {
//       if (event.data.size > 0) {
//         recordedChunksRef.current.push(event.data);
//       }
//     };

//     mediaRecorder.onstop = () => {
//       // Create video blob and add to recordings
//       const blob = new Blob(recordedChunksRef.current, { type: 'video/webm' });
//       const url = URL.createObjectURL(blob);
      
//       const newRecording = {
//         id: Date.now(),
//         title: `${streamTitle} - ${new Date().toLocaleDateString()}`,
//         date: new Date().toISOString(),
//         duration: '45:00',
//         size: '300 MB',
//         viewCount: 0,
//         blob: blob,
//         url: url
//       };

//       setRecordings(prev => [newRecording, ...prev]);
//     };

//     mediaRecorder.start();
//     mediaRecorderRef.current = mediaRecorder;
//     setIsRecording(true);
//   };

//   // Stop Recording
//   const stopRecording = () => {
//     if (mediaRecorderRef.current) {
//       mediaRecorderRef.current.stop();
//       setIsRecording(false);
//     }
//   };

//   // Download Recording
//   const downloadRecording = (recording) => {
//     const a = document.createElement('a');
//     a.href = recording.url;
//     a.download = `${recording.title}.webm`;
//     a.click();
//     URL.revokeObjectURL(recording.url);
//   };

//   // Delete Recording
//   const deleteRecording = (id) => {
//     setRecordings(prev => prev.filter(rec => rec.id !== id));
//   };

//   // Video Call Functions
//   const initiateVideoCall = () => {
//     setIsVideoCallActive(true);
//     // Simulate adding participants
//     setVideoCallParticipants([
//       { id: 1, name: 'Devotee 1' },
//       { id: 2, name: 'Devotee 2' }
//     ]);
//   };

//   const endVideoCall = () => {
//     setIsVideoCallActive(false);
//     setVideoCallParticipants([]);
//   };

//   return (
//     <div className="bg-orange-50 min-h-screen p-6">
//       <div className="container mx-auto space-y-6">
//         {/* Header */}
//         <div className="flex justify-between items-center">
//           <h1 className="text-3xl font-bold text-orange-800">Pandit Live Platform</h1>
//           <div className="flex space-x-4">
//             <button 
//               onClick={initiateVideoCall}
//               className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
//             >
//               <PhoneCall />
//               <span>Video Call</span>
//             </button>
//             {isLive ? (
//               <button 
//                 onClick={stopLiveStream}
//                 className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
//               >
//                 <StopCircle />
//                 <span>End Stream</span>
//               </button>
//             ) : (
//               <button 
//                 onClick={startLiveStream}
//                 className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
//               >
//                 <PlayCircle />
//                 <span>Go Live</span>
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Main Streaming Area */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Live Stream Preview */}
//           <div className="lg:col-span-2 bg-black rounded-xl min-h-[400px] relative">
//             <video 
//               ref={videoRef}
//               autoPlay 
//               muted
//               className="w-full h-full object-cover rounded-xl"
//             />

//             {/* Stream Overlay */}
//             {isLive && (
//               <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded-lg flex items-center space-x-2">
//                 <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
//                 <span>LIVE</span>
//                 <span className="ml-2 flex items-center">
//                   <Users className="mr-2" />
//                   {participants} Watching
//                 </span>
//                 {isRecording && (
//                   <span className="ml-2 text-red-500 font-bold">REC</span>
//                 )}
//               </div>
//             )}
//           </div>

//           {/* Stream Controls */}
//           <div className="space-y-4">
//             <div className="bg-white rounded-xl p-4 shadow-md">
//               <h3 className="font-bold text-orange-800 mb-3 flex items-center">
//                 <Settings className="mr-2" />
//                 Stream Settings
//               </h3>
              
//               <input 
//                 type="text"
//                 value={streamTitle}
//                 onChange={(e) => setStreamTitle(e.target.value)}
//                 placeholder="Enter Stream Title"
//                 className="w-full p-2 border rounded-lg mb-3"
//               />
              
//               {/* Video Device Selection */}
//               <div className="mb-3">
//                 <label className="block text-sm font-medium text-gray-700">Video Source</label>
//                 <select 
//                   value={selectedVideoDevice}
//                   onChange={(e) => setSelectedVideoDevice(e.target.value)}
//                   className="w-full p-2 border rounded-lg"
//                 >
//                   {videoDevices.map(device => (
//                     <option key={device.deviceId} value={device.deviceId}>
//                       {device.label || `Camera ${videoDevices.indexOf(device) + 1}`}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Audio Device Selection */}
//               <div className="mb-3">
//                 <label className="block text-sm font-medium text-gray-700">Audio Source</label>
//                 <select 
//                   value={selectedAudioDevice}
//                   onChange={(e) => setSelectedAudioDevice(e.target.value)}
//                   className="w-full p-2 border rounded-lg"
//                 >
//                   {audioDevices.map(device => (
//                     <option key={device.deviceId} value={device.deviceId}>
//                       {device.label || `Microphone ${audioDevices.indexOf(device) + 1}`}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Recording Controls */}
//               <div className="flex space-x-2">
//                 {!isRecording ? (
//                   <button 
//                     onClick={startRecording}
//                     disabled={!isLive}
//                     className={`flex-1 px-4 py-2 rounded-lg flex items-center justify-center space-x-2 ${
//                       isLive 
//                         ? 'bg-orange-600 text-white' 
//                         : 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                     }`}
//                   >
//                     <Save />
//                     <span>Record</span>
//                   </button>
//                 ) : (
//                   <button 
//                     onClick={stopRecording}
//                     className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2"
//                   >
//                     <Pause />
//                     <span>Stop</span>
//                   </button>
//                 )}
//               </div>
//             </div>
            
//             {/* Upcoming Poojas */}
//             <div className="bg-white rounded-xl p-4 shadow-md">
//               <h3 className="font-bold text-orange-800 mb-3 flex items-center">
//                 <Calendar className="mr-2" />
//                 Upcoming Poojas
//               </h3>
//               {upcomingPoojas.map(pooja => (
//                 <div 
//                   key={pooja.id} 
//                   className="flex justify-between items-center border-b py-2 last:border-b-0"
//                 >
//                   <div>
//                     <p className="font-medium">{pooja.title}</p>
//                     <p className="text-sm text-gray-500 flex items-center">
//                       <Clock className="mr-1 w-3 h-3" />
//                       {pooja.date} at {pooja.time}
//                     </p>
//                   </div>
//                   <span className="text-xs bg-orange-100 px-2 py-1 rounded-full">
//                     {pooja.type}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Recordings Section */}
//         <div className="bg-white rounded-xl shadow-md p-6">
//           <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center">
//             <Book className="mr-2" />
//             Previous Recordings
//           </h3>
          
//           {recordings.length === 0 ? (
//             <p className="text-gray-500 text-center">No recordings available</p>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               {recordings.map(recording => (
//                 <div 
//                   key={recording.id} 
//                   className="border rounded-lg p-4 hover:bg-orange-50 transition"
//                 >
//                   <h4 className="font-medium">{recording.title}</h4>
//                   <div className="flex justify-between text-sm text-gray-500 mt-2">
//                     <span>{new Date(recording.date).toLocaleDateString()}</span>
//                     <span>{recording.duration}</span>
//                   </div>
//                   <div className="flex justify-between items-center mt-3">
//                     <div className="flex items-center text-sm text-gray-600">
//                       <Watch className="mr-1 w-4 h-4" />
//                       {recording.viewCount} Views
//                     </div>
//                     <div className="flex space-x-2">
//                       <button 
//                         onClick={() => downloadRecording(recording)}
//                         className="text-orange-600 hover:text-orange-800 flex items-center"
//                       >
//                         <Download className="mr-1" />
//                         <span className="text-sm">Download</span>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
        
//         {/* Religious Resources */}
//         <div className="bg-white rounded-xl shadow-md p-6">
//           <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center">
//             <FileText className="mr-2" />
//             Spiritual Resources
//           </h3>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {resources.map(resource => (
//               <div 
//                 key={resource.id} 
//                 className="border rounded-lg p-4 hover:bg-orange-50 transition cursor-pointer"
//               >
//                 <div className="text-3xl mb-2">{resource.icon}</div>
//                 <h4 className="font-medium">{resource.name}</h4>
//                 <p className="text-sm text-gray-500">{resource.count} {resource.type}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Video Call Modal (if active) */}
//       {isVideoCallActive && (
//         <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
//           <div className="bg-white rounded-xl p-6 w-full max-w-md">
//             <h3 className="text-xl font-bold text-orange-800 mb-4">Video Call</h3>
//             <div className="space-y-4">
//               {videoCallParticipants.map(participant => (
//                 <div 
//                   key={participant.id} 
//                   className="flex items-center justify-between border-b pb-2"
//                 >
//                   <span>{participant.name}</span>
//                   <div className="flex space-x-2">
//                     <button className="bg-green-500 text-white p-2 rounded-full">
//                       <Mic className="w-4 h-4" />
//                     </button>
//                     <button className="bg-red-500 text-white p-2 rounded-full">
//                       <Camera className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <button 
//               onClick={endVideoCall}
//               className="w-full mt-4 bg-red-600 text-white px-4 py-2 rounded-lg"
//             >
//               End Call
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LiveStreamingPage;

import React, { useState, useRef, useEffect } from 'react';
import { 
  Cast, Video, Mic, Camera, Settings, Users, 
  PhoneCall, Download, StopCircle, PlayCircle,
  Calendar, Watch, Pause, Play, Save, Book,
  FileText, Trash2, AlertCircle
} from 'lucide-react';

const LiveStreaming = () => {
  // Media Refs
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const recordedChunksRef = useRef([]);

  // State Management
  const [isLive, setIsLive] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isVideoCallActive, setIsVideoCallActive] = useState(false);
  const [streamTitle, setStreamTitle] = useState('Daily Morning Aarti');
  const [participants, setParticipants] = useState(0);
  const [mediaStream, setMediaStream] = useState(null);
  const [recordings, setRecordings] = useState([]); // Start with empty recordings
  const [videoCallParticipants, setVideoCallParticipants] = useState([]);
  const [recordingToDelete, setRecordingToDelete] = useState(null);

  // Device Selection States
  const [videoDevices, setVideoDevices] = useState([]);
  const [audioDevices, setAudioDevices] = useState([]);
  const [selectedVideoDevice, setSelectedVideoDevice] = useState('');
  const [selectedAudioDevice, setSelectedAudioDevice] = useState('');

  // Religious Content
  const [upcomingPoojas] = useState([
    {
      id: 1,
      title: 'Ganesh Puja',
      date: '2025-04-15',
      time: '10:00 AM',
      type: 'Live Stream'
    }
  ]);

  const [resources] = useState([
    {
      id: 1,
      name: 'Vedic Mantras',
      type: 'Audio',
      count: 50,
      icon: '🕉️'
    },
    {
      id: 2, 
      name: 'Puja Vidhi',
      type: 'Document',
      count: 25,
      icon: '📜'
    }
  ]);

  // Enumerate devices
  useEffect(() => {
    const getDevices = async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        setVideoDevices(devices.filter(d => d.kind === 'videoinput'));
        setAudioDevices(devices.filter(d => d.kind === 'audioinput'));
        
        if (videoDevices.length > 0) setSelectedVideoDevice(videoDevices[0].deviceId);
        if (audioDevices.length > 0) setSelectedAudioDevice(audioDevices[0].deviceId);
      } catch (error) {
        console.error('Error enumerating devices:', error);
      }
    };

    getDevices();
  }, []);

  // Start/Stop Live Stream
  const startLiveStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { deviceId: selectedVideoDevice || undefined },
        audio: { deviceId: selectedAudioDevice || undefined }
      });

      if (videoRef.current) videoRef.current.srcObject = stream;
      setMediaStream(stream);
      setIsLive(true);
      setParticipants(Math.floor(Math.random() * 50) + 10);
    } catch (error) {
      console.error('Error accessing media:', error);
      alert('Could not access camera/microphone. Please check permissions.');
    }
  };

  const stopLiveStream = () => {
    if (mediaStream) mediaStream.getTracks().forEach(track => track.stop());
    if (videoRef.current) videoRef.current.srcObject = null;
    setMediaStream(null);
    setIsLive(false);
    setParticipants(0);
    if (isRecording) stopRecording();
  };

  // Recording Functions
  const startRecording = () => {
    if (!mediaStream) {
      alert('Please start live stream first');
      return;
    }

    recordedChunksRef.current = [];
    const mediaRecorder = new MediaRecorder(mediaStream);

    mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) recordedChunksRef.current.push(e.data);
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(recordedChunksRef.current, { type: 'video/webm' });
      const url = URL.createObjectURL(blob);
      
      setRecordings(prev => [{
        id: Date.now(),
        title: `${streamTitle} - ${new Date().toLocaleDateString()}`,
        date: new Date().toISOString(),
        duration: '45:00',
        size: '300 MB',
        viewCount: 0,
        url: url,
        blob: blob
      }, ...prev]);
    };

    mediaRecorder.start();
    mediaRecorderRef.current = mediaRecorder;
    setIsRecording(true);
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  // Recording Management
  const downloadRecording = (recording) => {
    const a = document.createElement('a');
    a.href = recording.url;
    a.download = `${recording.title}.webm`;
    a.click();
  };

  const confirmDeleteRecording = (recording) => {
    setRecordingToDelete(recording);
  };

  const deleteRecording = () => {
    if (recordingToDelete) {
      setRecordings(prev => prev.filter(r => r.id !== recordingToDelete.id));
      setRecordingToDelete(null);
    }
  };

  // Video Call Functions
  const initiateVideoCall = () => {
    setIsVideoCallActive(true);
    setVideoCallParticipants([
      { id: 1, name: 'Devotee 1' },
      { id: 2, name: 'Devotee 2' }
    ]);
  };

  const endVideoCall = () => {
    setIsVideoCallActive(false);
    setVideoCallParticipants([]);
  };

  return (
    <div className="bg-orange-50 min-h-screen p-6">
      <div className="container mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-orange-800">Pandit Live Platform</h1>
          <div className="flex space-x-4">
            <button 
              onClick={initiateVideoCall}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
            >
              <PhoneCall size={18} />
              <span>Video Call</span>
            </button>
            {isLive ? (
              <button 
                onClick={stopLiveStream}
                className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
              >
                <StopCircle size={18} />
                <span>End Stream</span>
              </button>
            ) : (
              <button 
                onClick={startLiveStream}
                className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
              >
                <PlayCircle size={18} />
                <span>Go Live</span>
              </button>
            )}
          </div>
        </div>

        {/* Main Streaming Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Live Stream Preview */}
          <div className="lg:col-span-2 bg-black rounded-xl min-h-[400px] relative">
            <video 
              ref={videoRef}
              autoPlay 
              muted
              className="w-full h-full object-cover rounded-xl"
            />

            {isLive && (
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded-lg flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span>LIVE</span>
                <span className="ml-2 flex items-center">
                  <Users size={16} className="mr-2" />
                  {participants} Watching
                </span>
                {isRecording && (
                  <span className="ml-2 text-red-500 font-bold">REC</span>
                )}
              </div>
            )}
          </div>

          {/* Stream Controls */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 shadow-md">
              <h3 className="font-bold text-orange-800 mb-3 flex items-center">
                <Settings size={18} className="mr-2" />
                Stream Settings
              </h3>
              
              <input 
                type="text"
                value={streamTitle}
                onChange={(e) => setStreamTitle(e.target.value)}
                placeholder="Enter Stream Title"
                className="w-full p-2 border rounded-lg mb-3"
              />
              
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700">Video Source</label>
                <select 
                  value={selectedVideoDevice}
                  onChange={(e) => setSelectedVideoDevice(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                >
                  {videoDevices.map(device => (
                    <option key={device.deviceId} value={device.deviceId}>
                      {device.label || `Camera ${videoDevices.indexOf(device) + 1}`}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700">Audio Source</label>
                <select 
                  value={selectedAudioDevice}
                  onChange={(e) => setSelectedAudioDevice(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                >
                  {audioDevices.map(device => (
                    <option key={device.deviceId} value={device.deviceId}>
                      {device.label || `Microphone ${audioDevices.indexOf(device) + 1}`}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex space-x-2">
                {!isRecording ? (
                  <button 
                    onClick={startRecording}
                    disabled={!isLive}
                    className={`flex-1 px-4 py-2 rounded-lg flex items-center justify-center space-x-2 ${
                      isLive 
                        ? 'bg-orange-600 text-white' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <Save size={18} />
                    <span>Record</span>
                  </button>
                ) : (
                  <button 
                    onClick={stopRecording}
                    className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2"
                  >
                    <Pause size={18} />
                    <span>Stop</span>
                  </button>
                )}
              </div>
            </div>
            
            {/* Upcoming Poojas */}
            <div className="bg-white rounded-xl p-4 shadow-md">
              <h3 className="font-bold text-orange-800 mb-3 flex items-center">
                <Calendar size={18} className="mr-2" />
                Upcoming Poojas
              </h3>
              {upcomingPoojas.map(pooja => (
                <div 
                  key={pooja.id} 
                  className="flex justify-between items-center border-b py-2 last:border-b-0"
                >
                  <div>
                    <p className="font-medium">{pooja.title}</p>
                    <p className="text-sm text-gray-500 flex items-center">
                      <Watch size={14} className="mr-1" />
                      {pooja.date} at {pooja.time}
                    </p>
                  </div>
                  <span className="text-xs bg-orange-100 px-2 py-1 rounded-full">
                    {pooja.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recordings Section */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center">
            <Book size={20} className="mr-2" />
            Your Recordings
          </h3>
          
          {recordings.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">No recordings yet</p>
              <p className="text-sm text-gray-400">Start a live stream and record your first pooja!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {recordings.map(recording => (
                <div 
                  key={recording.id} 
                  className="border rounded-lg p-4 hover:bg-orange-50 transition"
                >
                  <h4 className="font-medium">{recording.title}</h4>
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>{new Date(recording.date).toLocaleDateString()}</span>
                    <span>{recording.duration}</span>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <Watch size={14} className="mr-1" />
                      {recording.viewCount} Views
                    </div>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => downloadRecording(recording)}
                        className="text-orange-600 hover:text-orange-800 flex items-center text-sm"
                      >
                        <Download size={16} className="mr-1" />
                        Download
                      </button>
                      <button 
                        onClick={() => confirmDeleteRecording(recording)}
                        className="text-red-600 hover:text-red-800 flex items-center text-sm"
                      >
                        <Trash2 size={16} className="mr-1" />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Religious Resources */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center">
            <FileText size={20} className="mr-2" />
            Spiritual Resources
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {resources.map(resource => (
              <div 
                key={resource.id} 
                className="border rounded-lg p-4 hover:bg-orange-50 transition cursor-pointer"
              >
                <div className="text-3xl mb-2">{resource.icon}</div>
                <h4 className="font-medium">{resource.name}</h4>
                <p className="text-sm text-gray-500">{resource.count} {resource.type}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Call Modal */}
      {isVideoCallActive && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-orange-800 mb-4">Video Call</h3>
            <div className="space-y-4">
              {videoCallParticipants.map(participant => (
                <div 
                  key={participant.id} 
                  className="flex items-center justify-between border-b pb-2"
                >
                  <span>{participant.name}</span>
                  <div className="flex space-x-2">
                    <button className="bg-green-500 text-white p-2 rounded-full">
                      <Mic size={16} />
                    </button>
                    <button className="bg-red-500 text-white p-2 rounded-full">
                      <Camera size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button 
              onClick={endVideoCall}
              className="w-full mt-4 bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              End Call
            </button>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {recordingToDelete && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <div className="flex items-start mb-4">
              <AlertCircle className="text-red-500 mr-2 mt-0.5" size={20} />
              <div>
                <h3 className="text-lg font-bold">Delete Recording</h3>
                <p className="text-gray-600">Are you sure you want to delete "{recordingToDelete.title}"?</p>
                <p className="text-sm text-gray-500 mt-1">This action cannot be undone.</p>
              </div>
            </div>
            <div className="flex justify-end space-x-3">
              <button 
                onClick={() => setRecordingToDelete(null)}
                className="px-4 py-2 border rounded-lg hover:bg-gray-100"
              >
                Cancel
              </button>
              <button 
                onClick={deleteRecording}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveStreaming;