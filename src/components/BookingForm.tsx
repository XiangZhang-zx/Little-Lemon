import React, { useState } from 'react';

interface BookingFormProps {
  availableTimes: string[];
  onSubmit: (formData: any) => void;
  onDateChange: (date: string) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ availableTimes, onSubmit, onDateChange }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'Casual Dining',
    name: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
      </div>

      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          required
          value={formData.date}
          onChange={(e) => {
            const newDate = e.target.value;
            setFormData({...formData, date: newDate});
            onDateChange(newDate);
          }}
        />
      </div>

      <div className="form-group">
        <label htmlFor="time">Time:</label>
        <select
          id="time"
          required
          value={formData.time}
          onChange={(e) => setFormData({...formData, time: e.target.value})}
        >
          <option value="">Select Time</option>
          {availableTimes.map(time => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="guests">Number of Guests:</label>
        <input
          type="number"
          id="guests"
          min="1"
          max="10"
          required
          value={formData.guests}
          onChange={(e) => setFormData({...formData, guests: parseInt(e.target.value)})}
        />
      </div>

      <button type="submit" className="submit-button">Confirm Reservation</button>
    </form>
  );
};

export default BookingForm; 