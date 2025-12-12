"use client" // Add this at the very top

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Voice from "@/components/ui/voice"
import { CircleDashedIcon } from "lucide-react";
import { ThemeSwitcher } from "@/components/kibo-ui/theme-switcher";
import { Dropzone, DropzoneContent, DropzoneEmptyState } from "@/components/kibo-ui/dropzone";
import { ImageCrop, ImageCropContent, ImageCropApply, ImageCropReset } from "@/components/kibo-ui/image-crop";
import { useState } from "react";

export default function TutorialPage() {
  const [customTheme, setCustomTheme] = useState<"light" | "dark" | "system">("system");
  const [uploadedFiles, setUploadedFiles] = useState<File[]>();
  const [croppedImage, setCroppedImage] = useState<string>();

  const handleThemeChange = (newTheme: "light" | "dark" | "system") => {
    setCustomTheme(newTheme);

    // Apply theme to document
    const root = document.documentElement;
    root.classList.remove("light", "dark");

    if (newTheme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(newTheme);
    }
  };

  const handleFileDrop = (acceptedFiles: File[]) => {
    setUploadedFiles(acceptedFiles);
    console.log("Files uploaded:", acceptedFiles);
  };

  const handleCrop = (croppedImageData: string) => {
    setCroppedImage(croppedImageData);
    console.log("Image cropped!");
  };

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

      {/* Avatars */}
       <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      
      <br/>
      {/* Voice input */}

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
        <br/>

        {/*Badge component*/}
        <Badge variant="default">Badge</Badge>
        <Badge variant="outline">Badge</Badge>
        <Badge variant="secondary">Badge</Badge>
        <Badge variant="destructive">Badge</Badge>

      <br/>
      <br/>

      {/* Theme Switcher */}
      <ThemeSwitcher
        value={customTheme}
        onChange={handleThemeChange}
      />

      <br/>
      <br/>

      {/* Dropzone */}
      <h2 className="text-xl font-semibold mb-2">File Upload (Dropzone)</h2>
      <Dropzone
        accept={{ 'image/*': [] }}
        maxFiles={1}
        maxSize={5 * 1024 * 1024}
        onDrop={handleFileDrop}
        src={uploadedFiles}
      >
        <DropzoneEmptyState />
        <DropzoneContent />
      </Dropzone>

      <br/>
      <br/>

      {/* Image Crop */}
      {uploadedFiles && uploadedFiles[0] && (
        <>
          <h2 className="text-xl font-semibold mb-2">Image Cropping</h2>
          <ImageCrop file={uploadedFiles[0]} onCrop={handleCrop} aspect={1}>
            <div className="space-y-4">
              <ImageCropContent />
              <div className="flex gap-2">
                <ImageCropApply />
                <ImageCropReset />
              </div>
            </div>
          </ImageCrop>
        </>
      )}

      {/* Show cropped image */}
      {croppedImage && (
        <>
          <br/>
          <h2 className="text-xl font-semibold mb-2">Cropped Result</h2>
          <img src={croppedImage} alt="Cropped" className="max-w-xs rounded-lg border" />
        </>
      )}

    </div>
  );
}