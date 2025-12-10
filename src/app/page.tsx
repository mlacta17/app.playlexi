// src/app/page.tsx
import { redirect } from "next/navigation";

export default function RootPage() {
  // For now, always send people to the tutorial
  redirect("/tutorial");
}