import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BsCommand } from "react-icons/bs";
import SideMenu from "@/components/layouts/sideMenu";

export function SpHeader() {
  return (
    <header className="flex flex-row w-full fixed top-0 bg-white border-b border-slate-500 p-2">
      <Drawer>
        <DrawerTrigger asChild className="">
          <Button className=""><BsCommand /></Button>
        </DrawerTrigger>
        <DrawerContent className="w-full bg-white">
          <div className="w-full">
            <DrawerHeader>
              <div className="flex flex-row w-full gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex justify-center items-center">Koki Yamaguchi</div>
              </div>
            </DrawerHeader>
            <div className="flex flex-col gap-y-2 bg-white h-full w-full p-2 px-4">
              <SideMenu />
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </header>
  )
}