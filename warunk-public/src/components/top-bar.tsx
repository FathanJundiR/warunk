import SearchBar from "./search-bar";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

export default function TopBar() {
  return (
    <div className="flex flex-col">
      <div>mobile promo</div>
      <div className="flex flex-row mx-2 sm:mx-4 *:mx-2 justify-between gap-4">
        <div className="text-2xl bg- flex-none">WARUNK</div>
        <div className="flex flex-row grow items-center gap-2">
          <span>Kategori</span>
          <SearchBar></SearchBar>
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
