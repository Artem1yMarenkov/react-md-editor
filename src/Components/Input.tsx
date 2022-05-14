import styled from "styled-components";

const StyledInput = styled.input`
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

    &:focus {
        border: 1px solid #505050;
    }
`;

interface InputInterface {
    placeholder: string,
    type: string,
}

export default function Input({placeholder, type, ...props}: InputInterface) {
    return (
        <StyledInput 
            placeholder={placeholder} 
            type={type} 
            {...props}
        />
    );
}