import {Marcellus} from "next/font/google";
import {Jost} from "next/font/google";

export const marcellus = Marcellus({
    subsets: ["latin"],
    weight: ["400"],
});
export const jost = Jost({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});
