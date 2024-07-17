import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineFileText, AiOutlineInfoCircle } from 'react-icons/ai';
import { MdOutlinePendingActions } from "react-icons/md";
import { TiUpload, TiTick } from "react-icons/ti";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
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
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Card = ({ title, Icon, number }) => {
  return (
    <div className="m-5 p-4 rounded-xl shadow-lg flex items-center bg-white">
      <Icon className="text-3xl text-blue-500 mx-7" />
      <div className="flex flex-col items-start ml-4">
        <h2 className="text-2xl text-gray-400">{title}</h2>
        <p className="text-xl font-bold text-gray-800">{number}+</p>
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
          label: function(context) {
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
    <div className="m-5 p-4 rounded-xl shadow-lg bg-white flex flex-col w-full md:w-1/2">
      <h2 className="text-2xl text-gray-400 mb-4 text-center">Income Graph</h2>
      <div className="w-full">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

const JobTable = () => {
  // Example data (replace with your actual data)
  const jobs = [
    { id: 1, projectName: 'Project A', projectAssigned: 'John Doe', workCompleted: 75 },
    { id: 2, projectName: 'Project B', projectAssigned: 'Jane Smith', workCompleted: 50 },
    { id: 3, projectName: 'Project C', projectAssigned: 'Alex Johnson', workCompleted: 90 },
    { id: 4, projectName: 'Project D', projectAssigned: 'Emily Brown', workCompleted: 20 },
    { id: 5, projectName: 'Project E', projectAssigned: 'Maxwell', workCompleted: 40 },
  ];

  return (
    <div className="m-5 p-4 rounded-xl shadow-lg bg-white w-full md:w-1/2">
      <h2 className="text-2xl text-gray-400 mb-4 text-center">Jobs on Hand</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Sl. No
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Project Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Project Assigned
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Work Completed (%)
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
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
      <div className="flex items-center justify-end mt-4 text-gray-400">
        <AiOutlineInfoCircle className="mr-2" />
        <span>Last Updated 16-07-2024</span>
      </div>
    </div>
  );
};

const RecentConnectionsCard = () => {
  // Example data for recent connections (replace with your actual data)
  const recentConnections = [
    { id: 1, title: 'Connection A', skilledSector: 'Technology A' },
    { id: 2, title: 'Connection B', skilledSector: 'Technology B' },
    { id: 3, title: 'Connection C', skilledSector: 'Technology C' },
    { id: 4, title: 'Connection D', skilledSector: 'Technology D' },
    { id: 5, title: 'Connection E', skilledSector: 'Technology E' },
    { id: 6, title: 'Connection F', skilledSector: 'Technology F' },
  ];

  return (
    <div className="m-5 p-4 rounded-xl shadow-lg bg-white w-full md:w-1/2">
      <h2 className="text-2xl text-gray-400 mb-4 text-center">Recent Connections</h2>
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
  const defaultPosition = [19.076, 72.8777]; // Default position for Mumbai
  const [markerPositions, setMarkerPositions] = React.useState([defaultPosition]);

  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    setMarkerPositions([...markerPositions, [lat, lng]]);
  };

  return (
    <div className="m-5 p-4 rounded-xl shadow-lg bg-white w-full md:w-1/2">
      <h2 className="text-2xl text-gray-400 mb-4 text-center">Technology Trending</h2>
      <div className="flex justify-center">
        <MapContainer center={defaultPosition} zoom={12} style={{ height: '400px', width: '100%' }} onClick={handleMapClick}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            maxZoom={18}
          />
          {markerPositions.map((position, index) => (
            <Marker key={index} position={position}>
              <Popup>
                Marker {index + 1}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="flex flex-wrap items-end max-w-screen min-h-screen p-4 bg-blue-50">
      <div className="flex items-end mb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
          <span className="mr-2">Download Report</span>
          <TiUpload className="ml-2" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-12 lg:gap-16 w-full mb-4 space-x-10">
        <Card title="Projects" Icon={AiOutlineFileText} number={178} />
        <Card title="Pending" Icon={MdOutlinePendingActions} number={50} />
        <Card title="Completed" Icon={TiTick} number={100} />
        <Card title="Posted" Icon={TiUpload} number={73} />
      </div>
      <div className="flex flex-row justify-center w-full space-x-10">
        <GraphCard />
        <JobTable />
      </div>
      <div className="flex flex-row justify-center w-full space-x-10">
        <RecentConnectionsCard />
        <TechnologyTrendingCard />
      </div>
    </div>
  );
};

export default Dashboard;
