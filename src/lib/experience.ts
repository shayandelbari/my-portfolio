export interface Experience {
	company: string;
	position: string;
	// start: string;
	// end: string;
	description: string;
}

const experience: Experience[] = [
	{
		company: 'Company 1',
		position: 'Position 1',
		description: 'This is a description of my experience.'
	},
	{
		company: 'Company 2',
		position: 'Position 2',
		description: 'This is a description of my experience.'
	},
	{
		company: 'Company 3',
		position: 'Position 3',
		description: 'This is a description of my experience.'
	},
	{
		company: 'Company 4',
		position: 'Position 4',
		description: 'This is a description of my experience.'
	}
];

export default experience;
