import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Code, Smartphone, Server, Github, ExternalLink, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {motion} from "framer-motion"


export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-800">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold">Shalom Wubu</div>
          <div className="hidden md:flex space-x-8">
            <Link href="#home" className="hover:text-orange-500 transition-colors">
              Home
            </Link>
            <Link href="#about" className="hover:text-orange-500 transition-colors">
              About
            </Link>
            <Link href="#projects" className="hover:text-orange-500 transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-orange-500 transition-colors">
              Contacts
            </Link>
            <Link href="/experience" className="hover:text-orange-500 transition-colors">
              Experience
            </Link>
            <Link href="/academic"  className="hover:text-orange-500 transition-colors">
              Academic level
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
<section id="home" className="pt-24 pb-16 px-6">
  <div className="container mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="space-y-4">
          <motion.h1
            className="text-5xl lg:text-6xl font-bold"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Hello<span className="text-orange-500">.</span>
          </motion.h1>
          <motion.p
            className="text-xl text-slate-300"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            I'm Shalom
          </motion.p>
          <motion.h2
            className="text-4xl lg:text-5xl font-bold"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Software Developer
          </motion.h2>
        </div>

        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3">Got a project?</Button>
          <Button
            variant="outline"
            className="border-slate-600 text-white hover:bg-slate-800 px-6 py-3 bg-transparent"
          >
            My resume
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      >
        <div className="relative">
          <motion.div
            className="w-80 h-80 rounded-full bg-gradient-to-br from-orange-500 to-red-600 p-3"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
              <Image
                src="/shalom.webp?height=320&width=320"
                alt="Shalom Wubu"
                width={320}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-orange-500 rotate-45"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-orange-500 rotate-45"></div>
        </div>
      </motion.div>
    </div>
  </div>
  {/* Tech Stack */}
  <motion.div
    className="flex flex-wrap gap-24  pt-8 mt-8 w-full bg-gray-900 justify-center items-center"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 1 }}
  >
    <div className="text-slate-600 items-center">Next.js</div>
    <div className="text-slate-600">Tailwind</div>
    <div className="text-slate-600">TypeScript</div>
    <div className="text-slate-600">Node.js</div>
    <div className="text-slate-600">React</div>
    <div className="text-slate-600">Git</div>
    <div className="text-slate-600">GitHub</div>
  </motion.div>
</section>

      {/* About Section */}

<section id="about" className="py-16 px-6 bg-slate-800/50">
  <motion.div
    className="container mx-auto"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Services */}
      <motion.div
        className="mt-15 space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        <motion.div
          className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg"
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0 }
          }}
          transition={{ duration: 0.5 }}
        >
          <Code className="w-8 h-8 text-orange-500" />
          <span className="text-lg">Website Development</span>
        </motion.div>
        <motion.div
          className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg"
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0 }
          }}
          transition={{ duration: 0.5 }}
        >
          <Smartphone className="w-8 h-8 text-orange-500" />
          <span className="text-lg">Web Design</span>
        </motion.div>
        <motion.div
          className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg"
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0 }
          }}
          transition={{ duration: 0.5 }}
        >
          <Server className="w-8 h-8 text-orange-500" />
          <span className="text-lg">Website Hosting</span>
        </motion.div>
      </motion.div>

      {/* About Content */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold">About me</h2>
        <p className="text-slate-300 leading-relaxed">
          I am a software developer specializing in frontend technologies. My journey into the world of coding began with an assignment that introduced me to C++. From that moment,
          I was inspired by the power of programming and the things that you can do with it.
          <br />As I dive deeper into the field, I have developed a strong passion for developing user friendly websites.
          <br />I have honed my skill in various skills such as React.JS,Next.JS,Node.JS,TypeScript and Tailwind.
          With a commitment to continuous learning, I stay updated on the latest trends and technologies in the industry
        </p>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-6 pt-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          <motion.div
            className="text-center"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-3xl font-bold text-orange-500">
              12<span className="text-white">+</span>
            </div>
            <div className="text-sm text-slate-400">Completed Projects</div>
          </motion.div>
          <motion.div
            className="text-center"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-3xl font-bold text-orange-500">
              95<span className="text-white">%</span>
            </div>
            <div className="text-sm text-slate-400">Client satisfaction</div>
          </motion.div>
          <motion.div
            className="text-center"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-3xl font-bold text-orange-500">
              3<span className="text-white">+</span>
            </div>
            <div className="text-sm text-slate-400">Years of experience</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  </motion.div>
</section>

      {/* Projects Section */}

<section id="projects" className="py-16 px-6">
  <motion.div
    className="container mx-auto"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
    <div className="w-16 h-1 bg-orange-500 mx-auto mb-16"></div>

    <motion.div
      className="space-y-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: { staggerChildren: 0.3 }
        }
      }}
    >
      {/* Budget Tracker Project */}
      <motion.div
        className="grid lg:grid-cols-2 gap-8 items-center"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.7 }}
      >
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Budget Tracker</h3>
          <div className="flex gap-2">
            <Badge variant="default" className="bg-slate-800">React.js</Badge>
            <Badge variant="default" className="bg-slate-800">css</Badge>
            <Badge variant="default" className="bg-slate-800">JavaScript</Badge>
            <Badge variant="default" className="bg-slate-800">Node.js</Badge>
          </div>
          <p className="text-slate-300">
            used React.js and its libraries to allow users to track their income, expenses, and savings efficiently.
            The application will provide insights into spending habits, help users set financial goals, and enable them to create budgets to manage their finances effectively.
          </p>
          <div className="flex gap-4">
            <Button className="bg-orange-500 hover:bg-orange-600">View GitHub</Button>
            <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800 bg-transparent">
              View project <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
        <motion.div
          className="bg-slate p-4 rounded-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Image
            src="/budget-tracker.png"
            alt="Budget Tracker"
            width={500}
            height={800}
            className="rounded-lg"
          />
        </motion.div>
      </motion.div>

      {/* Tax Collector Project */}
      <motion.div
        className="grid lg:grid-cols-2 gap-8 items-center mt-30"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.7 }}
      >
        <div className="lg:order-2 space-y-4">
          <h3 className="text-2xl font-bold">Tax Collector and Payment</h3>
          <div className="flex gap-2">
            <Badge variant="default" className="bg-slate-800">Next.js</Badge>
            <Badge variant="default" className="bg-slate-800">Tailwind</Badge>
            <Badge variant="default" className="bg-slate-800">TypeScript</Badge>
            <Badge variant="default" className="bg-slate-800">API</Badge>
            <Badge variant="default" className="bg-slate-800">Version control</Badge>
            <Badge variant="default" className="bg-slate-800">Chapa</Badge>
          </div>
          <p className="text-slate-300">
            uses data from the incomes and expenses page to calculate the profit,vat Tax.
            uses payroll data from the payroll page to calculate payroll tax.used Chapa for payment method
          </p>
          <div className="flex gap-4">
            <Button className="bg-orange-500 hover:bg-orange-600">View GitHub</Button>
            <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800 bg-transparent">
              View project <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
        <motion.div
          className="bg-slate p-4 rounded-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Image
            src="/taxt-collector.png?height=200&width=150"
            alt="Tax Collector"
            width={500}
            height={800}
            className="rounded-lg"
          />
        </motion.div>
      </motion.div>

      {/* Smart Crop Project */}
      <motion.div
        className="grid lg:grid-cols-2 gap-8 items-center mt-30"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.7 }}
      >
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Smart Crop</h3>
          <div className="flex gap-2">
            <Badge variant="default" className="bg-slate-800">React.js</Badge>
            <Badge variant="default" className="bg-slate-800">Tailwind</Badge>
            <Badge variant="default" className="bg-slate-800">Typescript</Badge>
            <Badge variant="default" className="bg-slate-800">Node.js</Badge>
          </div>
          <p className="text-slate-300">
            used trained model for crop recommendation using python and considers factors like ph,humidity and nutrient of the soil.
            It recommends compatable fertilizer and provides suitable interface for the admins to input data.
          </p>
          <div className="flex gap-4">
            <Button className="bg-orange-500 hover:bg-orange-600">View GitHub</Button>
            <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800 bg-transparent">
              View project <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
        <motion.div
          className="bg-slate p-4 rounded-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Image
            src="/smart-crop.png"
            alt="smart crop"
            width={500}
            height={800}
            className="rounded-lg"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </motion.div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-slate-800/50">
        <div className="container mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Have a project?</h2>
              <h3 className="text-3xl font-bold text-orange-500">Let&apos;s talk!</h3>
            </div>
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" className="bg-slate-700 border-slate-600" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" className="bg-slate-700 border-slate-600" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="bg-slate-700 border-slate-600 min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">Submit</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <div className="text-xl font-bold mb-2">Shalom Wubu</div>
              <p className="text-slate-400 text-sm">Designed with love, all right reserved by Shalom Wubu.</p>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-400 hover:text-orange-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-orange-500 transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-orange-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}