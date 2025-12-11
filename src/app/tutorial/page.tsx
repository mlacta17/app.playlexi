"use client" // Add this at the very top

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress"; 
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Voice from "@/components/ui/voice"
import { CircleDashedIcon } from "lucide-react";

export default function TutorialPage() {
  const handleRecord = () => {
    console.log("Record clicked")
  }

  const handleMessageSquare = () => {
    console.log("Message clicked")
  }

  const handleBook = () => {
    console.log("Dictionary clicked")
  }

  const handleVolume = () => {
    console.log("Volume clicked")
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome to the Tutorial - working as button proxy</h1>

      {/* Default */}
      <Button>Default Button</Button>

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
      <br/>
      <Button variant="default" size="icon"><CircleDashedIcon /></Button>
      <br/>

      {/* Input field */}
      <br/>
      <Input type="text" placeholder="Input field" />
      <br/>

      {/* Progress Bar */}
      <br/>
      <Progress value={33} />
      <br/>

      {/* Tabs */}
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Make changes to your account here</TabsContent>
        <TabsContent value="password">Change your password here</TabsContent>
      </Tabs>

      <br/>
      {/* Voice input */}
      <h2 className="text-xl font-bold mb-4">Voice Components</h2>

      {/* Use the Voice component - with default props */}
      <Voice />

      <br />

      {/* Use it again with custom props */}
      <Voice
        placeholderText="Say something..."
        definitionText="Definition: a female child from birth to adulthood"
        onRecord={handleRecord}
        onMessageSquare={handleMessageSquare}
        onBook={handleBook}
        onVolume={handleVolume}
      />

      <br />

      {/* Use it a third time with different props */}
      <Voice
        placeholderText="Recording..."
        definitionText="Custom definition here"
      />
    </div>
  );
}