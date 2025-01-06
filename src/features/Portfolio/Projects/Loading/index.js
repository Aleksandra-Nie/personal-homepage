import { Wrapper, Message, SpinnerIcon } from "./styled";

export const Loading = () => (
    <Wrapper>
        <Message>Please wait, projects are being loaded...</Message>
        <SpinnerIcon />
    </Wrapper>
);