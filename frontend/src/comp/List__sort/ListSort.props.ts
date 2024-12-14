export interface ListSortProps {
	limit: number
	sort: string
	reRender: (limit: number, sort: string) => void
}
