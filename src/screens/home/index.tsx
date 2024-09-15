import * as React from "react";
import SearchBanner from "./Searchbanner";

export interface HomeProps {}

export default function Home(props: HomeProps) {
  return (
    <div>
      <SearchBanner />
    </div>
  );
}
