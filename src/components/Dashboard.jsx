/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineFileText, AiOutlineInfoCircle } from 'react-icons/ai';
import { MdOutlinePendingActions } from "react-icons/md";
import { TiUpload, TiTick } from "react-icons/ti";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

import figma from '../assets/figma.png';
import python from '../assets/python.png';
import react from '../assets/react.png';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const markerData = [
  { position: [28.6139, 77.209], image: figma, title: 'Delhi' },
  { position: [12.9716, 77.5946], image: react, title: 'Bangalore' },
  { position: [40.7128, -74.006], image: python, title: 'New York' },
  { position: [24.7136, 46.6753], image: figma, title: 'Saudi Arabia' },
  { position: [22.5726, 88.3639], image: react, title: 'Kolkata' },
  { position: [34.0837, 74.7973], image: python, title: 'Jammu and Kashmir' },
];

const createCustomIcon = (iconUrl) => {
  return L.icon({
    iconUrl,
    iconSize: [25, 25],
    iconAnchor: [12, 25],
    popupAnchor: [0, -25],
  });
};

const Card = ({ title, Icon, number }) => {
  return (
    <div className="m-2 p-4 rounded-xl shadow-lg flex items-center bg-purple-50 w-full">
      <Icon className="text-5xl text-blue-500 mx-7" style={{ width: '50px', height: '50px' }} />
      <div className="flex flex-col items-start ml-4">
        <h2 className="text-xl md:text-2xl text-gray-400">{title}</h2>
        <p className="text-lg md:text-xl font-bold text-gray-800">{number}+</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  number: PropTypes.number.isRequired,
};

const GraphCard = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Revenue',
        data: [1200, 1900, 3000, 5000, 2200, 3200, 4500, 6000, 7000, 8500, 9000, 11000],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += `$${context.parsed.y}`;
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <div className="m-2 p-4 rounded-xl shadow-lg bg-purple-50 w-full">
      <h2 className="text-xl md:text-2xl text-gray-400 mb-4 text-center font-semibold">Income Graph</h2>
      <div className="w-full h-64 md:h-96">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

const JobTable = () => {
  const jobs = [
    { id: 1, projectName: 'Project A', projectAssigned: 'John Doe', workCompleted: 75 },
    { id: 2, projectName: 'Project B', projectAssigned: 'Jane Smith', workCompleted: 50 },
    { id: 3, projectName: 'Project C', projectAssigned: 'Alex Johnson', workCompleted: 90 },
    { id: 4, projectName: 'Project D', projectAssigned: 'Emily Brown', workCompleted: 20 },
    { id: 5, projectName: 'Project E', projectAssigned: 'Maxwell', workCompleted: 40 },
  ];

  return (
    <div className="m-2 p-4 rounded-xl shadow-lg bg-purple-50 w-full">
      <h2 className="text-xl md:text-2xl text-gray-400 mb-4 text-center font-semibold">Jobs on Hand</h2>
      <table className="min-w-full divide-y divide-gray-200 mt-4">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sl. No</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project Assigned</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Work Completed (%)</th>
          </tr>
        </thead>
        <tbody className="bg-purple-50 divide-y divide-gray-200 mt-2">
          {jobs.map((job, index) => (
            <tr key={job.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.projectName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.projectAssigned}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.workCompleted}%</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-end mt-9 text-gray-400">
        <AiOutlineInfoCircle className="mr-2" />
        <span>Last Updated 16-07-2024</span>
      </div>
    </div>
  );
};

const RecentConnectionsCard = () => {
  const recentConnections = [
    { id: 1, title: 'Connection A', skilledSector: 'Technology A' },
    { id: 2, title: 'Connection B', skilledSector: 'Technology B' },
    { id: 3, title: 'Connection C', skilledSector: 'Technology C' },
    { id: 4, title: 'Connection D', skilledSector: 'Technology D' },
    { id: 5, title: 'Connection E', skilledSector: 'Technology E' },
    { id: 6, title: 'Connection F', skilledSector: 'Technology F' },
  ];

  return (
    <div className="m-2 p-4 rounded-xl shadow-lg bg-purple-50 w-full">
      <h2 className="text-xl md:text-2xl text-gray-400 mb-4 text-center font-semibold">Recent Connections</h2>
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="w-1/12 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sl. No</th>
            <th className="w-6/12 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
            <th className="w-5/12 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Skilled Sector Technology</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {recentConnections.map((connection, index) => (
            <tr key={connection.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{connection.title}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{connection.skilledSector}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TechnologyTrendingCard = () => {
  const defaultPosition = [12.9716, 77.5946];
  const mapBounds = [
    [-82.8628, 135.0000],
    [71.7069, 42.6043],
    [66.0272, -169.7022],
    [52.1307, -3.7837]
  ];

  return (
    <div className="m-2 p-4 rounded-xl shadow-lg bg-purple-50 w-full">
      <h2 className="text-xl md:text-2xl text-gray-400 mb-4 text-center font-semibold">Technology Trending</h2>
      <div className="flex justify-center">
        <MapContainer
          center={defaultPosition}
          zoom={5}
          style={{ height: '400px', width: '100%' }}
          maxBounds={mapBounds}
          maxBoundsViscosity={1.0}
          minZoom={3}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            maxZoom={12}
            noWrap={true}
          />
          {markerData.map((marker, index) => (
            <Marker key={index} position={marker.position} icon={createCustomIcon(marker.image)}>
              <Popup>{marker.title}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="flex flex-wrap items-center min-w-full min-h-screen p-4 bg-blue-50">
      <div className="flex items-end mb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
          <span className="mr-2 font-bold">Download Report</span>
          <TiUpload className="ml-2" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-4 font-semibold">
        <Card title="Projects" Icon={AiOutlineFileText} number={178} />
        <Card title="Pending" Icon={MdOutlinePendingActions} number={50} />
        <Card title="Completed" Icon={TiTick} number={100} />
        <Card title="Posted" Icon={TiUpload} number={73} />
      </div>
      <div className="flex flex-col md:flex-row justify-center w-full space-x-0 md:space-x-4 mb-4">
        <GraphCard />
        <JobTable />
      </div>
      <div className="flex flex-col md:flex-row justify-center w-full space-x-0 md:space-x-4 mb-4">
        <RecentConnectionsCard />
        <TechnologyTrendingCard />
      </div>
    </div>
  );
};

export default Dashboard;
