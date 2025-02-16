import { Routes,Route } from "react-router-dom"
import Landing from "./pages/landing"
import TeamPage from "./pages/team"
import EventsPage from "./pages/event"
import Exhippro from "./pages/exhib"
import Media from "./pages/media"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/media" element={<Media />} />
        <Route path="/exhib" element={<Exhippro />} />
      </Routes>
    </div>
  );
};

export default App;
