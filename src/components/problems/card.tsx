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
import { Button } from "@/components/ui/button.tsx";

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
        <div className="flex flex-row justify-between mt-5">
          <div className="text-sm text-muted-foreground ">
            נשלח על ידי <span className="underline">{problem.submitBy}</span>
          </div>
          <div className="text-sm text-muted-foreground">
            {problem.createdAt.toString()}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between flex-row">
        <Button>עדכון סטטוס</Button>
        <Button variant="outline" className="font-bold">
          שלח תגובה
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProblemCard;
