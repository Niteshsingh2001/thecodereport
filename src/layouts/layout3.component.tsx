
export function Layout3({ children }: { children: Array<React.ReactElement> }) {

    if (children.length === 3) {
        return (
            <div className="flex lg:flex-row md:flex-row flex-col gap-4">
                <div className="lg:w-1/3 md:w-1/2 w-full">
                    {children[0]}
                </div>
                <div className="w-full ">
                    {children[1]}
                </div>

                <div className="lg:w-1/3 md:w-1/2 w-full">
                    {children[2]}
                </div>
            </div>

        )
    }
    return <div className="text-center">This Layout can handel only Two Children</div>


}
