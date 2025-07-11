import Image from 'next/image';
import CustomCarousel from '@/components/Carousel';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { CustomAvatar } from '@/components/CustomAvatar';
import { StarIcon } from 'lucide-react';

export default function Home() {
  const items = ['Depression', 'Anxiety', 'Trauma', 'Carrer', 'IQ Test'];
  const doctors = [
    {
      id: 1,
      name: 'SY',
      src: '/home/doctor-1.png',
    },
    {
      id: 2,
      name: 'JR',
      src: '/home/doctor-2.png',
    },
    {
      id: 3,
      name: 'JL',
      src: '/home/doctor-3.png',
    },
  ];
  return (
    <div className="flex flex-col md:flex-row w-full pt-[67.5px]">
      <div className=" w-full px-2 md:pl-20 md:pr-3 text-center md:text-left md:shadow-[4px_0_6px_rgba(0,0,0,0.1)]">
        <div className="hidden md:flex items-center gap-1 mt-8 ">
          <Separator className="bg-[#7b7b7b] md:max-w-[400px] max-w-[200px]" />
          <p className="text-sm">You are not alone</p>
        </div>

        <h1 className=" text-5xl md:text-[90px]">
          <span className="font-extrabold">Breath Easy</span> <br />{' '}
          <span className="font-extrabold">None</span> of This is <br />{' '}
          <span className="font-extrabold">Your</span> Burden
        </h1>

        <p className="text-[20px] text-[#7b7b7b]">
          You are not alone- and with us, you never have to face <br /> on your
          own.
        </p>

        <div className="w-full flex justify-center md:justify-start gap-2.5 mt-8">
          <Link
            href={'/appointment'}
            className="bg-[#FF9E00] text-white py-1 px-3.5 rounded-2xl shadow-lg"
          >
            Book an Appointment
          </Link>
          <Link
            href={'https://wa.me/6285236375312'}
            target="_blank"
            className="bg-white text-[#7b7b7b] py-1 px-3.5 rounded-2xl border border-[#FF9E00] shadow-lg"
          >
            Free Consultation
          </Link>
        </div>

        <div className="bg-[#E0C3FC] mx-auto md:mx-0 w-[80%] py-5 px-2.5 flex items-center text-left pl-1 rounded-xl mt-[40px] gap-5 mb-[20px]">
          <div className="flex -space-x-6">
            {doctors.map((data, idx) => (
              <CustomAvatar
                key={data.id}
                src={data.src}
                alt={data.name}
                fallback={data.name}
                className={`relative border border-white md:h-20 md:w-20`}
              />
            ))}
          </div>

          <div className="flex flex-col">
            <div className="flex gap-0.5 items-center">
              <span className="md:text-[20px] text-sm">4.8</span>
              {[...Array(5)].map((_, idx) => (
                <StarIcon
                  key={idx}
                  className="text-amber-500 md:text-[20px] text-[12px] fill-yellow-400 "
                />
              ))}
            </div>

            <p className="md:text-[20px] text-sm">
              Top-rated expert psychologist
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col">
        <div
          style={{ backgroundImage: "url('/home/poster.png')" }}
          className=" w-full aspect-[4/3] bg-cover bg-center"
        >
          <Image
            src={'/home/trivanest-wite.png'}
            width={100}
            height={100}
            alt="trivanest"
            className="mt-3 ml-3"
          />
        </div>
        <div className="bg-[#5A189A] h-[20vh] flex items-center justify-center w-full px-4 mx-auto">
          <CustomCarousel
            orientation="horizontal"
            className="md:max-w-[90%] max-w-[50%]"
          >
            {items.map((topic) => (
              <div
                key={topic}
                className="p-4 shadow rounded h-full flex flex-col justify-between"
              >
                <button className="text-[20px] p-1.5 font-semibold text-white bg-[#5A189A] border border-white rounded-3xl ">
                  {topic}
                </button>
              </div>
            ))}
          </CustomCarousel>
        </div>
      </div>
    </div>
  );
}
