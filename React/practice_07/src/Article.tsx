import { Info } from "./data";
import { FaQuoteRight } from "react-icons/fa";
interface ArticleProps {
  data: Info;
  translateParams: number;
}

const Article: React.FC<ArticleProps> = ({ data, translateParams }) => {
  return (
    <article
      style={{ transform: `translateX(${translateParams}%)`, opacity: 1 }}
    >
      <img src={data.image} alt={data.name} className="person-img"></img>
      <h5>{data.name}</h5>
      <p className="title">{data.title}</p>
      <p className="text">{data.quote}</p>
      <FaQuoteRight className="icon" />
    </article>
  );
};

export default Article;
