import ProjectsCard from "@/components/ProjectsCard/ProjectsCard";
import {getRepos} from "@/lib/utils";

const repos = await getRepos();

export default async function ProjectsSection() {

	return (
		<div className='flex flex-col items-center gap-6'>
			<ProjectsCard payload={repos} />
		</div>
	);
}
