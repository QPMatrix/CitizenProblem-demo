import { mockProblems } from "@/mocks";
import ProblemCard from "@/components/problems/card.tsx";

export const ProblemList = () => {
  return (
    <div className="p-6 bg-background min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {mockProblems.map((problem) => (
          <ProblemCard key={problem.id} problem={problem} />
        ))}
      </div>
    </div>
  );
};
