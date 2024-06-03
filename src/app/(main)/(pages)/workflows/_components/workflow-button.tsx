"use client";
import Workflowform from "@/components/forms/workflow-form";
import CustomModal from "@/components/global/custom-modal";
import { useBilling } from '@/providers/billing-provider'
import { useModal } from "@/providers/modal-provider";
import { Button } from "@nextui-org/button";
import { Plus } from "lucide-react";
import React from "react";

type Props = {};

const WorkflowButton = (props: Props) => {
  const { setOpen, setClose } = useModal();
  const { credits } = useBilling()

  const handleClick = () => {
    setOpen(
      <CustomModal
        title="Create a Workflow Automation"
        subheading="Workflows are a powerful tool that help you automate tasks."
      >
        <Workflowform />
      </CustomModal>
    );
  };

  return (
    <Button
      {...(credits !== "0"
        ? {
            onClick: handleClick,
          }
        : {
            disabled: true,
          })}
      className="bg-gradient-to-r from-indigo-200 to-yellow-100 rounded-md text-black"
      onClick={handleClick}
    >
      <Plus />
    </Button>
  );
};

export default WorkflowButton;
