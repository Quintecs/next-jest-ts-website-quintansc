import { AnimationDiv, CircleGreen, CircleRed, CircleYellow, ConsoleContainer } from "./style";

const ConsoleAnimation = ()=>{
    return <ConsoleContainer>
        <div style={{ width: "70px", justifyContent: "space-between"}}><CircleRed/> <CircleGreen/> <CircleYellow/></div>
        <AnimationDiv><pre>$  </pre><span>console</span><p>.log</p>(<small>'Follow me on social media'</small>)</AnimationDiv>
    </ConsoleContainer>
}

export default ConsoleAnimation