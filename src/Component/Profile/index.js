import React from "react";
import {
  ProfileSkills,
  Profile1,
  ProfileTitle,
  ProfileSpan,
  ProfileList,
  ProfileItem,
  Span,
  SpanWeb,
  Skills,
  SkillTitle,
  SkillSpan,
  SkillsDesc,
  SkillsBar,
  BarTitle,
  BarPerc,
  BarParent,
  ParentSpan1,
  ParentSpan2,
  ParentSpan3,
} from "./style.js";

const Profile = () => {
  return (
    <div>
      <ProfileSkills>
        <div class="container">
          <Profile1>
            <ProfileTitle>
              <ProfileSpan>My </ProfileSpan>Profile
            </ProfileTitle>
            <ProfileList>
              <ProfileItem>
                <Span>Name</Span>
                Ahmed hamdy
              </ProfileItem>
              <ProfileItem>
                <Span>Birthday</Span>
                8/6/1993
              </ProfileItem>
              <ProfileItem>
                <Span>Address</Span>
                el - khanka
              </ProfileItem>
              <ProfileItem>
                <Span>Phone</Span>
                4444 5555 6666
              </ProfileItem>
              <ProfileItem>
                <Span>Email</Span>
                ahmed@hamdy.com
              </ProfileItem>
              <ProfileItem>
                <Span>Website</Span>
                <SpanWeb>www.google.com</SpanWeb>
              </ProfileItem>
            </ProfileList>
          </Profile1>

          <Skills>
            <SkillTitle>
              Some <SkillSpan>skills</SkillSpan>
            </SkillTitle>
            <SkillsDesc>
              Lorem ipsum dolor sit amen, consecrator adipisicing elit. Quos
              praesentium blanditiis esse cupiditate, omnis similique.
            </SkillsDesc>
            <SkillsBar>
              <BarTitle>Bootstrap</BarTitle>
              <BarPerc>100%</BarPerc>
              <BarParent>
                <ParentSpan1></ParentSpan1>
              </BarParent>
            </SkillsBar>

            <SkillsBar>
              <BarTitle>Css</BarTitle>
              <BarPerc>90%</BarPerc>
              <BarParent>
                <ParentSpan2></ParentSpan2>
              </BarParent>
            </SkillsBar>

            <SkillsBar>
              <BarTitle>Photoshop</BarTitle>
              <BarPerc>80%</BarPerc>
              <BarParent>
                <ParentSpan3></ParentSpan3>
              </BarParent>
            </SkillsBar>
          </Skills>
        </div>
      </ProfileSkills>
    </div>
  );
};
export default Profile;
