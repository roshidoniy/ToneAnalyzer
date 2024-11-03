import Groq from "groq-sdk";
const groq = new Groq({ apiKey: import.meta.env.VITE_GROQ_API_KEY, dangerouslyAllowBrowser: true });

type MessageType = {
  message: string
}

  /**
   * Uses the Groq chat API to detect the tone of a given sentence.
   * @param context The sentence to detect the tone of.
   * @returns A message in string.
   */
export async function getMessage(context: string): Promise<MessageType> {
  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You must detect the tone of the context you will be given with only one sentence",
      },
      {
        role: "user",
        content: context,
      }
    ],
    model: "llama3-8b-8192",
  });
  return {message: chatCompletion.choices[0]?.message?.content || ""}
}