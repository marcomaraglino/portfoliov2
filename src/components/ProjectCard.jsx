import PropTypes from 'prop-types';

// Tech stack color mapping
const techColors = {
    // Frontend
    'react': 'bg-blue-500/20 text-blue-200',
    'vue': 'bg-emerald-500/20 text-emerald-200',
    'angular': 'bg-red-500/20 text-red-200',
    'javascript': 'bg-yellow-500/20 text-yellow-200',
    'typescript': 'bg-blue-400/20 text-blue-200',
    'html': 'bg-orange-500/20 text-orange-200',
    'css': 'bg-blue-500/20 text-blue-200',
    'tailwind': 'bg-cyan-500/20 text-cyan-200',
    
    // Backend
    'nodejs': 'bg-green-500/20 text-green-200',
    'python': 'bg-blue-500/20 text-blue-200',
    'java': 'bg-red-600/20 text-red-200',
    'c++': 'bg-pink-500/20 text-pink-200',
    'c#': 'bg-purple-500/20 text-purple-200',
    'php': 'bg-indigo-500/20 text-indigo-200',
    'ruby': 'bg-red-500/20 text-red-200',
    'go': 'bg-cyan-500/20 text-cyan-200',
    'rust': 'bg-orange-700/20 text-orange-200',
    
    // Databases
    'mongodb': 'bg-green-600/20 text-green-200',
    'mysql': 'bg-blue-600/20 text-blue-200',
    'postgresql': 'bg-blue-500/20 text-blue-200',
    'redis': 'bg-red-500/20 text-red-200',
    
    // Mobile
    'react native': 'bg-blue-500/20 text-blue-200',
    'flutter': 'bg-cyan-500/20 text-cyan-200',
    'swift': 'bg-orange-500/20 text-orange-200',
    'kotlin': 'bg-purple-500/20 text-purple-200',
    
    // Cloud & DevOps
    'aws': 'bg-orange-500/20 text-orange-200',
    'docker': 'bg-blue-500/20 text-blue-200',
    'kubernetes': 'bg-blue-600/20 text-blue-200',
    'firebase': 'bg-yellow-600/20 text-yellow-200',
    
    // Other
    'graphql': 'bg-pink-600/20 text-pink-200',
    'rest': 'bg-green-500/20 text-green-200',
    'blockchain': 'bg-purple-500/20 text-purple-200',
    'ai': 'bg-blue-700/20 text-blue-200',
    'machine learning': 'bg-green-600/20 text-green-200',
    
    // Added new technologies
    'electronics': 'bg-amber-600/20 text-amber-200',
    'apple wallet api': 'bg-gray-500/20 text-gray-200',
    'matlab': 'bg-orange-600/20 text-orange-200'
};

const ProjectCard = ({ 
    imageUrl, 
    title, 
    description, 
    link, 
    techStack = [] 
}) => {
    const getTechColor = (tech) => {
        // Convert to lowercase for case-insensitive matching
        const techLower = tech.toLowerCase();
        return techColors[techLower] || 'bg-gray-500/20 text-gray-200'; // Default color if not found
    };

    return (
        <div 
            onClick={() => window.open(link)}
            className="hover:border-indigo-50 transition-all cursor-pointer rounded-3xl border mb-4 border-indigo-50/40 p-6"
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
                        className={`text-xs px-2 py-1 rounded-full ${getTechColor(tech)}`}
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