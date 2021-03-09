export default function SimpleLayout ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return <main style={{ border: '4px dashed red' }}>{children}</main>
}
