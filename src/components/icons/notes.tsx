import clsx from "clsx";
import { CloudDownload } from "lucide-react";
import React from "react";

type Props = { selected: boolean };

const Notes = ({ selected }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      version="1.1"
      viewBox="0 1.9 24 26.4"
    >
      <path
        fill="#d4d4d4"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M17.9,13.8h0c0,.5-.4.9-.9.9H7.1c-.5,0-.9-.4-.9-.9s.4-.9.9-.9h9.8c.5,0,.9.4.9.9ZM13.3,17.8h-6.1c-.5,0-.9.4-.9.9s.4.9.9.9h6.1c.5,0,.9-.4.9-.9s-.4-.9-.9-.9ZM24,8.7v14.6c0,3.2-1.8,5-5,5H5.1C1.8,28.2,0,26.4,0,23.2v-14.6C0,5.4,1.8,3.7,5.1,3.7h.6v-.9h0c0-.5.4-.9.9-.9.5,0,.9.4.9.9h0v.9h3.6v-.9h0c0-.5.4-.9.9-.9.5,0,.9.4.9.9h0v.9h3.6v-.9h0c0-.5.4-.9.9-.9.5,0,.9.4.9.9h0v.9h.6c3.2,0,5,1.8,5,5ZM22.2,8.7c0-2.2-.9-3.2-3.2-3.2h-.6v.9h0c0,.5-.4.9-.9.9s-.9-.4-.9-.9v-.9h-3.6v.9h0c0,.5-.4.9-.9.9s-.9-.4-.9-.9v-.9h-3.6v.9h0c0,.5-.4.9-.9.9s-.9-.4-.9-.9v-.9h-.6c-2.2,0-3.2.9-3.2,3.2v14.6c0,2.2.9,3.2,3.2,3.2h13.9c2.2,0,3.2-.9,3.2-3.2v-14.6Z"
      />
    </svg>
  );
};

export default Notes;
