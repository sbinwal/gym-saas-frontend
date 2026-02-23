const Dashboard = () => {

  const stats = [
    { title: "Total Members", value: 120 },
    { title: "Active Members", value: 80 },
    { title: "Expired Members", value: 40 },
    { title: "Revenue", value: "₹50,000" },
    { title: "Pending Dues", value: "₹10,000" },
    { title: "Today Collection", value: "₹2,000" },
  ];

  return (
    <div>

      <h1 className="text-2xl font-bold text-slate-800 mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-5 shadow-md border border-slate-200 hover:shadow-lg transition"
          >
            <p className="text-slate-500 text-sm">
              {stat.title}
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-2">
              {stat.value}
            </h2>
          </div>
        ))}

      </div>

    </div>
  );
};

export default Dashboard;
