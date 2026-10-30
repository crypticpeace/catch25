import { waLink } from "@/data/site";
import { WhatsAppIcon } from "./Icon";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener"
      aria-label="Chat with Catch25 on WhatsApp"
      className="fixed z-[60] flex items-center gap-2.5"
      style={{ right: "calc(20px + env(safe-area-inset-right, 0px))", bottom: "calc(20px + env(safe-area-inset-bottom, 0px))" }}
    >
      <span className="hidden rounded-[14px_14px_4px_14px] bg-white px-3.5 py-2.5 text-[.88rem] font-extrabold text-ink shadow-card sm:block">Chat with admissions</span>
      <span className="grid h-[62px] w-[62px] flex-none animate-nudge place-items-center rounded-full bg-wa shadow-[0_10px_26px_rgba(37,211,102,.45)]">
        <WhatsAppIcon className="h-[34px] w-[34px]" fill="#fff" />
      </span>
    </a>
  );
}
