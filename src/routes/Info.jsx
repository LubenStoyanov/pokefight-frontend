import React from "react";
import { useLoaderData } from "react-router-dom";
import { getInfo } from "../api/axios";

export async function loader({ params }) {
  try {
    const info = await getInfo(params.id, params.info);
    return info;
  } catch (error) {
    console.error(error);
  }
}

export default function Info() {
  const info = useLoaderData();

  return <div></div>;
}
