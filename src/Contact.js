import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="container py-5" data-aos="fade-up">
      <h2 className="accent mb-4">Contact</h2>
      <p>
        Let's connect! Reach me on{' '}
        <a className="text-info" href="https://github.com/AustinONeill" target="_blank" rel="noreferrer">GitHub</a>{' '}
        or send me an{' '}
        <a className="text-info" href="mailto:austin@example.com">Email</a>.
      </p>
    </section>
  );
}

