"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";

export default function RequestForm() {
  const translation = useTranslations("contact");

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    request: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name" className="sr-only">
          Name
        </Label>
        <Input
          id="name"
          name="name"
          placeholder="Name *"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border-gray-300 focus:border-black focus:ring-black"
        />
      </div>

      <div>
        <Label htmlFor="company" className="sr-only">
          Your company
        </Label>
        <Input
          id="company"
          name="company"
          placeholder="Your company *"
          value={formData.company}
          onChange={handleChange}
          required
          className="w-full border-gray-300 focus:border-black focus:ring-black"
        />
      </div>

      <div>
        <Label htmlFor="email" className="sr-only">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border-gray-300 focus:border-black focus:ring-black"
        />
      </div>

      <div>
        <Label htmlFor="phone" className="sr-only">
          Phone number
        </Label>
        <Input
          id="phone"
          name="phone"
          placeholder="Phone number *"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full border-gray-300 focus:border-black focus:ring-black"
        />
      </div>

      <div>
        <Label htmlFor="request" className="sr-only">
          Your Request
        </Label>
        <Textarea
          id="request"
          name="request"
          placeholder="Your Request *"
          value={formData.request}
          onChange={handleChange}
          required
          className="w-full min-h-[120px] border-gray-300 focus:border-black focus:ring-black"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-black hover:bg-gray-800 text-white py-3 uppercase font-medium"
      >
        SEND
      </Button>
    </form>
  );
}
