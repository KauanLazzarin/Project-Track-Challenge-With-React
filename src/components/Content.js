import styled from 'styled-components';
import ContentImage from './../assets/illustration-devices.svg';

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ImageContainer = styled.div`
    width: 50%;
    overflow: hidden;
    background: #eef3f6;
    border-radius: 60px 0 0 60px;
    box-shadow: 2px 2px 20px 1px  #a595ff;
    padding: 10vh 0;
`;

const ContentContainer = styled.div`
    margin-top: 10vh;
    padding: 0 8vw;
    width:50%;
    display: flex;
    align-items: center;
    text-align: left;
    flex-direction: column;
`;

const TextContainer = styled.div`
    width: 56%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const TopStrongText = styled.strong`
    font-size: 20px;
    font-family: 'Barlow Condensed';
    font-weight: bold;
    background-color: #131a38;
    border-radius: 50px;
    padding: 5px 15px;
    color: white;
`;

const TopText= styled.p`
    font-size: 22px;
    font-family: 'Barlow';
    font-weight: normal;
    color:hsl(230, 11%, 40%);
    background: none;
`;

const Title = styled.h1 `
    font-size: 78px;
    font-family: 'Barlow Condensed';
    color: #131a38;
    width: 90%;
    margin-left: 12.6vw;
    margin-top: 30px;
`;

const BottomText = styled.p`
    font-size: 25px;
    font-family: 'Barlow';
    font-weight:  normal;
    color: hsl(231, 7%, 65%);
    width: 53%;
    margin-top: 3vh;
`;

const ContentLink = styled.a`
    padding: 10px 25px;
    background-color: hsl(0, 100%, 68%);
    font-size: 24px;
    color: white;
    font-family: 'Barlow Condensed';
    font-weight: bold;
    align-self: flex-start;
    margin-left: 8vw;
    margin-top: 10vh;
    border-radius: 8px;
    cursor: pointer;
`;

const Image = styled.img`
    width: 100%;
`

export default function Content () {
    return (
        <Container>
            <ContentContainer>
                
                <TextContainer>
                    <TopStrongText>NEW</TopStrongText>
                    <TopText>MONOGRAPH DASHBOARD</TopText>
                </TextContainer>

                <Title>POWERFUL INSIGHTS INTO YOUR TEAM</Title>
                <BottomText>Project planning and time tracking for agile teams</BottomText>

                <ContentLink>SCHEDULE A DEMO</ContentLink>

            </ContentContainer>


            <ImageContainer>
                <Image src={ContentImage} />
            </ImageContainer>
        </Container>
    )
} ;