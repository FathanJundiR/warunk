import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search, ShoppingCart } from "lucide-react";

export default function TopBar() {
  return (
    <div className="flex flex-col">
      <div>mobile promo</div>
      <div className="flex flex-row mx-2 sm:mx-4 *:mx-2 justify-between gap-4">
        <div className="text-2xl bg- flex-none">WARUNK</div>
        <div className="flex flex-row grow items-center gap-2">
          <span>Kategori</span>
          <div className="relative bg-red w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Cari Di Warunk..."
              className="pl-8 outline-2"
            />
          </div>
        </div>
        <div className="flex-none flex flex-row gap-2 items-center">
          <ShoppingCart></ShoppingCart>
          <div className="h-3/4 border-2 mx-4"></div>
          <Button className="bg-white outline-2 outline-solid outline-black text-black hover:text-white">
            Masuk
          </Button>
          <Button>Daftar</Button>
        </div>
      </div>
    </div>
  );
}
