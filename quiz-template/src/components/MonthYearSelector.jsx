import React from 'react';

const MonthYearSelector = ({ value, onChange }) => {
  const months = [
    { value: '01', label: 'January' },
    { value: '02', label: 'February' },
    { value: '03', label: 'March' },
    { value: '04', label: 'April' },
    { value: '05', label: 'May' },
    { value: '06', label: 'June' },
    { value: '07', label: 'July' },
    { value: '08', label: 'August' },
    { value: '09', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' }
  ];

  const currentYear = new Date().getFullYear();
  const years = [];
  for (let year = currentYear; year >= currentYear - 10; year--) {
    years.push(year.toString());
  }

  const handleMonthChange = (month) => {
    onChange({
      ...value,
      month: month
    });
  };

  const handleYearChange = (year) => {
    onChange({
      ...value,
      year: year
    });
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Month
          </label>
          <select
            value={value.month}
            onChange={(e) => handleMonthChange(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
          >
            <option value="">Select Month</option>
            {months.map((month) => (
              <option key={month.value} value={month.value}>
                {month.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Year
          </label>
          <select
            value={value.year}
            onChange={(e) => handleYearChange(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
          >
            <option value="">Select Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default MonthYearSelector;

