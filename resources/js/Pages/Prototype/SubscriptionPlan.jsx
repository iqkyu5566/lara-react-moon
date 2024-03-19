import SubscriptionCard from "@/Components/subscriptionCard";
import Authenticated from "@/Layouts/Authenticated/index";

export default function SubscriptionPlan() {
    return (
        <>
            <Authenticated>
                <div className="">
                    <div className="py-20 flex flex-col items-center">
                        <div className="text-black font-semibold text-[26px] mb-3">
                            Pricing for Everyone
                        </div>
                        <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                            Invest your little money to get a whole new
                            experiences from movies.
                        </p>

                        <div className="flex justify-center gap-10 mt-[70px]">
                            <SubscriptionCard
                                name={"Basic"}
                                price={10000}
                                durationInMonth={3}
                                features={[
                                    "10 Movies",
                                    "HD Quality",
                                    "720p",
                                    "Support 24/7",
                                ]}
                            />
                            <SubscriptionCard
                                isPremium={true}
                                name={"Premium"}
                                price={45000}
                                durationInMonth={6}
                                features={[
                                    "All Movies",
                                    "HD Quality",
                                    "4k",
                                    "Support 24/7",
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </Authenticated>
        </>
    );
}
