import React, { useState } from 'react';

function Contact() {
  const [formFields, setFormFields] = useState({ fullName: '', userEmail: '', textBody: '' });
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(formFields.fullName && formFields.userEmail) {
      setIsConfirmed(true);
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact the Editorial Desk</h2>
      
      {isConfirmed ? (
        <div className="confirmation-box">
          <h3>Submission Tracked!</h3>
          <p>Thank you, <strong>{formFields.fullName}</strong>. Your communication has been saved inside application state parameters.</p>
          <button className="back-btn" onClick={() => { setIsConfirmed(false); setFormFields({ fullName: '', userEmail: '', textBody: '' }); }}>
            Submit Alternate Report
          </button>
        </div>
      ) : (
        <form onSubmit={handleFormSubmit} className="dispatch-form">
          <div className="input-row">
            <label>Name</label>
            <input 
              type="text" 
              required 
              value={formFields.fullName} 
              onChange={(e) => setFormFields({...formFields, fullName: e.target.value})} 
            />
          </div>
          <div className="input-row">
            <label>Email Address</label>
            <input 
              type="email" 
              required 
              value={formFields.userEmail} 
              onChange={(e) => setFormFields({...formFields, userEmail: e.target.value})} 
            />
          </div>
          <div className="input-row">
            <label>Message Text</label>
            <textarea 
              rows="4" 
              value={formFields.textBody} 
              onChange={(e) => setFormFields({...formFields, textBody: e.target.value})}
            ></textarea>
          </div>
          <button type="submit" className="form-submit-btn">Transmit Form</button>
        </form>
      )}
    </div>
  );
}

export default Contact;