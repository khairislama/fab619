import Link from "next/link";
import React from "react";
import { LinkedinSvgIcon } from "../../icons/linkedIn";
import { GithubSvgIcon } from "../../icons/github";
import { InstagramSvgIcon } from "../../icons/instagram";
import { FacebookSvgIcon } from "../../icons/facebook";

function HomeContactSocial() {
  return (
    <div className="flex flex-wrap gap-8 pt-16 justify-between max-w-5xl mx-auto w-full">
      <Link
        href="https://www.linkedin.com/company/fab619"
        className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
      >
        <LinkedinSvgIcon className="h-6 w-6" />
        @linkedin
      </Link>
      <Link
        href="https://github.com/fab619"
        className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
      >
        <GithubSvgIcon className="h-6 w-6" />
        @github
      </Link>
      <Link
        href="https://www.instagram.com/fab_619"
        className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
      >
        <InstagramSvgIcon className="h-6 w-6" />
        @instagram
      </Link>
      <Link
        href="https://www.facebook.com/fab619"
        className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
      >
        <FacebookSvgIcon className="h-6 w-6" />
        @facebook
      </Link>
    </div>
  );
}

export default HomeContactSocial;
