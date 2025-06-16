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

function UserSettings() {
  const [name, setName] = useState("Kevin");
  const [role, setRole] = useState("Admin");
  const [team, setTeam] = useState("CulinaryDNA Squad");

  return (
    <PageWrapper title="👤 Nutzerverwaltung & Rollen">
      <div className="space-y-4">
        <input className="p-2 rounded bg-beige text-black w-full" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
        <input className="p-2 rounded bg-beige text-black w-full" value={role} onChange={e => setRole(e.target.value)} placeholder="Rolle (z. B. Trainer, Gast, Teamleiter)" />
        <input className="p-2 rounded bg-beige text-black w-full" value={team} onChange={e => setTeam(e.target.value)} placeholder="Team" />
        <div className="bg-white text-black p-4 rounded-xl shadow">
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Rolle:</strong> {role}</p>
          <p><strong>Team:</strong> {team}</p>
        </div>
      </div>
    </PageWrapper>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-olive to-beige text-white p-12">
      <div className="flex flex-col items-center">
        <svg className="w-32 h-32 mb-6 drop-shadow-lg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" stroke="white" strokeWidth="4" fill="none" />
          <path d="M 20 60 Q 50 10 80 60" stroke="white" strokeWidth="4" fill="none" />
          <circle cx="50" cy="50" r="6" fill="white" />
        </svg>
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl font-extrabold tracking-tight">The Structure – Culinary DNA</h1>
          <p className="text-lg leading-relaxed">
            Die kreative Plattform für Köche, Denker und Geschmacksarchitekten. Erstelle, strukturiere und teile Gerichte auf Basis deiner persönlichen Aromalogik – mit Tools für Menüdramaturgie, Textursteuerung, Stimmungsküche und Golden Samples.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
            <li>🧠 Mood-to-Dish: Gefühl → Gericht</li>
            <li>🍽️ Menü-Story mit Reprisen & Leergängen</li>
            <li>🧬 Aroma- & Texturmatrix</li>
            <li>🥄 Galerie der Golden Samples</li>
            <li>🎓 Schulung & Lizenzen</li>
            <li>📁 Rezeptarchiv & Export</li>
          </ul>
          <div>
            <Link
              to="/"
              className="inline-block mt-6 px-6 py-3 bg-white text-olive font-bold text-lg rounded-xl shadow hover:bg-olive hover:text-white transition"
            >
              Zur Plattform
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardLink({ title, description, href }) {
  return (
    <Link to={href} className="block rounded-2xl border border-beige bg-beige p-6 shadow-md hover:shadow-xl transition">
      <h2 className="text-xl font-semibold mb-2 text-olive">{title}</h2>
      <p className="text-base text-silver">{description}</p>
    </Link>
  );
}

function AromaDNAPage() {
  const aromaMatrix = [
    { aroma: "Nussig", texture: "Knusprig" },
    { aroma: "Fruchtig", texture: "Cremig" },
    { aroma: "Umami", texture: "Gelartig" },
    { aroma: "Säuerlich", texture: "Flüssig" },
    { aroma: "Röstig", texture: "Knackig" },
    { aroma: "Florale Noten", texture: "Luftig" }
  ];

  return (
    <PageWrapper title="🧬 AromaDNA Navigator">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {aromaMatrix.map((item, index) => (
          <div key={index} className="bg-white text-black p-4 rounded-xl shadow">
            <h3 className="text-lg font-semibold">{item.aroma}</h3>
            <p className="text-sm text-gray-600">Textur: {item.texture}</p>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}

function NotFound() {
  return (
    <PageWrapper title="Seite nicht gefunden">
      <p className="text-white">Die aufgerufene Seite existiert nicht. Bitte überprüfe die URL oder kehre zur Startseite zurück.</p>
      <Link to="/" className="mt-4 inline-block px-4 py-2 bg-white text-olive rounded-xl hover:bg-olive hover:text-white transition">Zurück zur Startseite</Link>
    </PageWrapper>
  );
}

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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
