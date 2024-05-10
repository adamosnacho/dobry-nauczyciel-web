'use client';
import TopBar from "../components/topBar";
import {useRouter} from "next/navigation";
export default function search() {
    // Access router instance
    const router = useRouter();

    return (
      <html>
        <body style={{margin: 0, padding: 0}}>
          <header>
            <TopBar router={router}/>
          </header>
          SEARCH PAGE
        </body>
      </html>
    );
  }
  