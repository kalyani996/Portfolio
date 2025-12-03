import { Briefcase, Code, User } from "lucide-react";


export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
        {""}
        <div className="container mx-auto mx-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6"> 
                <h3 className="text-2xl font-semibold"> Passionate Software Developer</h3>
                
                <p className="text-muted-foreground">
                    I am a dedicated Full-Stack Software Developer with over 5 years of experience in delivering 
                    comprehensive e-commerce solutions. My expertise lies in Magento 2, backend development, 
                    and creating custom APIs using REST and GraphQL. I have a strong background in cloud-based 
                    deployments on platforms like AWS and Azure.
                </p>
                
                <p className="text-muted-foreground">
                    Throughout my career, I have successfully integrated various payment systems and designed 
                    scalable microservices architectures. My efforts have led to significant improvements in 
                    deployment times and site performance, showcasing my ability to optimize and enhance 
                    software solutions effectively.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-d justify-center">
                    <a href="contact" className="cosmic-button">
                        {" "}
                        Get In Touch</a>
                    <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hiver:bg-primary/10 transition-colors duration-300 text-center">
                        Download CV
                    </a>
                </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Software Developer</h4>
                                <p>
                                    Specializing in full-stack development with expertise in Python, PHP, JavaScript, and cloud deployments.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">REST and GraphQL APIs</h4>
                                <p>
                                    Experienced in designing and implementing custom APIs to enhance application functionality and integration.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">E-commerce Solutions</h4>
                                <p>
                                    Proven track record in delivering end-to-end e-commerce solutions, optimizing performance and user experience.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </section>
    );
};