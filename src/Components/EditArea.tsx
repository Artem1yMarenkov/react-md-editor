import { FormEvent } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getEdit } from "../Store/selectors";
import { setValue } from "../Store/slices/editSlice";

const StyledTextarea = styled.textarea`
    width: 100%;
    height: 90vh;
    display: flex;
    transition: .1s;
    background: 0;
    border: 1px solid #303030;
    font-size: 16px;
    background: #050505;
    padding: 20px;
    color: white;
    margin: 20px 0;
    outline: none;
    resize: none;
    line-height: 150%;
    color: #bababa;

    &:focus {
        border: 1px solid #505050;
        color: white;
    }
`;

export default function EditArea() {
    const {markdown} = useAppSelector(getEdit);
    const dispatch = useAppDispatch();

    const handleChange = (event: FormEvent<HTMLTextAreaElement>) => {
        dispatch(setValue(event.currentTarget.value));
    };

    const handleFocus = (event: FormEvent<HTMLTextAreaElement>) => {
        console.log(event);
    }

    return (
        <div>
            <p>Edit Area:</p>
            <StyledTextarea 
                onChange={handleChange}
                onFocus={handleFocus} 
                value={markdown}
            />
        </div>
    );
}