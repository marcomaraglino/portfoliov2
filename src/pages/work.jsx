import { motion } from "framer-motion";
import ProjectCard from '../components/ProjectCard';



const Work = () => {

    const projectsData = [
        {
            imageUrl: "./github.png",
            title: "Integration of Lighthouse with Node.js for Secure File Management",
            description: "This project takes two arguments (file ID and filename) and uses your private key to decrypt a file stored on the Lighthouse network. It then saves the decrypted file locally.",
            link: "https://new-ui.sirio.finance",
            techStack: ["Javascript", "NodeJS"]
        }
    ]
    


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
        <div className="container min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 w-1/2 max-sm:w-auto">
            {projectsData.map((project, index) => (
                        <ProjectCard 
                            key={index}
                            {...project}
                        />
                    ))}
            </div>
        </div>
        </motion.div>
    );
};

export default Work;