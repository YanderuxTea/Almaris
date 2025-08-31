import Facebook from "@/public/svg/Facebook";
import Instagram from "@/public/svg/Instagram";
import Twitter from "@/public/svg/Twitter";
import Youtube from "@/public/svg/Youtube";

export default function Media() {
  return (
    <div className="flex flex-row gap-4">
      <Facebook />
      <Instagram />
      <Twitter />
      <Youtube />
    </div>
  );
}
