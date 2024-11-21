export interface Project {
	name: string;
	description: string;
	// image: string;
	// url: string;
	// category: 'web development' | 'web design' | 'mobile design' | 'python';
}

const projects: Project[] = [
	{ name: 'Project 1', description: 'This is a project that I have worked on.' },
	{ name: 'Project 2', description: 'This is a project that I have worked on.' },
	{ name: 'Project 3', description: 'This is a project that I have worked on.' },
	{ name: 'Project 4', description: 'This is a project that I have worked on.' }
];

export default projects;
