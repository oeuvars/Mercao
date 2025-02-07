import { Image } from "@nextui-org/image";
import { MarqueeCard } from "@/components/global/marquee-card";

const reviews = [
  {
    name: "Chikorita",
    username: "@chikrotita",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/avatar/chikorita.svg",
  },
  {
    name: "Goldeen",
    username: "@goldeen",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/avatar/goldeen.svg",
  },
  {
    name: "Growlithe",
    username: "@growlithe",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/avatar/growlithe.svg",
  },
  {
    name: "Jirachi",
    username: "@jirachi",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/avatar/jirachi.svg",
  },
  {
    name: "Melocetta",
    username: "@melocetta",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/avatar/melocetta.svg",
  },
  {
    name: "Mesprit",
    username: "@mesprit",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/avatar/mesprit.svg",
  },
  {
    name: "Pachirisu",
    username: "@pachirisu",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/avatar/pachirisu.svg",
  },
  {
    name: "Piplup",
    username: "@piplup",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/avatar/piplup.svg",
  },
  {
    name: "Rorom",
    username: "@rorom",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/avatar/rorom.svg",
  },
  {
    name: "Shellos",
    username: "@shellos",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/avatar/shellos.svg",
  },
  {
    name: "Togekiss",
    username: "@togekiss",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/avatar/togekiss.svg",
  },
  {
    name: "Togepi",
    username: "@togepi",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/avatar/togepi.svg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);


const Testimonials = () => {
  return (
    <div className="relative flex h-full mx-auto flex-col items-center justify-center overflow-hidden rounded-lg py-20 gap-5">
      <div className='badge flex mx-auto max-w-max'>
        <img src='/icons/star.svg' alt='star' className='my-auto w-6 h-6'/>
        <p className='font-satoshi-medium text-sm text-neutral-300/80 text-nowrap'>Customer testimonials</p>
      </div>
      <h1 className='flex justify-center w-full phone:text-4xl tablet:text-6xl lg:text-7xl text-center font-satoshi-bold tracking-tighter'>
        <span className='gradient-text px-2 tablet:py-3'>
          Words from our users
        </span>
      </h1>
      <p className="mt-auto mb-4 phone:text-sm tablet:text-lg text-[#9B9CA1] font-satoshi-medium tracking-tight phone:w-[90%] tablet:w-[50%] text-center">Explore the testimonials and feedback from our valued customers to gain insights into their experiences and satisfaction with our SaaS solution.</p>
      <MarqueeCard items={firstRow} speed="slow"/>
      <MarqueeCard items={secondRow} speed="slow" direction="right" />
    </div>
  );
};

export default Testimonials;
