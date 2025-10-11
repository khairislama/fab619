"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import * as v from "valibot";
import { handleContact } from "@/src/app/actions/contact";

// Contact schema (extended)
export const formSchema = v.object({
  name: v.string(),
  company: v.string(),
  email: v.pipe(v.string(), v.email("Invalid email")),
  phone: v.pipe(
    v.string(),
    v.regex(/^(\+\d{1,3})?\d{8,15}$/, "Invalid phone number")
  ),
  request: v.pipe(v.string(), v.minLength(10, "Request too short")),
});

export default function RequestForm() {
  const translation = useTranslations("contact.form");

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    request: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [retry, setRetry] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const parsed = v.safeParse(formSchema, formData);
    if (!parsed.success) {
      const firstError = Object.values(parsed.issues)[0]?.message;
      toast.error(firstError || "Invalid input");
      return;
    }

    setIsLoading(true);
    setRetry(false);

    try {
      const result = await handleContact(formData);
      if (result.success) {
        toast.success("Message sent successfully!");
        setSent(true);
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          request: "",
        });
      } else {
        toast.error("Failed to send. Please try again.");
        setRetry(true);
      }
    } catch (err) {
      console.error("Error submitting form", err);
      toast.error("Something went wrong.");
      setRetry(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 ml-1">
      <div>
        <Label htmlFor="name" className="sr-only">
          {translation("name")}
        </Label>
        <Input
          id="name"
          name="name"
          placeholder={translation("name") + " *"}
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full capitalize rounded-none"
        />
      </div>

      <div>
        <Label htmlFor="company" className="sr-only">
          {translation("company")}
        </Label>
        <Input
          id="company"
          name="company"
          placeholder={translation("company") + " *"}
          value={formData.company}
          onChange={handleChange}
          required
          className="w-full capitalize rounded-none"
        />
      </div>

      <div>
        <Label htmlFor="email" className="sr-only">
          {translation("email")}
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder={translation("email") + " *"}
          value={formData.email}
          onChange={handleChange}
          className="w-full capitalize rounded-none"
        />
      </div>

      <div>
        <Label htmlFor="phone" className="sr-only">
          {translation("phone-number")}
        </Label>
        <Input
          id="phone"
          name="phone"
          placeholder={translation("phone-number") + " *"}
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full capitalize rounded-none"
        />
      </div>

      <div>
        <Label htmlFor="request" className="sr-only">
          {translation("your-request")}
        </Label>
        <Textarea
          id="request"
          name="request"
          placeholder={translation("your-request") + " *"}
          value={formData.request}
          onChange={handleChange}
          required
          className="w-full min-h-[120px] capitalize rounded-none"
        />
      </div>

      <Button
        type="submit"
        className="w-full py-3 uppercase font-bold rounded-none"
        disabled={isLoading || sent}
      >
        {isLoading
          ? translation("sending")
          : retry
            ? translation("retry")
            : sent
              ? translation("sent")
              : translation("send")}
      </Button>
    </form>
  );
}
