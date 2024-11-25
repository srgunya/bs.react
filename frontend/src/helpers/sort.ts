type mas = {
	to: string
	text: string
}[]

export function sortHeader(mas: mas) {
	return mas.sort((a, b) => {
		if (
			a.text == 'Все бренды' ||
			a.text == 'Все категории' ||
			b.text == 'Все бренды' ||
			b.text == 'Все категории'
		) {
			return 0
		} else {
			if (a.text.toLowerCase() < b.text.toLowerCase()) {
				return -1
			}
			if (a.text.toLowerCase() > b.text.toLowerCase()) {
				return 1
			}
			return 0
		}
	})
}
