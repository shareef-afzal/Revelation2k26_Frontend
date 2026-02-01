import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { API_URL } from '../config/config';
import { Link } from "react-router-dom";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';


const EventList = () => {
    // 1. Start with a default (e.g., true for Desktop layout, or false for Mobile)
    // DO NOT put window.innerWidth here.
    const [isDesktop, setIsDesktop] = React.useState(true);
    // const [events, setEvents] = useState([]);

    const events = [
        {
            _id: "696f98192e1caeabab869ec9",

            name: "zinzo",
            description: "online game",
            type: "Single",
            venue: "Hom",

            day: 1,

            startTime: "2026-02-06T13:00:00.000Z",
            endTime: "2026-02-08T12:59:00.000Z",

            prizePool: 50000,
            registrationAmount: 500,
            registrationFrom: "website",
            registrationLink: null,
            isRegistrationOpen: true,

            teamSize: {
                min: 1,
                max: 1
            },

            rules: [
                "You should have phone",
                "You should be human"
            ],

            backgroundImage: {
                url: "https://res.cloudinary.com/dgioskvki/image/upload/v1768921110/revelation2k26/events/ks6tcp3tftiihy1xvjqe.png",
                filename: "revelation2k26/events/ks6tcp3tftiihy1xvjqe",
                _id: "696f98192e1caeabab869ecb"
            },

            posterImage: {
                url: "https://res.cloudinary.com/dgioskvki/image/upload/v1768921110/revelation2k26/events/u5u4eyncttgle8udulry.png",
                filename: "revelation2k26/events/u5u4eyncttgle8udulry",
                _id: "696f98192e1caeabab869eca"
            },

            eventGif: {
                url: "https://res.cloudinary.com/dgioskvki/image/upload/v1768921112/revelation2k26/events/l3gmiy311xiqck8nszxj.gif",
                filename: "revelation2k26/events/l3gmiy311xiqck8nszxj",
                _id: "696f98192e1caeabab869ecc"
            }
        },

        {
            _id: "696f9b977c64fc56120d600e",

            name: "codestorm",
            description: "Hi",
            type: "Team",
            venue: "NB",

            day: 2,

            startTime: "2026-02-07T09:42:00.000Z",
            endTime: "2026-02-08T09:42:00.000Z",

            prizePool: 12000,
            registrationAmount: 120,
            registrationFrom: "website",
            registrationLink: null,
            isRegistrationOpen: true,

            teamSize: {
                min: 3,
                max: 5
            },

            rules: [
                "Bye"
            ],

            backgroundImage: {
                url: "https://res.cloudinary.com/dgioskvki/image/upload/v1768922004/revelation2k26/events/f7blkxhoelwdp7eopni6.png",
                filename: "revelation2k26/events/f7blkxhoelwdp7eopni6",
                _id: "696f9b977c64fc56120d6010"
            },

            posterImage: {
                url: "https://res.cloudinary.com/dgioskvki/image/upload/v1768922005/revelation2k26/events/wn9xuqaysapcjupeygud.png",
                filename: "revelation2k26/events/wn9xuqaysapcjupeygud",
                _id: "696f9b977c64fc56120d600f"
            },

            eventGif: {
                url: "https://res.cloudinary.com/dgioskvki/image/upload/v1768922006/revelation2k26/events/cqcvkrsgzpjjlbj08mh0.gif",
                filename: "revelation2k26/events/cqcvkrsgzpjjlbj08mh0",
                _id: "696f9b977c64fc56120d6011"
            }
        },

        {
            _id: "696f98192e1caeabab869ec9",

            name: "zinzo",
            description: "online game",
            type: "Single",
            venue: "Hom",

            day: 1,

            startTime: "2026-02-06T13:00:00.000Z",
            endTime: "2026-02-08T12:59:00.000Z",

            prizePool: 50000,
            registrationAmount: 500,
            registrationFrom: "website",
            registrationLink: null,
            isRegistrationOpen: true,

            teamSize: {
                min: 1,
                max: 1
            },

            rules: [
                "You should have phone",
                "You should be human"
            ],

            backgroundImage: {
                url: "https://res.cloudinary.com/dgioskvki/image/upload/v1768921110/revelation2k26/events/ks6tcp3tftiihy1xvjqe.png",
                filename: "revelation2k26/events/ks6tcp3tftiihy1xvjqe",
                _id: "696f98192e1caeabab869ecb"
            },

            posterImage: {
                url: "https://res.cloudinary.com/dgioskvki/image/upload/v1768921110/revelation2k26/events/u5u4eyncttgle8udulry.png",
                filename: "revelation2k26/events/u5u4eyncttgle8udulry",
                _id: "696f98192e1caeabab869eca"
            },

            eventGif: {
                url: "https://res.cloudinary.com/dgioskvki/image/upload/v1768921112/revelation2k26/events/l3gmiy311xiqck8nszxj.gif",
                filename: "revelation2k26/events/l3gmiy311xiqck8nszxj",
                _id: "696f98192e1caeabab869ecc"
            }
        },

        {
            _id: "696f9b977c64fc56120d600e",

            name: "codestorm",
            description: "Hi",
            type: "Team",
            venue: "NB",

            day: 2,

            startTime: "2026-02-07T09:42:00.000Z",
            endTime: "2026-02-08T09:42:00.000Z",

            prizePool: 12000,
            registrationAmount: 120,
            registrationFrom: "website",
            registrationLink: null,
            isRegistrationOpen: true,

            teamSize: {
                min: 3,
                max: 5
            },

            rules: [
                "Bye"
            ],

            backgroundImage: {
                url: "https://res.cloudinary.com/dgioskvki/image/upload/v1768922004/revelation2k26/events/f7blkxhoelwdp7eopni6.png",
                filename: "revelation2k26/events/f7blkxhoelwdp7eopni6",
                _id: "696f9b977c64fc56120d6010"
            },

            posterImage: {
                url: "https://res.cloudinary.com/dgioskvki/image/upload/v1768922005/revelation2k26/events/wn9xuqaysapcjupeygud.png",
                filename: "revelation2k26/events/wn9xuqaysapcjupeygud",
                _id: "696f9b977c64fc56120d600f"
            },

            eventGif: {
                url: "https://res.cloudinary.com/dgioskvki/image/upload/v1768922006/revelation2k26/events/cqcvkrsgzpjjlbj08mh0.gif",
                filename: "revelation2k26/events/cqcvkrsgzpjjlbj08mh0",
                _id: "696f9b977c64fc56120d6011"
            }
        }
    ];


    const fetchEvents = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/events/get-all`);
            setEvents(response.data.body);
        }
        catch (error) {
            console.log("Error fetching events:", error);
        }
    }

    // useEffect(() => {
    //     fetchEvents();
    // }, []);
    // console.log(events);

    const formatDate = (event) => {
        const date = new Date(event.startTime);

        const formatted = date.toLocaleDateString('en-IN', {
            day: '2-digit',
            month: 'short',
            // year: 'numeric'
        });

        console.log(formatted);
        return formatted;
    }

    React.useEffect(() => {
        // 2. Only access 'window' once the component is mounted (Client-side)
        if (typeof window !== "undefined") {
            const checkScreen = () => setIsDesktop(window.innerWidth >= 768);
            checkScreen(); // Run once immediately
            window.addEventListener("resize", checkScreen);
            return () => window.removeEventListener("resize", checkScreen);
        }
    }, []);

    return (

        <div className="overflow-hidden events-bg relative w-full min-h-screen text-white flex flex-col items-center pb-20 font-goldman">
            <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px] z-0"></div>
            
            {/* <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 z-0"></div> */}


        {/* CHANGED FROM 'fixed' TO 'absolute' to save your Footer */}
            {/* <div className="absolute inset-0 z-0 h-full w-full">
            <img
                src="backgroundpunith.png"   
                alt="Background"
                className="w-full h-full object-cover "
            />
            <div className="absolute inset-0 bg-black/80"></div>
        </div> */}
            {/* 2. HEADER SECTION */}
            <div className="EventHero text-center mt-[60px] mb-16 z-10 px-4 pt-10">
                <h1 className="text-[#EE0000] text-[50px] md:text-[90px] font-title font-black tracking-tighter leading-none mt-2">
                    EVENTS
                </h1>
                <h2 className="text-[#E7E7E7] text-[20px] md:text-[30px] font-bold tracking-wide uppercase font-title pt-20px">
                    Enter the Arena
                </h2>
            </div>
            {/* 3. ZIG-ZAG LIST CONTAINER */}
            <div className="w-full md:w-full flex flex-col gap-6 z-10" key={isDesktop}>
                {events.map((event, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <motion.div
                            key={event._id}
                            // ANIMATION LOGIC:
                            // 1. Initial Position: -100px (Left) or 100px (Right)

                            initial={
                                isDesktop
                                    ? { opacity: 0, x: isEven ? -100 : 100 } // Desktop: Start Invisible & Slide
                                    : { opacity: 1, x: 0, y: 0 }             // Mobile: Start Visible (STATIC)
                            }

                            whileInView={{ opacity: 1, x: 0, y: 0 }}

                            /* Kill the transition duration on mobile to prevent any glitches */
                            transition={{ duration: isDesktop ? 0.6 : 0 }}

                            viewport={{ once: true, margin: "-50px" }}


                            className={`
                                 relative flex flex-col ${isEven ? 'md:flex-row md:self-start' : 'ml-auto md:flex-row-reverse md:self-end'} 
                                items-stretch md:items-stretch
                                w-[85%] md:mx-0 md:w-[85%] lg:w-[64%] 
                                bg-white/5 backdrop-blur-[12px] border-y border-white/30 shadow-2xl overflow-hidden relative
                                
                                /* DYNAMIC CORNERS & BORDERS */
                                ${isEven
                                    ? 'rounded-r-3xl rounded-l-3xl rounded-l-none border-l-0 border-r' // Attached Left
                                    : 'rounded-l-3xl rounded-r-3xl rounded-r-none border-r-0 border-l' // Attached Right
                                }
                            `}
                        >
                            <div className={` w-full md:w-[24%] px-4 pb-5 pt-2 md:p-4 flex flex-row md:flex-col justify-center gap-3  md:gap-5 items-center order-3 md:order-none ${isEven ? 'md:pl-20 md:pr-2' : 'md:pr-20 md:pl-2'}`}>

                                <Link to={`/event/${event._id}`}>
                                    <button className="px-3 py-1 md:px-6 md:py-3 rounded-full border border-yellow-400/50 text-white md:font-bold tracking-wider hover:bg-yellow-400/10 shadow-[0_0_20px_rgba(234,179,8,0.35)] ">
                                        Details
                                    </button>
                                </Link>
                                <Link to={`/event/${event._id}`}>
                                    <button className="px-3 py-1 md:px-6 md:py-3 rounded-full border border-red-500 text-white text-md md:text-xl md:font-bold tracking-widest hover:bg-red-600 shadow-[0_0_30px_rgba(220,38,38,0.45)] ">
                                        Register
                                    </button>
                                </Link>
                            </div>
                            <div className=" w-full md:w-[42%] order-2 md:order-none  flex flex-col justify-center items-center text-center px-3 md:px-5 pt-0 pb-2 md:p-8 space-y-2">
                                <h2 className="cinematic-title text-3xl md:text-4xl lg:text-5xl">
                                    {event.name}
                                </h2>

                                {/* <div className="flex flex-col gap-3 mt-3"> */}
                                <div className="grid grid-cols-2 md:flex md:flex-col gap-x-3 gap-y-3 mt-4 p-0px">


                                    <div className="flex items-center gap-1 md:gap-3 text-sm md:text-lg font-semibold uppercase tracking-wide">

                                        <img src="calendar-regular-full.svg"
                                            alt="date"
                                            className="event-icon w-8 h-8 object-contain invert" /> {formatDate(event)}
                                    </div>
                                    <div className="flex items-center gap-1 md:gap-3 text-sm md:text-lg font-semibold uppercase tracking-wide">

                                        <img src="clock-regular-full.svg"
                                            alt="Time"
                                            className="event-icon w-8 h-8 object-contain invert" /> {new Date(event.startTime).toLocaleTimeString('en-GB', {hour: '2-digit',minute: '2-digit', hour12: false})}
                                    </div>
                                    <div className="flex items-center gap-1 md:gap-3 text-sm md:text-lg font-semibold uppercase tracking-wide">

                                        <LocationOnOutlinedIcon
                                            className="event-icon text-white-500"
                                            fontSize="medium"
                                        />
                                        {event.venue || "Institute Hall"}
                                    </div>

                                    <div className="flex items-center gap-1 md:gap-3 text-sm md:text-lg font-semibold uppercase tracking-wide">

                                        <EmojiEventsOutlinedIcon
                                            className="event-icon text-white-400"
                                            fontSize="medium"
                                        />
                                        {event.prizePool+"/-" || "20000/-"}
                                    </div>

                                </div>
                            </div>
                            <div className={` w-full md:w-[35%]  max-w-[200px] md:max-w-none mx-auto md:mx-0 aspect-square shrink-0 relative group  order-1 md:border-none flex items-center justify-center p-5`}>

                                {/* THE INNER FRAME */}
                                <div className="relative w-full aspect-square h-full rounded-2xl overflow-hidden border-[1px] border-white/40 shadow-2xl">

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>

                                    <img
                                        src={event.posterImage.url || "vite.svg"}
                                        alt={event.name}
                                        className="absolute inset-0 w-full h-full object-cover transition duration-700 md:group-hover:scale-110"
                                    />


                                </div>

                            </div>

                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default EventList;
