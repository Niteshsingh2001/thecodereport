
export function Layout2({ children }: { children: React.ReactElement }) {
    return (
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-2 py-2  ">
            {children}
        </div>
    )
}
