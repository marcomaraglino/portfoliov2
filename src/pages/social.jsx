import { motion } from "framer-motion";

const Social = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
        <div className="container py-16">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                <ul className="text-left">
                    <li><a className="hover:duration-100 duration-100 hover:text-fuchsia-600 font-normal" target="_blank" href="https://www.instagram.com/marcomaraglino/">Instagram</a></li>
                    <li><a className="hover:duration-100 duration-100 hover:text-black font-normal" target="_blank" href="https://twitter.com/AuMarcom">X</a></li>
                    <li><a className="hover:duration-100 duration-100 hover:text-blue-600 font-normal" target="_blank" href="https://www.linkedin.com/in/marcomaraglino5/">Linkedin</a></li>
                    <li><a className="hover:duration-100 duration-100 hover:text-gray-600 font-normal" target="_blank" href="https://github.com/marcomaraglino">GitHub</a></li>
                    <li><a className="hover:duration-100 duration-100 hover:text-red-600 font-normal" target="_blank" href="https://www.youtube.com/@marco.maraglino">YouTube</a></li>
                </ul>
            </div>
        </div>
        </motion.div>
    );
};

export default Social;