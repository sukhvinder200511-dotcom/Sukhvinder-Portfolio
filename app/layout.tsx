import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeProvider from "./components/ThemeProvider";
import ScrollReveal from "./components/ScrollReveal";
import Loader from "./components/Loader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sukhvinder Singh | Frontend Developer",
  description:
    "I build responsive, user-friendly websites and modern web interfaces with React.js, Next.js, and modern CSS.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-[var(--bg)] text-[var(--text)]" suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');document.documentElement.classList.add(t==='light'?'light':'dark')}catch(e){document.documentElement.classList.add('dark')}var a=['bis_skin_checked','cz-shortcut-listen','data-new-gr-c-s-check-loaded','data-gr-ext-installed','data-lt-installed'];function c(n){if(!n||n.nodeType!==1)return;for(var i=0;i<a.length;i++)n.removeAttribute(a[i])}function w(r){c(r);if(!r||!r.querySelectorAll)return;var q=r.querySelectorAll('['+a.join('],[')+']');for(var i=0;i<q.length;i++)c(q[i])}w(document.documentElement);var o=new MutationObserver(function(m){for(var i=0;i<m.length;i++){c(m[i].target);var ns=m[i].addedNodes;for(var j=0;j<ns.length;j++)w(ns[j])}});o.observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:a});window.addEventListener('load',function(){setTimeout(function(){o.disconnect()},2500)})})();`,
          }}
        />
        <ThemeProvider>
          <Loader />
          <ScrollReveal />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

