import { Bullet, Header, List, ListItem, Wrapper, Divider } from "./styled";

export const Section = ({ title, skills }) => (
    <Wrapper>
        <Header>{title}</Header>
        <Divider />
        <List>
            {skills.map((skill) => (
                <ListItem key={skill}>
                    <Bullet />
                    {skill}
                </ListItem>))}
        </List>
    </Wrapper>
);