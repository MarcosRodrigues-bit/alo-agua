import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-100 p-6">
      <div className="max-w-xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-center text-blue-700">Alô Água</h1>

        <Card>
          <CardContent>
            <p className="text-lg">
              Entregamos água mineral com qualidade e agilidade.
            </p>
            <p className="mt-2">
              <strong>Endereço:</strong> Travessa Otávio Lobão, Nº 21, Altamira, Barra do Corda-MA
            </p>
            <p>
              <strong>Horário de Atendimento:</strong> Segunda a Sexta, das 07:00 às 18:00
            </p>
          </CardContent>
        </Card>

        <a
          href="https://wa.me/5599981324941"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="w-full bg-green-500 text-white">
            Fale conosco no WhatsApp
          </Button>
        </a>
      </div>
    </div>
  );
}
