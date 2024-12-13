import {React, useState} from 'react';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import './ManagementOverview.css';
import mycardImage from '/diversity_3.png'
import secImage from '/money_bag.png'
import thirdImage from '/payments.png'
import personImage from '/person_alert.png'
import Cardprop from '../CardProps/Cardprop';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import Table from '../../../../ReusableComponents/Tables/Table';


const ManagementOverview = () => {


  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prevState => !prevState);
  };
  const toggleDropdown2 = () => {
    setIsOpen2(prevState => !prevState);
  };
  const toggleDropdown3 = () => {
    setIsOpen3(prevState => !prevState);
  };
  const toggleDropdown4 = () => {
    setIsOpen4(prevState => !prevState);
  };


  const data = [
    { name: 'Full', value: 250 },
    { name: 'Part', value: 400 },
    { name: 'Overdue', value: 350 },
  ];
  
  const COLORS = ['#0CB069', '#FFCB44', '#E02D3C'];

  // Mock data - replace with actual data
  const activityData = [
    { month: 'Jan', users: 400, revenue: 2400 },
    { month: 'Feb', users: 300, revenue: 1398 },
    { month: 'Mar', users: 520, revenue: 3908 },
    { month: 'Apr', users: 270, revenue: 2800 },
    { month: 'May', users: 650, revenue: 4800 },
    { month: 'Jun', users: 480, revenue: 3800 },
    { month: 'Jul', users: 480, revenue: 5800 },
    { month: 'Aug', users: 480, revenue: 6600 },
    { month: 'Sep', users: 480, revenue: 2900 },
    { month: 'Oct', users: 480, revenue: 3300 },
    { month: 'Nov', users: 480, revenue: 6800 },
    { month: 'Dec', users: 480, revenue: 1800 },
  ];

  const total = data.reduce((sum, entry) => sum + entry.value, 0);

  // Function to format labels as percentages
  const formatLabel = (value) => {
    const percentage = ((value / total) * 100); // Calculate percentage
    return `${percentage}%`; // Return the label in percentage
  };

  return (
    <div className="overview-container">
              <div className="overview-date">
                <button className="date-p"><h3>23/24</h3><img src="/chevron-down.png" alt=""  /></button>
              </div>
              <div className="overview-cards">
                    <Cardprop
              title="Number of students"
              content="500"
              footer="+23.2%"
              iconColor="#1fb31f"
              cardBgColor="#F0F5FF"
              cardimage={mycardImage}
            />
                    <Cardprop
              title="Transaction volume"
              content="₦50m"
              footer="+20%"
              iconColor="#1fb31f"
              cardBgColor="#F8F5FF"
              cardimage={secImage}
            />
                    <Cardprop
              title="Total Fees paid this session"
              content="₦5,056,000"
              footer="+23%"
              iconColor="#1fb31f"
              cardBgColor="#FDFBFF"
              cardimage={thirdImage}
            />
                    <Cardprop
              title="Outstanding balance"
              content="₦556,000"
              footer="+10%"
              iconColor="#E02D3C"
              cardBgColor="#FDFCFF"
              cardimage={personImage}
            />
              </div>

              <div className="charts-holder">
                <div className="charts-holder-left">


            <div className="charts-holder-left-top">
            <div className="charts-holder-left-top-btn ">
            <div className="charts-holder-left-btn1" onClick={toggleDropdown}>
              PAYMENT SUMMARY <img src="/chevron-down.png" alt="" className={isOpen ? 'rotated' : ''} />
            </div>
            {isOpen && (
              <div className="dropdown-content">
                <p>Option 1</p>
                <p>Option 2</p>
                <p>Option 3</p>
              </div>
            )}
          </div>
          <div className="charts-holder-left-top-btn2">
          <div className="charts-holder-left-btn2">
      <div className="charts-holder-left-button" onClick={toggleDropdown2}>
        24/25<img src="/chevron-down.png" alt="" className={isOpen2 ? 'rotated' : ''} />
      </div>
      {isOpen2 && (
        <div className="dropdown-content">
          <p>Option 1</p>
          <p>Option 2</p>
          <p>Option 3</p>
        </div>
      )}
    </div>
          <div className="charts-holder-left-btn2">
      <div className="charts-holder-left-button" onClick={toggleDropdown3}>
        All classes<img src="/chevron-down.png" alt="" className={isOpen3 ? 'rotated' : ''} />
      </div>
      {isOpen3 && (
        <div className="dropdown-content">
          <p>Option 1</p>
          <p>Option 2</p>
          <p>Option 3</p>
        </div>
      )}
    </div>
          <div className="charts-holder-left-btn2">
      <div className="charts-holder-left-button" onClick={toggleDropdown4}>
        All fee types<img src="/chevron-down.png" alt="" className={isOpen4 ? 'rotated' : ''} />
      </div>
      {isOpen4 && (
        <div className="dropdown-content">
          <p>Option 1</p>
          <p>Option 2</p>
          <p>Option 3</p>
        </div>
      )}
    </div>
    </div>
    </div>

                  <div className="charts-holder-left-bottom">

                    <BarChart width={700} height={300} data={activityData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="revenue" fill="#2F6FED" />
                    </BarChart>

                    
                  </div>
                </div>
                <div className="charts-holder-right">

                  <div className="pie-chart-top">
                  <div className="charts-holder-left-top-btn new-btn ">
            <div className="charts-holder-left-btn1" onClick={toggleDropdown}>
              PAYMENT SUMMARY <img src="/chevron-down.png" alt="" className={isOpen ? 'rotated' : ''} />
            </div>
            {isOpen && (
              <div className="dropdown-content">
                <p>Option 1</p>
                <p>Option 2</p>
                <p>Option 3</p>
              </div>
            )}
          </div>
                  </div>

                  <div className="pie-chart-bottom">
                    <PieChart width={300} height={280}>
                      <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="40%"
                        outerRadius={100}
                        fill="#8884d8"
                        label={({ value }) => formatLabel(value)}
                        labelStyle={{ fontSize: "12px", fontWeight: "bold", color: "white" }}
                      >
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${((value / total) * 100)}%`}
                      layout="horizontal"
                        align="center"
                        verticalAlign="bottom"
                        />
                      <Legend
                        layout="horizontal"
                        align="center"
                        verticalAlign="bottom" 
                      />
                    </PieChart>
                    </div>
                </div>
              </div>
              <div className="overview-table">
                <div className="overview-table-top">
                  <div className="real-time-texts">
                    <h1>PAYMENT IN REAL-TIME</h1>
                    <p>23-08-2024     16:30</p>
                  </div>
                  <div className="search-holder">
                    <div className="searchbar">
                      <button className='searchclick'><img src="/search.png" alt="" /></button>
                      <input type="text" name="" id="" placeholder='Get student info by searching name or ID ' />
                    </div>
                    <button className='searchbtn'><span>+  </span>   Add Student</button>
                  </div>
                </div>
                <Table/>
              </div>
              </div>
  );
};

export default ManagementOverview;