import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured online shopping platform with payment integration, inventory management, and real-time analytics. Built for scalability and performance.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      github: "#",
      live: "#",
      featured: true,
    },
    {
      title: "Project Management Dashboard",
      description: "Comprehensive tool for managing projects, teams, and deadlines with real-time collaboration features and detailed reporting.",
      tech: ["Next.js", "TypeScript", "MongoDB", "Socket.io"],
      github: "#",
      live: "#",
      featured: true,
    },
    {
      title: "AI Content Generator",
      description: "SaaS platform leveraging AI to generate high-quality content for blogs, social media, and marketing campaigns.",
      tech: ["React", "Python", "OpenAI API", "Redis"],
      github: "#",
      live: "#",
      featured: false,
    },
    {
      title: "Real-Time Analytics Tool",
      description: "Dashboard for monitoring website analytics with custom event tracking and visitor behavior analysis.",
      tech: ["Vue.js", "Node.js", "ClickHouse", "Docker"],
      github: "#",
      live: "#",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 px-4 bg-gradient-to-b from-transparent via-secondary/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="font-mono text-sm text-primary mb-3">$ cd projects/ && ls</div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`border border-border bg-card/30 p-6 md:p-8 hover-glow transition-all duration-300 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  <a 
                    href={project.github}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href={project.live}
                    className="text-muted-foreground hover:text-secondary transition-colors"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 border border-border bg-muted/50 text-foreground font-mono text-xs hover:border-primary transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-card/30 hover:border-primary text-foreground hover:text-primary transition-all font-mono"
          >
            <Github className="w-4 h-4" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
