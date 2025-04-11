import { pgTable, text, serial, integer, boolean, timestamp, pgEnum } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  email: true,
});

export const categoryEnum = pgEnum('category', ['casino', 'sports', 'tips']);
export const outcomeEnum = pgEnum('outcome', ['win', 'lose', 'pending']);

export const sites = pgTable("sites", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  rating: integer("rating").notNull(), // Out of 50 (4.5 stars = 45)
  category: text("category").notNull(), // 'casino' or 'sports'
  imageUrl: text("image_url").notNull(),
  promoText: text("promo_text").notNull(),
  reviewUrl: text("review_url").notNull(),
  websiteUrl: text("website_url").notNull(),
  isFeatured: boolean("is_featured").default(false),
  badge: text("badge"), // 'NEW', 'HOT', '#1 RATED', etc.
  position: integer("position"), // Order to display in
});

export const insertSiteSchema = createInsertSchema(sites).omit({
  id: true,
});

export const banners = pgTable("banners", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  subtitle: text("subtitle").notNull(),
  imageUrl: text("image_url").notNull(),
  buttonText: text("button_text").notNull(),
  buttonUrl: text("button_url").notNull(),
  badge: text("badge"), // 'EXCLUSIVE', 'SPORTS', 'TRENDING', etc.
  badgeColor: text("badge_color"), // 'primary', 'secondary', 'accent'
  position: integer("position").notNull(), // Order to display in
});

export const insertBannerSchema = createInsertSchema(banners).omit({
  id: true,
});

export const tips = pgTable("tips", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  outcome: text("outcome").notNull(), // 'win', 'lose', 'pending'
  category: text("category").notNull(), // 'casino' or 'sports'
  createdAt: timestamp("created_at").defaultNow().notNull(),
  content: text("content").notNull(),
});

export const insertTipSchema = createInsertSchema(tips).omit({
  id: true,
});

export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  excerpt: text("excerpt").notNull(),
  imageUrl: text("image_url").notNull(),
  category: text("category").notNull(), // 'Casino', 'Sports', 'Guide', etc.
  createdAt: timestamp("created_at").defaultNow().notNull(),
  slug: text("slug").notNull().unique(),
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({
  id: true,
});

export const subscribers = pgTable("subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  acceptedTerms: boolean("accepted_terms").notNull(),
});

export const insertSubscriberSchema = createInsertSchema(subscribers).omit({
  id: true,
});

export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;

export type Site = typeof sites.$inferSelect;
export type InsertSite = z.infer<typeof insertSiteSchema>;

export type Banner = typeof banners.$inferSelect;
export type InsertBanner = z.infer<typeof insertBannerSchema>;

export type Tip = typeof tips.$inferSelect;
export type InsertTip = z.infer<typeof insertTipSchema>;

export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;

export type Subscriber = typeof subscribers.$inferSelect;
export type InsertSubscriber = z.infer<typeof insertSubscriberSchema>;
