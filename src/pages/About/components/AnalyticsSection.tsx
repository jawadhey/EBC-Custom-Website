import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { FaChartBar } from "react-icons/fa"

const AnalyticsSection = () => {
  // Chart data
  const chartData = [
    { month: "Jul", value: 150 },
    { month: "Aug", value: 300 },
    { month: "Sep", value: 450 },
    { month: "Oct", value: 750 },
    { month: "Nov", value: 250 },
    { month: "Dec", value: 550 },
    { month: "Jan", value: 600 },
  ]

  // Progress bar data
  const progressData = [
    { label: "Student Reach", value: 90, color: "bg-purple-600", percentage: "+50%" },
    { label: "Lorem ipsum", value: 60, color: "bg-blue-100" },
    { label: "Lorem ipsum", value: 85, color: "bg-blue-100" },
    { label: "Lorem ipsum", value: 70, color: "bg-blue-100" },
    { label: "Lorem ipsum", value: 75, color: "bg-blue-100" },
  ]

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-700 text-center mb-12 max-w-4xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Lobortis id nibh urna velit. Lorem pellentesque elementum.
        </h2>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Column - Image */}
          <div className="relative">
            <img src="/skyscrapers.jpg" alt="Skyscrapers" className="w-full h-auto rounded-2xl" />

            {/* Chart Icon Overlay */}
            <div className="absolute bottom-6 left-6 bg-white bg-opacity-80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <FaChartBar className="text-green-500 text-2xl" />
            </div>
          </div>

          {/* Right Column - Analytics */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-800">Annual Student Consultancies</h3>

            {/* Chart */}
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4338ca" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#4338ca" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} domain={[0, 800]} ticks={[0, 200, 400, 600, 800]} />
                  <Tooltip />
                  <Area type="monotone" dataKey="value" stroke="#4338ca" strokeWidth={3} fill="url(#colorValue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Progress Bars */}
            <div className="space-y-4 mt-6">
              {progressData.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">{item.label}</span>
                    {item.percentage && <span className="text-yellow-500 font-medium">{item.percentage}</span>}
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5">
                    <div className={`${item.color} h-2.5 rounded-full`} style={{ width: `${item.value}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsSection

