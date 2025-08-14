"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

interface CourseCardProps {
  title: string;
  buttonText: string;
  imageSrc?: string;
  href: string; // link tujuan
}

export default function CourseCard({ title, buttonText, imageSrc, href }: CourseCardProps) {
  return (
    <div className="border rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition hover:bg-yellow-100">
      {imageSrc && (
        <div className="w-24 h-24 relative mb-4">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
      )}
      <h3 className="text-lg font-semibold mb-4 text-black">{title}</h3>

      <Link
        href={href}
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
      >
        {buttonText}
      </Link>
    </div>
  );
}
