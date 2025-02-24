import React from "react";

function DesktopNavbar() {
  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-60 bg-gray-900 text-white p-6 flex-col justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold">Logo</div>
      {/* Nav Links */}
      <nav className="flex flex-col gap-4">
        {["Home", "Projects", "About", "Contact"].map((link) => (
          <a key={link} href="#" className="hover:text-gray-400">
            {link}
          </a>
        ))}
      </nav>
      {/* Social Icons */}
      <div className="flex gap-4">
        <a href="#">🔗</a>
        <a href="#">🔗</a>
        <a href="#">🔗</a>
      </div>
    </aside>
  );
}

export default DesktopNavbar;
