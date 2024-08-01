import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

function ContactForm() {
  return (
    <>
      <div className="w-full max-w-sm mt-4">
        <Label htmlFor="email" className="text-white bg-transparent">
          Email
        </Label>
        <Input
          type="email"
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
          id="phone"
          placeholder="619 54 544 731"
          className="w-full border border-gray-300 bg-transparent"
        />
      </div>
      <Button className="bg-white max-w-sm text-black w-full my-6">
        Contact us
      </Button>
    </>
  );
}

export default ContactForm;
