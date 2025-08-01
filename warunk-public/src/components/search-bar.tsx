`use client`;
import { Input } from "./ui/input";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative w-full">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Cari Di Warunk..."
        className="pl-8 outline-2"
      />
    </div>
  );
}
