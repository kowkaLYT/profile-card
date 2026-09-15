import ProfileCard from "./components/ProfileCard";
import PitchBackground from "./components/PitchBackground";

function App() {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-3 py-6">
      <PitchBackground />

      <div className="card-glass-wrap">
        <ProfileCard />
      </div>
    </div>
  );
}

export default App;