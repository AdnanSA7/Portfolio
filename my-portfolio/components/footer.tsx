import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

export function Footer() {
  return (
    <footer className="py-8 px-4 border-t">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex gap-6 justify-center mb-4">
          <SocialLink href="https://github.com/yourusername" icon={FaGithub} />
          <SocialLink href="https://linkedin.com/in/yourusername" icon={FaLinkedin} />
          <SocialLink href="https://twitter.com/yourusername" icon={FaTwitter} />
          <SocialLink href="mailto:your.email@example.com" icon={HiOutlineMail} />
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Alex Chen. Built with Next.js, TailwindCSS, and shadcn/ui
        </p>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon: Icon }: { href: string; icon: any }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
    >
      <Icon className="w-5 h-5" />
    </a>
  )
}