import React, { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import {
  LucideActivitySquare,
  LucideUserPlus2,
  CreditCardIcon,
  BarChart3,
  LogOutIcon,
} from "lucide-react";
import "./ManagementSidebar.css";
import { CgBrowse } from "react-icons/cg";
import { TbHelp } from "react-icons/tb";

const DashboardLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { id: "overview", label: "Overview", icon: CgBrowse, path: "/auth/institution/dashboard" },
    { id: "activitylog", label: "Activity Log", icon: LucideActivitySquare, path: "/auth/institution/dashboard/activity" },
    { id: "manageStudents", label: "Manage Students", icon: LucideUserPlus2, path: "/auth/institution/dashboard/manage-students" },
    { id: "updateFees", label: "Update Fees", icon: CreditCardIcon, path: "/auth/institution/dashboard/update-fees" },
    { id: "analytics", label: "Analytics", icon: BarChart3, path: "/auth/institution/dashboard/analytics" },
    { id: "help", label: "Help", icon: TbHelp, path: "/auth/institution/dashboard/help" },
  ];

  // Find the active menu item based on the current path
  const activeMenuItem = menuItems.find(item => location.pathname === item.path);
  const activeLabel = activeMenuItem ? activeMenuItem.label : "Overview";

  return (
    <div className="dashboard-container">
      <ManagementSidebar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />

      <div className={`main-content ${isCollapsed ? "collapsed" : ""}`}>
        <header className={`main-header ${isCollapsed ? "collapsed" : "expanded"}`}>
          <div className="title-hold"><h1 className="header-title">{activeLabel}</h1>
          </div>
          <div className="user-profile">
            <div className="message-icon">
              {/* <img src="/message.png" alt="" /> */}
            </div>
            <div className="notify-icon">
              {/* <img src="/notification.png" alt="" /> */}
            </div>
            <div className="user-avatar">
              <img src="/man.png" alt="" />
            </div>
            <div className="user-info">
              <p className="user-name">John Doe</p>
              <p className="user-role">Logged in as <span>Admin</span> </p>
            </div>
          </div>
        </header>

        <main className={`main-content ${isCollapsed ? "collapsed" : ""}`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

const ManagementSidebar = ({ isCollapsed, setIsCollapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: "overview", label: "Overview", icon: CgBrowse, path: "/auth/institution/dashboard" },
    { id: "activitylog", label: "Activity Log", icon: LucideActivitySquare, path: "/auth/institution/dashboard/activity" },
    { id: "manageStudents", label: "Manage Students", icon: LucideUserPlus2, path: "/auth/institution/dashboard/manage-students" },
    { id: "updateFees", label: "Update Fees", icon: CreditCardIcon, path: "/auth/institution/dashboard/update-fees" },
    { id: "analytics", label: "Analytics", icon: BarChart3, path: "/auth/institution/dashboard/analytics" },
    { id: "help", label: "Help", icon: TbHelp, path: "/auth/institution/dashboard/help" },
  ];

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : "expanded"}`}>
      <div className="logo-container">
        <img
          src={isCollapsed ? "/scupaylogo.png" : "/xlogo.png"}
          alt="Company Logo"
          className="logo"
        />
      </div>

      <button
        className="collapse-button"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? (
          <FaChevronCircleRight size={20} color="#2F6FED" />
        ) : (
          <FaChevronCircleLeft size={20} color="#2F6FED" />
        )}
      </button>

      <nav className="nav-menu">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`nav-item ${isActive ? "active" : ""}`}
            >
              <Icon className="nav-item-icon" />
              <span className="nav-item-text">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className={`sidebar-footer ${isCollapsed ? "collapsed" : ""}`}>
        <div className="user-profile">
          <div className="user-avatar">
            <img src="/man.png" alt="User Avatar" />
          </div>
          <div className="user-info">
            <p className="user-name">University of Lagos</p>
            <p className="user-role">Lagos</p>
          </div>
        </div>
        <button className="sidebar-footer-button">
          <img src="/logout.png" alt="Logout Icon" /> Logout
        </button>
        <button className="sidebar-footer-button-icon">
          <LogOutIcon />
        </button>
      </div>
    </div>
  );
};

export default DashboardLayout;
