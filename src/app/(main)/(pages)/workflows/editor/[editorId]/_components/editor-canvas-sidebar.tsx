"use client";

import { EditorCanvasTypes, EditorNodeType } from "@/lib/types";
import { useNodeConnections } from "@/providers/connection-providers";
import { useEditor } from "@/providers/editor-provider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useEffect, TouchEvent as ReactTouchEvent, DragEvent as ReactDragEvent } from "react";
import { CONNECTIONS, EditorCanvasDefaultCardTypes } from "@/lib/constants";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchBotSlackChannels, onConnections, onDragStart } from "@/lib/editor-utils";
import EditorCanvasIconHelper from "./editor-canvas-card-icon-helper";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import RenderConnectionAccordion from "./render-connection-accordion";
import { useStateStore } from "@/store";
import RenderOutputAccordion from "./render-output-accordion";

type Props = {
  nodes: EditorNodeType[];
};

const EditorCanvasSidebar: React.FC<Props> = ({ nodes }) => {
  const { state } = useEditor();
  const { nodeConnection } = useNodeConnections();
  const { googleFile, setSlackChannels } = useStateStore();

  useEffect(() => {
    if (state) {
      onConnections(nodeConnection, state, googleFile);
    }
  }, [state]);

  useEffect(() => {
    if (nodeConnection.slackNode.slackAccessToken) {
      fetchBotSlackChannels(
        nodeConnection.slackNode.slackAccessToken,
        setSlackChannels
      );
    }
  }, [nodeConnection]);

  const handleTouchStart = (
    event: ReactTouchEvent,
    cardKey: EditorCanvasTypes
  ) => {
    const touch = event.touches[0];
    const dataTransfer = {
      setData: (type: string, val: string) => {
        (event.target as HTMLElement).dataset[type] = val;
      },
      getData: (type: string) =>
        (event.target as HTMLElement).dataset[type] || "",
    };

    // Simulate dragstart event
    const dragStartEvent = new DragEvent("dragstart", {
      bubbles: true,
      cancelable: true,
      dataTransfer: dataTransfer as unknown as DataTransfer,
    });

    // Dispatch dragstart event
    event.target.dispatchEvent(dragStartEvent);
    onDragStart(dragStartEvent, cardKey);
  };

  const handleTouchMove = (event: ReactTouchEvent) => {
    const touch = event.touches[0];
    const target = document.elementFromPoint(
      touch.clientX,
      touch.clientY
    ) as HTMLElement;
    if (target && target.draggable) {
      target.dispatchEvent(
        new MouseEvent("dragover", {
          bubbles: true,
          cancelable: true,
          clientX: touch.clientX,
          clientY: touch.clientY,
        })
      );
    }
  };

  const handleTouchEnd = (event: ReactTouchEvent) => {
    const touch = event.changedTouches[0];
    const target = document.elementFromPoint(
      touch.clientX,
      touch.clientY
    ) as HTMLElement;
    if (target && target.draggable) {
      target.dispatchEvent(
        new MouseEvent("drop", {
          bubbles: true,
          cancelable: true,
          clientX: touch.clientX,
          clientY: touch.clientY,
        })
      );
    }
  };

  return (
    <aside>
      <Tabs
        defaultValue="actions"
        className="h-[93vh] overflow-scroll pb-28 scroll"
      >
        <TabsList className="bg-transparent flex border border-dashed border-neutral-700 rounded-sm w-[95%] m-auto py-6">
          <TabsTrigger
            value="actions"
            className="font-satoshi-medium mx-auto w-full rounded-md py-2"
          >
            Actions
          </TabsTrigger>
          <div className="divider"></div>
          <TabsTrigger
            value="settings"
            className="font-satoshi-medium mx-auto w-full rounded-md py-2"
          >
            Settings
          </TabsTrigger>
        </TabsList>
        <TabsContent value="actions" className="flex flex-col gap-4 p-4">
          {Object.entries(EditorCanvasDefaultCardTypes)
            .filter(
              ([_, cardType]) =>
                (!nodes.length && cardType.type === "Trigger") ||
                (nodes.length && cardType.type === "Action")
            )
            .map(([cardKey, cardValue]) => (
              <Card
                key={cardKey}
                draggable
                className="w-full cursor-grab border-none card-cover-two"
                onDragStart={(event: ReactDragEvent<HTMLDivElement>) =>
                  onDragStart(
                    event as unknown as DragEvent,
                    cardKey as EditorCanvasTypes
                  )
                }
                onTouchStart={(event: ReactTouchEvent) =>
                  handleTouchStart(event, cardKey as EditorCanvasTypes)
                }
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <CardHeader className="flex flex-row items-center gap-4 p-4">
                  <EditorCanvasIconHelper type={cardKey as EditorCanvasTypes} />
                  <CardTitle className="text-lg tracking-normal font-satoshi-medium">
                    <span className="gradient-text pr-1">{cardKey}</span>
                    <CardDescription className="text-neutral-400 font-satoshi-regular">
                      {cardValue.description}
                    </CardDescription>
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
        </TabsContent>
        <TabsContent value="settings" className="-mt-6">
          <div className="px-2 py-4 text-center text-3xl font-satoshi-bold">
            <span className="gradient-text saturate-150 px-1">
              {state.editor.selectedNode.data.title}
            </span>
          </div>

          <Accordion type="multiple" className="w-[95%] mx-auto">
            <AccordionItem value="Options" className="border-y-[1px] px-2">
              <AccordionTrigger className="!no-underline font-satoshi-medium text-lg">
                Account
              </AccordionTrigger>
              <AccordionContent
                className={
                  state.editor.selectedNode.data.title !== "Slack" ? "mb-8" : ""
                }
              >
                {CONNECTIONS.map((connection) => (
                  <RenderConnectionAccordion
                    key={connection.title}
                    state={state}
                    connection={connection}
                  />
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="Expected Output" className="px-2">
              <AccordionTrigger className="!no-underline font-satoshi-medium text-lg">
                Action
              </AccordionTrigger>
              <RenderOutputAccordion
                state={state}
                nodeConnection={nodeConnection}
              />
            </AccordionItem>
          </Accordion>
        </TabsContent>
      </Tabs>
    </aside>
  );
};

export default EditorCanvasSidebar;
