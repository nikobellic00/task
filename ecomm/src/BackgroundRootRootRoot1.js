import React from "react";
import styled from "styled-components";

export const BackgroundRootRootRoot1 = ({}) => {
  return (
    <BackgroundRootRootRoot>
      <Text1>Corporate</Text1>
      <HomepageShop1>
        Homepage
        {"  "}/{"  "}
        <HomepageShop>Shop</HomepageShop>
      </HomepageShop1>
    </BackgroundRootRootRoot>
  );
};

const BackgroundRootRootRoot = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 47px 637px 48.2px 637px;
  background-color: #f6f6f6;
`;
const Text1 = styled.div`
  width: 166px;
  height: 40px;
  color: #121212;
  font-size: 36px;
  font-weight: 500;
  font-family: Urbanist;
  line-height: 44px;
  text-align: center;
`;
const HomepageShop1 = styled.div`
  width: 125px;
  height: 20px;
  align-self: flex-end;
  margin: 0px 20px 0px 0px;
  color: #a0a0a0;
  font-size: 14px;
  font-family: Urbanist;
  line-height: 22px;
  white-space: pre-wrap;
`;
const HomepageShop = styled.div`
  display: contents;
  color: #121212;
  font-size: 14px;
  font-family: Urbanist;

  `;