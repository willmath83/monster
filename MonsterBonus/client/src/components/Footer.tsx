import { MonsterLogo } from "@/assets/svg/monster-logo";
import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/">
              <div className="flex items-center space-x-2 mb-6 cursor-pointer">
                <MonsterLogo className="w-10 h-10" />
                <span className="text-2xl font-logo text-white">
                  Monster<span className="text-accent-500">Bonus</span>
                </span>
              </div>
            </Link>
            <p className="text-gray-400 mb-4">
              Your trusted guide to the best online casinos and sportsbooks with monster-sized bonuses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/casino">
                  <a className="text-gray-400 hover:text-white transition duration-200">
                    Casino Reviews
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/sports">
                  <a className="text-gray-400 hover:text-white transition duration-200">
                    Sportsbook Reviews
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/bonuses">
                  <a className="text-gray-400 hover:text-white transition duration-200">
                    Bonus Offers
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/tips">
                  <a className="text-gray-400 hover:text-white transition duration-200">
                    Betting Tips
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="text-gray-400 hover:text-white transition duration-200">
                    Blog
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-6">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/casino/slots">
                  <a className="text-gray-400 hover:text-white transition duration-200">
                    Slots
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/casino/table-games">
                  <a className="text-gray-400 hover:text-white transition duration-200">
                    Table Games
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/casino/live-dealer">
                  <a className="text-gray-400 hover:text-white transition duration-200">
                    Live Dealer
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/sports/betting">
                  <a className="text-gray-400 hover:text-white transition duration-200">
                    Sports Betting
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/casino/poker">
                  <a className="text-gray-400 hover:text-white transition duration-200">
                    Poker
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Important Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Important Info</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about">
                  <a className="text-gray-400 hover:text-white transition duration-200">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/responsible-gambling">
                  <a className="text-gray-400 hover:text-white transition duration-200">
                    Responsible Gambling
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy">
                  <a className="text-gray-400 hover:text-white transition duration-200">
                    Privacy Policy
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <a className="text-gray-400 hover:text-white transition duration-200">
                    Terms & Conditions
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-400 hover:text-white transition duration-200">
                    Contact Us
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="border-t border-gray-800 pt-6 mt-6">
          <p className="text-gray-500 text-sm text-center">
            MonsterBonus.com is an independent review portal. We may receive commissions for recommendations made in our website's guides. 18+ only. Gambling can be addictive. Please play responsibly.
          </p>
          <p className="text-gray-500 text-sm text-center mt-4">
            © {new Date().getFullYear()} MonsterBonus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
