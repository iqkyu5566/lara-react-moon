import Authenticated from "@/Layouts/Authenticated/index";
import Flickity from "react-flickity-component";
import { Head, Link } from "@inertiajs/react";
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";

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
                <title>Dashboard</title>
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <Flickity className="gap-[30px]" options={flickityOptions}>
                    {[1, 2, 3, 4].map((i) => (
                        // {/* Movie Thumbnail  */}
                        <FeaturedMovie
                            key={i}
                            slug="Nopal-In-love"
                            name={`nopal In love ${i}`}
                            category="Puncak Comedy"
                            thumbnail="https://picsum.photos/300/300"
                            rating={i + 1}
                        />
                    ))}
                </Flickity>
            </div>

            <div>
                <div className="mt-[60px]">
                    <div className="font-semibold text-[22px] text-black mb-4">
                        Browse
                    </div>
                    <Flickity className="gap-[30px]" options={flickityOptions}>
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <MovieCard
                                key={i}
                                slug="setan-setan"
                                name={`Setan Setan ${i}`}
                                category="Horor Lucu"
                                thumbnail="https://picsum.photos/id/5/300/300"
                            />
                        ))}
                    </Flickity>
                </div>
            </div>
        </Authenticated>
    );
}
