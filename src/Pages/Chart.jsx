import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';


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
        plugins: {
            title: {
                display: true,
                text: 'Product Prices Chart',
            },
        },
    };

    return (
        <div className="mt-24">

            <Bar data={chartData} options={options} />
        </div>
    );
};

export default Chart;
