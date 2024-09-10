import { Problem } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import Carousel from "@/components/problems/carousel.tsx";

interface ProblemCardProps {
  problem: Problem;
}

const ProblemCard = ({ problem }: ProblemCardProps) => {
  return (
    <Card className="bg-card text-card-foreground rounded-lg shadow-lg max-w-full sm:max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{problem.title}</CardTitle>
        <CardDescription>{problem.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Carousel images={problem.images} />
      </CardContent>
      <CardFooter className="flex flex-row justify-between">
        <div className="text-sm text-muted-foreground">
          נשלח על ידי {problem.submitBy}
        </div>
        <div className="text-sm text-muted-foreground">
          {problem.createdAt.toString()}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProblemCard;
