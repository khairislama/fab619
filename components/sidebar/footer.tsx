import React from 'react'
import { SidebarFooter } from '../ui/sidebar'
import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'

const socialItems = [
    { name: "GitHub", href: "https://github.com", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  ]

function AppSidebarFooter() {
  return (
    <SidebarFooter className="p-4">
        <div className="flex justify-center space-x-4">
          {socialItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <item.icon className="w-6 h-6" />
              <span className="sr-only">{item.name}</span>
            </Link>
          ))}
        </div>
      </SidebarFooter>
  )
}

export default AppSidebarFooter