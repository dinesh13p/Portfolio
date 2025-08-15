import React from 'react' 
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Footer(){
  return (
    <footer className="bg-site-mid py-8 mt-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-300">© {new Date().getFullYear()} Dinesh Poudel</div>
        <div className="flex gap-4">
          <a href="https://github.com/dinesh13p" target="_blank" rel="noreferrer" aria-label="Github"><FaGithub className="text-2xl" /></a>
          <a href="https://www.linkedin.com/in/dinesh-poudel-3a4b10331/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin className="text-2xl" /></a>
          <a href="https://www.instagram.com/_d_nesh_/" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram className="text-2xl" /></a>
          <a href="https://x.com/Dinesh2061" target="_blank" rel="noreferrer" aria-label="X (formerly Twitter)"><FaTwitter className="text-2xl" /></a>
        </div>
      </div>
    </footer>
  )
}