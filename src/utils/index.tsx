import { render, screen, fireEvent } from '@testing-library/react';
const makeRender = (children: JSX.Element)=>{
    render(
        <>
            {children}
        </>
    );
}

export {
    makeRender,
    screen, fireEvent
}