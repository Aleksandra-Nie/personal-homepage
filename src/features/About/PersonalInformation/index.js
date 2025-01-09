import { Description, Title, Button, Caption, Wrapper, Envelope } from "./styled";
import { email } from "../../email";

export const PersonalInformation = () => (
    <Wrapper>
        <Caption>THIS IS</Caption>
        <Title>Aleksandra Niedziałkowska</Title>
        <Description>
            ⚛️💡 I’m a passionate Frontend Developer with a&nbsp;focus on building innovative websites.
            With growing expertise in frontend technologies, including React,
            I’m eager to take on new challenges.
            Currently, I’m exploring opportunities where I&nbsp;can contribute my skills to dynamic web projects and continue to grow professionally.
        </Description>
        <Button
            href={`mailto: ${email}`}
            title={email}
        >
            <Envelope />
            Hire Me
        </Button>
    </Wrapper>
);