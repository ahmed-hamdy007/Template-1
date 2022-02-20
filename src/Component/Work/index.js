import React from "react";
import {
  WorkSection,
  WorkTitle,
  Span,
  WorkPart,
  Icon,
  PartTitle,
  Line,
  PartDesc,
} from "./style";
import axios from "axios";
class Work extends React.Component {
  state = {
    works: [],
  };
  componentDidMount() {
    axios.get("js/data.json").then((rec) => {
      this.setState({ works: rec.data.works });
    });
  }
  render() {
    const { works } = this.state;
    const workList = works.map((workItem) => {
      return (
        <WorkPart first={workItem.id} key={workItem.id}>
          <Icon className={workItem.icon_name}></Icon>
          <PartTitle>{workItem.title}</PartTitle>
          <Line />
          <PartDesc>{workItem.body}</PartDesc>
        </WorkPart>
      );
    });
    return (
      <WorkSection>
        <div className="container">
          <WorkTitle>
            <Span>My</Span> Work
          </WorkTitle>
          {workList}
        </div>
      </WorkSection>
    );
  }
}
export default Work;
