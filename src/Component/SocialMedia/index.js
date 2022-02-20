import React, { useState, useEffect } from "react";
import {
  SocialMedia1,
  Social,
  Icon,
  SocialDesc,
  Span,
  SpanInfo,
} from "./style";

import axios from "axios";

const SocialMedia = () => {
  const [social, setSocial] = useState([]);
  useEffect(() => {
    axios.get("js/data.json").then((rec) => {
      setSocial(rec.data.social);
    });
  }, []);
  const socialList = social.map((socialItem) => {
    return (
      <Social item={socialItem.id} key={socialItem.id}>
        <Icon className={socialItem.icon}></Icon>
        <SocialDesc>
          <Span>{socialItem.title}</Span>
          <SpanInfo>{socialItem.body}</SpanInfo>
        </SocialDesc>
      </Social>
    );
  });
  return <SocialMedia1>{socialList}</SocialMedia1>;
};

export default SocialMedia;
