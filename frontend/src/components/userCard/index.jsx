import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { formatarCPF } from "@/utils/lib";

export const UserCard = ({ name, email, cpf, onClose }) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error(error);
          setLocation("Localização não disponível");
        }
      );
    } else {
      setLocation("Geolocalização não suportada");
    }
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Dados do Usuário</h2>
          <button onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <div className="mb-2">
          <strong>Nome:</strong> {name}
        </div>
        <div className="mb-2">
          <strong>Email:</strong> {email}
        </div>
        <div className="mb-2">
          <strong>CPF:</strong> {formatarCPF(cpf)}
        </div>
        <div className="mb-2">
          <strong>Localização Atual:</strong>{" "}
          {location
            ? `${location.latitude}, ${location.longitude}`
            : "Obtendo localização..."}
        </div>
      </div>
    </div>
  );
};
