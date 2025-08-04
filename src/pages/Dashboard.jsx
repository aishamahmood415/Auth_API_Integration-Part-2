import React from "react";

function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-6">
        <h2 className="text-2xl font-bold mb-8 text-blue-600">MyApp</h2>
        <ul className="space-y-4 text-gray-700">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">Profile</li>
          <li className="hover:text-blue-500 cursor-pointer">Settings</li>
          <li className="hover:text-blue-500 cursor-pointer">Logout</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
          <div className="text-gray-600">Welcome, Ayesha!</div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">Card 1</div>
          <div className="bg-white p-6 rounded-lg shadow">Card 2</div>
          <div className="bg-white p-6 rounded-lg shadow">Card 3</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
