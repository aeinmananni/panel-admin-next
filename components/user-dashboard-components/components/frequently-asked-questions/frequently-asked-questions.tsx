import { FAQ_DATA } from "../data";
import info from "@/public/icons/info.png";
import { Header } from "../header";
import questionsIcon from "@/public/icons/questions_2932745.png";
import suportIcon from "@/public/icons/customer-care_17210518.png";
import Image from "next/image";
export default function FrequentlyAskedQuestions() {
  return (
    <div className="flex flex-col h-full w-full">
      <Header image={info.src} title={"سوالات متداول"} />

      <div className="grid grid-cols-2 w-full h-full">
        {FAQ_DATA.map((it, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 border border-yellow-500 p-2 justify-evenly relative"
          >
            <Image
              src={questionsIcon}
              alt="Qu"
              width={40}
              height={40}
              className="absolute top-2 left-2"
            />
            <span>💡{it.question}</span>
            <div className="flex gap-2 border-t-2 border-dashed p-2">
              <Image
                src={suportIcon}
                alt="Qu"
                width={40}
                height={40}
                className=""
              />
              <span>{it.answer}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
