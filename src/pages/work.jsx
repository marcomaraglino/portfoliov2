import { motion } from "framer-motion";

const Work = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
        <div className="container py-56">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 w-1/2 max-sm:w-auto">
                <div
                    className="hover:border-indigo-50 transition-all cursor-pointer rounded-3xl border border-indigo-50/40 p-6">
                    <img src="src/assets/github.png" alt="immagine" className="rounded-2xl object-cover w-full h-40"/>
                    <h2 className="text-base text-left text-white mt-2">Integration of Lighthouse with Node.js for
                        Secure File Management</h2>
                    <p className="text-sm text-gray-400 text-left">This project takes two arguments (file ID and
                        filename)
                        and uses your private key to decrypt a file stored on the Lighthouse network. It then saves the
                        decrypted file locally.</p>
                </div>
            </div>
        </div>
        </motion.div>
    );
};

export default Work;