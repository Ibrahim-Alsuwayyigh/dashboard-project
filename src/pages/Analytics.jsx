function Analytics() {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Analytics
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow p-5">
          <h3 className="text-gray-500 text-sm">Today's Orders</h3>
          <p className="text-2xl font-bold text-gray-800 mt-2">45</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-5">
          <h3 className="text-gray-500 text-sm">Monthly Orders</h3>
          <p className="text-2xl font-bold text-gray-800 mt-2">1,240</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-5">
          <h3 className="text-gray-500 text-sm">Daily Revenue</h3>
          <p className="text-2xl font-bold text-gray-800 mt-2">$820</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-5">
          <h3 className="text-gray-500 text-sm">Monthly Revenue</h3>
          <p className="text-2xl font-bold text-gray-800 mt-2">$21,300</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow p-5">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Daily vs Monthly Summary
        </h2>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-3 px-4">Metric</th>
              <th className="py-3 px-4">Daily</th>
              <th className="py-3 px-4">Monthly</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3 px-4">Orders</td>
              <td className="py-3 px-4">45</td>
              <td className="py-3 px-4">1240</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4">Revenue</td>
              <td className="py-3 px-4">$820</td>
              <td className="py-3 px-4">$21,300</td>
            </tr>
            <tr>
              <td className="py-3 px-4">Completion Rate</td>
              <td className="py-3 px-4">91%</td>
              <td className="py-3 px-4">88%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Analytics