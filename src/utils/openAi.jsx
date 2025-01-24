import OpenAI from 'openai';
import { GPT_KEY } from './constants';

const openAi = new OpenAI({
  apiKey: GPT_KEY,
  dangerouslyAllowBrowser: true ,
});


export default openAi;