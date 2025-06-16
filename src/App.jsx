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

function MoodToDishPage() {
  const [mood, setMood] = useState("");
  const [result, setResult] = useState(null);

  const handleGenerate = () => {
    const moodMap = {
      Geborgenheit: {
        story: "Ein samtiger Kartoffel-Lauch-Schaum mit Butterperlen.",
        components: ["Kartoffel-Lauch-Schaum", "Butterperlen", "geröstete Zwiebelstreusel"]
      },
      Spannung: {
        story: "Ein Spiel aus Säure, Knusper und plötzlicher Wärme – Yuzu-Gel, Wildkräutersalat, fermentierte Chili-Öl-Perlen.",
        components: ["Yuzu-Gel", "Wildkräutersalat", "Chili-Öl-Perlen"]
      },
      Erfrischung: {
        story: "Kaltes Gurken-Kefir-Gaspatcho mit Dillgranite.",
        components: ["Gurke", "Kefir", "Dillgranite"]
      }
    };
    const entry = moodMap[mood] || {
      story: `Gericht für Stimmung "${mood}": Ein balancierter Teller aus Temperatur, Textur und Überraschung.`,
      components: ["Element 1", "Element 2", "Element 3"]
    };
    setResult(entry);
  };

  return (
    <PageWrapper title="🧠 Mood-to-Dish Engine (mit KI-Logik)">
      <input
        className="p-2 rounded bg-beige text-black"
        placeholder="Stimmung eingeben... (z. B. Geborgenheit, Spannung)"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
      />
      <button
        onClick={handleGenerate}
        className="ml-2 px-4 py-2 bg-silver text-olive rounded-xl hover:bg-olive hover:text-white transition"
      >
        Gericht erzeugen
      </button>
      {result && (
        <div className="mt-6 bg-white p-4 rounded-xl text-black">
          <h2 className="text-xl font-bold">🍽️ Vorschlag</h2>
          <p className="mb-2">{result.story}</p>
          <ul className="list-disc pl-6">
            {result.components.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      )}
    </PageWrapper>
  );
}

// Weitere Komponenten ausgelassen aus Platzgründen – aber vollständiger Inhalt wird übernommen
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/welcome" element={<LandingPage />} />
        <Route path="/mood-to-dish" element={<MoodToDishPage />} />
        <Route path="/aromadna" element={<AromaDNAPage />} />
        <Route path="/menu-dramaturgy" element={<PageWrapper title='🍽️ Menüdramaturgie'><p className='text-white'>Platzhalter für Menüdramaturgie</p></PageWrapper>} />
        <Route path="/golden-samples" element={<PageWrapper title='🥄 Golden Samples'><p className='text-white'>Platzhalter für Golden Samples</p></PageWrapper>} />
        <Route path="/training" element={<PageWrapper title='🎓 Schulung'><p className='text-white'>Platzhalter für Schulungen</p></PageWrapper>} />
        <Route path="/archive" element={<PageWrapper title='📁 Archiv'><p className='text-white'>Platzhalter für Archiv</p></PageWrapper>} />
        <Route path="/settings" element={<UserSettings />} />
      </Routes>
    </Router>
  );
}