export const openAIFunctionObject  = (todo: string)  =>  {
    
return {
    model: "gpt-3.5-turbo-16k",
    messages: [
      {
        role: "user",
        content: todo
          
      },
    ],
    functions: [
      {
        name: "todoExplained",
        description:
          "Analyze the todo and list 4 suggestions to help to do it and avoid procastination. In each suggestion, provide more details rather than just stateting",
        parameters: {
          type: "object",
          properties: {
            suggestion1: {
              type: "string",
              description: "Suggestion One",
              details: "string",
            },
            suggestion2: {
              type: "string",
              description:
                "Suggestion Two, add some useful details for this suggestion",
              details: "string",
            },
            suggestion3: {
              type: "string",
              description: "Suggestion Three",
              details: "string",
            },
            suggestion4: {
              type: "string",
              description: "Suggestion Four",
              details: "string",
            },
          },
          required: [
            "suggestion1",
            "suggestion2",
            "suggestion3",
            "suggestion4",
          ],
        },
      },
    ],
    function_call: "auto",
  }};

 

  export const openAIMeetingFunction  = (todo: string)  =>  {

    return {
      model: "gpt-3.5-turbo-16k",
      messages: [
        {
          role: "user",
          content: todo
        }
      ],
      functions: [
          {
              name: "todosExtracted",
              description: "I will copy meetings minutes and paste them to you and i want you to go through it and extract points which can be placed in to-do application. Try as much as possible to extract usefull to-do points. List them in points. It doesnt have be to be maximum 3 points, you can add them as long as you extract them in points",
              parameters: {
                  type:"object",
                  properties: {
                      todo1: {
                          type: "string",
                          description: "Todo One"
                      },
                        todo2: {
                          type: "string",
                          description: "Todo Two"
                      },
                        todo3: {
                          type: "string",
                          description: "Todo Three"
                      }
                  },
                  required: [
                      "todo1",
                      "todo2",
                      "todo3"
                  ]
              }
          }
      ],
      "temperature": 1,
      "max_tokens": 255,
      "top_p": 1,
      "frequency_penalty": 0,
      "presence_penalty": 0
    }
  }