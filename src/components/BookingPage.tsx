import React, { useState, useEffect } from 'react';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from '../api/mockAPI';

const BookingPage = () => {
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);

  useEffect(() => {
    const today = new Date();
    const times = fetchAPI(today);
    setAvailableTimes(times);
  }, []);

  const handleDateChange = (date: string) => {
    const selectedDate = new Date(date);
    const times = fetchAPI(selectedDate);
    setAvailableTimes(times);
  };

  const handleSubmit = (formData: any) => {
    const success = submitAPI(formData);
    if (success) {
      alert('Reservation successful!');
      // Additional success handling logic can be added here
    } else {
      alert('Reservation failed, please try again.');
    }
  };

  return (
    <main className="booking-page">
      <h2>Book a Table</h2>
      <BookingForm 
        availableTimes={availableTimes} 
        onSubmit={handleSubmit}
        onDateChange={handleDateChange}
      />
    </main>
  );
};

export default BookingPage; 