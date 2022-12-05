import { Article } from "./Article.jsx";

const Articles = (props) => {
  const results = props.searchResults.map((data) => (
    <Article key={data._id} data={data} />
  ));
  const content = results?.length ? (
    results
  ) : (
    <article>
      <p>No Matching news articles</p>
    </article>
  );
  return (
    <div>
      <p class="text-uppercase fs-3">top headlines</p>
      {content}
    </div>
  );
};

export default Articles;
