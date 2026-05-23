const items = [
  "IRAS",
  ".NET Core",
  "MOM",
  "Java",
  "Angular",
  "DOS",
  "Spring Boot",
  "Apache Kafka",
  "TypeScript",
  "Entity Framework",
  "WebLogic",
  "Hibernate",
  "Oracle SQL",
  "MSSQL",
  "Fortify",
  "SonarQube",
  "Azure DevOps",
  "REST Assured",
  "xUnit",
  "JUnit",
];

export function Marquee() {
  return (
    <section className="relative overflow-hidden border-b border-foreground/10 py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="text-2xl font-semibold tracking-tight text-foreground/30 sm:text-3xl"
          >
            {item}
            <span className="ml-12 text-foreground/10">/</span>
          </span>
        ))}
      </div>
    </section>
  );
}
