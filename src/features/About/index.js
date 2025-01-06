import { Image, Wrapper } from "./styled";
import picture from '../../images/picture.jpg';
import { PersonalInformation } from "./PersonalInformation";

export const About = () => (
    <Wrapper>
        <Image src={picture} alt="Aleksandra Niedziałkowska" />
        <PersonalInformation />
    </Wrapper>
);