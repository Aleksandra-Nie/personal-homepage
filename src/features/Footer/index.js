import { socialMedia } from "./socialMedia";
import {
    Wrapper,
    Caption,
    Contact,
    Description,
    SocialMedia,
    IconLink,
} from "./styled";

export const Footer = () => (
    <Wrapper>
        <Caption>LET'S TALK!</Caption>
        <Contact href="mailto:aniedzialkowska2@gmail.com">
            aniedzialkowska2@gmail.com
        </Contact>
        <Description>
            I’m always open to new projects and would love to collaborate!
            If you're working on a website, dashboard, or mobile app and need help bringing your ideas to life, feel free to reach out.
            Whether it’s a responsive design or a fully functional app, I’m here to make your vision a reality.
            Whenever I have the time, I’m ready to take on exciting new challenges and help you turn your ideas into something great.
            Let’s create something amazing together! 🙌
        </Description>
        <SocialMedia>
            {socialMedia.map(({ name, url, Icon }) => (
                <li key={name}>
                    <IconLink
                        as="a"
                        href={url}
                        title={name}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon />
                    </IconLink>
                </li>
            ))}
        </SocialMedia>
    </Wrapper>
);