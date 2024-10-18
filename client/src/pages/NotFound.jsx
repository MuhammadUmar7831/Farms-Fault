import React from "react";

export default function NotFound() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="flex gap-2 heading">
        {/* <span>:(</span> */}
        <span>404</span>
        <span>Page not found</span>
      </div>
    </div>
  );
}
