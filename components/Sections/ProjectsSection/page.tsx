import ProjectsCard from "@/components/ProjectsCard/ProjectsCard";
import {getRepos} from "@/lib/utils";

const repos = await getRepos();

export default async function ProjectsSection() {

	return <ProjectsCard payload={repos} />;
}
