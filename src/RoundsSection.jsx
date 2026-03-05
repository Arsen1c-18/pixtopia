import React from 'react';
import { motion } from 'framer-motion';

const RoundsSection = () => {
    return (
        <section className="relative w-full min-h-screen bg-neutral-200 text-neutral-800 font-sans overflow-hidden py-24 px-4 md:px-12 lg:px-24">

            {/* Ragged Top Transition (Placeholder) */}
            <div className="absolute top-0 left-0 w-full h-32 bg-black scale-y-150 origin-top" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 40%, 80% 80%, 60% 30%, 40% 90%, 20% 40%, 0 70%)' }} />

            {/* Container for the staggered grid layout */}
            <div className="relative max-w-7xl mx-auto flex flex-col items-center justify-center gap-24 lg:gap-48 pt-32">

                {/* --- ROUND 1 (Buzz Lightyear) --- */}
                <div className="relative w-full max-w-5xl aspect-video md:aspect-[21/9] flex items-center">
                    {/* Background Rectangles */}
                    <div className="absolute left-[30%] top-0 w-1/4 h-full bg-[#4a7a9e] -z-10" />
                    <div className="absolute left-[55%] top-1/4 w-1/4 h-3/4 bg-white shadow-xl -z-10" />

                    {/* Text Container */}
                    <div className="relative z-10 w-1/3 pr-8 text-right">
                        <h2 className="text-xl md:text-2xl font-bold tracking-widest border-b border-black pb-2 mb-4 inline-block">ROUND 1</h2>
                        <p className="text-xs md:text-sm font-medium leading-relaxed tracking-wide text-gray-700 uppercase">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </p>
                        <div className="mt-4 flex justify-end">
                            <div className="h-6 w-16 border rounded-full border-gray-400" />
                        </div>
                    </div>

                    {/* Character Placeholder */}
                    <div className="relative z-20 w-1/3 aspect-square bg-[#76b900] bg-opacity-80 rounded-lg flex items-center justify-center text-white border-4 border-dashed border-white shadow-2xl">
                        <span className="font-bold rotate-[-15deg] uppercase tracking-wider">Buzz Lightyear<br />Image Here</span>
                    </div>

                    {/* Small Text Block Overlay */}
                    <div className="relative z-10 w-1/3 pl-12">
                        <div className="bg-white p-6 shadow-sm">
                            <p className="text-[10px] md:text-xs font-bold leading-tight uppercase tracking-widest text-[#4a7a9e] mb-2">Buzz Lightyear</p>
                            <p className="text-[8px] md:text-[10px] leading-relaxed tracking-wider uppercase text-gray-500">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            </p>
                        </div>
                    </div>
                </div>

                {/* --- ROUND 2 (The Incredibles) & RANDOM --- */}
                <div className="relative w-full max-w-6xl aspect-[4/3] md:aspect-[16/9] flex flex-col items-center justify-center mt-32">
                    {/* Background Blob Placeholder */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-[120%] bg-[#1a1a1a] rounded-[100px] skew-y-6 rotate-3 -z-20 blur-sm opacity-90" />

                    {/* Dark Grey Vertical Pillar */}
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1/4 h-[140%] bg-[#3a3a3a] -z-10 skew-x-[-2deg]" />

                    {/* Left Text: Round 2 */}
                    <div className="absolute left-0 top-1/3 w-1/4 text-white z-10">
                        <h2 className="text-xl md:text-2xl font-bold tracking-widest border-b border-white pb-2 mb-4 inline-block">ROUND 2</h2>
                        <p className="text-xs md:text-sm font-light leading-relaxed tracking-wide uppercase opacity-80">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </p>
                    </div>

                    {/* Right Text: Random & "The Incredibles" Title */}
                    <div className="absolute right-0 top-1/4 w-1/4 text-white z-10 text-right">
                        <h3 className="text-sm md:text-base font-bold tracking-widest border-b border-white pb-1 mb-2 inline-block">RANDOM</h3>
                        <p className="text-[8px] md:text-[10px] font-light leading-relaxed tracking-widest uppercase opacity-60 mb-12">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                        </p>

                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 filter drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] uppercase">
                            The<br />Incredibles
                        </h1>
                    </div>

                    {/* Character Placeholder */}
                    <div className="relative z-20 w-1/2 md:w-2/5 aspect-[4/3] bg-red-600 bg-opacity-90 rounded-xl flex items-center justify-center text-white border-4 border-dashed border-white shadow-2xl rotate-3">
                        <span className="font-bold text-lg uppercase tracking-wider text-center">The Incredibles<br />Image Here</span>
                    </div>
                </div>

                {/* --- ROUND 3 (Lightning McQueen) --- */}
                <div className="relative w-full max-w-5xl aspect-video md:aspect-[21/9] flex items-center justify-end mt-48">
                    {/* Background Rectangles */}
                    <div className="absolute right-[30%] top-[-20%] w-1/3 h-[180%] bg-[#9e1c1c] -z-10" />
                    <div className="absolute right-[10%] top-1/2 w-1/4 h-full bg-[#333333] -z-10" />

                    {/* Character Placeholder */}
                    <div className="relative z-20 w-1/2 aspect-[16/6] bg-[#e23030] bg-opacity-90 rounded-lg flex items-center justify-center text-white border-4 border-dashed border-white shadow-2xl -translate-x-12 translate-y-12">
                        <span className="font-bold uppercase tracking-wider text-2xl rotate-[-5deg]">Lightning McQueen<br />Image Here</span>
                    </div>

                    {/* Text Container */}
                    <div className="relative z-10 w-1/3 pl-8">
                        <div className="bg-[#9e1c1c] p-6 mb-8 w-max">
                            <h2 className="text-2xl md:text-4xl font-black text-white/90 uppercase tracking-tighter leading-none">Lightning<br />McQueen</h2>
                        </div>
                        <div className="text-right">
                            <h2 className="text-xl md:text-2xl font-bold tracking-widest border-b border-black pb-2 mb-4 inline-block">ROUND 3</h2>
                            <p className="text-xs md:text-sm font-medium leading-relaxed tracking-wide text-gray-700 uppercase">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            </p>
                            <div className="mt-4 flex justify-end">
                                <div className="h-6 w-16 border rounded-full border-gray-400" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default RoundsSection;
