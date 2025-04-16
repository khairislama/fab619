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
          className="w-full capitalize"
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
          className="w-full capitalize"
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
          className="w-full capitalize"
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
          className="w-full capitalize"
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
          className="w-full min-h-[120px] capitalize"
        />
      </div>

      <Button type="submit" className="w-full py-3 uppercase font-bold">
        {translation("send")}
      </Button>
    </form>
  );
}
