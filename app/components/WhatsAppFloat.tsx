export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/6395382105"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] transition duration-300 hover:scale-110 hover:brightness-110 sm:bottom-8 sm:left-8"
    >
      <span className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-25" />
      <WhatsAppIcon />
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="relative h-7 w-7" fill="currentColor" aria-hidden>
      <path d="M20.5 3.5A11 11 0 0 0 2.1 17.4L1 23l5.8-1.1A11 11 0 0 0 20.5 3.5Zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.4.6.7-3.3-.2-.3A9.1 9.1 0 1 1 12 20.5Zm5-6.8c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.3-.4c.1-.2 0-.3 0-.5l-.8-2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3s-1 1-1 2.4 1 2.8 1.1 3 1.9 3 4.6 4.1a15.7 15.7 0 0 0 1.6.6 3.8 3.8 0 0 0 1.8.1c.5-.1 1.6-.7 1.8-1.3s.2-1.2.2-1.3-.2-.2-.5-.3Z" />
    </svg>
  );
}
