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
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    // A neutral placeholder until mounted
    return (
      <ToggleGroup type="single" variant="outline" size="sm">
        <ToggleGroupItem value="light" aria-label="Use light theme" disabled>
          <SunIcon className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="dark" aria-label="Use dark theme" disabled>
          <MoonIcon className="size-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    );
  }

  return (
    <ToggleGroup
      type="single"
      variant="outline"
      size="sm"
      value={theme}
      onValueChange={(value) => {
        if (value) setTheme(value);
      }}
    >
      <ToggleGroupItem value="light" aria-label="Use light theme">
        <SunIcon className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" aria-label="Use dark theme">
        <MoonIcon className="size-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
