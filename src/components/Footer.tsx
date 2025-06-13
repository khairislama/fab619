import Link from "next/link";

function Footer() {
  return (
    <div className="container 2k:max-w-[1750px] 2.5k:max-w-[1900px] 4k:max-w-[2300px] py-12">
      {/* <div className="h-1 w-full bg-foreground my-6 scrollbar-hide" /> */}
      <div className="flex items-center justify-between">
        <p>All rights reserved 2025 © FAB619 - On demand fabrication</p>
        <p>
          <Link href="mailto:contact@fab619.tn" className="hover:underline">
            contact@fab619.tn
          </Link>{" "}
          |{" "}
          <Link href="tef:+21654544731" className="hover:underline">
            tel. 54 544 731
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
