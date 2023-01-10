import "./display.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { AreaChart, Area, BarChart, Bar, Legend } from 'recharts';

const Analytics = () => {

  const pdata = [
    {
      name: 'MongoDb',
      student: 1100,
      fees: 600
    },
    {
      name: 'Javascript',
      student: 350,
      fees: 1500
    },
    {
      name: 'PHP',
      student: 400,
      fees: 700
    },
    {
      name: 'Java',
      student: 1000,
      fees: 500
    },
    {
      name: 'C#',
      student: 900,
      fees: 400
    },
    {
      name: 'C++',
      student: 100,
      fees: 800
    },
  ];

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const adata = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <>
      <div className="analytics">


        {/* /////////////////////////////////////////////////-----Line Chart------------///////////////////////////// */}
        <div className="chartz-1">
          <h3 className="chart_title"> Line Chart</h3>
          <ResponsiveContainer width="100%" height="80%">
            <LineChart width={500}
              height={300}
              data={pdata}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}>

              <Line dataKey="student" />
              <Line dataKey="fees" />
              <XAxis dataKey="name" interval={"pireserveStartEnd"} stroke="#5550bd" />
              <YAxis type="number" domain={[0, 2000]} />
              <Tooltip />
              <CartesianGrid />


            </LineChart >



          </ResponsiveContainer>

        </div>




        {/* /////////////////////////////////////////////////-----Bar Chart------------///////////////////////////// */}





        <div className="chartz-1">
          <h3 className="chart_title"> Bar Chart</h3>
          <ResponsiveContainer width="100%" height="80%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>

        </div>


        {/* /////////////////////////////////////////////////-----Area Chart------------///////////////////////////// */}


        <div className="chartz-1">
          <h3 className="chart_title"> Area Chart</h3>
          <ResponsiveContainer width="100%" height="80%">
            <AreaChart
              width={500}
              height={400}
              data={adata}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
              <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
              <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

      </div>

    </>
  )

}

export default Analytics;