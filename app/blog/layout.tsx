export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<h1>Marketify Hoardings</h1>
			{children}
		</div>
	);
}
