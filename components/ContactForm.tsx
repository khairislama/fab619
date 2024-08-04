"use client";

import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useToast } from "./ui/use-toast";

function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error(`Failed to contact. Status: ${response.status}`);
      }
      const data = await response.json();
      data.success
        ? toast({
            title: `Welcome to Fab619!`,
            description: `Thank you for contacting us. We will get back to you soon enough`,
            className: "bg-gradient-to-r from-background-base-100 to-primary",
          })
        : toast({
            title: "Oops!",
            description:
              "An error occured during the process, please try again later.",
            className:
              "bg-gradient-to-r from-background-base-100 to-destructive",
          });
    } catch (error) {
      setError("Failed to submit the form");
      toast({
        title: "Oops!",
        description:
          "An error occured during the process, please try again later.",
        className: "bg-gradient-to-r from-background-base-100 to-destructive",
      });
    } finally {
      setIsLoading(false);
      const form = formRef.current;
      if (form) {
        form.reset();
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <div className="w-full max-w-sm mt-4">
        <Label htmlFor="email" className="text-white bg-transparent">
          Email
        </Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Contact@fab619.tn"
          className="w-full border border-gray-300 bg-transparent"
        />
      </div>
      <div className="w-full max-w-sm mt-4">
        <Label htmlFor="phone" className="text-white bg-transparent">
          phone
        </Label>
        <Input
          type="text"
          name="phone"
          id="phone"
          placeholder="+216 54 544 731"
          className="w-full border border-gray-300 bg-transparent"
        />
      </div>
      {error && (
        <p className="text-destructive text-xs sm:text-base font-light sm:font-bold">
          ** {error}
        </p>
      )}
      <Button
        className="bg-white max-w-sm text-black w-full my-6 hover:bg-white/80"
        disabled={isLoading}
        type="submit"
      >
        Contact us
      </Button>
    </form>
  );
}

export default ContactForm;
