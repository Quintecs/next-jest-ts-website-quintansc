import { render, screen } from '@testing-library/react';
const makeRender = (children: JSX.Element)=>{
    render(
        <>
            {children}
        </>
    );
}

export {
    makeRender,
    screen
}