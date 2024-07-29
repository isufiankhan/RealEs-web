import { FOOTER } from "@/constants"
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


const Footer = () => {
    return (
        <div className="bg-black text-white py-20">
            <div className="container mx-auto">
                <div className="flex flex-wrap border-b border-neutral-700">
                    <div className="w-full sm:w-1/2 lg:w-6/12 p-4">
                        {/* <h2>
                            Zia Associates
                        </h2> */}
                        <div className="flex">
                            <Image
                                className='mr-8'
                                src="/ZiaEs.png"
                                width={50}
                                height={50}
                                alt='Logo'
                            />
                            <div className="text-white pl-8 text-sm tracking-tighter"> Zia Associates</div>
                        </div>
                        <p className="py-8 lg:max-w-sm text-sm">
                            {FOOTER.description}
                        </p>
                        <div className="flex flex-wrap my-10 gap-4">
                            <TwitterIcon />
                            <InstagramIcon />
                            <FacebookIcon />
                            <LinkedinIcon />
                        </div>
                    </div>
                    {FOOTER.categories.map((category, index) => (
                        <div key={index} className="w-full sm:w-1/2 lg:w-2/12 p-4">

                            <h3 className="font-semibold uppercase text-neutral-200 pb-4">
                                {category.name}
                            </h3>

                            <ul>
                                {category.links.map((link, index) => (
                                    <li
                                        key={index} className="my-4">
                                        <Link
                                            href={link.url}
                                            className="text-neutral-200 hover:text-neutral-400 text-sm">
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    ))}
                </div>
                <p className="p-4 text-center text-sm text-neutral-500 justify-center">
                    {FOOTER.copyright}
                </p>
            </div>
        </div>
    )
}

export default Footer
