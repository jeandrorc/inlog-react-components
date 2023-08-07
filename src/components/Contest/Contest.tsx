import React, { useState, MouseEventHandler } from "react";
import * as Icon from "react-feather";
import { ContestDiv, CountDiv } from "./Contest.styled";

interface ContestProps {
  contest: number | string | boolean;
  onClick: MouseEventHandler;
}

const Contest = ({ contest, onClick }: ContestProps) => {

  return (
    <ContestDiv
      onClick={onClick}
    >
      <Icon.HelpCircle className="white" size={20} />
      {typeof contest === "number" && (
        <CountDiv success={contest === 0}>{contest}</CountDiv>
      )}
    </ContestDiv>
  );
};

export default Contest;
