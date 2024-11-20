import React, { useState } from 'react';
import { LayoutDashboard, Settings, Users, BarChart } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'activity', label: 'Activity Log', icon: Settings },
    { id: 'analytics', label: 'Analytics', icon: BarChart },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Sample cards */}
              {['Total Users', 'Active Users', 'Revenue'].map((title) => (
                <div key={title} className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-600">{title}</h3>
                  <p className="text-2xl font-bold mt-2">1,234</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'activity':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Activity Log</h2>
            <div className="space-y-4">
              {/* Sample activity items */}
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white p-4 rounded-lg shadow">
                  <div className="flex items-center gap-4">
                    <Settings className="text-blue-500" />
                    <div>
                      <p className="font-semibold">User action performed</p>
                      <p className="text-sm text-gray-600">2 hours ago</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
            <p>Content for {activeTab} goes here</p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
        </div>
        <nav className="mt-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                  activeTab === item.id ? 'bg-blue-50 text-blue-600' : 'text-gray-600'
                }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;