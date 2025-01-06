import { Wrapper, Header, Message, Button, AlertIcon } from "./styled";

export const Error = () => (
    <Wrapper>
        <AlertIcon />
        <Header>Ooops! Something went wrong... </Header>
        <Message>
            Sorry, failed to load Github projects.
            <br />
            You can check them directly on Github.
        </Message>
        <Button
            href="https://github.com/Aleksandra-Nie"
            target="_blank"
            rel="noreferrer noopener"
        >
            Go to Github
        </Button>
    </Wrapper>
);