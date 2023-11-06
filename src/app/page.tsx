"use client";
import Image from "next/image";
import { Button, Carousel } from "@material-tailwind/react";
import imgOne from "./IMG_1443.jpeg";
import imgTwo from "./lp_image.jpeg";
import imgThree from "./lp_image2.jpeg";
import imgFour from "./IMG_0630.png";
import imgFive from "./IMG_20180322_211906_1.jpg";
import imgSix from "./IMG_20191025_001553.jpg";
import imgSeven from "./lp_image_copy.jpeg";
import imgEight from "./lp_image_2.jpg";
import Link from "next/link";
import Modal from "./components/Modal";
import Voucher from "./components/Voucher";

type Props = {
  searchParams: Record<string, string> | null | undefined;
};
export default function Home({ searchParams }: Props) {
  const showModal = searchParams?.modal;
  const showVoucher = searchParams?.dialog;
  return (
    <main>
      <div className="flex flex-col h-screen w-screen justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="bg-gradient-to-r from-orange-600 via-green-500 to-blue-400 inline-block text-transparent bg-clip-text m-6 font-bold text-5xl tracking-wider">
          Happy Birthday
        </div>
        <Carousel className="m-2 h-4/5 w-11/12 bg-pink-200 rounded-xl md:w-3/5 md:h-fit">
          <Image
            src={imgOne}
            alt="image 1"
            className="h-full w-full object-cover"
            priority={true}
          />

          <Image
            src={imgTwo}
            alt="image 2"
            className="h-full w-full object-cover"
            priority={false}
          />

          <Image
            src={imgThree}
            alt="image 3"
            className="h-full w-full object-cover"
            priority={false}
          />

          <Image
            src={imgFour}
            alt="image 4"
            className="h-full w-full object-cover"
            priority={true}
          />
          <Image
            src={imgFive}
            alt="image 5"
            className="h-full w-full object-cover"
            priority={true}
          />
          <Image
            src={imgSix}
            alt="image 6"
            className="h-full w-full object-cover"
            priority={true}
          />
          <Image
            src={imgSeven}
            alt="image 7"
            className="h-full w-full object-cover"
            priority={true}
          />

          <Image
            src={imgEight}
            alt="image 8"
            className="h-full w-full object-cover"
            priority={true}
          />
        </Carousel>
        <Button size="lg" variant="gradient" className="m-6">
          <Link href="/?modal=true">Click Me</Link>
        </Button>

        <Button size="lg" variant="gradient" className="m-6">
          <Link href="/?dialog=true">Redeem Ticket</Link>
        </Button>
        {showModal && <Modal />}
        {showVoucher && <Voucher />}
      </div>
    </main>
  );
}
