import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Chart2 = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        axios.get('data.json')
            .then(data => {
                const loadData = data.data

                setDatas(loadData)
            });
    }, []);
    return (
        <LineChart width={400} height={250} data={datas}>
            <Line type="monotone" dataKey="sell" stroke="#8884d8" strokeWidth={2} />

            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
        </LineChart>
    );
};

export default Chart2;