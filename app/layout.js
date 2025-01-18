import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata = {
  title: {
    default: "Home | Portfolio website",
    template: "%s | Portfolio website",
  },
  description: "Front end developer portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
