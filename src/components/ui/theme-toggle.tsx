"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // A neutral placeholder until mounted
    return (
      <ToggleGroup
        type="single"
        variant="outline"
        size="sm"
      >
        <ToggleGroupItem
        value="light"
        aria-label="Use light theme"
        >
        <SunIcon className="size-4" />
       </ToggleGroupItem>

      <ToggleGroup
        type="single"
        variant="outline"
        size="sm"
      >
        <ToggleGroupItem
        value="light"
        aria-label="Use light theme"
        >
        <MoonIcon className="size-4" />
       </ToggleGroupItem>
      </ToggleGroup>
  );
}

const current = theme