'use client'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'
/**
 * MODULE 5: Final Project - Portfolio Website
 *
 * This is your capstone project! You'll build a complete personal portfolio
 * website using everything you've learned:
 * - Agent Mode for scaffolding large sections
 * - Edit Mode for surgical refinements
 * - Ask Mode for guidance and improvements
 * - Your rules for consistent styling
 *
 * Follow the step-by-step instructions marked below.
 */

export default function Module5Portfolio() {
  const [loadingProjects, setLoadingProjects] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingProjects(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const ContactForm = () => {
    const [form, setForm] = useState({
      name: '',
      email: '',
      message: '',
    })

    const [status, setStatus] = useState('')
    const [loading, setLoading] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (!form.name || !form.email || !form.message) {
        setStatus('Please fill out all fields.')
        return
      }

      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          {
            name: form.name,
            email: form.email,
            message: form.message,
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )

        setStatus('Message sent successfully!')
        setForm({ name: '', email: '', message: '' })
      } catch (error) {
        setStatus('Something went wrong. Try again.')
      }
    }

    return (
      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-amber-400"
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-amber-400"
        />

        <textarea
          name="message"
          rows={4}
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-amber-400"
        />

        <button
          type="submit"
          className="w-full px-6 py-3 rounded-md bg-black text-amber-300 hover:text-amber-200 hover:bg-gray-900 transition shadow-lg"
        >
          Send Message
        </button>

        {status && <p className="text-sm text-center text-gray-600">{status}</p>}
      </form>
    )
  }

  const ProjectSkeleton = () => {
    return (
      <div className="rounded-xl border border-gray-100 p-4 md:p-5 bg-white/80 animate-pulse">
        <div className="aspect-video bg-gray-200 rounded-lg mb-4"></div>

        <div className="h-6 bg-gray-200 rounded w-2/3 mb-3"></div>

        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>

        <div className="flex gap-3">
          <div className="h-4 w-20 bg-gray-200 rounded"></div>
          <div className="h-4 w-16 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <div className=" min-h-screen bg-gradient-to-b from-[#fafafa] to-[#f3f3f3] scroll-smooth">
      {/* Header */}
      <header className="bg-[#050505]/95 backdrop-blur-md shadow px-6 py-3 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <Image
            src="/profileImage1.png"
            alt="Curt Vance"
            width={48}
            height={48}
            className=" w-12 h-12 object-contain rounded-full"
          />
        </div>
        <nav className="space-x-4">
          <a href="#projects" className="nav-link relative text-amber-300 group">
            Projects
            <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-amber-300 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left"></span>
          </a>
          <a href="#contact" className="nav-link relative text-amber-300 group">
            Contact
            <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-amber-300 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left"></span>
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-6 bg-transparent py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE */}
          <div className="opacity-0 animate-fadeInUp">
            <h1 className="text-4xl sm:text-5xl md:text-6xl tracking-tight font-bold mb-4 animate-fadeInUp [animation-delay:0.5s]">
              Curt Vance
            </h1>
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-2 animate-fadeInUp [animation-delay:0.7s]">
              Frontend Developer
            </p>

            <p className="text-lg text-gray-700 mb-3 animate-fadeInUp [animation-delay:0.9s]">
              I build clean, scalable web applications with{' '}
              <span className="text-black font-semibold">React, Next.js, and TypeScript</span>
            </p>

            <p className="text-sm text-gray-500 mb-6 animate-fadeInUp [animation-delay:1.0s]">
              Focused on clean UI, real-world applications, and continuously improving development
              skills.
            </p>

            <div className="flex gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-md bg-black text-amber-300 hover:text-amber-200 hover:bg-gray-900 transition hover:scale-105 shadow-lg animate-fadeInUp [animation-delay:1.2s]"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition transform hover:scale-105 shadow-lg animate-fadeInUp [animation-delay:1.4s]"
              >
                Contact
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center mt-10 md:mt-0">
            <div className="relative">
              {/* Gold glow */}
              <div className="absolute inset-0 w-56 h-56 md:w-72 md:h-72 bg-amber-300 blur-3xl opacity-40 rounded-full"></div>

              {/* Logo */}
              <div className="w-52 h-52 md:w-64 md:h-64 rounded-full bg-black flex items-center justify-center relative shadow-xl animate-float">
                <Image
                  src="/profileImage1.png"
                  alt="Curt Vance"
                  width={160}
                  height={160}
                  className="w-32 md:w-40"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8" />
      {/* Projects */}
      <section id="projects" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-2xl font-bold mb-6">Projects</h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {loadingProjects ? (
              <>
                <ProjectSkeleton />
                <ProjectSkeleton />
                <ProjectSkeleton />
                <ProjectSkeleton />
              </>
            ) : (
              <>
                {/* Project 1 */}
                <div className="rounded-xl border border-gray-100 p-4 md:p-5 bg-white/80 backdrop-blur-sm transition transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-300/20 duration-300 cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg group mb-4 aspect-video cursor-pointer">
                    {/* Image */}
                    <Image
                      src="/project1.png"
                      alt="Disney+ Clone Preview"
                      width={800}
                      height={500}
                      className="transition duration-500 ease-out group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                      <span className="px-4 py-2 bg-amber-400 text-black text-xs font-semibold rounded-md shadow">
                        View Project
                      </span>
                    </div>
                  </div>
                  {/* Title */}
                  <h4 className="text-base md:text-lg font-semibold mb-2">
                    Disney+ Clone (Next.js)
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-3 line-clamp-4">
                    Built a Disney+ inspired streaming UI using Next.js, featuring dynamic routing,
                    responsive layouts, and component-based architecture.
                  </p>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href="https://disney-clone-fresh.vercel.app/"
                      target="_blank"
                      className="text-amber-500 hover:text-amber-400 text-sm font-medium"
                    >
                      Live Demo
                    </a>

                    <a
                      href="https://github.com/WWJD12/Disney-clone-fresh"
                      target="_blank"
                      className="text-amber-500 hover:text-amber-400 text-sm font-medium underline-offset-4 hover:underline"
                    >
                      Code
                    </a>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="rounded-xl border border-gray-100 p-4 md:p-5 bg-white/80 backdrop-blur-sm transition transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-300/20 duration-300 cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg group mb-4 aspect-video cursor-pointer">
                    {/* Image */}
                    <Image
                      src="/project2.png"
                      alt="Movie Finder App Preview"
                      width={800}
                      height={500}
                      className="transition duration-500 ease-out group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                      <span className="px-4 py-2 bg-amber-400 text-black text-xs font-semibold rounded-md shadow">
                        View Project
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-base md:text-lg font-semibold mb-2">
                    {' '}
                    Movie Finder App (React)
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-3 line-clamp-4">
                    Built a movie discovery app using React with real-time search, API integration,
                    and smooth UI animations using Framer Motion.
                  </p>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href="https://your-moviefinder-url.vercel.app/"
                      target="_blank"
                      className="text-amber-500 hover:text-amber-400 text-sm font-medium"
                    >
                      Live Demo
                    </a>

                    <a
                      href="https://github.com/WWJD12/React-Final-Project"
                      target="_blank"
                      className="text-amber-500 hover:text-amber-400 text-sm font-medium underline-offset-4 hover:underline"
                    >
                      Code
                    </a>
                  </div>
                </div>

                {/* Project 3 */}
                <div className="rounded-xl border border-gray-100 p-4 md:p-5 bg-white/80 backdrop-blur-sm transition transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-300/20 duration-300 cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg group mb-4 aspect-video cursor-pointer">
                    {/* Image */}
                    <Image
                      src="/project3.png"
                      alt="Muscle Car Marketplace Preview"
                      width={800}
                      height={500}
                      className="transition duration-500 ease-out group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                      <span className="px-4 py-2 bg-amber-400 text-black text-xs font-semibold rounded-md shadow">
                        View Project
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-base md:text-lg font-semibold mb-2">
                    Muscle Car Marketplace (Next.js)
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-3 line-clamp-4">
                    Built a marketplace-style web app using Next.js to browse and filter classic
                    muscle cars, focusing on structured data, responsive UI, and clean component
                    architecture.
                  </p>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href="https://muscle-car-marketplace.vercel.app/"
                      target="_blank"
                      className="text-amber-500 hover:text-amber-400 text-sm font-medium"
                    >
                      Live Demo
                    </a>

                    <a
                      href="https://github.com/WWJD12/Muscle-Car-Marketplace"
                      target="_blank"
                      className="text-amber-500 hover:text-amber-400 text-sm font-medium underline-offset-4 hover:underline"
                    >
                      Code
                    </a>
                  </div>
                </div>
                {/* Project 4 */}
                <div className="rounded-xl border border-gray-100 p-4 md:p-5 bg-white/80 backdrop-blur-sm transition transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-300/20 duration-300 cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg group mb-4 aspect-video cursor-pointer">
                    {/* Image */}
                    <Image
                      src="/project4.png"
                      alt="AI Car Finder App Preview"
                      width={800}
                      height={500}
                      className="transition duration-500 ease-out group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                      <span className="px-4 py-2 bg-amber-400 text-black text-xs font-semibold rounded-md shadow">
                        View Project
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-base md:text-lg font-semibold mb-2">
                    {' '}
                    AI Car Finder (Next.js)
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-3 line-clamp-4">
                    Built an AI-style car recommendation app using Next.js with dynamic filtering
                    and user-driven search logic to deliver personalized results.
                  </p>
                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href="https://ai-car-finder-app.vercel.app/"
                      target="_blank"
                      className="text-amber-500 hover:text-amber-400 text-sm font-medium"
                    >
                      Live Demo
                    </a>

                    <a
                      href="https://github.com/WWJD12/AI_CAR_FINDER"
                      target="_blank"
                      className="text-amber-500 hover:text-amber-400 text-sm font-medium underline-offset-4 hover:underline"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8" />
      <section id="contact" className="px-6 py-10 bg-gradient-to-b from-transparent to-gray-100">
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute inset-0 bg-white blur-3xl opacity-20"></div>

          <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 p-10 max-w-xl mx-auto">
            <div className="text-center">
              <h3 className="text-3xl leading-tight font-bold mb-4">Let’s Work Together</h3>

              <p className="text-gray-600 mb-10">
                Have a project in mind or just want to connect? I’m always open to building
                something meaningful.
              </p>
            </div>

            <ContactForm />

            <div className="flex justify-center gap-6 mt-8">
              <a
                href="https://github.com/WWJD12"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black transition transform hover:scale-110 hover:-translate-y-1"
              >
                <FaGithub size={28} />
              </a>

              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition transform hover:scale-110 hover:-translate-y-1"
              >
                <FaLinkedin size={28} />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-[#050505] text-center py-12 border-t border-white/5">
        <div className="flex justify-center mb-4">
          <Image
            src="/profileImage1.png"
            alt="Curt Vance"
            width={48}
            height={48}
            className=" w-12 h-12 object-contain rounded-full"
          />
        </div>
        <p className="text-sm tracking-wide text-amber-300/90">
          © {new Date().getFullYear()} Curt Vance. Built with React & Next.js.
        </p>
      </footer>
    </div>
  )
}

/* ==========================================
 * 💡 TIPS FOR SUCCESS
 * ==========================================
 *
 * 1. START BIG, THEN REFINE
 *    - Use Agent Mode to scaffold entire sections quickly
 *    - Then use Edit Mode (Inline Chat) for small improvements
 *    - Don't try to get everything perfect in one prompt
 *
 * 2. ITERATE IN STEPS
 *    - Build one section at a time
 *    - Test each section before moving to the next
 *    - It's easier to debug small changes
 *
 * 3. USE ASK MODE FOR GUIDANCE
 *    - "What's the best way to structure this component?"
 *    - "How can I improve the performance here?"
 *    - "What accessibility features am I missing?"
 *
 * 4. CUSTOMIZE IT
 *    - Replace placeholder text with your real information
 *    - Add your own projects and achievements
 *    - Make it reflect your personality and style
 *
 * 5. LEARN BY REVIEWING
 *    - Don't just accept code blindly
 *    - Read what Copilot generates
 *    - Ask it to explain anything unclear
 *    - Understand the patterns so you can use them later
 *
 * 6. COMMON ISSUES & FIXES
 *    - Spacing looks off? → "Improve spacing using Tailwind"
 *    - Not responsive? → "Make this section responsive on mobile"
 *    - Missing types? → "Add TypeScript types for props"
 *    - Need animation? → "Add smooth transition animations"
 *
 * ========================================== */

/* ==========================================
 * 🎉 CONGRATULATIONS!
 * ==========================================
 *
 * When you complete this portfolio, you will have:
 *
 * ✓ Built a real, production-ready website with Copilot
 * ✓ Mastered Agent Mode for large scaffolding tasks
 * ✓ Used Edit Mode for precise refinements
 * ✓ Applied Ask Mode for strategic guidance
 * ✓ Leveraged rules for consistent code style
 * ✓ Created something you can actually deploy and share!
 *
 * NEXT STEPS:
 * - Deploy your portfolio to Vercel or Netlify
 * - Share it on LinkedIn and Twitter
 * - Keep practicing with Copilot on real projects
 * - Teach others what you've learned
 *
 * Remember: Copilot is a tool to amplify your skills,
 * not replace them. The more you understand code, the
 * better you'll be at directing Copilot to build
 * exactly what you envision.
 *
 * Happy coding! 🚀
 *
 * ========================================== */
