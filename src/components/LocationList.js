import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_LOCATIONS } from '../queries';
import { toast } from 'react-hot-toast';

const LocationList = () => {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Завантаження...</p>;

  if (error) {
    toast.error('Помилка завантаження даних');
    return <p>Помилка: {error.message}</p>;
  }

  return (
    <div>
      <h2>Локації</h2>
      <ul>
        {data.locations.map((location) => (
          <li key={location.id}>
            <h3>{location.name}</h3>
            <p>{location.description}</p>
            <img src={location.photo} alt={location.name} width="200" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationList;
