import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress"; 
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Voice } from "@/components/voice"
import { CircleDashedIcon } from "lucide-react";

export default function TutorialPage() {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Welcome to the Tutorial - working as button proxy</h1>

        {/* Default */}
        <Button>Default Button</Button>

        {/* Variants */}
        <br/>
        <Button variant = "secondary">Secondary</Button>
        <br/>
        <Button variant = "destructive">Destructive</Button>
        <br/>
        <Button variant = "ghost">Ghost</Button>
        <br/>
        <Button variant = "outline">Outline</Button>
        <br/>
        <Button variant = "link">Link</Button>
        <br/>
        <Button variant = "default" size = "icon" ><CircleDashedIcon /></Button>
        <br/>

        {/*Input field*/}
        <br/>
        <Input type="test" placeholder="Input field" />
        <br/>

        <br/>
        {/*Progress Bar */}
        <Progress value={33} />
        <br/>

        {/*Tabs */}
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">Make changes to your account here</TabsContent>
          <TabsContent value="password">Change your password here</TabsContent>
        </Tabs>

        <br/>

        {/* Avatars */}
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <br/>
        {/* Voice input */}


      </div>
    );
  }