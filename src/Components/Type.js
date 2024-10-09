import Typewriter from "typewriter-effect";

const Type=({message})=>{
    return (
        <Typewriter
            options={{
                delay: 60
            }}
        
            onInit={(typewriter) => {
                typewriter
                    .typeString(message)
                    .start()
            }}
        />
    );
}

export default Type;