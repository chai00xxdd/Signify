import {english_dict, heabrew_dict} from './words-dictionaries';
const getNumInStr = numPercent => {
  numPercent = numPercent + '';
  return parseInt([...numPercent].filter(c => c >= '0' && c <= '9').join(''));
};

const copyProps = (to, from) => {
  for (prop in from) to[prop] = from[prop];
};

const getPercent = (num, percent) => {
  return Math.round(num * (percent / 100));
};

const get_str_last_char = string => {
  if (string.length == 0) return '';
  return string[string.length - 1];
};

const count_char_sequence_from_str_end = (str, char) => {
  let count_char_seq_from_end = 0;
  for (let i = str.length - 1; i >= 0 && str[i] == char; i--) {
    count_char_seq_from_end++;
  }

  return count_char_seq_from_end;
};

const get_random_item_list = list => {
  if (list.length == 0) return null;
  return list[Math.floor(Math.random() * list.length)];
};

const get_last_word = str => {
  words = str.split(' ');
  return words.length == 0 ? null : words[words.length - 1];
};
const heabrew_letters = 'ךףןםאבגדהוזחטיכלמנסעפצקרשתץ';
const english_letters = 'abcdefghijklmnopqrstuvwxyz';
const is_heabrew_text = text => {
  return (
    [...text].filter(x => x != ' ' && !heabrew_letters.includes(x)).length == 0
  );
};

const is_english_text = text => {
  if (text == undefined) return true;
  const english_letters = 'abcdefghijklmnopqrstu vwxyz';
  text = text.toLowerCase();
  return [...text].filter(x => !english_letters.includes(x)).length == 0;
};

const to_heabrew_lower_case = he_text => {
  return [...he_text]
    .map(current_letter => {
      if (current_letter == 'ן') current_letter = 'נ';
      if (current_letter == 'ך') current_letter = 'ח';
      if (current_letter == 'ץ') current_letter = 'צ';
      if (current_letter == 'ף') current_letter = 'פ';
      if (current_letter == 'ם') current_letter = 'מ';
      return current_letter;
    })
    .join('');
};

const generate_word_from_letters = (letters, length) => {
  let word = '';
  for (let i = 0; i < length; i++) {
    let random_letter = get_random_item_list(letters);
    word += random_letter;
  }
  return word;
};

const get_random_word_noteq_prev_word = (prev_word, maxLength = 6) => {
  const english_text = is_english_text(prev_word);
  let rand_word = get_random_item_list(
    english_text ? english_dict : heabrew_dict,
  );
  while (rand_word == prev_word)
    rand_word = get_random_item_list(
      english_text ? english_dict : heabrew_dict,
    );
  return rand_word;
};

module.exports = {
  getNumInStr,
  copyProps,
  getPercent,
  count_char_sequence_from_str_end,
  get_str_last_char,
  get_random_item_list,
  get_last_word,
  is_heabrew_text,
  is_english_text,
  to_heabrew_lower_case,
  get_random_word_noteq_prev_word,
};
