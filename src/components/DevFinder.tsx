import "./DevFinder.css";
import { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { HiBuildingOffice2 } from "react-icons/hi2";

function DevFinder() {
  const apiURL = "https://api.github.com/users/";
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [searchedWord, setSearchedWord] = useState<string>("octocat");
  const [avatar, setAvatar] = useState();
  const [acountCheck, setAcountCheck] = useState<boolean>(false);
  const [name, setName] = useState<string | null>(null);
  const [joined, setJoined] = useState<string>("");
  const [bio, setBio] = useState<string | null>(null);
  const [repos, setRepos] = useState<string | null>(null);
  const [followers, setFollowers] = useState<string | null>(null);
  const [following, setFollowing] = useState<string | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  const [twitter, setTwitter] = useState<string | null>(null);
  const [blog, setBlog] = useState<string | null>("");
  const [company, setCompany] = useState<string | null>(null);
  const [darkModeB, setDarkModeB] = useState<boolean>(true);

  useEffect(() => {
    fetch(apiURL + searchedWord).then((response) =>
      response.json().then((data) => {
        setAvatar(data.avatar_url);
        setName(data.login);
        setJoined(data.created_at);
        setBio(data.bio);
        setRepos(data.public_repos);
        setFollowers(data.followers);
        setFollowing(data.following);
        setLocation(data.location);
        setTwitter(data.twitter_username);
        setBlog(data.blog);
        setCompany(data.company);
      })
    );
  }, []);
  const searchCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedWord(event.target.value);
  };

  function searching() {
    fetch(apiURL + searchedWord).then((response) =>
      response.json().then((data) => {
        if (data.message === "not found") {
          setAcountCheck(true);
        } else {
          setAcountCheck(false);
          setAvatar(data.avatar_url);
          setName(data.login);
          setJoined(data.created_at);
          setBio(data.bio);
          setRepos(data.public_repos);
          setFollowers(data.followers);
          setFollowing(data.following);
          setLocation(data.location);
          setTwitter(data.twitter_username);
          setBlog(data.blog);
          setCompany(data.company);
        }
      })
    )
  };

    const darkMode = () => {
      setDarkModeB(!darkModeB);
    
  }

  return (
    <div className={darkModeB ? "backgroundLight" : "backgroundDark"}>
      <div className="header">
        <h1 className={darkModeB ? "devFinderLight" : "devFinderDark"}>
          devFinder
        </h1>
        <div className="d-flex darkMode"
        onClick={darkMode}
        
        >
          {darkModeB ? (
            <div className="d-flex">
              <h1 className="dark">Dark</h1>
              <FaMoon color="#697C9A" />
            </div>
          ) : (
            <div className="d-flex">
              <h1 className="light">Light</h1>
              <BsFillSunFill color="white" />
            </div>
          )}
        </div>
      </div>

      <div>
        <FiSearch color="#0079FF" className="searchIcon" />
        <input
          type="text"
          onChange={searchCheck}
          className={darkModeB ? "searchFieldLight" : "searchFieldDark"}
          placeholder="Search Github username.."
          min="1"
          max="1000"
        />
        <button onClick={searching} className="searchButton">
          search
        </button>
        {acountCheck ? <h1 className="notFound">No Result</h1> : null}
      </div>

      <div className={darkModeB ? "d-flex cardLight" : "d-flex cardDark"}>
        <img className="avatar" src={avatar} />
        <div>
          <div className={darkModeB ? "nameAndDateLight" : "nameAndDateDark"}>
            <h1 className="name">The {name}</h1>
            <p>
              Joined{joined.substr(8, joined.length - 18)}
              
              {month[parseInt(joined.substr(5, joined.length - 13)) - 1]}

              {joined.substr(0, joined.length - 16)}
            </p>
          </div>
          <p className="tagname">@{name}</p>
          {bio === null ? (
            <p className={darkModeB ? "bioLight" : "bioDark"}>
              This profile has no bio
            </p>
          ) : (
            <p className={darkModeB ? "bioLight" : "bioDark"}>{bio}</p>
          )}
          <div className={darkModeB ? "miniCardLight" : "miniCardDark"}>
            <div>
              <h1
                className={darkModeB ? "miniCardTextLight" : "miniCardTextDark"}
              >
                Repos
              </h1>
              <h1 className={darkModeB ? "numbersLight" : "numbersDark"}>
                {repos}
              </h1>
            </div>
            <div>
              <h1
                className={darkModeB ? "miniCardTextLight" : "miniCardTextDark"}
              >
                Followers
              </h1>
              <h1 className={darkModeB ? "numbersLight" : "numbersDark"}>
                {followers}
              </h1>
            </div>
            <div>
              <h1
                className={darkModeB ? "miniCardTextLight" : "miniCardTextDark"}
              >
                Following
              </h1>
              <h1 className={darkModeB ? "numbersLight" : "numbersDark"}>
                {following}
              </h1>
            </div>
          </div>
          <div className="additionalInfoSection">
            <div>
              {location === null ? (
                <div className="d-flex">
                  <MdLocationPin
                    color={darkModeB ? "#A4B4CC" : "#FFFFFF"}
                    className="location"
                  />
                  <h1
                    className={
                      darkModeB
                        ? "withoutAdditionalInfoLight"
                        : "withoutAdditionalInfoDark"
                    }
                  >
                    Not Available
                  </h1>
                </div>
              ) : (
                <div className="d-flex">
                  <MdLocationPin
                    color={darkModeB ? "#4B6A9B" : "#FFFFFF"}
                    className="location"
                  />
                  <h1
                    className={
                      darkModeB ? "additionalInfoLight" : "additionalInfoDark"
                    }
                  >
                    {location}
                  </h1>
                </div>
              )}
            </div>
            <div>
              {twitter === null ? (
                <div className="d-flex">
                  <AiOutlineTwitter
                    color={darkModeB ? "#A4B4CC" : "#FFF"}
                    className="twitter"
                  />
                  <h1
                    className={
                      darkModeB ? "additionalInfoLight" : "additionalInfoDark"
                    }
                  >
                    not Available
                  </h1>
                </div>
              ) : (
                <div className="d-flex">
                  <AiOutlineTwitter
                    color={darkModeB ? "#4B6A9B" : "#FFF"}
                    className="twitter"
                  />
                  <h1
                    className={
                      darkModeB ? "additionalInfoLight" : "additionalInfoDark"
                    }
                  >
                    {twitter}
                  </h1>
                </div>
              )}
            </div>

            <div>
              {blog === "" ? (
                <div className="d-flex">
                  <BsLink45Deg
                    color={darkModeB ? "#A4B4CC" : "#FFF"}
                    className="link"
                  />
                  <h1
                    className={
                      darkModeB
                        ? "withoutAdditionalInfoLight"
                        : "withoutAdditionalInfoDark"
                    }
                  >
                    Not Available
                  </h1>
                </div>
              ) : (
                <div className="d-flex">
                  <BsLink45Deg
                    color={darkModeB ? "#4B6A9B" : "#FFF"}
                    className="link"
                  />
                  <a
                    className={
                      darkModeB ? "additionalInfoLight" : "additionalInfoDark"
                    }
                  >
                    {blog}
                  </a>
                </div>
              )}
            </div>

            <div>
              {company === null ? (
                <div className="d-flex">
                  <HiBuildingOffice2
                    color={darkModeB ? "#A4B4CC" : "#FFF"}
                    className="company"
                  />
                  <h1
                    className={
                      darkModeB
                        ? "withoutAdditionalInfoLight"
                        : "withoutAdditionalInfoDark"
                    }
                  >
                    Not Available
                  </h1>
                </div>
              ) : (
                <div className="d-flex">
                  <HiBuildingOffice2
                    color={darkModeB ? "#4B6A9B" : "#FFF"}
                    className="company"
                  />
                  <h1
                    className={
                      darkModeB ? "additionalInfoLight" : "additionalInfoDark"
                    }
                  >
                    {company}
                  </h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevFinder;
