export const Article = ({ data }) => {
  const imgURL =
    "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg";
  return (
    <div class=".justify-content-center">
      <div class="card mx-auto mb-3 " style={{ maxWidth: "820px" }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={data.urlToImage || imgURL}
              class="img-fluid rounded-start h-100"
              alt="Not Found"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title text-start">{data.title}</h5>
              <p class="card-text text-start">
                <small class="text-muted text-start">
                  By {data.author || "Unknown"} on {data.publishedAt}
                </small>
              </p>
              <p class="card-text text-start">{data.content}</p>
              <p class="card-text text-start">
                <small class="text-muted text-start">
                  Read More{" "}
                  <a href={data.url} target="_blank">
                    here.
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
