import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col sm:flex-row px-4 sm:px-[9rem] py-5 sm:py-[2rem] justify-between items-center bg-gray-800 text-white">
      <p className="text-sm text-center sm:text-left mb-2 sm:mb-0">
        © 2024 Cyserch. All rights reserved.
      </p>

      <div className="flex sm:flex-row justify-center sm:justify-end">
        <a
          href="https://www.linkedin.com/company/cyserch-security/about/?viewAsMember=true"
          target="_blank"
          className="text-gray-400 hover:text-gray-200 mx-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-linkedin"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            strokeWidth="0.8"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
            <path d="M8 11l0 5" />
            <path d="M8 8l0 .01" />
            <path d="M12 16l0 -5" />
            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
          </svg>
        </a>

        <a
          href="https://www.instagram.com/cyserch/"
          target="_blank"
          className="text-gray-400 hover:text-gray-200 mx-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-instagram"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >


          



            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M16.5 7.5l0 .01" />
          </svg>
        </a>

        <a
  href="https://twitter.com/cyserch"
  target="_blank"
  className="text-gray-400 hover:text-gray-200 mx-2"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-brand-twitter"
    width="35"
    height="35"
    viewBox="0 0 24 24"
    strokeWidth="1"
    stroke="#ffffff"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M22 4.01c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.34 8.44 8.44 0 0 1-2.72 1.04 4.23 4.23 0 0 0-7.19 3.86 12 12 0 0 1-8.75-4.44 4.23 4.23 0 0 0 1.31 5.65 4.2 4.2 0 0 1-1.92-.53v.05a4.23 4.23 0 0 0 3.39 4.14 4.26 4.26 0 0 1-1.11.15 4.18 4.18 0 0 1-.8-.08 4.24 4.24 0 0 0 3.95 2.94 8.49 8.49 0 0 1-5.24 1.8A8.57 8.57 0 0 1 2 18.8a11.94 11.94 0 0 0 6.29 1.84c7.55 0 11.68-6.25 11.68-11.68 0-.18 0-.35-.01-.53A8.3 8.3 0 0 0 22 4.01z" />
  </svg>
</a>

      

        <a
  href="https://www.facebook.com/profile.php?id=61560051406592"
  target="_blank"
  className="text-gray-400 hover:text-gray-200 mx-2"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-brand-facebook"
    width="35"
    height="35"
    viewBox="0 0 24 24"
    strokeWidth="1"
    stroke="#ffffff"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M7 10v4h3v8h4v-8h3l1 -4h-4v-1a1 1 0 0 1 1 -1h3v-4h-4a5 5 0 0 0 -5 5v2h-3" />
  </svg>
</a>

      </div>

      <div className="flex sm:flex-row justify-center sm:justify-end">
        <Link href="/" className="text-gray-400 hover:text-gray-200 mx-2">
          Home
        </Link>
        <Link href="/about" className="text-gray-400 hover:text-gray-200 mx-2">
          About
        </Link>
        <Link
          href="/training"
          className="text-gray-400 hover:text-gray-200 mx-2"
        >
          Training
        </Link>
        <Link href="/" className="text-gray-400 hover:text-gray-200 mx-2">
          Terms
        </Link>
        <Link href="/" className="text-gray-400 hover:text-gray-200 mx-2">
          Privacy
        </Link>
      </div>
    </div>
  );
}
