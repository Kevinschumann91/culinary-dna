import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function PageWrapper({ title, children }) {
  return (
    <div className="min-h-screen bg-olive text-silver p-8 space-y-8">
      <h1 className="text-4xl font-bold">{title}</h1>
      {children}
    </div>
  );
}

// (restlicher App.jsx Code wird direkt aus dem vorherigen Export übernommen)
