export interface ListPaginationProps {
	pagination: string
	searchParams: { page: number; limit: number }
	loadMoreData: () => void
}
