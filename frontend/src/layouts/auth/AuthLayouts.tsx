import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function AuthLayout({ children, title }: AuthLayoutProps) {
  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <div className="  rounded-2xl p-8 bg-gray-100 w-full max-w-md">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        </div>

        {/* Form */}
        <div>{children}</div>
      </div>
    </div>
  );
}
