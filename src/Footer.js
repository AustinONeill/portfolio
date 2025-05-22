import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p>© {new Date().getFullYear()} Austin O'Neill. All rights reserved.</p>
      </div>
    </footer>
  );
}
