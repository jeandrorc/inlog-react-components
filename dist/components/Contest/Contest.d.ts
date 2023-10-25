import React, { MouseEventHandler } from "react";
interface ContestProps {
    contest: number | string | boolean;
    onClick: MouseEventHandler;
}
declare const Contest: ({ contest, onClick }: ContestProps) => React.JSX.Element;
export default Contest;
