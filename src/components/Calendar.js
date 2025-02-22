import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Calendar({ selectedDate, setSelectedDate }) {
  return (
    <div
      style={{
        position: "absolute", // Align within the parent container
        right: "10px", // Align to the right
        top: "50px", // Space below the button
        backgroundColor: "white",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
        zIndex: 1000, // Ensures it's above other content
      }}
    >
      <h3>Select Appointment Date:</h3>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        minDate={new Date()} // Prevent past date selection
        inline
      />
      {selectedDate && (
        <p>
          <strong>Selected Date:</strong> {selectedDate.toDateString()}
        </p>
      )}
    </div>
  );
}
export default Calendar;
