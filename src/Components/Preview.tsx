import { useEffect, useState } from "react";
import { useAppSelector } from "../hooks";
import { getEdit } from "../Store/selectors";
import Markdown from 'react-markdown';
import styled from "styled-components";

const StyledDiv = styled.div`    
    line-height: 200%;
    overflow-y: scroll;
    padding: 20px;    
    background: #050505;
    margin-top: 20px;
    height: 90vh;

    h1, h2, h3, h4, h5, h6 {
        padding-top: 20px;
        padding-bottom: 10px;
    }

    ol, ul {
        padding-left: 20px;
    }

    a {
        color: white;
        font-weight: 900;
        &::before {
            content: "Ссылка: ";
            font-weight: bold;
            text-decoration: none;
        }
    }

    hr {
        margin: 30px 0;
    }

    pre {
        background: #303030;
        border-radius: 10px;
        width: 100%;
        padding: 10px;
    }
`;

export default function Preview() {   
    const editState = useAppSelector(getEdit);
    const [markdown, setMarkdown] = useState("");
    
    useEffect(() => {
        setMarkdown(editState.markdown);
    }, [editState]);

    return (
        <div>
            <p>Preview:</p>
            <StyledDiv>
                <Markdown>{markdown}</Markdown>
            </StyledDiv>
        </div>
    );
}