import { Badge } from "@/components/ui/badge";
import {
  certifications,
  education,
  profile,
  skills,
} from "@/content/site-data";

export function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8">
      <p className="font-mono text-[11px] text-shell uppercase text-primary">
        &#9670; The byline
      </p>
      <h2 className="mt-2 font-serif text-4xl italic sm:text-5xl">
        About {profile.name.split(" ")[0]}
      </h2>

      <p className="mt-8 text-lg leading-relaxed">{profile.summary}</p>
      <p className="mt-4 text-muted-foreground">
        Based in {profile.location}. Reachable at{" "}
        <a href={`mailto:${profile.email}`} className="text-primary hover:underline">
          {profile.email}
        </a>
        .
      </p>

      <h3 className="mt-14 font-serif text-2xl">Core skills</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="outline">
            {skill}
          </Badge>
        ))}
      </div>

      <h3 className="mt-14 font-serif text-2xl">Education</h3>
      <ul className="mt-4 space-y-2 text-muted-foreground">
        {education.map((edu) => (
          <li key={edu.school}>
            {edu.credential} — {edu.school}
          </li>
        ))}
      </ul>

      <h3 className="mt-14 font-serif text-2xl">Certifications</h3>
      <ul className="mt-4 space-y-2 text-muted-foreground">
        {certifications.map((cert) => (
          <li key={cert.name}>
            {cert.name}
            {cert.issuer ? ` — ${cert.issuer}` : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}
