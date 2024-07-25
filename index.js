import OpenAI from "openai";
import config from "./config.js";
import gTTS from "gtts/lib/gTTS.js";
import path from 'path';
import crypto from 'crypto';

const textContent = {
  text: "The quick brown fox jumps over the lazy dog",
  model: 2 // 1 is going to make a short summary and then convert it to audio file and 2 is just going to take the text and convert it to audio file
}

const openai = new OpenAI({ apiKey: config.OpenAI.apiKey });

async function TextInfo(message) {
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: message }],
      model: config.OpenAI.model,
      temperature: config.OpenAI.temperature,
      max_tokens: config.OpenAI.max_tokens,
    });
    return completion.choices[0].message.content;
  } catch (error) { throw error; }
}

async function generateText(text) {
  try {
    return await TextInfo(`Make me a short Info About: ${text}, around 500 characters long.`);
  } catch (err) {
    console.error(err);
  }
}

const text = textContent.model === 1 ? await generateText(textContent.text) : textContent.text;
const gtts = new gTTS(text, 'en');
const filename = crypto.randomBytes(16).toString('hex') + '.mp3';
const filepath = path.join('audio', filename);

gtts.save(filepath, function (err) {
  if (err) { console.error(err); }
  console.log('Audio has been generated and saved');
});
