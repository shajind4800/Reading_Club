import React, { useRef } from "react";
import {
  FocusText,
  MembersContainer,
  MembersHeader,
  ScrollContainer,
  SpaceContainer,
  SubText,
} from "./MainPage.styles";

import { MemberGrid } from "../MemberGrid/MemberGrid";
import { useFetchContext } from "../../context/FetchContext";
import { EmptyState } from "../EmptyState/EmptyState";
import { LoaderOverlay } from "../MemberGrid/MemberGrid.styles";
import { ClipLoader } from "react-spinners";

export const MainPage: React.FC = () => {
  const { totalMembers, loading } = useFetchContext();
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <React.Fragment>
      {loading && (
        <LoaderOverlay>
          <ClipLoader size={50} />
        </LoaderOverlay>
      )}
      {!totalMembers && !loading ? (
        <EmptyState message={"No active members in the club currently!"} />
      ) : (
        <ScrollContainer ref={scrollContainerRef}>
          <SpaceContainer>
            <MembersContainer>
              <MembersHeader>
                <FocusText>{totalMembers}</FocusText>
                <span> Members </span>
                <SubText>have been actively engaged in our club!!!</SubText>
              </MembersHeader>
            </MembersContainer>
          </SpaceContainer>
          <MemberGrid scrollContainerRef={scrollContainerRef} />
        </ScrollContainer>
      )}
    </React.Fragment>
  );
};
