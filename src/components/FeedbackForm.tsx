import React, { useState } from 'react';
import './FeedbackForm.css';

interface FeedbackData {
  name: string;
  email: string;
  feedback: string;
  rating: number;
}

const FeedbackForm: React.FC = () => {
  const [formData, setFormData] = useState<FeedbackData>({
    name: '',
    email: '',
    feedback: '',
    rating: 0,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'rating' ? parseInt(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="feedback-container">
      <h2>Feedback</h2>
      {submitted ? (
        <p>Thank you for your feedback!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="feedback">Feedback</label>
            <textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="rating">Rating</label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              min={1}
              max={5}
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default FeedbackForm;
