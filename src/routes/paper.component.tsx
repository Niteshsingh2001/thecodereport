import { Article, Footer, Image, Jokes } from "../components";
import { articles } from "../data/articles";
import { Layout1, Layout2, Layout3 } from "../layouts";

export function Paper() {
    return (
        <div className="font-English_Town py-4 flex flex-col gap-4">
            <Layout3>
                <Article
                    heading={articles[6].heading}
                    paragraph={articles[6].paragraph}
                    subHeading={articles[6].subHeading}
                    image={articles[6].image}
                    isImage={articles[6].isImage}
                    imagePostion={articles[6].imagePostion}
                />
                <Article
                    heading={articles[5].heading}
                    paragraph={articles[5].paragraph}
                    subHeading={articles[5].subHeading}
                    image={articles[5].image}
                    isImage={articles[5].isImage}
                    imagePostion={articles[5].imagePostion}
                />
                <Article
                    heading={articles[7].heading}
                    paragraph={articles[7].paragraph}
                    subHeading={articles[7].subHeading}
                    image={articles[7].image}
                    isImage={articles[7].isImage}
                    imagePostion={articles[7].imagePostion}
                />
            </Layout3>

            <Layout1>
                <div className="flex flex-col gap-2">
                    {
                        articles.map(({ heading, paragraph, imagePostion, subHeading, image, isImage }, index) => {
                            if (index == 0) {
                                return <Article
                                    heading={heading}
                                    paragraph={paragraph}
                                    subHeading={subHeading}
                                    image={image}
                                    isImage={isImage}
                                    imagePostion={imagePostion}
                                />
                            }
                        })
                    }

                </div>
                <div className="px-2 w-full flex flex-col gap-2">
                    <Jokes numberOfJokes={4} />
                    <Image
                        orientation="vertical"
                        src="https://ih1.redbubble.net/image.3247703741.4768/raf,750x1000,075,t,101010:01c5ca27c6.jpg"
                    />

                </div>
            </Layout1>



            <Layout2>
                <>
                    {
                        articles.map(({ heading, paragraph, imagePostion, subHeading, image, isImage }, index) => {
                            if (index > 0 && index < 5) {
                                return <Article
                                    heading={heading}
                                    paragraph={paragraph}
                                    subHeading={subHeading}
                                    image={image}
                                    isImage={isImage}
                                    imagePostion={imagePostion}
                                />
                            }
                        })
                    }
                </>
            </Layout2>
            <Footer />
        </div>
    )
}
