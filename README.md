## RAG Chat application using Azure Open AI 
This is sample application to build a chat app that uses GPT-4 model.  This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). 


## Getting Started

1. Create Azure Open AI deployment model for [GPT4](https://learn.microsoft.com/en-us/azure/ai-services/openai/chatgpt-quickstart?tabs=command-line%2Cjavascript-keyless%2Ctypescript-keyless%2Cpython-new&pivots=programming-language-studio)

2. Clone this application locally 
```git clone https://github.com/mksuni/rag-swa-app.git ```

3. Create .env.local file and add the Azure open AI endpoint information.
```
AZURE_OPENAI_API_KEY="AZURE-OPEN-AI-KEY"
AZURE_OPENAI_ENDPOINT="PROVIDE-AZURE-OPEN-AI-ENDPOINT"
AZURE_OPENAI_DEPLOYMENT_NAME="gpt-4"
```

## Test the app 

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

![alt text](<ChatApp.png>)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

