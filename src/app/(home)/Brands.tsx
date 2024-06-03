import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import { FC } from "react";

const Brands: FC = () => {
  const BrandsRowOne = [
    {
      href: "/icons/brands/Aura.webp",
    },
    {
      href: "/icons/brands/CMMN.webp",
    },
    {
      href: "/icons/brands/DIVINE.webp",
    },
    {
      href: "/icons/brands/Elder.webp",
    },
    {
      href: "/icons/brands/FIVEPOINTS.webp",
    },
    {
      href: "/icons/brands/JACKIE.webp",
    },
    {
      href: "/icons/brands/KatKnits.webp",
    },
    {
      href: "/icons/brands/MAHALIA.webp",
    },
    {
      href: "/icons/brands/Aura.webp",
    },
    {
      href: "/icons/brands/CMMN.webp",
    },
    {
      href: "/icons/brands/DIVINE.webp",
    },
    {
      href: "/icons/brands/Elder.webp",
    },
    {
      href: "/icons/brands/FIVEPOINTS.webp",
    },
    {
      href: "/icons/brands/JACKIE.webp",
    },
    {
      href: "/icons/brands/KatKnits.webp",
    },
    {
      href: "/icons/brands/MAHALIA.webp",
    },
  ];
  const BrandsRowTwo = [
    {
      href: "/icons/brands/O&B.webp",
    },
    {
      href: "/icons/brands/RADIANT.webp",
    },
    {
      href: "/icons/brands/SPLAT.webp",
    },
    {
      href: "/icons/brands/STARLIGHT.webp",
    },
    {
      href: "/icons/brands/Stymentus.webp",
    },
    {
      href: "/icons/brands/VENUSY.webp",
    },
    {
      href: "/icons/brands/KatKnits.webp",
    },
    {
      href: "/icons/brands/MAHALIA.webp",
    },
    {
      href: "/icons/brands/O&B.webp",
    },
    {
      href: "/icons/brands/RADIANT.webp",
    },
    {
      href: "/icons/brands/SPLAT.webp",
    },
    {
      href: "/icons/brands/STARLIGHT.webp",
    },
    {
      href: "/icons/brands/Stymentus.webp",
    },
    {
      href: "/icons/brands/VENUSY.webp",
    },
    {
      href: "/icons/brands/KatKnits.webp",
    },
    {
      href: "/icons/brands/MAHALIA.webp",
    },
  ];
  return (
    <section className="phone:min-h-[60vh] lg:min-h-[75vh]">
      <div className="flex w-full flex-col justify-center phone:gap-3">
        <h1 className="text-center flex mx-auto phone:text-4xl tablet:text-6xl lg:text-7xl tracking-tighter">
          <span className="gradient-text font-satoshi-bold my-auto px-2 py-3">
            Leading Brands Trust Us.
          </span>
        </h1>
        <p className="text-center phone:text-base tablet:text-lg text-[#9B9CA1] font-satoshi-medium">
          Integrate all your workflow with ease.
        </p>
      </div>

      <div className="my-[7vw]">
        <InfiniteMovingCards
          className=""
          items={BrandsRowOne}
          direction="right"
          speed="slow"
        />
        <InfiniteMovingCards
          className=""
          items={BrandsRowTwo}
          direction="left"
          speed="slow"
        />
      </div>
    </section>
  );
};
export default Brands;
