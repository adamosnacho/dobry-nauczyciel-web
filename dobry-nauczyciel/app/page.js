"use client";
import Link from "next/link";
import TopBar from "./components/topBar";
import SearchBar from "./components/searchBar"
import { useRouter } from "next/navigation";


// Define the Home component
export default function Home() {
  // Access router instance
  const router = useRouter();
  
  // Return JSX
  return (
    <html>
      <body style={{margin: 0, padding: 0}}>
        <header>
          <TopBar router={router}/>
        </header>
        
        <SearchBar></SearchBar>
      </body>
    </html>
  );
}
