import { motion } from 'framer-motion';
const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
        <div className="container mx-auto py-16">
            <div className="max-sm:w-full grid grid-cols-1 md:grid-cols-1 gap-8 w-1/2">
            <p className="text-left">I'm a dedicated programmer driven by a relentless curiosity for learning, a passion for problem-solving,
                and an insatiable thirst for new experiences. With a deep love for coding and a penchant for
                exploration, I'm constantly pushing the boundaries of what's possible in the world of technology. Join
                me on my journey as I embrace challenges, seek innovation, and uncover exciting new horizons</p>
                <a className="text-left font-normal underline transition-all hover:text-blue-600 hover:transition" href="mailto:marcomaraglino5@gmail.com">contact me >> marcomaraglino5@gmail.com</a>
            </div>
        </div>
        </motion.div>
    );
};

export default Home;