import axios from "axios";
import { openAIFunctionObject } from "./openAI/openai";
import { addAITips } from "../components/redux/slices/toDoSlice";
import { useAppDispatch } from "../components/redux/Hooks";

export function transformObject(input: {}) {
    return Object.keys(input).map((key, index) => {
      const suggestion = input[key];
      const tip = `Tip ${index + 1}`;
  
      return { suggestion, tip };
    });
  }

  const useGenerateTips = () => {
    const dispatch = useAppDispatch(); 
  
    const generatedTipsByAI = async(id: string, todo:string) => {
      const url = 'https://api.openai.com/v1/chat/completions';
      const params = {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(openAIFunctionObject(todo)),
      };
  
      try {
        const response = await axios.post(url, params.body, { headers: params.headers });
        const res = JSON.parse(response.data.choices[0].message.function_call.arguments);
    
        dispatch(addAITips({ id, data: transformObject(res) }));
      } catch (error) {
        console.log('Error', error);
      }
    };

    return [generatedTipsByAI];
  
  };
  
  export default useGenerateTips;