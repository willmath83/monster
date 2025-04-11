import { 
  users, type User, type InsertUser,
  sites, type Site, type InsertSite,
  banners, type Banner, type InsertBanner,
  tips, type Tip, type InsertTip,
  blogPosts, type BlogPost, type InsertBlogPost,
  subscribers, type Subscriber, type InsertSubscriber
} from "@shared/schema";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Site operations
  getSites(): Promise<Site[]>;
  getSitesByCategory(category: string): Promise<Site[]>;
  getSite(id: number): Promise<Site | undefined>;
  createSite(site: InsertSite): Promise<Site>;
  
  // Banner operations
  getBanners(): Promise<Banner[]>;
  getBanner(id: number): Promise<Banner | undefined>;
  createBanner(banner: InsertBanner): Promise<Banner>;
  
  // Tip operations
  getTips(limit?: number): Promise<Tip[]>;
  getTip(id: number): Promise<Tip | undefined>;
  createTip(tip: InsertTip): Promise<Tip>;
  
  // BlogPost operations
  getBlogPosts(limit?: number): Promise<BlogPost[]>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(blogPost: InsertBlogPost): Promise<BlogPost>;
  
  // Subscriber operations
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
  getSubscriberByEmail(email: string): Promise<Subscriber | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private sites: Map<number, Site>;
  private banners: Map<number, Banner>;
  private tips: Map<number, Tip>;
  private blogPosts: Map<number, BlogPost>;
  private subscribers: Map<number, Subscriber>;
  
  private userCurrentId: number;
  private siteCurrentId: number;
  private bannerCurrentId: number;
  private tipCurrentId: number;
  private blogPostCurrentId: number;
  private subscriberCurrentId: number;

  constructor() {
    this.users = new Map();
    this.sites = new Map();
    this.banners = new Map();
    this.tips = new Map();
    this.blogPosts = new Map();
    this.subscribers = new Map();
    
    this.userCurrentId = 1;
    this.siteCurrentId = 1;
    this.bannerCurrentId = 1;
    this.tipCurrentId = 1;
    this.blogPostCurrentId = 1;
    this.subscriberCurrentId = 1;
    
    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample casino sites
    const casinoSites: InsertSite[] = [
      {
        name: "VIP Monster Casino",
        description: "VIP Monster Casino offers 1000+ premium slot games, luxury VIP bonuses and 24/7 dedicated support with instant payouts.",
        rating: 48, // 4.8 stars
        category: "casino",
        // If you add a real image, reference it from the assets folder instead
        // You would use the import like this: "client/src/assets/images/your-casino-image.jpg"
        imageUrl: "https://images.unsplash.com/photo-1605170439002-90845e8c0137?auto=format&fit=crop&w=600&h=300",
        promoText: "300% up to $1000 + 100 Free Spins",
        reviewUrl: "/casino/vip-monster-casino",
        websiteUrl: "https://vipmonstercasino.com",
        isFeatured: true,
        badge: "EXCLUSIVE",
        position: 1
      },
      {
        name: "Lucky Monster",
        description: "Lucky Monster features exclusive casino games, weekly tournaments and a VIP program with amazing perks for loyal players.",
        rating: 40, // 4.0 stars
        category: "casino",
        imageUrl: "https://images.unsplash.com/photo-1596473537045-9286d0782636?auto=format&fit=crop&w=600&h=300",
        promoText: "100% up to $1000 + 100 Free Spins",
        reviewUrl: "/casino/lucky-monster",
        websiteUrl: "https://luckymonster.com",
        isFeatured: true,
        badge: "TOP RATED",
        position: 2
      },
      {
        name: "Monster Jackpot",
        description: "Monster Jackpot offers progressive jackpots, live dealer games, and monthly promotions with huge prize pools.",
        rating: 50, // 5.0 stars
        category: "casino",
        imageUrl: "https://images.unsplash.com/photo-1662979291139-d34005301a53?auto=format&fit=crop&w=600&h=300",
        promoText: "$20 No Deposit + 300% First Deposit",
        reviewUrl: "/casino/monster-jackpot",
        websiteUrl: "https://monsterjackpot.com",
        isFeatured: true,
        badge: "HOT",
        position: 3
      }
    ];
    
    // Sample sports sites
    const sportsSites: InsertSite[] = [
      {
        name: "Monster Bets",
        description: "Monster Bets offers competitive odds on all major sports with fast payouts and an excellent mobile betting experience.",
        rating: 48, // 4.8 stars
        category: "sports",
        imageUrl: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=600&h=300",
        promoText: "$500 Risk-Free First Bet",
        reviewUrl: "/sports/monster-bets",
        websiteUrl: "https://monsterbets.com",
        isFeatured: true,
        badge: "#1 SPORTSBOOK",
        position: 1
      },
      {
        name: "BeastBet",
        description: "BeastBet features live betting, early cashout options, and thousands of daily markets across all major global sports.",
        rating: 42, // 4.2 stars
        category: "sports",
        imageUrl: "https://images.unsplash.com/photo-1642974620453-5a20a530a52f?auto=format&fit=crop&w=600&h=300",
        promoText: "Bet $5, Get $150 in Free Bets",
        reviewUrl: "/sports/beastbet",
        websiteUrl: "https://beastbet.com",
        isFeatured: true,
        badge: "BEST ODDS",
        position: 2
      },
      {
        name: "Monster Sports",
        description: "Monster Sports provides extensive market coverage with competitive odds, live streaming and quick withdrawals.",
        rating: 45, // 4.5 stars
        category: "sports",
        imageUrl: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=600&h=300",
        promoText: "100% Deposit Match up to $250",
        reviewUrl: "/sports/monster-sports",
        websiteUrl: "https://monstersports.com",
        isFeatured: true,
        badge: "FAST PAYOUTS",
        position: 3
      }
    ];
    
    // Sample banners
    const sampleBanners: InsertBanner[] = [
      {
        title: "LIMITED TIME: 400% VIP Bonus",
        subtitle: "Plus 200 Free Spins on Mega Moolah",
        imageUrl: "https://images.unsplash.com/photo-1621799754526-a0d52c49fad5?auto=format&fit=crop&w=600&h=300",
        buttonText: "Get VIP Offer",
        buttonUrl: "https://vipmonstercasino.com/vip-bonus",
        badge: "HOT DEAL",
        badgeColor: "primary",
        position: 1
      },
      {
        title: "$500 Risk-Free First Bet",
        subtitle: "Premier League Special Offer",
        imageUrl: "https://images.unsplash.com/photo-1615245260980-6093f5686062?auto=format&fit=crop&w=600&h=300",
        buttonText: "Bet Now",
        buttonUrl: "https://monstersports.com/bonus",
        badge: "SPORTS",
        badgeColor: "secondary",
        position: 2
      },
      {
        title: "$100K Slots Tournament",
        subtitle: "Play Now to Win Big",
        imageUrl: "https://images.unsplash.com/photo-1606963100652-347a298bb0a3?auto=format&fit=crop&w=600&h=300",
        buttonText: "Join Tournament",
        buttonUrl: "https://monsterjackpot.com/tournament",
        badge: "TRENDING",
        badgeColor: "accent",
        position: 3
      },
      {
        title: "Live Dealer Blackjack",
        subtitle: "Real Casino Experience Online",
        imageUrl: "https://images.unsplash.com/photo-1642974620453-5a20a530a52f?auto=format&fit=crop&w=600&h=300",
        buttonText: "Play Now",
        buttonUrl: "https://luckymonster.com/live-dealer",
        badge: "NEW",
        badgeColor: "primary",
        position: 4
      }
    ];

    // Sample betting tips
    const sampleTips: InsertTip[] = [
      {
        title: "Double Down in Blackjack with Hard 11",
        outcome: "win",
        category: "casino",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
        content: "When you have a hard 11, always double down regardless of the dealer's upcard."
      },
      {
        title: "Premier League: Manchester City vs. Liverpool",
        outcome: "win",
        category: "sports",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3), // 3 days ago
        content: "Back Manchester City to win and both teams to score."
      },
      {
        title: "Martingale System for Roulette",
        outcome: "lose",
        category: "casino",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 4), // 4 days ago
        content: "The Martingale System works in theory but has risks due to table limits."
      },
      {
        title: "NBA: Lakers vs. Celtics Under 220.5 Points",
        outcome: "pending",
        category: "sports",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1), // 1 day ago
        content: "Both teams have strong defensive records in recent games."
      },
      {
        title: "Choose European Roulette Over American",
        outcome: "win",
        category: "casino",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5), // 5 days ago
        content: "European roulette has better odds with only one zero pocket."
      },
      {
        title: "UFC: Back Jones as Underdog vs Smith",
        outcome: "win",
        category: "sports",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 6), // 6 days ago
        content: "Jones has superior technique and experience."
      },
      {
        title: "Avoid Insurance Bets in Blackjack",
        outcome: "win",
        category: "casino",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7), // 7 days ago
        content: "Insurance bets have a higher house edge than regular blackjack play."
      },
      {
        title: "Tennis: Djokovic to Win in Straight Sets",
        outcome: "lose",
        category: "sports",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 8), // 8 days ago
        content: "Djokovic's form on hard courts has been exceptional."
      },
      {
        title: "Bet on Banker in Baccarat",
        outcome: "win",
        category: "casino",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 9), // 9 days ago
        content: "The banker bet has the lowest house edge in baccarat."
      },
      {
        title: "Premier League: Back Arsenal to Cover -1.5",
        outcome: "pending",
        category: "sports",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10), // 10 days ago
        content: "Arsenal's attacking form suggests they'll win by at least 2 goals."
      }
    ];

    // Sample blog posts
    const sampleBlogPosts: InsertBlogPost[] = [
      {
        title: "5 Secret Slot Strategies the Casinos Don't Want You to Know",
        excerpt: "Insider tips from casino veterans on how to beat the odds and maximize your slot machine payouts.",
        imageUrl: "https://images.unsplash.com/photo-1596731995017-1347c4942387?auto=format&fit=crop&w=600&h=350",
        category: "Casino",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago - more recent
        slug: "secret-slot-strategies"
      },
      {
        title: "Beginner's Guide to Football Betting",
        excerpt: "Learn the basics of football betting, types of bets and how to read odds like a pro.",
        imageUrl: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=600&h=350",
        category: "Sports",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10), // 10 days ago
        slug: "beginners-guide-football-betting"
      },
      {
        title: "How to Gamble Responsibly: Essential Tips",
        excerpt: "Important advice on maintaining healthy gambling habits and recognizing problem signs.",
        imageUrl: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=600&h=350",
        category: "Guide",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 15), // 15 days ago
        slug: "how-to-gamble-responsibly"
      }
    ];

    // Add all the sample data
    casinoSites.forEach(site => this.createSite(site));
    sportsSites.forEach(site => this.createSite(site));
    sampleBanners.forEach(banner => this.createBanner(banner));
    sampleTips.forEach(tip => this.createTip(tip));
    sampleBlogPosts.forEach(post => this.createBlogPost(post));
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const createdAt = new Date();
    const user: User = { ...insertUser, id, createdAt };
    this.users.set(id, user);
    return user;
  }

  // Site methods
  async getSites(): Promise<Site[]> {
    return Array.from(this.sites.values()).sort((a, b) => 
      (a.position || 999) - (b.position || 999)
    );
  }

  async getSitesByCategory(category: string): Promise<Site[]> {
    return Array.from(this.sites.values())
      .filter(site => site.category === category)
      .sort((a, b) => (a.position || 999) - (b.position || 999));
  }

  async getSite(id: number): Promise<Site | undefined> {
    return this.sites.get(id);
  }

  async createSite(insertSite: InsertSite): Promise<Site> {
    const id = this.siteCurrentId++;
    const site: Site = { ...insertSite, id };
    this.sites.set(id, site);
    return site;
  }

  // Banner methods
  async getBanners(): Promise<Banner[]> {
    return Array.from(this.banners.values()).sort((a, b) => a.position - b.position);
  }

  async getBanner(id: number): Promise<Banner | undefined> {
    return this.banners.get(id);
  }

  async createBanner(insertBanner: InsertBanner): Promise<Banner> {
    const id = this.bannerCurrentId++;
    const banner: Banner = { ...insertBanner, id };
    this.banners.set(id, banner);
    return banner;
  }

  // Tip methods
  async getTips(limit?: number): Promise<Tip[]> {
    const tips = Array.from(this.tips.values())
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    
    return limit ? tips.slice(0, limit) : tips;
  }

  async getTip(id: number): Promise<Tip | undefined> {
    return this.tips.get(id);
  }

  async createTip(insertTip: InsertTip): Promise<Tip> {
    const id = this.tipCurrentId++;
    const createdAt = new Date();
    const tip: Tip = { ...insertTip, id, createdAt };
    this.tips.set(id, tip);
    return tip;
  }

  // BlogPost methods
  async getBlogPosts(limit?: number): Promise<BlogPost[]> {
    const posts = Array.from(this.blogPosts.values())
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    
    return limit ? posts.slice(0, limit) : posts;
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(post => post.slug === slug);
  }

  async createBlogPost(insertBlogPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.blogPostCurrentId++;
    const createdAt = new Date();
    const blogPost: BlogPost = { ...insertBlogPost, id, createdAt };
    this.blogPosts.set(id, blogPost);
    return blogPost;
  }

  // Subscriber methods
  async createSubscriber(insertSubscriber: InsertSubscriber): Promise<Subscriber> {
    const id = this.subscriberCurrentId++;
    const createdAt = new Date();
    const subscriber: Subscriber = { ...insertSubscriber, id, createdAt };
    this.subscribers.set(id, subscriber);
    return subscriber;
  }

  async getSubscriberByEmail(email: string): Promise<Subscriber | undefined> {
    return Array.from(this.subscribers.values()).find(
      (subscriber) => subscriber.email === email,
    );
  }
}

export const storage = new MemStorage();
