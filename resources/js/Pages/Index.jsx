import React from "react";
import { Link } from "@inertiajs/react";
import { buttonVariants } from "@/components/ui/button";
import Navigation from "./Invitation/Home/Partials/Navigation";

export default function Index({ app_url }) {
    return (
        <>
            <Navigation />
            <div className="px-24 py-10 bg-white">
                <div className="w-72 flex flex-col gap-4">
                    <Link
                        className={buttonVariants({ variant: "outline" })}
                        href="/invitation"
                    >
                        Invitation
                    </Link>
                    <Link
                        className={buttonVariants({ variant: "outline" })}
                        href="/dashboard"
                    >
                        Dashboard
                    </Link>
                </div>
            </div>
        </>
    );
}
