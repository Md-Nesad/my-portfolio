import LatestProject from "@/components/latestProject";
import { Flame } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { allProjects } from "@/data/allProjects";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function MyProject() {
  return (
    <section className="mt-20 dark:bg-black">
      <LatestProject text="Contact me" />
      {/* All projects */}
      <div className="place-items-center pb-28">
        <div className="flex gap-4 items-center font-bold pb-14 place-content-center">
          <Flame className=" text-[#F59E18] rounded-full" />
          <h1 className="dark:text-white">
            All - {allProjects.length} Projects{" "}
          </h1>
        </div>

        <Tabs defaultValue="All_projects" className="place-items-center">
          <TabsList className="mb-10">
            <TabsTrigger value="All_projects">All Projects</TabsTrigger>
            <TabsTrigger value="javascript">JavaScript</TabsTrigger>
            <TabsTrigger value="react">React js</TabsTrigger>
            <TabsTrigger value="next">Next js</TabsTrigger>
            <TabsTrigger value="full_stack">Full stack</TabsTrigger>
            <TabsTrigger value="wordpress">WordPress</TabsTrigger>
          </TabsList>

          {/* get all projects */}
          <TabsContent value="All_projects">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 md:gap-7 sm:gap-3 md:w-[1200px] max-sm:space-y-10">
              {allProjects.slice(0, 9).map((item) => (
                <Link href={`/my_Project/${item.title}`}>
                  <Card
                    key={item.id}
                    className=" dark:border-[#ffd18d] dark:bg-black flex hover:scale-105 sm:hover:scale-[1.03] transition duration-300"
                  >
                    <CardContent className="md:w-[400px] sm:w-[300px] max-sm:w-[400px]">
                      <Badge className="bg-[#F59E18] text-black dark:text-white hover:bg-[#127A88] hover:text-white mt-3">
                        {item.badge}
                      </Badge>
                      <Image
                        className="my-4 shadow-white shadow-inner rounded"
                        src={item.image}
                        alt="Slider"
                      />
                      <div className="text-center bg-gray-300 dark:bg-[#F59E18] dark:text-white py-2 rounded">
                        <span className="text-xl font-semibold">
                          {item.title}
                        </span>
                        <p className="mt-4">
                          {item.description.slice(0, 50)}...
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          {/* get JavaScript project */}
          <TabsContent value="javascript">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 md:gap-7 sm:gap-3 md:w-[1200px]">
              {allProjects
                .filter((obj) => obj.badge.includes("JavaScript"))
                .map((item) => (
                  <Link href={`/my_Project/${item.title}`}>
                    <Card
                      key={item.id}
                      className=" border-white dark:border-[#ffd18d] dark:bg-black flex hover:scale-105 sm:hover:scale-[1.03] transition duration-300"
                    >
                      <CardContent className="md:w-[400px] sm:w-[300px] max-sm:w-[400px]">
                        <Badge className="bg-[#F59E18] text-black dark:text-white hover:bg-[#127A88] hover:text-white mt-3">
                          {item.badge}
                        </Badge>
                        <Image className="my-4" src={item.image} alt="Slider" />
                        <div className="text-center bg-gray-300 dark:bg-[#F59E18] dark:text-white py-2 rounded">
                          <span className="text-xl font-semibold">
                            {item.title}
                          </span>
                          <p className="mt-4">
                            {item.description.slice(0, 50)}...
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          </TabsContent>

          {/* get React projects */}
          <TabsContent value="react">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 md:gap-7 sm:gap-3 md:w-[1200px]">
              {allProjects
                .filter((obj) => obj.badge.includes("React js"))
                .map((item) => (
                  <Link href={`/my_Project/${item.title}`}>
                    <Card
                      key={item.id}
                      className=" border-white dark:border-[#ffd18d] dark:bg-black flex hover:scale-105 sm:hover:scale-[1.03] transition duration-300"
                    >
                      <CardContent className="md:w-[400px] sm:w-[300px] max-sm:w-[400px]">
                        <Badge className="bg-[#F59E18] text-black dark:text-white hover:bg-[#127A88] hover:text-white mt-3">
                          {item.badge}
                        </Badge>
                        <Image className="my-4" src={item.image} alt="Slider" />
                        <div className="text-center bg-gray-300 dark:bg-[#F59E18] dark:text-white py-2 rounded">
                          <span className="text-xl font-semibold">
                            {item.title}
                          </span>
                          <p className="mt-4">
                            {item.description.slice(0, 50)}...
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          </TabsContent>
          {/* get next js project */}
          <TabsContent value="next">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 md:gap-7 sm:gap-3 md:w-[1200px]">
              {allProjects
                .filter((obj) => obj.optional?.includes("Next Project"))
                .map((item) => (
                  <Link href={`/my_Project/${item.title}`}>
                    <Card
                      key={item.id}
                      className=" border-white dark:border-[#ffd18d] dark:bg-black flex hover:scale-105 sm:hover:scale-[1.03] transition duration-300"
                    >
                      <CardContent className="md:w-[400px] sm:w-[300px] max-sm:w-[400px]">
                        <Badge className="bg-[#F59E18] text-black dark:text-white hover:bg-[#127A88] hover:text-white mt-3">
                          {item.badge}
                        </Badge>
                        <Image className="my-4" src={item.image} alt="Slider" />
                        <div className="text-center bg-gray-300 dark:bg-[#F59E18] dark:text-white py-2 rounded">
                          <span className="text-xl font-semibold">
                            {item.title}
                          </span>
                          <p className="mt-4">
                            {item.description.slice(0, 50)}...
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          </TabsContent>
          {/* get full stack project */}
          <TabsContent value="full_stack">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 md:gap-7 sm:gap-3 md:w-[1200px]">
              {allProjects
                .filter((obj) => obj.optional?.includes("full stack"))
                .map((item) => (
                  <Link href={`/my_Project/${item.title}`}>
                    <Card
                      key={item.id}
                      className=" border-white dark:border-[#ffd18d] dark:bg-black flex hover:scale-105 sm:hover:scale-[1.03] transition duration-300"
                    >
                      <CardContent className="md:w-[400px] sm:w-[300px] max-sm:w-[400px]">
                        <Badge className="bg-[#F59E18] text-black dark:text-white hover:bg-[#127A88] hover:text-white mt-3">
                          {item.badge}
                        </Badge>
                        <Image
                          className="my-4"
                          src={item.image}
                          priority={false}
                          alt="Slider"
                        />
                        <div className="text-center bg-gray-300 dark:bg-[#F59E18] dark:text-white py-2 rounded">
                          <span className="text-xl font-semibold">
                            {item.title}
                          </span>
                          <p className="mt-4">
                            {item.description.slice(0, 50)}...
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          </TabsContent>
          {/* get wordress projects */}
          <TabsContent value="wordpress">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 md:gap-7 sm:gap-3 md:w-[1200px]">
              {allProjects
                .filter((obj) => obj.badge.includes("wordpress"))
                .map((item) => (
                  <Link href={`/my_Project/${item.title}`}>
                    <Card
                      key={item.id}
                      className=" border-white dark:border-[#ffd18d] dark:bg-black flex hover:scale-105 sm:hover:scale-[1.03] transition duration-300"
                    >
                      <CardContent className="md:w-[400px] sm:w-[300px] max-sm:w-[400px]">
                        <Badge className="bg-[#F59E18] text-black dark:text-white hover:bg-[#127A88] hover:text-white mt-3">
                          {item.badge}
                        </Badge>
                        <Image
                          className="my-4"
                          src={item.image}
                          priority={true}
                          alt="Slider"
                        />
                        <div className="text-center bg-gray-300 dark:bg-[#F59E18] dark:text-white py-2 rounded">
                          <span className="text-xl font-semibold">
                            {item.title}
                          </span>
                          <p className="mt-4">
                            {item.description.slice(0, 50)}...
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
