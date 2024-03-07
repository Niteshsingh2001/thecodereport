import { Image, ImageProps } from "./image.component"

export interface ArticleProps {
    heading: string
    subHeading?: string
    paragraph: string
    isImage?: boolean
    image?: ImageProps
    imagePostion?: "top" | "bottom" | "center"
}

export function Article({ heading, subHeading, paragraph, imagePostion = "center", isImage = false, image }: ArticleProps) {
    return (
        <div className="flex flex-col gap-2 px-2 text-justify">
            {
                imagePostion === "top" && <div className="flex justify-center">
                    {isImage
                        &&
                        <>
                            {
                                image ?
                                    <Image {...image} />
                                    :
                                    <div className="text-center">Image not found!</div>
                            }
                        </>
                    }
                </div>
            }
            <h1 className="lg:text-3xl text-xl md:text-2xl font-extrabold lg:leading-10">{heading}</h1>
            {subHeading && <h3 className="lg:text-xl md:text-lg font-medium italic">{subHeading}</h3>}
            {
                imagePostion === "center" && <div className="flex justify-center">
                    {isImage
                        &&
                        <>
                            {
                                image ?
                                    <Image {...image} />
                                    :
                                    <div className="text-center">Image not found!</div>
                            }
                        </>
                    }
                </div>
            }
            <p className="text-lg leading-7" >{paragraph}</p>
            {
                imagePostion === "bottom" && <div className="flex justify-center">
                    {isImage
                        &&
                        <>
                            {
                                image ?
                                    <Image {...image} />
                                    :
                                    <div className="text-center">Image not found!</div>
                            }
                        </>
                    }
                </div>
            }
        </div>
    )
}
