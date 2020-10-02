import React, { Suspense } from "react";
import { useQuery } from "react-query";
import axios from "axios";

function useGetChips() {
  return useQuery("chips", async () => {
    const { data } = await axios.get("/api/chips");
    return data;
  });
}

export default function Chips() {
  const { data: chips } = useGetChips();

  return (
    <Suspense>
      {chips &&
        chips.map((chip) => {
          return <span key={chip}>{chip}</span>;
        })}
    </Suspense>
  );
}
