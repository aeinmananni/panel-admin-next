import { Header } from "../header";
import route from "@/public/icons/route.png";
import { Form } from "./components";

export default function SelectRigindDestinationDate() {
  return (
    <div className="flex flex-col">
      <Header image={route.src} title={"مبدأ، مقصد، تاریخ  را انتخاب کنید"} />
      <Form />
    </div>
  );
}
