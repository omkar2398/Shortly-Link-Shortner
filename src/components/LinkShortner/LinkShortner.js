import React, { useState, useEffect } from "react";
import axios from "axios";

import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  Form,
  Layout,
  SearchBar,
  Button,
  LinkList,
  CopyBtn,
  Paragraph,
} from "./LinkShortner.styled";

const Searchbar = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 3000);
    }
  }, [copied]);

  const handleOnClick = async (e) => {
    console.log(query);
    if (query !== "") {
      try {
        setLoading(true);
        let res = await axios.get(
          `https://api.shrtco.de/v2/shorten?url=${query}`
        );
        console.log(res.data);
        setResponse(res.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <>
      <Form>
        <img
          src={process.env.PUBLIC_URL + "assets/bg-shorten-desktop.svg"}
          alt="bg-short"
        />
        <Layout>
          <SearchBar
            input
            type="text"
            placeholder="Shorten a link here..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          ></SearchBar>
          <Button onClick={handleOnClick}>
            {loading ? "Shortening...." : "Shorten It!"}
          </Button>
        </Layout>
      </Form>

      <LinkList>
        <Paragraph>{response ? response?.result?.short_link : ""}</Paragraph>
        <CopyToClipboard
          text={response?.result?.short_link}
          onCopy={() => setCopied(true)}
        >
          <CopyBtn>{copied ? "Copied" : "Copy"}</CopyBtn>
        </CopyToClipboard>
      </LinkList>
    </>
  );
};

export default Searchbar;
