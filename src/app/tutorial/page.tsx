import { Button } from "@/components/ui/button";

export default function TutorialPage() {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Welcome to the Tutorial - working as button proxy</h1>

        {/* Default */}
        <Button>Default Button</Button>

        <br/>

        {/* Variants */}
        <Button variant = "secondary">Secondary</Button>
        <br/>
        <Button variant = "destructive">Destructive</Button>
        <br/>
        <Button variant = "ghost">Ghost</Button>
        <br/>
        <Button variant = "outline">Outline</Button>
        <br/>
        <Button variant = "link">Link</Button>

      </div>
    );
  }