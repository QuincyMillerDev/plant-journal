import React from 'react';
import { Link } from 'react-router-dom';

interface PlantCardProps {
    plantId: number;
    plantName: string;
}

const PlantCard: React.FC<PlantCardProps> = ({ plantId, plantName }) => {
    return (

            <div className="card text-neutral bg-base-100 cursor-pointer">
                <Link to={`/plants/${plantId}`}>
                <div className="card-body">
                    <h2 className="card-title">{plantName}</h2>
                </div>
                </Link>
            </div>

    );
};

export default PlantCard;
