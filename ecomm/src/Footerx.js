import React from "react";
import styled from "styled-components";

export const Footerx = ({}) => {
  return (
    <BackgroundRootRootRoot>
      <Footer>
        <Footer2>
          <Paragraph>
            Sign Up Today and get <br />
            Rs. 200 off
            {"  "}
            On your first order.
          </Paragraph>
          <WhiteFlexRow>
            <Text1>Enter your e-mail</Text1>
            <Arrowright
              src={`https://file.rendit.io/n/25fAjE2xy3SRlL5uMsPS.svg`}
            />
          </WhiteFlexRow>
          <Social src={`https://file.rendit.io/n/mAGH60kmyO20gXSGGTEc.svg`} />
        </Footer2>
        <CustommerCare1>
          <Text2>Collection</Text2>
          <Text3>
            Clothing
            <br />
            Tops
            <br />
            Sweaters
            <br />
            Dresses
            <br />
            Shoes
          </Text3>
        </CustommerCare1>
        <AboutUs1>
          <Text4>Company</Text4>
          <Paragraph1>
            Career at Toppers
            <br />
            About Toppers
            <br />
            Contact Us
            <br />
            Gift Cards
            <br />
            Blog
          </Paragraph1>
        </AboutUs1>
        <Policy1>
          <Text5>Need Help</Text5>
          <Paragraph2>
            Order Status
            <br />
            Shipping & Delivery
            <br />
            FAQ & Helps
            <br />
            Terms & Conditions
            <br />
            Legal & Privacy
          </Paragraph2>
        </Policy1>
        <Contact1>
          <Text6>Exclusive Services</Text6>
          <Group1>
            <Phoneincoming
              src={`https://file.rendit.io/n/lhUbQmYmudiN0EzoYPpq.svg`}
            />
            <Text7>Call Us: +1 666 8888</Text7>
          </Group1>
          <Group2>
            <Mail src={`https://file.rendit.io/n/pbvjmMkXQNoXyMX9M1Oi.svg`} />
            <Text8>Send us an email</Text8>
          </Group2>
          <Group3>
            <Mappin src={`https://file.rendit.io/n/hG1PGMwvtsay7BQOVJNK.svg`} />
            <Text9>See our stores</Text9>
          </Group3>
        </Contact1>
      </Footer>
      <BottomFooter1>
        <Line />
        <Text10>
          © 2022 <Text11>Toppers United</Text11>
          <Text12>. All Rights Reserved.</Text12>
        </Text10>
      </BottomFooter1>
    </BackgroundRootRootRoot>
  );
};
const BackgroundRootRootRoot = styled.div`
  height: 300px;
  gap: 54.9px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 14.5px 111px 14.5px 192px;
  background-color: #121212;
`;
const Footer = styled.div`
  width: 1142px;
  height: 165px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Footer2 = styled.div`
  width: 338px;
  height: 165px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 91.3px 0px 0px;
`;
const Paragraph = styled.div`
  width: 311px;
  height: 55.3px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 0px 19.4px 0px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  font-family: DM Sans;
  line-height: 28px;
  white-space: pre-wrap;
  text-transform: capitalize;
`;
const WhiteFlexRow = styled.div`
  width: 320px;
  height: 20.3px;
  gap: 45.2px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-self: flex-end;
  align-items: flex-start;
  margin: 0px 0px 26.5px 0px;
  padding: 9.99px 8.03px;
  border-width: 1px;
  border-radius: 5px;
  border-style: solid;
  border-color: #e5e5e5;
  background-color: #ffffff;
`;
const Text1 = styled.div`
  width: 251px;
  height: 17.9px;
  margin: 1.21px 0px 0px 0px;
  color: #aca6a6;
  font-size: 14px;
  font-family: Work Sans;
  line-height: 22px;
`;
const Arrowright = styled.img`
  width: 18.1px;
  height: 20.3px;
`;
const Social = styled.img`
  width: 167px;
  height: 21.8px;
  margin: 0px 0px 0px 0.25px;
`;
const CustommerCare1 = styled.div`
  height: 165px;
  gap: 9.97px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 73.3px 0px 0px;
`;
const Text2 = styled.div`
  width: 88.3px;
  height: 23.6px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: DM Sans;
  line-height: 24px;
  text-transform: capitalize;
`;
const Text3 = styled.div`
  width: 91.3px;
  height: 128px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 300;
  font-family: Work Sans;
  line-height: 26px;
`;
const AboutUs1 = styled.div`
  height: 165px;
  gap: 9.97px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 57.2px 0px 0px;
`;
const Text4 = styled.div`
  width: 89.3px;
  height: 23.6px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: DM Sans;
  line-height: 24px;
  text-transform: capitalize;
`;
const Paragraph1 = styled.div`
  width: 118px;
  height: 128px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 300;
  font-family: Work Sans;
  line-height: 26px;
`;
const Policy1 = styled.div`
  height: 165px;
  gap: 9.97px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 48.9px 0px 0px;
`;
const Text5 = styled.div`
  width: 92.3px;
  height: 23.6px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: DM Sans;
  line-height: 24px;
  text-transform: capitalize;
`;
const Paragraph2 = styled.div`
  width: 141px;
  height: 128px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 300;
  font-family: Work Sans;
  line-height: 26px;
`;
const Contact1 = styled.div`
  height: 165px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Text6 = styled.div`
  width: 181px;
  height: 23.6px;
  align-self: flex-end;
  margin: 0px 0px 9.97px 0px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: DM Sans;
  line-height: 24px;
  text-transform: capitalize;
`;
const Group1 = styled.div`
  width: 181px;
  height: 21.8px;
  gap: 5.77px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 11.8px 0px;
  padding: 0px 0.5px;
`;
const Phoneincoming = styled.img`
  width: 12px;
  height: 15.7px;
  margin: 2.82px 0px 0px 0px;
`;
const Text7 = styled.div`
  width: 158px;
  height: 21.8px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 300;
  font-family: Work Sans;
  line-height: 26px;
`;
const Group2 = styled.div`
  width: 182px;
  height: 21.8px;
  gap: 5.27px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 11.8px 0px;
`;
const Mail = styled.img`
  width: 13px;
  height: 13.6px;
  margin: 4.14px 0px 0px 0px;
`;
const Text8 = styled.div`
  width: 141px;
  height: 21.8px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 300;
  font-family: Work Sans;
  line-height: 26px;
`;
const Group3 = styled.div`
  width: 181px;
  height: 20.8px;
  gap: 5.77px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px 0.5px;
`;
const Mappin = styled.img`
  width: 12px;
  height: 15.7px;
  margin: 2.53px 0px 0px 0px;
`;
const Text9 = styled.div`
  width: 117px;
  height: 20.8px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 300;
  font-family: Work Sans;
  line-height: 26px;
`;
const BottomFooter1 = styled.div`
  width: 1064px;
  gap: 12.8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Line = styled.div`
  width: 1061px;
  height: 0.98px;
  align-self: flex-end;
  background-color: #e5e5e5;
`;
const Text10 = styled.div`
  width: 284px;
  height: 21.8px;
  color: #a0a0a0;
  font-size: 14px;
  font-family: DM Sans;
  line-height: 22px;
  white-space: pre-wrap;
`;
const Text11 = styled.div`
  display: contents;
  color: #ffffff;
  font-size: 14px;
  font-family: DM Sans;
  line-height: 22px;
`;
const Text12 = styled.div`
  display: contents;
  color: #a0a0a0;
  font-size: 14px;
  font-family: DM Sans;
  line-height: 22px;
`;
