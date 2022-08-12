export const longMonths = [
  "január",
  "február",
  "március",
  "április",
  "május",
  "június",
  "július",
  "augusztus",
  "szeptember",
  "október",
  "november",
  "december",
];
export const shortMonths = [
  "jan.",
  "febr.",
  "márc.",
  "ápr.",
  "máj.",
  "jún.",
  "júl.",
  "aug.",
  "szept.",
  "okt.",
  "nov.",
  "dec.",
];

const customDateFormats = function (date) {
  return {
    short: `${date.getFullYear()}. ${
      shortMonths[date.getMonth()]
    } ${date.getDate()}. ${date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}`,
    long: `${date.getFullYear()}. ${
      longMonths[date.getMonth()]
    } ${date.getDate()}. ${date.toLocaleTimeString()}`,
  };
};

export default customDateFormats;
