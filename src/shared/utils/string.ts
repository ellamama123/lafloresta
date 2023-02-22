import { convert } from 'html-to-text';

export function extractTextFromHTML(s: string) {
  return convert(s, {
    wordwrap: null,
  });
}
