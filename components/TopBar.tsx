"use client";

import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useSidebarStore } from "@/app/stores/sidebar-store";
const TopBar = () => {
  const { handleOpenOrClose } = useSidebarStore();
  return (
    <div
      className={cn(
        "flex items-center p-4 justify-between sticky top-0 z-30",
        "lg:hidden"
      )}
    >
      <Logo />
      <Button variant="ghost" size="icon" onClick={handleOpenOrClose}>
        <Menu />
      </Button>
    </div>
  );
};

export default TopBar;
