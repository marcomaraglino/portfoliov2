import { motion } from "framer-motion";

const Projects = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >

        <div className="container py-56">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 w-1/2 max-sm:w-72">
                <div onClick={() => window.open('https://www.instagram.com/polibacorse/')}
                     className="hover:border-indigo-50 transition-all cursor-pointer rounded-3xl border border-indigo-50/40 p-6">
                    <img src="./polibacorse.webp" alt="immagine"
                         className="rounded-2xl object-cover w-full h-40"/>
                    <h2 className="text-base text-left text-white mt-2">
                        Poliba Corse - Formula SAE Team
                    </h2>
                    <p className="text-sm text-gray-400 text-left">
                        As part of a university project, I contributed to the design and development of a single-seater
                        race car. My role involved eletronics & software. This hands-on experience enhanced my
                        engineering
                        skills and deepened my understanding of automotive technologies.
                    </p>
                </div>
                <div onClick={() => window.open('')}
                     className="hover:border-indigo-50 transition-all cursor-pointer rounded-3xl border border-indigo-50/40 p-6">
                    <img src="./qr_code.webp" alt="immagine"
                         className="rounded-2xl object-cover w-full h-40"/>
                    <h2 className="text-base text-left text-white mt-2">
                        QR Code to Apple Wallet Ticket Conversion Script
                    </h2>
                    <p className="text-sm text-gray-400 text-left">
                        I am currently developing a script that converts QR code inputs into tickets compatible with
                        Apple Wallet. This project involves automating the process of generating digital passes, enhancing
                        the user experience for seamless ticket management on iOS devices.
                    </p>
                </div>
            </div>
        </div>
        </motion.div>
    );
};

export default Projects;