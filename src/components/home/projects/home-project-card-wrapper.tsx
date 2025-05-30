import { getProjects } from "@/src/sanity/lib/project/getProjects";
import HomeProjectCard from "./home-project-card";

export default async function HomeProjectCardWrapper() {
  const projectItems = await getProjects(5);

  if (!projectItems || projectItems.length === 0) {
    return (
      <div
        className="col-span-2 flex items-center justify-center text-gray-600"
        role="status"
        aria-live="polite"
      >
        <p>No projects available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="contents" role="group" aria-label="Featured projects">
      {projectItems.map((project, index) => (
        <HomeProjectCard
          key={project._id}
          project={project}
          index={index}
          totalCount={projectItems.length}
        />
      ))}
    </div>
  );
}
