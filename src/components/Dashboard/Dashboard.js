import React, { useEffect, useState } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import Chart from '../Chart/Chart';
import Chart2 from '../Chart2/Chart2';
import './Dashboard.css';

const Dashboard = () => {

    return (
        <div>
            <h1 className='chart'>Presenting Business Status By Chart</h1>

            <div className='chart-container'>

                <div className='bar-chart'>
                    <Chart></Chart>
                    <h3>Month wise Investment and Sell</h3>

                </div>
                <div className='pie-chart'>
                    <Chart2></Chart2>
                    <h3>Month Wise Sell</h3>


                </div>

            </div >
        </div>

    );
};

export default Dashboard;