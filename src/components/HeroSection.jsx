import { ArrowDown } from "lucide-react";


export const HeroSection = () => {
    return (
        <section 
            id="hero" 
            className="relative min-h-screen flex flex-col items-center justify-center px-4">
                <div className="container max-w-4xl mx-auto text-center z-10">  
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            <span className="opacity-0 animate-fade-in">Hi, I am </span>
                            <span className="text-primary opacity-0 animate-fade-in-delay-1">Kalyani Shivram</span>
                            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Prajapati</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                            Full-Stack Software Developer with 5+ years of experience delivering end to end e commerce solutions, specializing in Magento 2, Backend development, custom APIs (REST, GraphQL), and cloud based deployments (AWS, Azure). Strong expertise in payment integrations and designing scalable microservices architectures. Proven track record of reducing deployment times by 40% and improving site performance by 25%. Proficient in Python (Django, FastAPI), PHP, JavaScript, and experience with MySQL and NoSQL database systems
                        </p>

                        <div className="pd-4 opacity-0 animate-fade-in-delay-4">
                            <a href="#projects" className="cosmic-button">
                                View My Work
                            </a>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                    <span className="text-sm text-muted-foreground mb-2">  Scroll </span>
                    <ArrowDown className="h-6 w-6 text-primary"/>
                </div>
        </section>
    );
};
