import React, { useState, useEffect, lazy, Suspense } from "react";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import Button from "../../components/button/Button.jsx";
import Loading from "../loading/Loading";
import { openSource, socialMediaLinks } from "../../portfolio";

export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([
    {
      id: 1,
      url: "https://github.com/laharicg/Drive-to-AWS-S3",
      name: "Upload files: Drive-to-AWS-S3",
      description:
        "A drag & drop image uploader with AWS-S3 using technologies such as NodeJS, Express for back end, React for front-end,AWS-S3 for File Storage.",
    },
    {
      id: 2,
      url: "https://github.com/laharicg/google-clone",
      name: "Google-clone",
      description:
        "A search engine made with the knowledge of Redux, React-router, Custom search API.Well-designed using CSS which represents the replica of google search engine.",
    },
    {
      id: 3,
      url: "https://github.com/laharicg/Tic-Tac-Typrescript",
      name: "Tic-Tac-Toe Game",
      description: "Two-player game coded with Typescript & styled by CSS",
    },
    {
      id: 4,
      url: "https://github.com/laharicg/Hanoi-Dom",
      name: "Hanoi Towers Game",
      description:
        "Interesting disc game made use of DOM representation & modified with Javascript.",
    },
    {
      id: 5,
      url: "https://github.com/laharicg/Task-2-Swiggy",
      name: "Swiggy-clone",
      description: "Food delivery app UI with REACT & CSS.",
    },
    {
      id: 6,
      url: "https://github.com/laharicg/instagram-clone-react-state",
      name: "Instagram-clone",
      description:
        "Auntenticated system based on Firebase and Frontend designed using REACT",
    },
  ]);

  if (!(typeof repo === "string" || repo instanceof String)) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">Open Source Projects</h1>
          <div className="repo-cards-div-main">
            {repo.map((reps) => {
              return <GithubRepoCard repo={reps} key={reps.id} />;
            })}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}
