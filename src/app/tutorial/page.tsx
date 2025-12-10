import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";


export default function TutorialPage() {
  return (
    <div className="min-h-screen p-6">

    <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          Welcome to the Tutorial - working as button proxy
          <ThemeToggle />
         </h1>

    </div>


      {/* Default */}
      <div className="mt-4 space-y-3">
        <Button>Button</Button>

        {/* Variants */}
        <br/>
        <Button variant="secondary">Secondary</Button>
        <br/>
        <Button variant="destructive">Destructive</Button>
        <br/>
        <Button variant="ghost">Ghost</Button>
        <br/>
        <Button variant="outline">Outline</Button>
        <br/>
        <Button variant="link">Link</Button>
      </div>
    </div>
  );
}