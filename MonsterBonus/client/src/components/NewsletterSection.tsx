import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  acceptedTerms: z.boolean().refine(value => value === true, {
    message: "You must accept the privacy policy to subscribe"
  })
});

type FormData = z.infer<typeof formSchema>;

export function NewsletterSection() {
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      acceptedTerms: false
    }
  });
  
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: FormData) => {
      return apiRequest('POST', '/api/subscribe', data);
    },
    onSuccess: () => {
      toast({
        title: "Subscribed!",
        description: "You have successfully joined the Monster Club.",
        variant: "default"
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Subscription failed",
        description: error.message || "There was a problem subscribing to the newsletter.",
        variant: "destructive"
      });
    }
  });

  const onSubmit = (data: FormData) => {
    mutate(data);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary-500 to-secondary-500">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto bg-white rounded-xl p-8 md:p-10 shadow-lg">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark mb-3">Join the VIP Monster Club</h2>
                <p className="text-gray-600">Get exclusive VIP bonuses, insider betting tips and secret casino offers sent directly to your inbox.</p>
              </div>
              <div className="md:w-1/3">
                <div className="w-24 h-24 rounded-full mx-auto bg-accent-100 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-16 h-16 text-accent-500"
                  >
                    <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
              </div>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            placeholder="Your email address"
                            className="w-full py-3 px-4"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit"
                    className="bg-accent-500 hover:bg-accent-600 text-white py-3 px-6 rounded-md font-bold transition duration-200 shadow-md"
                    disabled={isPending}
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Subscribing...
                      </>
                    ) : (
                      "Subscribe Now"
                    )}
                  </Button>
                </div>
                
                <div className="mt-4 text-sm text-gray-500">
                  <FormField
                    control={form.control}
                    name="acceptedTerms"
                    render={({ field }) => (
                      <FormItem className="flex items-start space-x-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            id="terms"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <Label
                            htmlFor="terms"
                            className="text-sm text-gray-500"
                          >
                            I agree to receive emails from MonsterBonus and accept the{" "}
                            <a
                              href="/privacy-policy"
                              className="underline text-primary-500"
                            >
                              Privacy Policy
                            </a>
                          </Label>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
