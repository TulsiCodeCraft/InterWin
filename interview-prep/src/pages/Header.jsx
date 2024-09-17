import React from "react";

export default function Header() {
  return (
    <div className="w-full h-[70px] bg-purple-100 px-10 container ">
      <div className="w-full h-full grid  grid-cols-3 items-center">
        <div>
          <h1 className="text-2xl font-bold">Logo</h1>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>MockInterview</li>
            <li>Practice</li>
            <li>Resources</li>
          </ul>
        </div>
        <div className="flex justify-end">
          <ul className="flex space-x-4">
            <li>Log In</li>
            <li>Sign Up</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
