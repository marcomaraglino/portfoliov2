import { Github, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full py-6 mt-auto">
            <hr className="w-full bg-gray-100/50 mb-4 border-indigo-50/30 rounded dark:bg-gray-500/50"/>
            <div className="flex justify-between items-center">
                <p className="text-sm text-gray-400">© 2024 Marco Maraglino</p>
                <div className="flex gap-4">
                    <a 
                        href="https://github.com/marcomaraglino" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <Github size={20} />
                    </a>
                    <a 
                        href="mailto:marcomaraglino5@gmail.com"
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <Mail size={20} />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/marcomaraglino5"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 