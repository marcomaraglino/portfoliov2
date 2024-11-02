import PropTypes from 'prop-types';

const ProjectCard = ({ 
    imageUrl, 
    title, 
    description, 
    link, 
    techStack = [] // Array of technology names
}) => {
    return (
        <div 
            onClick={() => window.open(link)}
            className="hover:border-indigo-50 transition-all cursor-pointer rounded-3xl border border-indigo-50/40 p-6"
        >
            <img 
                src={imageUrl} 
                alt={title}
                className="rounded-2xl object-cover w-full h-40"
            />
            <h2 className="text-base text-left text-white mt-2">
                {title}
            </h2>
            <div className="flex mt-1 flex-wrap gap-1">
                {techStack.map((tech, index) => (
                    <span 
                        key={index}
                        className="text-xs px-2 py-1 rounded-full bg-gray-500/20 text-white-300"
                    >
                        {tech}
                    </span>
                ))}
            </div>
            <p className="text-sm text-gray-400 text-left mt-2">
                {description}
            </p>
        </div>
    );
};

ProjectCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    techStack: PropTypes.arrayOf(PropTypes.string)
};

export default ProjectCard; 