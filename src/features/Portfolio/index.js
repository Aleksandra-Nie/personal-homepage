import { useDispatch, useSelector } from "react-redux";
import { Header } from "./Header";
import { Projects } from "./Projects";
import { fetchProjects, selectProjectsState } from "./Projects/portfolioSlice";
import { useEffect } from "react";
import { Wrapper } from "./styled";
import { Loading } from "./Projects/Loading";
import { Error } from "./Projects/Error";

export const Portfolio = () => {
    const dispatch = useDispatch();
    const { loading, error, projects } = useSelector(selectProjectsState);

    useEffect(() => {
        dispatch(fetchProjects());
    }, [dispatch]);

    return (
        <>
            <Header></Header>
            {loading ? <Loading /> :
                error ? <Error /> :
                    <Wrapper>
                        {projects.map(project => (<Projects
                            key={project.id}
                            title={project.name}
                            description={project.description}
                            demoLink={project.homepage}
                            codeLink={project.html_url}
                        />))}
                    </Wrapper>
            }
        </>
    )
};