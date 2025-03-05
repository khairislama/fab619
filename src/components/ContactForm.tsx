"use client";

import * as v from "valibot";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useTranslations } from "next-intl";

// Schema for contact form validation
const formSchema = v.object({
  email: v.pipe(v.string(), v.email("Invalid email address")),
  phone: v.pipe(
    v.string(),
    v.regex(/^(\+\d{1,3})?\d{8,15}$/, "Invalid phone number format")
  ),
  message: v.pipe(
    v.string(),
    v.minLength(10, "Message must be at least 10 characters long")
  ),
});

export default function ContactForm() {
  const contactTranslation = useTranslations("Maintenance.contact");
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [retry, setRetry] = useState(false);

  const form = useForm<v.InferOutput<typeof formSchema>>({
    resolver: valibotResolver(formSchema),
    defaultValues: {
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: v.InferOutput<typeof formSchema>) {
    try {
      setIsLoading(true);
      setRetry(false);
      // Simulate a successful contact form submission
      console.log(values);
      toast.success("Your message has been sent successfully!");
      setSent(true);
    } catch (error) {
      console.error("Error submitting contact form", error);
      toast.error("Failed to send your message. Please try again.");
      setRetry(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="max-w-2xl mb-10">
      <CardHeader>
        <CardTitle className="text-3xl mb-1">
          {contactTranslation("title")}
        </CardTitle>
        <CardDescription>{contactTranslation("description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-7">
              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="grid gap-2">
                    <FormLabel htmlFor="email">
                      {contactTranslation("email")}
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        placeholder="johndoe@mail.com"
                        type="email"
                        autoComplete="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* phone Field */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="grid gap-2">
                    <FormLabel htmlFor="phone">
                      {contactTranslation("phone")}
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="phone"
                        placeholder="number"
                        type="text"
                        autoComplete="phone"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Message Field */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="grid gap-2">
                    <FormLabel htmlFor="message">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        id="message"
                        placeholder={contactTranslation("message")}
                        autoComplete="off"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" size={"lg"} disabled={sent || isLoading}>
                {isLoading
                  ? "Sending..."
                  : retry
                  ? "Retry"
                  : sent
                  ? "Message Sent"
                  : "Send Message"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
