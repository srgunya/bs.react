export interface filterData {
	brand: {
		buckets: { key: string }[]
	}
	category: {
		buckets: { key: string }[]
	}
	color: {
		buckets: { key: string }[]
	}
	price: {
		buckets: { key: string }[]
	}
	sex: {
		buckets: { key: string }[]
	}
	size: {
		buckets: { key: string }[]
	}
}

export interface ListFilterProps {
	facets: filterData
}
