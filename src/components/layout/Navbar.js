'use client'

import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Sidebar } from './Sidebar'
import { ThemeToggle } from '@/components/theme-toggle'
import Image from 'next/image'

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-52 p-0">
            <Sidebar />
          </SheetContent>
        </Sheet>
        
        <div className="flex items-center space-x-2 md:ml-2">
          <div className="relative w-6 h-6">
            <Image
              src="/icon.png"
              alt="Machina Studio Icon"
              width={24}
              height={24}
              className="object-contain"
              priority
            />
          </div>
          <span className="font-bold hidden md:inline-block">Machina Studio</span>
        </div>
        
        <nav className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex">Documentation</Button>
          <Button variant="ghost">Support</Button>
          <ThemeToggle />
        </nav>
      </div>
    </div>
  )
}