import './App.css';
import BottomNavBar from "../components/BottomNavBar.tsx";
import PlantCard from "../components/PlantCard.tsx";
import React from "react";

const App: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
                <h1 className="text-primary text-xl font-bold text-left pb-4">
                    My Plants
                </h1>
                <div className="grid grid-cols-2 gap-2">
                    <PlantCard plantId={1} plantName={"Cactus"}/>
                    <PlantCard plantId={2} plantName={"Ficus"}/>
                    <PlantCard plantId={3} plantName={"Philodendron"}/>
                    <PlantCard plantId={4} plantName={"Elephant Ear"}/>
                </div>
            </div>
            <BottomNavBar/>
        </div>
    );
}

export default App;
