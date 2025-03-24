import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  return children;
}

// todo: integrate with maintenance
// todo: make not found page
// todo: create loading page
// todo: make contact form work
// todo: get slideshow
// todo: make a banner for navigation path and filter options
// todo: make a grid view
// todo: to upper page button in grid view when scrolled down
// todo: sponsors or clients section
// todo: footer
// todo: link with database and get grid view from database data with headless CMS
// todo: ask about animation
