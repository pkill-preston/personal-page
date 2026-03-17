import ProjectsCard from "@/components/ProjectsCard/ProjectsCard";
import {getRepos} from "@/lib/utils";

const repos = await getRepos();

export default async function ProjectsSection() {

	return (
		<div className='py-6 px-4 w-full items-center gap-6 flex flex-col'>
			<ProjectsCard payload={repos} />
		</div>
	);
}
