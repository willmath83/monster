import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertSubscriberSchema } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  const httpServer = createServer(app);

  // Get all banners
  app.get("/api/banners", async (_req, res) => {
    try {
      const banners = await storage.getBanners();
      res.json(banners);
    } catch (error) {
      console.error("Error fetching banners:", error);
      res.status(500).json({ message: "Error fetching banners" });
    }
  });

  // Get sites by category or all sites
  app.get("/api/sites", async (req, res) => {
    try {
      const category = req.query.category as string | undefined;
      
      if (category) {
        const sites = await storage.getSitesByCategory(category);
        res.json(sites);
      } else {
        const sites = await storage.getSites();
        res.json(sites);
      }
    } catch (error) {
      console.error("Error fetching sites:", error);
      res.status(500).json({ message: "Error fetching sites" });
    }
  });

  // Get a specific site
  app.get("/api/sites/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid site ID" });
      }
      
      const site = await storage.getSite(id);
      if (!site) {
        return res.status(404).json({ message: "Site not found" });
      }
      
      res.json(site);
    } catch (error) {
      console.error("Error fetching site:", error);
      res.status(500).json({ message: "Error fetching site" });
    }
  });

  // Get tips with optional limit parameter
  app.get("/api/tips", async (req, res) => {
    try {
      const limitStr = req.query.limit as string | undefined;
      const limit = limitStr ? parseInt(limitStr) : undefined;
      
      const tips = await storage.getTips(limit);
      res.json(tips);
    } catch (error) {
      console.error("Error fetching tips:", error);
      res.status(500).json({ message: "Error fetching tips" });
    }
  });

  // Get a specific tip
  app.get("/api/tips/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid tip ID" });
      }
      
      const tip = await storage.getTip(id);
      if (!tip) {
        return res.status(404).json({ message: "Tip not found" });
      }
      
      res.json(tip);
    } catch (error) {
      console.error("Error fetching tip:", error);
      res.status(500).json({ message: "Error fetching tip" });
    }
  });

  // Get blog posts with optional limit parameter
  app.get("/api/blog-posts", async (req, res) => {
    try {
      const limitStr = req.query.limit as string | undefined;
      const limit = limitStr ? parseInt(limitStr) : undefined;
      
      const blogPosts = await storage.getBlogPosts(limit);
      res.json(blogPosts);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      res.status(500).json({ message: "Error fetching blog posts" });
    }
  });

  // Get a specific blog post by ID
  app.get("/api/blog-posts/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid blog post ID" });
      }
      
      const blogPost = await storage.getBlogPost(id);
      if (!blogPost) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      
      res.json(blogPost);
    } catch (error) {
      console.error("Error fetching blog post:", error);
      res.status(500).json({ message: "Error fetching blog post" });
    }
  });

  // Get a specific blog post by slug
  app.get("/api/blog-posts/slug/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      
      const blogPost = await storage.getBlogPostBySlug(slug);
      if (!blogPost) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      
      res.json(blogPost);
    } catch (error) {
      console.error("Error fetching blog post by slug:", error);
      res.status(500).json({ message: "Error fetching blog post" });
    }
  });

  // Subscribe to newsletter
  app.post("/api/subscribe", async (req: Request, res: Response) => {
    try {
      const validationResult = insertSubscriberSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        const errorMessage = fromZodError(validationResult.error).message;
        return res.status(400).json({ message: errorMessage });
      }
      
      const { email, acceptedTerms } = validationResult.data;
      
      // Check if subscriber already exists
      const existingSubscriber = await storage.getSubscriberByEmail(email);
      if (existingSubscriber) {
        return res.status(409).json({ message: "Email already subscribed" });
      }
      
      // Create new subscriber
      const subscriber = await storage.createSubscriber({ email, acceptedTerms });
      
      res.status(201).json({ 
        message: "Successfully subscribed to newsletter",
        subscriber
      });
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      res.status(500).json({ message: "Error subscribing to newsletter" });
    }
  });

  return httpServer;
}
