import { getProjects } from "@/src/sanity/lib/project/getProjects";
import HomeProjectCard from "./home-project-card";

export const revalidate = 0;

export default async function HomeProjectCardWrapper() {
  const projectItems = await getProjects(5);

  return (
    <>
      {projectItems.map((project, index) => (
        <HomeProjectCard key={project._id} project={project} index={index} />
      ))}
    </>
  );
}
