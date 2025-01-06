import { Wrapper, ProjectTitle, Description, Link, LinkContainer, LinkTitle } from "./styled";

export const Projects = ({ title, description, demoLink, codeLink }) => (
    <Wrapper>
        <ProjectTitle>{title}</ProjectTitle>
        <Description>{description}</Description>
        <LinkContainer>
            {demoLink && (
                <>
                    <LinkTitle>
                        Demo:
                    </LinkTitle>
                    <Link
                        href={demoLink}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        {demoLink}
                    </Link>
                </>
            )}
            <LinkTitle>
                Code:
            </LinkTitle>
            <Link
                href={codeLink}
                target="_blank"
                rel="noreferrer noopener"
            >
                {codeLink}
            </Link>
        </LinkContainer>
    </Wrapper>
);