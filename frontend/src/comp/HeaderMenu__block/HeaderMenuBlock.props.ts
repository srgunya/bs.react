export interface HeaderMenuBlockProps {
	ul1: {
		to: string
		text: string
	}[]
	ul2: {
		to: string
		text: string
	}[]
	ul3?: {
		to: string
		text: string
	}[]
	ul4?: {
		to: string
		text: string
	}[]
	img: {
		text: string
		img: string
	}[]
	apperance: string
	menuActive: string
}
