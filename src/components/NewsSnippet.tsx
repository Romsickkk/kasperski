import styles from "./NewsSnippet.module.scss";
import { IData_SnippetNews } from "../types/newsTypes";
import { useState } from "react";
import { IoMdArrowDropleft } from "react-icons/io";

interface Props {
  data: IData_SnippetNews;
}

const NewsSnippet: React.FC<Props> = ({ data }) => {
  const [expandedHighlights, setExpandedHighlights] = useState<boolean>(false);

  const allHighlightsText = data.HIGHLIGHTS.map((h) =>
    h.replace(/<kw>/g, "<mark>").replace(/<\/kw>/g, "</mark>")
  ).join("\t");

  const limit = 200;
  const shouldTruncate = allHighlightsText.length > limit;
  const previewText = shouldTruncate
    ? allHighlightsText.slice(0, limit) + "..."
    : allHighlightsText;

  const toggleExpand = () => {
    setExpandedHighlights((prev) => !prev);
  };
  const date = new Date(data.DP).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const reach =
    data.REACH >= 1000
      ? Math.floor(data.REACH / 1000) + "k"
      : data.REACH.toString();

  const traffic = data.TRAFFIC.sort((a, b) => b.count - a.count)
    .slice(0, 3)
    .map((item) => {
      const percent = (((item.count * data.REACH) / data.REACH) * 100).toFixed(
        2
      );
      return `${item.value} ${percent}% `;
    });

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "#52c41a";
      case "negative":
        return "#f5222d";
      default:
        return "#d9d9d9";
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.stats}>
        <div className={styles.leftGroup}>
          <div className={styles.subtitle}>{date}</div>
          <div>{reach} Reach</div>
          <div>Top traffic: {traffic}</div>
        </div>
        <div
          className={styles.sentiment}
          style={{ backgroundColor: getSentimentColor(data.SENT) }}
        >
          {data.SENT}
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.titleBox}>
          <a className={styles.title} href={data.URL}>
            {data.TI}
          </a>
        </div>
      </div>
      <div className={styles.linkInfo}>
        <img src={data.FAV} alt="favicon" className={styles.favicon} />
        <a href="">
          <div>{data.DOM}</div>
        </a>
      </div>

      <div className={styles.highlightBox}>
        <p
          className={styles.highlight}
          dangerouslySetInnerHTML={{
            __html:
              expandedHighlights || !shouldTruncate
                ? allHighlightsText
                : previewText,
          }}
        />
        {shouldTruncate && (
          <button className={styles.toggle} onClick={toggleExpand}>
            {expandedHighlights ? "Show less" : "Show more"}{" "}
            <span>
              <IoMdArrowDropleft
                className={
                  expandedHighlights ? styles.arrowExpanded : styles.arrow
                }
              />
            </span>
          </button>
        )}
      </div>

      <div className={styles.tags}>
        {data.KW.map((kw, i) => (
          <span key={i} className={styles.tag}>
            {kw.value} ({kw.count})
          </span>
        ))}
      </div>
      <div className={styles.footer}>
        <a
          href={data.URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Read news
        </a>
        <span className={styles.reach}>
          Охват: {data.REACH.toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default NewsSnippet;
