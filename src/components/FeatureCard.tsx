import { Card, CardContent } from "@/components/ui/card";
import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card border-border">
      <CardContent className="p-4 sm:p-6">
        <div className="mb-4 text-primary group-hover:text-lollipop transition-colors">
          {icon}
        </div>
        <h3 className="text-base sm:text-lg font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-sm sm:text-base text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};
