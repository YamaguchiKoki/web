import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="flex justify-between top-0 sticky w-full h-[50px] mb-10 p-4">
      <p>App Name</p>
      <div className="flex space-x-3">
        <Button variant="secondary">
          ログイン
        </Button>
        <Button>
          新規登録
        </Button>
      </div>
    </header>
  )
}