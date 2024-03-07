import { ComponentProps } from "react"

export interface Credentials {
    sourceName: string
    sourceURL: string
}

export interface ImageProps extends ComponentProps<"img"> {
    orientation: "horizontal" | "vertical"
    giveCredit?: boolean
    credentials?: Credentials
}

export function Image({ orientation, className, src, giveCredit = false, credentials, ...props }: ImageProps) {
    return (
        <div className="flex flex-col items-center py-2 w-full">
            <div className="rounded-md flex items-center w-fit  h-[500px] overflow-hidden">
                <img
                    className={`h-full ${orientation === "horizontal" ? "object-cover " : "object-center"} ${className}`}
                    src={src}
                    {...props}
                />
            </div>
            {
                giveCredit && credentials && <div className="capitalize flex gap-1 items-center">
                    <p className="text-sm text-gray-400">source : </p>
                    <a className="underline font-extralight" href={credentials.sourceURL}>{credentials.sourceName}</a>
                </div>
            }
        </div>
    )
}
