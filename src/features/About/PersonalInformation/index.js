import { Description, Title, Button, Caption, Wrapper, Envelope } from "./styled";

export const PersonalInformation = () => (
    <Wrapper>
        <Caption>THIS IS</Caption>
        <Title>Aleksandra Niedziałkowska</Title>
        <Description>
            ⚛️💡 I’m a passionate Frontend Developer with a focus on building innovative websites.
            With growing expertise in frontend technologies, including React,
            I’m eager to take on new challenges.
            Currently, I’m exploring opportunities where I can contribute my skills to dynamic web projects and continue to grow professionally.
        </Description>
        <Button
            href="mailto: aniedzialkowska2@gmail.com"
            title="aniedzialkowska2@gmail.com"
        >
            <Envelope />
            Hire Me
        </Button>
    </Wrapper>
);