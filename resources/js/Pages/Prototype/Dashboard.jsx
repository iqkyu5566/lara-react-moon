import Authenticated from "@/Layouts/Authenticated/index";
import Flickity from "react-flickity-component";
import { Head, Link } from "@inertiajs/react";
import FeaturedMovie from "@/Components/FeaturedMovie";

export default function Dashboard() {
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };

    return (
        <Authenticated>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <Flickity className="gap-[30px]" options={flickityOptions}>
                    {[1, 2, 3, 4].map((i) => (
                        // {/* Movie Thumbnail  */}
                        <FeaturedMovie key={i} />
                    ))}
                </Flickity>
            </div>
        </Authenticated>
    );
}
