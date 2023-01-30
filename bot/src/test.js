import {  useState } from "react";
import ChatBot from 'react-simple-chatbot';


function Test(){
    const [userInput, setUserInput] = useState({});

    const handleChange = (value) => {
        setUserInput({ ...userInput, [value.step]: value });
      
    };


        return (
         <ChatBot
         steps={[
            {
              id: '1',
              message: 'Enter a string:',
              trigger: 'get-input',
            },
            {
              id: 'get-input',
              user: true,
              trigger: ({ value, steps }) => {
                setUserInput(value);
                return 'display-input';
              },
            },
            {
              id: 'display-input',
              message: `You entered: ${userInput['get-input']}`,
              end: true,
            },
          ]}
              onInput={handleChange}
         />
          )
    
}


export default Test;