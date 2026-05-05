// src/components/resume-card.tsx
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface Props {
  title?: string;
  description?: string;
  badges: readonly string[];
  link?: string;
  company?: string;
  start: string;
  end: string;
}

export function ResumeCard({
  title,
  description,
  badges,
  link,
  company,
  start,
  end,
}: Props) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="inline-flex items-center justify-center font-semibold leading-none">
            {company ? (
              <a className="hover:underline" href={link} target="_blank" rel="noopener noreferrer">
                {company}
              </a>
            ) : (
              // Use title for education entries when company is not present
              title
            )}
            <span className="inline-flex gap-x-1 ml-2">
              {badges.map((badge) => (
                <Badge 
                  variant="secondary" 
                  className="align-middle text-xs" 
                  key={badge}
                >
                  {badge}
                </Badge>
              ))}
            </span>
          </h3>
          <div className="text-sm tabular-nums text-gray-500">
            {start} - {end}
          </div>
        </div>
        {/* Only show title below company for work experience */}
        {company && title && <h4 className="text-sm leading-none">{title}</h4>}
      </CardHeader>

      {description && (
        <CardContent className="mt-2 text-sm">
          {description}
        </CardContent>
      )}
    </Card>
  );
}