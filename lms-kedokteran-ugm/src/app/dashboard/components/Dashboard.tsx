"use client";
import React from "react";
import DashboardHeader from "./DashboardHeader";
import ProfileCard from "./ProfileCard";
import ProgressBar from "./ProgressBar";
import CourseCard from "./CourseCard";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <DashboardHeader />

      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Bagian Atas: Profile + Progress */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProfileCard />
          <div className="md:col-span-2">
            <ProgressBar />
          </div>
        </div>

        {/* Bagian Card Materi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
<CourseCard title="Materi" buttonText="Mulai Baca" imageSrc="/dashboard/materi.png" href="/materi" />
<CourseCard title="LMS" buttonText="Mulai Belajar" imageSrc="/dashboard/lms.png" href="/lms"/>
<CourseCard title="Simulator" buttonText="Mulai Simulasi" imageSrc="/dashboard/v.png" href="/simulator"/>
<CourseCard title="Forum Chat" buttonText="Mulai Chat" imageSrc="/dashboard/forum.png" href="/chat" />

        </div>
      </div>
    </div>
  );
}
