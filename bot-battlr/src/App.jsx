import React, { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import NavBar from "./components/NavBar";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  // Fetch bots from json-server
  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((r) => r.json())
      .then((data) => setBots(data))
      .catch((err) => console.error("Error fetching bots:", err));
  }, []);

  const addToArmy = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const removeFromArmy = (botId) => {
    setArmy(army.filter((b) => b.id !== botId));
  };

  const deleteBot = (botId) => {
    fetch(`http://localhost:8001/bots/${botId}`, { method: "DELETE" })
      .then(() => {
        setArmy(army.filter((b) => b.id !== botId));
        setBots(bots.filter((b) => b.id !== botId));
      })
      .catch((err) => console.error("Delete failed:", err));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <NavBar />
      <div className="p-6">
        <YourBotArmy
          army={army}
          removeFromArmy={removeFromArmy}
          deleteBot={deleteBot}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">Bot Collection</h2>

        <BotCollection bots={bots} addToArmy={addToArmy} />
      </div>
    </div>
  );
}

export default App;
