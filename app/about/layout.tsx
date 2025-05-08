import { ReactNode } from 'react';
import Link from 'next/link';
import { Code2, Github, Linkedin, Mail, Twitter } from 'lucide-react';

interface AboutLayoutProps {
  children: ReactNode;
}

const sidebarMenu = [
  {
    title: 'Profile',
    href: '/about',
    icon: <Code2 className="h-5 w-5" />,
  },
  {
    title: 'Skills',
    href: '/about/skills',
    icon: <Code2 className="h-5 w-5" />,
  },
  {
    title: 'Experience',
    href: '/about/experience',
    icon: <Code2 className="h-5 w-5" />,
  },
  {
    title: 'Projects',
    href: '/about/projects',
    icon: <Code2 className="h-5 w-5" />,
  },
];

const socialLinks = [
  {
    title: 'GitHub',
    href: 'https://github.com',
    icon: <Github className="h-5 w-5" />,
  },
  {
    title: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: <Linkedin className="h-5 w-5" />,
  },
  {
    title: 'Twitter',
    href: 'https://twitter.com',
    icon: <Twitter className="h-5 w-5" />,
  },
  {
    title: 'Email',
    href: 'mailto:example@email.com',
    icon: <Mail className="h-5 w-5" />,
  },
];

export default function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        {/* Sidebar */}
        <aside className="w-64 flex-shrink-0">
          <div className="sticky top-8 space-y-8">
            {/* Profile Section */}
            <div className="space-y-4">
              <div className="mx-auto h-32 w-32 rounded-full bg-gray-200" />
              <div className="text-center">
                <h2 className="text-xl font-bold">Your Name</h2>
                <p className="text-gray-600">Frontend Developer</p>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="space-y-2">
              {sidebarMenu.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 rounded-lg px-4 py-2 text-gray-700 transition-colors hover:bg-gray-100"
                >
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              ))}
            </nav>

            {/* Social Links */}
            <div className="border-t pt-4">
              <div className="flex justify-center gap-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 transition-colors hover:text-gray-900"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="min-w-0 flex-1">
          <div className="prose prose-gray max-w-none">{children}</div>
        </main>
      </div>
    </div>
  );
}
