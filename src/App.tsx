import NewsSnippet from "./components/NewsSnippet";
import { IData_SnippetNews } from "./types/newsTypes";

const mockNews: IData_SnippetNews[] = [
  {
    ID: 1,
    TI: "OpenAI представила GPT-5: что нового?",
    AB: "Компания OpenAI анонсировала новую модель GPT-5, обладающую улучшенными когнитивными способностями и расширенной поддержкой мультимодальности.",
    URL: "https://openai.com/gpt-5",
    DOM: "openai.com",
    DP: "2025-04-14T12:34:56Z",
    LANG: "ru",
    REACH: 124500,
    KW: [
      { value: "OpenAI", count: 5 },
      { value: "GPT-5", count: 3 },
      { value: "ИИ", count: 2 },
    ],
    AU: ["Иван Иванов"],
    CNTR: "USA",
    CNTR_CODE: "US",
    SENT: "positive",
    TRAFFIC: [
      { value: "India", count: 0.779 },
      { value: "Mexico", count: 0.036 },
      { value: "Brazil", count: 0.022 },
      { value: "Russia", count: 0.018 },
    ],
    FAV: "https://openai.com/favicon.ico",
    HIGHLIGHTS: [
      "Компания <kw>OpenAI</kw> объявила о запуске <kw>GPT-5</kw>.",
      "Новая модель отличается высокой <kw>точностью</kw> и скоростью.",
    ],
  },
  {
    ID: 260855433,
    TI: "Mobile bankers left vulnerable: 47% of UK consumers manage finances on insecure smartphones",
    AB: "Mobile bankers left vulnerable: 47% of UK consumers manage finances on insecure smartphones\nAugust 2020 by Kaspersky\nNew research has revealed that UK consumers carry out online banking on smartphones and devices that are potentially vulnerable to a security breach, despite making sure they keep their desktop or laptop computers safe. In a study commissioned by Kaspersky, nearly half (47%) of smartphone owners who use a banking app don’t protect their mobile device with antivirus or security sof...",
    URL: "https://www.globalsecuritymag.com/Mobile-bankers-left-vulnerable-47,20200819,101944.html",
    DP: "2025-03-06T21:00:00",
    DOM: "globalsecuritymag.com",
    SENT: "negative",
    LANG: "en",
    AU: [],
    FAV: "https://img.icons8.com/?size=100&id=53372&format=png&color=000000",
    KW: [
      {
        value: "antivirus",
        count: 10,
      },
      {
        value: "kaspersky",
        count: 5,
      },
      {
        value: "new",
        count: 1,
      },
    ],
    HIGHLIGHTS: [
      "…20 by <kw>Kaspersky</kw> <kw>New</kw> research has revealed that UK consumers carry out online banking on smartphones and devices that are potentially vulnerable to a security breach, despite making sure they keep their desktop or laptop computers safe. In a study commissioned by <kw>Kaspersky</kw>…",
      "…with <kw>antivirus</kw> or security software. More than half (52%) of UK smartphone owners who access bank accounts with their mobile device are worried about their banking app being hacked if their phone was lost or stolen. Despite that fear, 47%[2] are banking on devices without <kw>antivirus</kw>…",
      "…hone with <kw>antivirus</kw> protection. Surprisingly, one fifth (21%) of adults overall, and one third (33%) of Generation Z, believe their phone can’t be hacked, despite the level of mobile malware attacks rising over the past 12 months. Around two-in-five of those without <kw>antivirus</kw> and s…",
    ],
    REACH: 2392,
    CNTR: "France",
    CNTR_CODE: "fr",
    TRAFFIC: [
      {
        value: "India",
        count: 0.779,
      },
      {
        value: "United States of America",
        count: 0.101,
      },
      {
        value: "Mexico",
        count: 0.036,
      },
    ],
  },
];

const App: React.FC = () => {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 24 }}>
      {/* <NewsSnippet data={} /> */}
      {mockNews.map((news) => (
        <NewsSnippet data={news} />
      ))}
    </div>
  );
};
export default App;
