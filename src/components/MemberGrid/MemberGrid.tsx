import { FC, Fragment, useEffect, useRef, useState } from "react";
import {  useFetchContext } from "../../context/FetchContext";
import {MemberCard} from "../MemberCard/MemberCard";
import { GridContainer, LoaderOverlay } from "./MemberGrid.styles";
import { Member } from "../../types/types";
import { ClipLoader } from "react-spinners";


interface Props {
  scrollContainerRef: React.RefObject<HTMLDivElement|null>;
}

export const MemberGrid : FC<Props> = ({ scrollContainerRef }) =>{
  const { members ,loading , loadMembers , totalMembers} = useFetchContext();
  const [clubMembers, setClubMembers] = useState<Member[]>([]);
  const [page, setPage] = useState<number>(1);
  const loadingRef = useRef<boolean>(false);

  useEffect(() => {
    if (members && members.length) {
      setClubMembers((prev) => [...prev, ...members]);
      loadingRef.current = false;
    }
  }, [members]);

  useEffect(() => {
    if (page > 1 && clubMembers.length < totalMembers) {
      loadMembers(page);
    }
  }, [page]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const isBottom : boolean = scrollTop + clientHeight >= scrollHeight;

      if (!loadingRef.current && clubMembers.length < totalMembers && isBottom) {
        setPage((prev) => prev + 1);
        loadingRef.current = true;
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [clubMembers, totalMembers]);

  return (
    <Fragment>
        {(loading || loadingRef.current) && (
        <LoaderOverlay>
          <ClipLoader size={50} />
        </LoaderOverlay>
      )}
      <GridContainer>
        {clubMembers.map((member) => (
          <MemberCard key={member.id} {...member} />
        ))}
      </GridContainer>
    </Fragment>
  );
}
