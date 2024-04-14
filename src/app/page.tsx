export const meta: Metadata = {
  title: "wefit home",
  description: "filmes para toda a família",
};

import { HomeTemplate } from "@/templates/Home";
import { Metadata } from "next";

export default function Home() {
  return <HomeTemplate />;
}
