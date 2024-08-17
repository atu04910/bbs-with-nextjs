import BBSCardList from "./components/BBSCardList"
import { BBSData } from "./types/types";

async function getBBSAllData() {

  // fetch は配列で返却される
  //const response = await fetch("http://localhost:3000/api/post", {
    const response = await fetch("https://bbs-with-nextjs-two.vercel.app/api/post", {
    cache: "no-store",
  });
  
  // 配列で定義
  const bbsAllData: BBSData[] = await response.json();
  //console.log(bbsAllData);

  return bbsAllData
}


export default async function Home() {
  const bbsAllData = await getBBSAllData();

  return (
    <main>
      <BBSCardList bbsAllData={bbsAllData} />
    </main>
  );
}
