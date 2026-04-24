function Dashboard() {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow p-5">
          <h3 className="text-gray-500 text-sm">Total Items</h3>
          <p className="text-2xl font-bold text-gray-800 mt-2">120</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-5">
          <h3 className="text-gray-500 text-sm">Active Items</h3>
          <p className="text-2xl font-bold text-gray-800 mt-2">89</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-5">
          <h3 className="text-gray-500 text-sm">Pending Updates</h3>
          <p className="text-2xl font-bold text-gray-800 mt-2">12</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow p-5">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Recent Records
        </h2>

        <table className="w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Category</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Item 1</td>
              <td>Active</td>
              <td>A</td>
            </tr>

            <tr>
              <td>Item 2</td>
              <td>Pending</td>
              <td>B</td>
            </tr>

            <tr>
              <td>Item 3</td>
              <td>Inactive</td>
              <td>C</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Dashboard