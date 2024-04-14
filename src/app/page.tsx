export const meta: Metadata = {
  title: "WeFit | Home",
  description: "Filmes para toda a família",
};

import { HomeTemplate } from "@/templates/Home";
import { Metadata } from "next";

export default function Home() {
  return <HomeTemplate />;
}
