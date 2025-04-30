import Image from "next/image";


export default function Loading() {
  return (
    <div className=" pt-40 flex justify-center item-center min-h-[20rem]">
      <Image
        width={150}
        height={150}
        alt="loading"
        src={"/loading/loading.svg"}
      />
    </div>
  );
}
