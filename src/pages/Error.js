import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section className="section error-page">
      <div className="error-container">
        <h1>404 content not found</h1>
        <Link to="/" className="btn-primary">
          home
        </Link>
      </div>
    </section>
  );
}
