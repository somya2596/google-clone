/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-empty-pattern */
import React, { useEffect, useState } from "react";

import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import "../components/Search.css";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../redux/StateProvider";
import { actionTypes } from "../redux/reducer";

function Search({ hidebuttons = false, inp = "" }) {
  const [{}, dispatch] = useStateValue();

  // to keep track of input tracks we use state => state is basically how you write a variable inside of react
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const search = (e) => {
    e.preventDefault();

    //do something with input...come back nd fix

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    //useNavigate is a replacement of useHistory to redirect
    navigate("/search");
  };

  useEffect(() => {
    setInput(inp);
  }, []);

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>

      {!hidebuttons ? (
        <div className="search_buttons">
          {/* variant="outlined" => is a material UI PROP to give outline to a Button*/}
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm feeling lucky</Button>
        </div>
      ) : (
        <div className="search_buttons">
          <Button
            className="search_buttonsHidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search_buttonsHidden" variant="outlined">
            I'm feeling lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
