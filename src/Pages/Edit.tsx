import EditArea from "../Components/EditArea";
import Input from "../Components/Input";
import styled from "styled-components";
import Preview from "../Components/Preview";

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: 49% 49%;
    justify-content: space-between;
`;

export default function Edit() {
    return (
        <>
            <h1>MD Editor</h1>
            <Input placeholder="Page Name" type="text"/>
            <StyledDiv>
                <EditArea />
                <Preview />
            </StyledDiv>
        </>
    );
}