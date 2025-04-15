"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function RequestForm() {
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
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-md shadow-lg">
        {/* Form Section */}
        <div className="bg-white p-6 md:p-8 lg:p-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 uppercase">
            REQUEST INFORMATION
          </h2>

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
        </div>

        {/* Image Section */}
        <div className="relative hidden lg:block h-full min-h-[500px]">
          <Image
            src="/images/placeholder-800x800.webp"
            alt="Location map"
            fill
            className="object-cover "
            priority
          />
        </div>
      </div>
    </section>
  );
}
