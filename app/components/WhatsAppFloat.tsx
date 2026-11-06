import WhatsAppIcon from "./WhatsAppIcon";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/6395382105"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-4 left-auto z-50 inline-flex h-14 w-14 items-center justify-center overflow-visible rounded-full text-[#25D366] shadow-[0_8px_24px_rgba(37,211,102,0.45)] transition duration-300 hover:scale-110 sm:bottom-8 bg-[#25D366]"
    >
      <span className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-25" />
      <WhatsAppIcon className="relative h-7 w-7 fill-white"  />
    </a>
  );
}