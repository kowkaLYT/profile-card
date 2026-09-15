function Experience() {
    const experiences = [
        {
            period: "2023–25",
            title: "Frontend Developer",
            company: "Nova DevelopersCO",
            description:
                "Built responsive web apps with React, TypeScript and JavaScript.",
        },
    ];

    const education = [
        {
            period: "2024–28",
            title: "Computer Science & AI",
            company: "V. N. Karazin Kharkiv National University",
        },
        {
            period: "2025–26",
            title: "Level 1 English FS & Maths",
            company: "Chesterfield College",
        },
        {
            period: "2023",
            title: "Markup Development",
            company: "SourceIT",
        },
    ];

    return (
        <div className="space-y-8 text-[#E9D8C8]">
            <section>
                <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#FF5C8D]">
                    EXPERIENCE
                </h4>

                <div className="space-y-5">
                    {experiences.map((item) => (
                        <div key={item.title} className="flex gap-4">
                            <span className="w-20 shrink-0 text-xs font-semibold text-[#8FAFC2]">
                                {item.period}
                            </span>

                            <div>
                                <h3 className="text-base font-bold leading-tight text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-1 text-sm font-medium text-[#8FAFC2]">
                                    {item.company}
                                </p>

                                {item.description && (
                                    <p className="mt-1.5 text-sm leading-relaxed text-[#E9D8C8]/70">
                                        {item.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#FF5C8D]">
                    EDUCATION
                </h4>

                <div className="space-y-5">
                    {education.map((item) => (
                        <div key={item.title} className="flex gap-4">
                            <span className="w-20 shrink-0 text-xs font-semibold text-[#8FAFC2]">
                                {item.period}
                            </span>

                            <div>
                                <h3 className="text-base font-bold leading-tight text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-1 text-sm font-medium text-[#E9D8C8]/70">
                                    {item.company}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Experience;