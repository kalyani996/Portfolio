import { ArrowRight, ExternalLink } from "lucide-react"
import { Github } from "lucide-react"
const projects = [
    {
        id:1,
        title : "Wabrasives E-commerce Website",
        description: "An e-commerce platform for abrasive products with user-friendly interface and secure payment gateway.",
        images: "/projects/Wabrasives.png",
        tags: ['Knockout.js', 'JavaScript', 'Magento 2', 'PHP'],
        link: "https://www.wabrasives.com/",
        githubUrl:"#",
    },
    {
        id:2,
        title: "Galleherduffy E-commerce Website",
        description: "An online store for art pieces featuring a modern design, easy navigation, and multiple payment options.",
        images: "/projects/Tomduffy.png",
        tags: ['React', 'JavaScript', 'CSS'],
        link: "https://www.galleherduffy.com/",
        githubUrl:"#",
    },
    {
        id:3,
        title: "Portfolio Website",
        description: "A personal portfolio website to showcase projects, skills, and experience with a clean and responsive design.",
        images: "/projects/portfolio.png",
        tags: ['React', 'JavaScript', 'CSS'],
        link: "https://www.yourportfolio.com/",
        githubUrl:"#",
    },
    // {
    //     id:4,
    //     title: "Blog Platform",
    //     description: "A blogging platform with user authentication, post creation, and commenting features, built with Django.",
    //     images: "/projects/blogplatform.png",
    //     tags: ['Django', 'Python', 'HTML', 'CSS'],
    //     link: "https://www.yourblogplatform.com/",
    //     githubUrl:"#",
    // }
]

export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl fond-bold mb-4 text-center"> Featured <span className="text-primary">Projects</span></h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of the projects I've worked on recently. Each projects was carefully crafted to solve specific problems and deliver value.
                </p>

                <div className="grid grid-cols:1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id}
                            className="group bg-card rounded-lg shadow-xs overflow-hidden shadow-xs card-hover">
                                <div className="h-48 overflow-hidden">
                                    <img 
                                        src={project.images} 
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-tranform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                        ))}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex space-x-3">
                                            <a 
                                                href={project.link} 
                                                target="_blank" 
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                                <ExternalLink  size={20}/>
                                            </a>
                                            <a 
                                                href={project.githubUrl} 
                                                target="_blank" 
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                                <Github size={20} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    ))}   

                </div>

                <div className="text-center mt-12">
                    <a 
                    href="https://www.github.com/kalyani996/" 
                    target="_blank"
                    className="cosmic-button w-fit flex items-center mx-auto gap-2">
                        Check My Github <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    )
}