"use client"

import { CardBody, CardContainer, CardItem } from "@/components/global/3d-card";
import { Button } from "@nextui-org/button";
import { CheckIcon } from "lucide-react";
import React from "react";

type PricingPlan = {
  title: string;
  price: number;
  features: string[];
};

const pricingPlans: PricingPlan[] = [
  {
    title: "Hobby",
    price: 0,
    features: [
      "3 Free automations",
      "100 tasks per month",
      "Two-step Actions"
    ]
  },
  {
    title: "Pro Plan",
    price: 29,
    features: [
      "3 Free automations",
      "100 tasks per month",
      "Two-step Actions"
    ]
  },
  {
    title: "Unlimited",
    price: 99,
    features: [
      "3 Free automations",
      "100 tasks per month",
      "Two-step Actions"
    ]
  }
];

const Pricing = () => {
  return (
    <section className="bg-[#0f0f0f] min-h-[85vh] phone:mt-32 tablet:mt-52">
      <div className='badge flex mx-auto max-w-max'>
        <img src='/icons/star.svg' alt='star' className='my-auto w-6 h-6'/>
        <p className='font-satoshi-medium text-sm text-neutral-300/80 text-nowrap'>New curated pricing</p>
      </div>
      <h1 className='flex justify-center w-full phone:text-4xl tablet:text-6xl lg:text-7xl text-center font-satoshi-bold tracking-tighter'>
        <span className='gradient-text px-2 py-3 phone:w-[80%] tablet:w-full'>
          Increase your productivity by 10x
        </span>
      </h1>
      <p className="text-center phone:text-sm tablet:text-lg text-[#9B9CA1] font-satoshi-medium">Our Plans Scale With Your Business.</p>
      <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 bg-transparent phone:mt-10 tablet:mt-20">
        {pricingPlans.map((plan, index) => (
          <CardContainer key={index} className="">
            <CardBody className="relative flex flex-col justify-between group/card card-cover border-neutral-800/50 h-auto phone:w-[93%] md:!w-[350px] rounded-xl p-6">
              <img src="/assets/box-pattern.svg" alt="" className="absolute inset-0 object-cover w-full h-full opacity-10" />
              <CardItem translateZ="50" className="text-xl font-bold text-white">
                {plan.title}
                <h2 className="text-6xl font-satoshi-regular">${plan.price}</h2>
              </CardItem>
              <CardItem translateZ="60" className="text-sm max-w-sm mt-2 text-neutral-300">
                Get a glimpse of what our software is capable of. Just a heads up, you&apos;ll never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 my-auto"/> {feature}
                    </li>
                  ))}
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl text-sm font-normal dark:text-white">
                  Try now →
                </CardItem>
                <Button as="button" className="px-4 py-2 rounded-md bg-neutral-950 dark:bg-white dark:text-black text-white text-sm font-satoshi-medium">
                  Get Started Now
                </Button>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
