import Link from "next/link";

function ContactForm() {
  return (
    <div className="h-80 bg-red-400 w-full">
      <div className="flex w-full max-w-sm items-center justify-around mt-24">
        <Link href="https://www.facebook.com/fab619" target="_blank">
          <div className="bg-green-500 h-6 w-6 text-xs">fb</div>
        </Link>
        <Link href="https://www.instagram.com/fab_619" target="_blank">
          <div className="bg-green-500 h-6 w-6 text-xs">ins</div>
        </Link>
        <Link href="https://www.linkedin.com/company/fab619/" target="_blank">
          <div className="bg-green-500 h-6 w-6 text-xs">lkn</div>
        </Link>
        <Link href="https://github.com/fab619" target="_blank">
          <div className="bg-green-500 h-6 w-6 text-xs">git</div>
        </Link>
      </div>
    </div>
  );
}

export default ContactForm;
