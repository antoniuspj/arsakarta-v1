import React from "react";
import { Instagram } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

export default function CommingSoon({ app_url }) {
    return (
        <>
            <div className="flex flex-col gap-2 md:gap-4 justify-center items-center min-h-screen bg-slate-950">
                <h1 className="text-white text-4xl md:text-5xl font-semibold tracking-wider cursor-pointer hover:text-green-500">
                    ARSKRT
                </h1>
                <span className="text-slate-300 text-base md:text-4xl tracking-wider">
                    Comming Soon
                </span>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <a
                                href="https://www.instagram.com/arsakarta"
                                target="_blank"
                                className="flex gap-2 text-white hover:text-green-500 mt-5"
                            >
                                <Instagram />
                                @arsakarta
                            </a>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Follow our instagram now</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </>
    );
}
