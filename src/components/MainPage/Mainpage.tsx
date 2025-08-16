import React, { useContext, useRef } from "react";
import {
  FocusText,
  MembersContainer,
  MembersHeader,
  ScrollContainer,
  SpaceContainer,
  SubText,
} from "./MainPage.styles";

import { FetchContext } from "../../context/FetchContext";
import {MemberGrid} from "../MemberGrid/MemberGrid";
import { FetchContextProps } from "../../types/types";

export const MainPage: React.FC = () => {
  const { totalMemeberCount } = useContext<FetchContextProps>(FetchContext) as  Pick<FetchContextProps , 'totalMemeberCount'>;
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <ScrollContainer ref={scrollContainerRef}>
      <SpaceContainer>
        <MembersContainer>
          <MembersHeader>
            <FocusText>{totalMemeberCount}</FocusText>
            <span> Members </span>
            <SubText>have been actively engaged in our club!!!</SubText>
          </MembersHeader>
        </MembersContainer>
      </SpaceContainer>
      <MemberGrid scrollContainerRef={scrollContainerRef} />
    </ScrollContainer>
  );
};
