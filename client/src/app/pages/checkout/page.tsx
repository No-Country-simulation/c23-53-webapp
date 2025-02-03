"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const [isMounted, setIsMounted] = useState(false); // Para asegurarnos que solo se ejecute en el cliente
  const router = useRouter();
  const [plan, setPlan] = useState<string | null>(null);

  // useEffect para asegurarse de que useRouter solo se use en el cliente
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const queryPlan = new URLSearchParams(window.location.search).get("plan");
      setPlan(queryPlan);
    }
  }, [isMounted]);

  if (!isMounted) return null; // O algún spinner de carga mientras se monta

  return (
    <div>
      <h1 className="text-white">Checkout Page</h1>
      <p className="text-white">Selected plan: {plan}</p>
    </div>
  );
};

export default Checkout;
