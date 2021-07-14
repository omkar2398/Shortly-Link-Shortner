import React from "react";
import {
  Layout,
  Div,
  Heading,
  Para,
  Modal1,
  Modal2,
  Modal3,
  Heading1,
  Heading2,
  Heading3,
  Para1,
  Para2,
  Para3,
  Circle,
} from "./AdvancedStatistics.styled";

const Content = () => {
  return (
    <>
      <Layout>
        <Heading>Advanced Statistics</Heading>
        <Para>
          Track how your links are performing accross the web with our advance
          statistics dashboard.
        </Para>
        <Div>
          <Modal1>
            <Circle>
              <img
                src={
                  process.env.PUBLIC_URL + "assets/icon-brand-recognition.svg"
                }
                alt="brand-recognition"
              />
            </Circle>
            <Heading1>Brand Recognition</Heading1>
            <Para1>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </Para1>
          </Modal1>

          <Modal2>
            <Circle>
              <img
                src={
                  process.env.PUBLIC_URL + "assets/icon-detailed-records.svg"
                }
                alt="detailed-record"
              />
            </Circle>
            <Heading2>Detailed Records</Heading2>
            <Para2>
              Gain insights into who is clicking your links.Knowing when and
              where people engage with your content helps inform better
              decisions.
            </Para2>
          </Modal2>

          <Modal3>
            <Circle>
              <img
                src={
                  process.env.PUBLIC_URL + "assets/icon-fully-customizable.svg"
                }
                alt="fully-custom"
              />
            </Circle>
            <Heading3>Fully Customizable</Heading3>
            <Para3>
              Improve brand awareness and content discoverability through
              customizable links.Supercharging audience engagement.
            </Para3>
          </Modal3>
        </Div>
      </Layout>
    </>
  );
};

export default Content;
