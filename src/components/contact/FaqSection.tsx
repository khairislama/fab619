"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-24">
      {/* Title Section */}
      <div className="lg:col-span-4">
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold">FAQ</h2>
        <h3 className="text-2xl md:text-3xl font-medium mt-4">
          FREQUENTLY ASKED QUESTIONS
        </h3>
      </div>

      {/* Accordion Section */}
      <div className="lg:col-span-8">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-medium">
              1. What services do you offer?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">
                We provide a full range of digital fabrication and engineering
                services, including:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Custom Machines design and toolheads for industrial purposes
                </li>
                <li>Hardware product design</li>
                <li>On-demand prototyping and small-batch manufacturing</li>
                <li>3D printing (filament and pellet-based)</li>
                <li>CNC machining and laser cutting</li>
                <li>PCB design, IoT integration, and embedded systems</li>
                <li>
                  Training, workshops, and consulting for digital fabrication
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-medium">
              2. Do you develop custom solutions for specific industries?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Yes! We specialize in tailor-made solutions for industries like
                aerospace, nautical, furniture, education, and prototyping labs.
                We can design and build machines, control systems, or custom
                toolheads like our PelloBot extruder, based on your unique
                requirements.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-medium">
              3. Can I request a custom machine or fabrication setup?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Absolutely. Our team works closely with you to understand your
                workflow, production goals, and constraints, then proposes a
                custom machine or system (gantry, robot arm, toolhead, etc.)
                built to your specs.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-medium">
              4. How does your on-demand manufacturing service work?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                You send us your 3D model or design brief, and we take care of
                the rest — from slicing and material prep to printing or
                machining. We offer rapid prototyping, small batch runs, and
                large-format prints with our own hardware.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg font-medium">
              5. What is your turnaround time?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Turnaround depends on the complexity and volume of your request.
                Prototypes are typically delivered within 3–7 working days,
                while custom machines or systems may take 2–6 weeks. We'll
                always provide an estimated delivery date upfront.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-lg font-medium">
              6. Can I visit your workshop or schedule a consultation?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Yes! We welcome visits by appointment and offer both in-person
                and virtual consultations. Contact us to schedule a tour or
                meeting to explore how we can help.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="text-lg font-medium">
              7. Do you provide training or workshops?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Yes, we offer hands-on workshops for 3D printing, CNC, machine
                building, and digital fabrication tools. We also provide custom
                training sessions for teams, schools, and technical centers.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger className="text-lg font-medium">
              8. Do you ship internationally?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                We currently offer custom machines and kits primarily in Tunisia
                but are expanding our shipping and support network to serve
                international clients. Reach out to discuss delivery options for
                your region.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
