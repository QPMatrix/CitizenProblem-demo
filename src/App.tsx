import { ProblemList } from "@/pages/problems/page.tsx";
import Navbar from "@/components/navbar";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-16">
        <ProblemList />
      </main>
    </div>
  );
}

export default App;
