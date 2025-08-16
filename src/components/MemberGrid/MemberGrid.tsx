import { FC, Fragment, useContext, useEffect, useState } from "react";
import { FetchContext } from "../../context/FetchContext";
import {MemberCard} from "../MemberCard/MemberCard";
import { GridContainer } from "./MemberGrid.styles";
import { FetchContextProps, Member } from "../../types/types";


interface Props {
  scrollContainerRef: React.RefObject<HTMLDivElement|null>;
}

export const MemberGrid : FC<Props> = ({ scrollContainerRef }) =>{
  const { members, nextPage } = useContext(FetchContext) as Pick<FetchContextProps, 'members' | 'nextPage'>;
  const [clubMembers, setClubMembers] = useState<Member[]>([]);
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    if (members && nextPage) {
      setClubMembers(members);
      setPage(nextPage);
    }
  }, [members, nextPage]);

  useEffect(() => {
    if (page > 1 && !loading) {
      setLoading(true);
      setTimeout(() => {
        fetch(`http://localhost:3001/members?_page=${page}&_per_page=50`)
          .then((res) => res.json())
          .then((result) => {
            setClubMembers((prev) => [...prev, ...result.data]);
            setHasMore(result.data.length > 0);
          })
          .catch(console.error)
          .finally(() => setLoading(false));
      }, 1000);
    }
  }, [page]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      if (!loading && hasMore && scrollTop + clientHeight >= scrollHeight) {
        setPage((prev) => prev + 1);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  return (
    <Fragment>
      <GridContainer>
        {clubMembers.map((member) => (
          <MemberCard key={member.id} {...member} />
        ))}
      </GridContainer>
      {loading && <p>Loading more members...</p>}
    </Fragment>
  );
}
