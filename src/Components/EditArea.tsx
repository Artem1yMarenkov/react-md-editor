import { FormEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getEdit } from "../Store/selectors";
import { setMarkdownAsync } from "../Store/slices/editSlice";

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

// TODO: Text-formatting options
export default function EditArea() {
    const {markdown} = useAppSelector(getEdit);
    const dispatch = useAppDispatch();

    const [textareaValue, setTextareaValue] = useState<string>(markdown);
    
    useEffect(() => {
        dispatch(setMarkdownAsync(textareaValue));
    }, [textareaValue]);

    const handleChange = (event: FormEvent<HTMLTextAreaElement>) => {
        const {value} = event.currentTarget;
        setTextareaValue(value);
    };

    return (
        <div>
            <p>Edit Area:</p>
            <StyledTextarea 
                onChange={handleChange}
                value={textareaValue}
            />
        </div>
    );
}