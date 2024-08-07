

export default function Grid({ children } : { children: React.ReactNode }) {
	return (
		<ul className="grid grid-cols-4 gap-4 my-12">
            {children}
        </ul>
	)
}
