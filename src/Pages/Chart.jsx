import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Helmet } from 'react-helmet';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/Product.json')
            .then((response) => response.json())
            .then((jsonData) => setData(jsonData))
            .catch((error) => console.error("Error loading the data", error));
    }, []); 

 
    const chartData = {
        labels: data.map((product) => product.product_title),
        datasets: [
            {
                label: 'Product Prices',
                data: data.map((product) => product.price),
                backgroundColor: 'rgba(0, 0, 255, 1)',
                borderColor: 'rgba(0, 0, 255, 1)',
                borderWidth: 1,
            },
        ],
    };

 
    const options = {
        responsive: true,
        maintainAspectRatio: false, 
        plugins: {
            title: {
                display: true,
                text: 'Product Prices Chart',
            },
        },
        scales: {
            x: {
                ticks: {
                    maxRotation: 90,
                    minRotation: 45,
                },
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="mt-24">
            {/* Helmet tag to change page title */}
            <Helmet>
                <title>Statistics || Gadget Heaven</title>
            </Helmet>

            <div className="mt-24 p-6  h-[200px] text-center bg-blue-500 rounded-xl">
                <h1 className="text-4xl font-semibold text-white">Statistics</h1>
                <p className="text-lg md:w-[800px] mx-auto text-white mt-2">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
            </div>

            {/* Chart rendering */}
            <div className="w-full h-[400px] lg:h-[500px]">
                <Bar data={chartData} options={options} />
            </div>
        </div>
    );
};

export default Chart;
