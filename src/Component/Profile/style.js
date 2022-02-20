import styled from "styled-components";
//{ProfileSkills, Profile, ProfileTitle, ProfileSpan, ProfileList, ProfileItem, Span, SpanWeb ,}
export const ProfileSkills = styled.div`
  padding: 50px 0;
  overflow: hidden;
`;
export const Profile1 = styled.div`
  width: 50%;
  float: left;
`;
export const ProfileTitle = styled.h2`
  font-size: 40px;
  margin-bottom: 20px;
`;
export const ProfileSpan = styled.span`
  font-weight: normal;
`;
export const ProfileList = styled.ul`
  list-style: none;
`;
export const ProfileItem = styled.li`
  margin-bottom: 8px;
`;

export const Span = styled.span`
  display: inline-block;
  width: 100px;
  font-weight: bold;
`;
export const SpanWeb = styled.span`
  font-weight: normal;
  color: #eb5424;
`;
//skills part
// Skills,SkillTitle,SkillSpan,SkillsDesc,SkillsBar,BarTitle,BarPerc,BarParent,ParentSpan,Sp1,Sp2,Sp3
export const Skills = styled.div`
  width: 50%;
  float: left;
`;

export const SkillTitle = styled.h2`
  font-size: 40px;
  margin-bottom: 20px;
`;
export const SkillSpan = styled.span`
  font-weight: normal;
`;
export const SkillsDesc = styled.p`
  font-size: 15px;
  color: #888;
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const SkillsBar = styled.div`
  overflow: hidden;
  padding: 10px 0;
  margin-bottom: 10px;
`;

export const BarTitle = styled.span`
  float: left;
`;

export const BarPerc = styled.span`
  float: right;
  margin-right: 100px;
`;

export const BarParent = styled.div`
  height: 2px;
  clear: both;
  background: #f8f8f8;
  position: relative;
  top: 5px;
`;

export const ParentSpan1 = styled.span`
  background: #eb5424;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
`;
export const ParentSpan2 = styled.span`
  background: #eb5424;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  bottom: 0;
  width: 90%;
`;
export const ParentSpan3 = styled.span`
  background: #eb5424;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  bottom: 0;
  width: 80%;
`;
