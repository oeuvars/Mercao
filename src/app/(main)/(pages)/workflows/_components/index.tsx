import React from "react";
import Workflow from "./workflow";
import { onGetWorkflows } from "../_actions/workflow_connections";
import MoreCredits from "./more-credits";

type Props = {};

const Workflows = async (props: Props) => {
  const workflows = await onGetWorkflows();
  return (
    <div className="relative flex flex-col gap-4">
      <section className="flex flex-col gap-4 mx-2 mt-2">
        <MoreCredits />
        {workflows?.length ? (
          workflows.map((flow) => <Workflow key={flow.id} {...flow} />)
        ) : (
          <div className="mt-28 flex flex-col gap-5 text-muted-foreground font-satoshi-medium text-lg text-neutral-500 items-center justify-center">
            <img src="/images/empty-state.svg" alt="empty-state" className="w-[25vw] h-[25vw]"/>
            <h1 className="text-xl text-neutral-500 font-satoshi-medium">No workflows to show</h1>
          </div>
        )}
      </section>
    </div>
  );
};

export default Workflows;
