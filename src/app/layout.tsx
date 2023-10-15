import React, { FC, PropsWithChildren } from "react";
import "@/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "snippify",
  description: "Discover & Share useful code snippets",
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          sizes="any"
          href="/favicon.ico"
        />
      </head>
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
