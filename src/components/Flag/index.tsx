import { FlagBack, FlagFront } from "./style";

const Flag = ({ type }: FlagProps): React.ReactElement => {
    if (type === 'front'){
        return (
            <FlagFront> Front-End </FlagFront>
        )
    } else if (type === 'back'){ 
        return (
            <FlagBack> Back-End </FlagBack>
        )
    } else {
        return <></>
    }
    
}

export default Flag;