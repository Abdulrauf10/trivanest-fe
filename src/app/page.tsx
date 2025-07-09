import Image from 'next/image';
import CustomCarousel from '@/components/Carousel';
import { Button } from '@/components/ui/button';

export default function Home() {
  const items = ['Depression', 'Anxiety', 'Trauma', 'Carrer', 'IQ Test'];
  return (
    <div className="flex w-full h-[80vh]">
      <div className="w-[50%]">Trivanest</div>
      <div className="w-[50%] flex flex-col">
        <div
          style={{ backgroundImage: "url('/home/poster.png')" }}
          className=" bg-cover bg-center h-[80vh]"
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
          <CustomCarousel orientation="horizontal" className="max-w-[90%]">
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
