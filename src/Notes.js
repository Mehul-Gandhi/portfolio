import React from 'react';
import { Email } from '@mui/icons-material';

function CS10Info() {
  return (
    <header className="masthead">
      <div className="d-flex container justify-content-center align-items-center round" style={{ background: 'linear-gradient(to bottom, #007BFF, #0046AC)', borderRadius: '20px', width: '100%', marginTop: '50px', marginBottom: '50px', padding: '30px' }}>
        <div className="container-fluid p-5" style={{ color: 'white', textAlign: 'center' }}>
          <h2 className="d-flex align-items-center justify-content-center" style={{ color: '#FFD700', marginBottom: '20px' }}>CS10 Fall 2023</h2>
          <p className="" style={{ color: '#FFD700', fontSize: '24px' }}><strong>Lab</strong>: Mondays and Wednesdays 8pm - 10pm (Soda Hall Room 430-438, Wozniak Lounge)</p>
          <div className="d-flex align-items-center mb-3 email-link" style={{ fontSize: '18px', justifyContent: 'center' }}>
            <a href="mailto:gandhi@berkeley.edu" 
              target="_blank" rel="noopener noreferrer" 
              style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', fontSize: '18px' }} className="email-link">
              <Email sx={{ fontSize: 36, marginRight: 8 }} className="email-icon" />
              gandhi@berkeley.edu
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Notes() {
  return (<div>
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CS10Info />
    </div>
    </div>
  );
}
