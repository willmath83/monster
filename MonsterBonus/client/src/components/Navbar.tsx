import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { MonsterLogo } from "@/assets/svg/monster-logo";
import { Link } from "wouter";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <MonsterLogo className="w-10 h-10" />
              <span className="text-2xl font-logo text-primary">
                Monster<span className="text-accent-500">VIP</span>
              </span>
            </div>
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link href="/">
              <a className="text-dark hover:text-primary-500 font-medium transition duration-200">
                Home
              </a>
            </Link>
            <Link href="/casino">
              <a className="text-dark hover:text-primary-500 font-medium transition duration-200">
                Casino
              </a>
            </Link>
            <Link href="/sports">
              <a className="text-dark hover:text-primary-500 font-medium transition duration-200">
                Sports
              </a>
            </Link>
            <Link href="/bonuses">
              <a className="text-dark hover:text-primary-500 font-medium transition duration-200">
                Bonuses
              </a>
            </Link>
            <Link href="/blog">
              <a className="text-dark hover:text-primary-500 font-medium transition duration-200">
                Blog
              </a>
            </Link>
            <Link href="/custom-images">
              <a className="text-dark hover:text-primary-500 font-medium transition duration-200">
                Custom Images
              </a>
            </Link>
          </nav>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="hidden md:block text-primary-500 font-bold hover:text-primary-600"
            >
              Sign In
            </Button>
            <Button
              className="bg-accent-500 hover:bg-accent-600 text-white font-bold"
            >
              Join VIP
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <MenuIcon className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link href="/">
                <a className="text-dark hover:text-primary-500 font-medium transition duration-200">
                  Home
                </a>
              </Link>
              <Link href="/casino">
                <a className="text-dark hover:text-primary-500 font-medium transition duration-200">
                  Casino
                </a>
              </Link>
              <Link href="/sports">
                <a className="text-dark hover:text-primary-500 font-medium transition duration-200">
                  Sports
                </a>
              </Link>
              <Link href="/bonuses">
                <a className="text-dark hover:text-primary-500 font-medium transition duration-200">
                  Bonuses
                </a>
              </Link>
              <Link href="/blog">
                <a className="text-dark hover:text-primary-500 font-medium transition duration-200">
                  Blog
                </a>
              </Link>
              <Link href="/custom-images">
                <a className="text-dark hover:text-primary-500 font-medium transition duration-200">
                  Custom Images
                </a>
              </Link>
              <Button
                variant="ghost"
                className="w-full text-primary-500 font-bold hover:text-primary-600 justify-start"
              >
                Sign In
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
