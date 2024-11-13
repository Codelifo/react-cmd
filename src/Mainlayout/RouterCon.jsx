import React from "react";

const RouterCon = () => {
  return (
    <div className="">
      <div className="mb-4">
        <h1 className="text-4xl font-semibold my-4 border-b-2 border-dashed border-gray-500 text-sky-500 pb-3">
          React Router Setup
        </h1>
        <h1 className="py-2 text-sm font-semibold text-white">
          Step-1:{" "}
          <span className="text-gray-400">
          Install React Router.
          </span>
        </h1>
        <div className="mockup-code py-4">
          <pre data-prefix="$">
            <code>npm install react-router-dom</code>
          </pre>
        </div>
      </div>
      <div className="mb-4">
        <h1 className="py-2 text-sm font-semibold text-white">
          Step-2:{" "}
          <span className="text-gray-400">
            Navigate to Your Project Folder.
          </span>
        </h1>
        <div className="mockup-code py-4">
          <pre data-prefix="$">
            <code>cd my-react-app</code>
          </pre>
        </div>
      </div>
      <div className="mb-4">
        <h1 className="py-2 text-sm font-semibold text-white">
          Step-3: <span className="text-gray-400">Install Dependencies.</span>
        </h1>
        <div className="mockup-code py-4">
          <pre data-prefix="$">
            <code>npm install</code>
          </pre>
        </div>
      </div>
      <div className="mb-4">
        <h1 className="py-2 text-sm font-semibold text-white">
          Step-4:{" "}
          <span className="text-gray-400">Start the Development Server.</span>
        </h1>
        <div className="mockup-code py-4">
          <pre data-prefix="$">
            <code>npm run dev</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default RouterCon;
