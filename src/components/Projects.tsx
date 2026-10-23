import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Blog Site',
      category: 'Full-Stack Product',
      description:
        'A polished blogging platform with theme switching, authentication, and a clean content workflow designed for a modern editorial experience.',
      tech: ['EJS', 'Node.js', 'Express', 'Better-SQLite', 'CSS'],
      github: 'https://github.com/Ronny48/my-web-app',
      live: 'https://blog-app-tdag.onrender.com/',
      featured: true,
      image:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
      screenshots: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
      ],
    },
    {
      title: 'CERA',
      category: 'Campus Safety App',
      description:
        'A JavaFX-based reporting system for university campuses to manage incidents securely and quickly while supporting both anonymous and identified submissions.',
      tech: ['JavaFX', 'Java', 'MySQL', 'Maven'],
      github: 'https://github.com/Ronny48/cera',
      live: '#',
      featured: true,
      image:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
      screenshots: [
        'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1558494949cc5c1c7d7b8d8cb2f7cf3d3?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
      ],
    },
    {
      title: 'Log Book',
      category: 'Operations Dashboard',
      description:
        'A delivery and visitor tracking system for office-based operations, helping reception teams record updates with speed and clarity.',
      tech: ['React', 'Express', 'TailwindCSS', 'SQLite'],
      github: 'https://github.com/Ronny48/LogBook',
      live: 'https://log-book-lime.vercel.app/',
      featured: false,
      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
      screenshots: [
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
      ],
    },
    {
      title: 'Portfolio Website',
      category: 'Personal Brand',
      description:
        'A modern personal portfolio built to present work, experience, and credibility in a crisp, conversion-focused way.',
      tech: ['React', 'TypeScript', 'TailwindCSS'],
      github: 'https://github.com/Ronny48/cyber-folio-template',
      live: '#',
      featured: false,
      image:
        'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80',
      screenshots: [
        'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
      ],
    },
  ];

  return (
    <section id="projects" className="px-4 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <div className="mb-3 font-mono text-sm text-primary">$ cd projects/ && ls</div>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {projects.map((project, index) => {
            const stack = project.screenshots?.length ? project.screenshots : [project.image];

            return (
              <article
                key={index}
                className={`group leaf-card p-4 transition-all duration-300 hover:-translate-y-1 hover-glow md:p-5 ${
                  project.featured ? 'md:col-span-2' : ''
                }`}
              >
                <div className="flex flex-col gap-5 lg:flex-row">
                  <div className="w-full lg:w-[52%]">
                    <div className="leaf-stack">
                      {stack.map((shot, shotIndex) => {
                        const width = project.featured ? 320 - shotIndex * 26 : 290 - shotIndex * 24;
                        const height = project.featured ? 210 - shotIndex * 18 : 180 - shotIndex * 16;
                        const left = project.featured ? 26 + shotIndex * 18 : 18 + shotIndex * 16;
                        const top = project.featured ? 16 + shotIndex * 14 : 18 + shotIndex * 12;
                        const rotate = shotIndex % 2 === 0 ? -(4 + shotIndex * 2) : 4 + shotIndex * 2;

                        return (
                          <div
                            key={`${project.title}-${shotIndex}`}
                            className="leaf-stack-item"
                            style={{
                              width: `${width}px`,
                              height: `${height}px`,
                              left: `${left}px`,
                              top: `${top}px`,
                              zIndex: stack.length - shotIndex,
                              transform: `rotate(${rotate}deg)`,
                              opacity: 1 - shotIndex * 0.12,
                              animationDelay: `${shotIndex * 0.4}s`,
                            }}
                          >
                            <img src={shot} alt={`${project.title} screenshot ${shotIndex + 1}`} />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                          {project.category}
                        </p>
                        <div className="flex items-center gap-2">
                          <a
                            href={project.github}
                            className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                            aria-label={`View ${project.title} on GitHub`}
                          >
                            <Github className="h-4 w-4" />
                          </a>
                          {project.live !== '#' && (
                            <a
                              href={project.live}
                              className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-secondary hover:text-secondary"
                              aria-label={`View ${project.title} live demo`}
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                      </div>

                      <h3 className="mb-3 text-2xl font-bold text-foreground">{project.title}</h3>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="rounded-full border border-border bg-muted/50 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/90"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/ronny48"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/30 px-6 py-3 font-mono text-sm text-foreground transition-all hover:border-primary hover:text-primary"
          >
            <Github className="h-4 w-4" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
