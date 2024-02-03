import Image from "next/image";
import Card from "@/components/card";


export default function Home() {
  return (
    <body className="bg-amber-900">
      
    <div>
      <h1 className="text-center text-4xl font-extrabold my-6">CARD Component</h1>
      <div className="flex gap-6 justify-center items-center">

      <Card title="Card1"/>
      <Card title="Card2"/>
      <Card title="Card3"/>
      <Card title="Card4"/>
      
      </div>
    </div>
    </body>
  );
}
