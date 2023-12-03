import {useState} from "react"


const PayModal = ({isOpen,closeModal}) => {
    const [selectedMonth, setSelectedMonth] = useState('01');
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  
    const handleMonthChange = (e) => {
      setSelectedMonth(e.target.value);
    };
  
    const handleYearChange = (e) => {
      setSelectedYear(e.target.value);
    };
  
    const handlePay = () => {
    //   onPay({ month: selectedMonth, year: selectedYear });
      closeModal();
    };
    return (
        <div className={`modal ${isOpen ? 'block' : 'hidden'} fixed inset-0 bg-gray-500 bg-opacity-75 z-50`}>
      <div className="modal-content bg-white p-6 mx-auto mt-20 rounded shadow-md w-1/2">
        <label htmlFor="month" className="block text-sm font-medium text-gray-700">Month:</label>
        <select
          id="month"
          value={selectedMonth}
          onChange={handleMonthChange}
          className="mt-1 p-2 border rounded-md w-full"
        >
          <option value="01">January</option>
          <option value="02">February</option>
          {/* Add more months as needed */}
        </select>

        <label htmlFor="year" className="block mt-4 text-sm font-medium text-gray-700">Year:</label>
        <input
          type="number"
          id="year"
          value={selectedYear}
          onChange={handleYearChange}
          min="1900"
          max="2100"
          className="mt-1 p-2 border rounded-md w-full"
        />

        <div className="mt-6">
          <button
            onClick={handlePay}
            className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
          >
            Pay
          </button>
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
    );
};

export default PayModal;