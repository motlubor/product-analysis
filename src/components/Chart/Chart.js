import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        axios.get('data.json')
            .then(data => {
                const loadData = data.data

                setDatas(loadData)
            });
    }, []);
    return (
        <BarChart width={400} height={250} data={datas}>
            <Bar dataKey="investment" fill="#8884d8" />
            <Bar dataKey="sell" fill="#85ca9d" />
            <Bar dataKey="revenue" fill="#ffc658" />
            <XAxis dataKey="month"></XAxis>
            <YAxis></YAxis>
            <YAxis></YAxis>
            <Tooltip />
            <Legend />

        </BarChart >
    );
};

export default Chart;