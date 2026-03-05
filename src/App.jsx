import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import bgImage from './assets/bg.jpg';
import logoSvg from './assets/gdg logo.svg';
import wallEVideo from './assets/wall-e-user-clip.mp4?url';
import RoundsSection from './RoundsSection';

function App() {
    const [isVideoFinished, setIsVideoFinished] = useState(false);
    const [videoError, setVideoError] = useState(false);
    const videoRef = useRef(null);

    // Fallback in case the video metadata fails to load or video format isn't supported
    useEffect(() => {
        const fallbackTimer = setTimeout(() => {
            if (!isVideoFinished) {
                setIsVideoFinished(true);
            }
        }, 6000); // Trigger after 6 seconds as a fallback (clip is 3-5s)

        return () => clearTimeout(fallbackTimer);
    }, [isVideoFinished]);

    const handleVideoEnded = () => {
        setIsVideoFinished(true);
    };

    const handleVideoError = () => {
        setVideoError(true);
        setIsVideoFinished(true);
    };

    return (
        <div className="relative w-full min-h-screen bg-black text-white font-sans overflow-x-hidden">

            {/* HER SECTION */}
            <div className="relative w-full h-[100vh] overflow-hidden">
                {/* Background Image - Always Visible */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center z-0 opacity-40 mix-blend-luminosity"
                    style={{ backgroundImage: `url(${bgImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black z-0" />

                {/* Cinematic Purple Flares */}
                <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-purple-900/40 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none z-0 opacity-60" />
                <div className="absolute top-[20%] right-[0%] w-[40vw] h-[40vw] bg-fuchsia-900/30 rounded-full mix-blend-screen filter blur-[150px] pointer-events-none z-0 opacity-50" />
                <div className="absolute -bottom-[10%] left-[20%] w-[60vw] h-[60vw] bg-violet-900/30 rounded-full mix-blend-screen filter blur-[130px] pointer-events-none z-0 opacity-40" />

                {/* Video Overlay Layer */}
                <AnimatePresence>
                    {!isVideoFinished && !videoError && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute inset-0 z-10 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                        >
                            <div className="relative w-full h-full overflow-hidden">
                                <video
                                    ref={videoRef}
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    muted
                                    playsInline
                                    onEnded={handleVideoEnded}
                                    onError={(e) => {
                                        console.error("Video error:", e);
                                        handleVideoError();
                                    }}
                                >
                                    <source src={wallEVideo} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Global Header Logo */}
                <AnimatePresence>
                    {isVideoFinished && (
                        <motion.div
                            initial={{ opacity: 0, y: -40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 3.0, delay: 0.5, ease: [0.05, 0.9, 0.1, 1] }}
                            className="fixed top-8 left-0 w-full flex justify-center z-50 pointer-events-none"
                        >
                            <img
                                src={logoSvg}
                                alt="GDG Logo"
                                className="w-32 h-32 md:w-40 md:h-40 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] filter brightness-110 pointer-events-auto"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Main Content Reveal */}
                <div className="relative z-20 w-full h-full flex flex-col items-center justify-center pointer-events-none">
                    <AnimatePresence>
                        {isVideoFinished && (
                            <motion.div
                                initial={{ opacity: 0, x: 250 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 4.5, ease: [0.05, 0.9, 0.1, 1] }}
                                className="flex flex-col items-center justify-center pointer-events-auto"
                                style={{ willChange: "transform, opacity" }}
                            >
                                {/* Glowing Hero Text */}
                                <motion.h1
                                    className="text-[10rem] md:text-[14rem] lg:text-[16rem] leading-none font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500"
                                    style={{
                                        textShadow: '0 0 50px rgba(255, 255, 255, 0.6), 0 0 100px rgba(255, 255, 255, 0.3), 0 0 150px rgba(100, 150, 255, 0.4)'
                                    }}
                                >
                                    PIXTOPIA
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 25 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 3.0, delay: 1.5, ease: [0.05, 0.9, 0.1, 1] }}
                                    className="mt-4 text-xl md:text-2xl text-slate-300 font-light tracking-widest uppercase"
                                >
                                    A Cinematic Experience
                                </motion.p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </div> {/* End of Hero Section */}

            {/* Scrollable Rounds Section */}
            {isVideoFinished && (
                <RoundsSection />
            )}

        </div>
    );
}

export default App;
