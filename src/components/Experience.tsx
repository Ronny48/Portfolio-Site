import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'IT support',
      company: 'Ministry of Energy and Green Transition',
      period: '2025',
      description:
        'Interned at the ministry of energy and green transition where i gained hands on skills in networking and network infastructure and computer hardware and made a project to hone my web development skills',
      achievements: [
        'Troubleshoot networks and network devices',
        'Setup online and offline meetings',
        'Built a visitor/letter tracker which my supervisor instructed me to. ',
      ],
    },
    {
      type: 'education',
      title: 'Bachelor of Science in Computer Science',
      company: 'University of Cape Coast',
      period: '2022 - present',
      description:
        'Focused on software engineering, algorithms, Data structure, Networking, and web technologies.',
      achievements: ['Worked in a team to build a campus emergency reporting app with javafx'],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 md:py-32 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="font-mono text-sm text-primary mb-3">$ cat experience.log</div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Experience & Education
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary" />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border border-border bg-card/30 p-6 md:p-8 hover-glow transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-3">
                  {exp.type === 'work' ? (
                    <Briefcase className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  ) : (
                    <GraduationCap className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                    <p className="text-primary font-mono text-sm">{exp.company}</p>
                  </div>
                </div>
                <div className="font-mono text-sm text-muted-foreground md:text-right">
                  {exp.period}
                </div>
              </div>

              <p className="text-muted-foreground mb-4 ml-8">{exp.description}</p>

              <div className="ml-8 space-y-2">
                {exp.achievements.map((achievement, achIndex) => (
                  <div key={achIndex} className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-1">▹</span>
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
