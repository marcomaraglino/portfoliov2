import { motion } from "framer-motion";
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const projectsData = [
        {
            imageUrl: "./siriofinance.png",
            title: "Sirio Finance",
            description: "I am currently developing the front-end for a lending protocol built on Hedera. This project involves crafting a user-friendly interface for seamless borrowing and lending experiences, with a focus on optimizing the interaction flow and visual design.",
            link: "https://new-ui.sirio.finance",
            techStack: ["Vue", "Tailwind", "TypeScript", "RESTful"]
        },
        {
            imageUrl: "./polibacorse.webp",
            title: "Poliba Corse - Formula SAE Team",
            description: "As part of a university project, I contributed to the design and development of a single-seater race car. My role involved eletronics & software. This hands-on experience enhanced my engineering skills and deepened my understanding of automotive technologies.",
            link: "https://www.instagram.com/polibacorse/",
            techStack: ["Electronics", "C++", "Matlab"]
        },
        {
            imageUrl: "./qr_code.webp",
            title: "QR Code to Apple Wallet Ticket Conversion Script",
            description: "I am currently developing a script that converts QR code inputs into tickets compatible with Apple Wallet. This project involves automating the process of generating digital passes, enhancing the user experience for seamless ticket management on iOS devices.",
            link: "",
            techStack: ["Python", "Apple Wallet API", "Javascript"]
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div>
                    {projectsData.map((project, index) => (
                        <ProjectCard 
                            key={index}
                            {...project}
                        />
                    ))}
                </div>
        </motion.div>
    );
};

export default Projects;