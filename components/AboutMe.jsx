import Image from "next/image";
import {
  BellElectric,
  Calendar,
  CircleUser,
  Code,
  GraduationCap,
  Mail,
  PhoneOutgoing,
  Columns3,
  Circle,
} from "lucide-react";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFigma } from "react-icons/io5";
import { FaWordpressSimple } from "react-icons/fa6";
import AboutImage from "@/public/rb_870.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AboutMe() {
  return (
    <section className="dark:bg-black">
      <div className="flex place-content-center gap-3 items-center font-bold">
        <BellElectric className="text-[#F59E18]" />
        <h1>About me</h1>
      </div>

      <div className="md:flex md:justify-between md:items-center">
        <div>
          <Image src={AboutImage} alt="AboutImage" width={700} />
        </div>

        <div className="pr-40 mt-10">
          <Tabs defaultValue="personal_Info" className="w-[500px] h-[500px] ">
            <TabsList>
              <TabsTrigger value="personal_Info">Personal Info</TabsTrigger>

              <TabsTrigger value="qualification">Qualification</TabsTrigger>

              <TabsTrigger value="skills">Skills</TabsTrigger>
            </TabsList>

            <TabsContent value="personal_Info">
              <div className="mt-5">
                <h1 className="text-xl font-bold mb-5">
                  Unmatched Service Quality for over 2 Years
                </h1>
                <p className="space-y-4">
                  I specialize in crafting intuitive websites with cutting-edge
                  technology, delivering dynamic nad engaging user experience
                </p>
              </div>

              <div className=" columns-2 col-span-3 space-y-3 mt-3">
                <div className="flex gap-3">
                  <CircleUser className="text-[#F59E18]" />
                  <p>Md. Nesad</p>
                </div>

                <div className="flex gap-3">
                  <Mail className="text-[#F59E18]" />
                  <p>nesadm26@gmail.com</p>
                </div>

                <div className="flex gap-3">
                  <PhoneOutgoing className="text-[#F59E18]" />
                  <p>+8801300113023</p>
                </div>

                <div className="flex gap-3">
                  <Calendar className="text-[#F59E18]" />
                  <p>Born on 20 September, 1999</p>
                </div>

                <div className="flex gap-3">
                  <GraduationCap className="text-[#F59E18] w-11" />
                  <p>Master in BBA, Self learner Compute Science</p>
                </div>
              </div>

              <div>
                <p className="text-[#F59E18] border-[#acaaaa] border-b-2 py-2">
                  Language Skill
                </p>

                <p className="mt-3">English, Bangla, Hindi, Pakistani</p>
              </div>
            </TabsContent>

            <TabsContent value="qualification">
              <h1 className="font-bold text-2xl mt-5 border-[#acaaaa] border-b-2 py-2">
                My Awesome Journey
              </h1>
              <div className="flex justify-between">
                <div className="first-div">
                  <div className="flex gap-4 items-center mt-5 text-[#F59E18]">
                    <Columns3 />
                    <p>Experience</p>
                  </div>

                  <div className="my-5">
                    <div className="flex gap-4 items-center">
                      <Circle
                        size={18}
                        className="text-[#F59E18] bg-[#F59E18] rounded-full"
                      />
                      <h1 className="text-xl">ABC Inc.</h1>
                    </div>
                    <p className="ml-9">Front-end Developer</p>
                    <p className="ml-9 text-sm text-[#F59E18]">
                      HTML, CSS, JAVASCRIPT
                    </p>
                  </div>

                  <div className="my-5">
                    <div className="flex gap-4 items-center">
                      <Circle
                        size={18}
                        className="text-[#F59E18] bg-[#F59E18] rounded-full"
                      />
                      <h1 className="text-xl">XYZ Corporation</h1>
                    </div>
                    <p className="ml-9">WordPress Developer</p>
                    <p className="ml-9 text-sm text-[#F59E18]">
                      Theme Customization
                    </p>
                  </div>

                  <div className="my-5">
                    <div className="flex gap-4 items-center">
                      <Circle
                        size={18}
                        className="text-[#F59E18] bg-[#F59E18] rounded-full"
                      />
                      <h1 className="text-xl">Tech Innovators</h1>
                    </div>
                    <p className="ml-9">React Developer</p>
                    <p className="ml-9 text-sm text-[#F59E18]">
                      React + Next.js
                    </p>
                  </div>
                </div>

                <div className="second-div">
                  <div className="flex gap-4 items-center mt-5 text-[#F59E18]">
                    <GraduationCap />
                    <p>Education</p>
                  </div>

                  <div className="my-5">
                    <div className="flex gap-4 items-center">
                      <Circle
                        size={18}
                        className="text-[#F59E18] bg-[#F59E18] rounded-full"
                      />
                      <h1 className="text-xl">National University</h1>
                    </div>
                    <p className="ml-8">Bechelor of Commerce</p>

                    <div className="flex gap-4 items-center ml-9 text-sm text-[#F59E18]">
                      <Calendar size={16} />
                      <p>2020 - 2024</p>
                    </div>
                  </div>

                  <div className="my-5">
                    <div className="flex gap-4 items-center">
                      <Circle
                        size={18}
                        className="text-[#F59E18] bg-[#F59E18] rounded-full"
                      />
                      <h1 className="text-xl">Programming Hero</h1>
                    </div>
                    <p className="ml-9">Front-end Development</p>
                    <div className="flex gap-4 items-center ml-9 text-sm text-[#F59E18]">
                      <Calendar size={16} />
                      <p>2023 - 2025</p>
                    </div>
                  </div>

                  <div className="my-5">
                    <div className="flex gap-4 items-center">
                      <Circle
                        size={18}
                        className="text-[#F59E18] bg-[#F59E18] rounded-full"
                      />
                      <h1 className="text-xl">10 minute school</h1>
                    </div>
                    <p className="ml-9">Spoken English</p>

                    <div className="flex gap-4 items-center ml-9 text-sm text-[#F59E18]">
                      <Calendar size={16} />
                      <p>2023 - 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="skills">
              <div>
                <div>
                  <h1 className="mt-5">Tools I use everyday...</h1>

                  <h3 className="border-[#acaaaa] border-b-2 pb-2 mt-5 font-bold">
                    Skills
                  </h3>
                </div>

                <div className="space-y-2 mt-5">
                  <h3 className="flex gap-4">
                    <Code className=" text-[#F59E18]" />
                    HTML, CSS, JAVASCRIPT
                  </h3>
                  <h3 className="flex gap-4">
                    <Code className="text-[#F59E18]" />
                    React.Js and Next.Js
                  </h3>
                  <h3 className="flex gap-4">
                    <Code className="text-[#F59E18]" />
                    Front-end Development
                  </h3>
                  <h3 className="flex gap-4">
                    <Code className="text-[#F59E18]" />
                    Firebase + MongoDB
                  </h3>
                  <h3 className="flex gap-4">
                    <Code className="text-[#F59E18]" />
                    Back-end Development (Next.js)
                  </h3>
                </div>

                <h3 className="border-[#acaaaa] border-b-2 pb-2 mt-10 font-bold">
                  Tools
                </h3>

                <div className="flex gap-10 text-4xl mt-3 text-[#F59E18]">
                  <VscVscode />
                  <IoLogoFigma />
                  <FaWordpressSimple />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
