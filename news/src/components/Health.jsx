import { Article } from "./Article.jsx";
const Health = (props) => {
  const results = props.searchResults.map((data) => (
    <Article key={data.url} data={data} />
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
      <p class="text-uppercase fs-3">Health</p>
      {content}
    </div>
  );
};

export default Health;
