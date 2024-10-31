import { createContext, ReactNode, useState } from 'react'

export const HeaderContext = createContext<HeaderContext>({
	menuActive: '',
	setMenuActive: () => {},
})

type HeaderContext = {
	menuActive: string
	setMenuActive: React.Dispatch<React.SetStateAction<string>>
}

export function HeaderContextProvider({ children }: { children: ReactNode }) {
	const [menuActive, setMenuActive] = useState<string>('')

	return (
		<HeaderContext.Provider value={{ menuActive, setMenuActive }}>
			{children}
		</HeaderContext.Provider>
	)
}
