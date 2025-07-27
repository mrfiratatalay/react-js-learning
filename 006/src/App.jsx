import { useCallback, useState } from "react";

const id = (function* () {
  let i = 1;
  while (true) {
    yield i;
    i += 1;
  }
})();

export default function App() {
  const [articles, setArticles] = useState([
    {
      id: id.next().value,
      title: "Article 1",
      summary: "Article 1 Summary",
      display: "none",
    },
    {
      id: id.next().value,
      title: "Article 2",
      summary: "Article 2 Summary",
      display: "none",
    },
  ]);

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  const onChangeTitle = useCallback((e) => {
    setTitle(e.target.value);
  })

  const onChangeSummary = useCallback((e) => {
    setSummary(e.target.value);
  })

  const onClickAdd = useCallback(() => {
    setArticles((state) => [
      ...state,
      {
        id: id.next().value,
        title: title,
        summary: summary,
        display: "none"
      }
    ])
    setTitle("");
    setSummary("");
  }, [summary, title]);

  const onClickRemove = useCallback((id) => {
    setArticles((state) =>
      state.filter((article) => article.id !== id)
    )
  }, [])


  const onClickToggle = useCallback((id) => {
    setArticles((state) => {
      const articles = [...state];
      const index = articles.findIndex((article) => article.id === id);
      articles[index] = {
        ...articles[index],
        display: articles[index].display ? "" : "none",
      };
      return articles;
    });
  }, []);

  return (
    <section>
      <header>
        <h1>Articles</h1>
        <input
          placeholder="Title"
          value={title}
          onChange={onChangeTitle}
        />
        <input
          placeholder="Summary"
          value={summary}
          onChange={onChangeSummary}
        />
        <button onClick={onClickAdd}>Add</button>
      </header>

      <article>
        <ul>
          {
            articles.map((i) => (
              <li key={i.id}>
                <a
                  href={`#${i.id}`}
                  title="Toggle Summary"
                  onClick={() => onClickToggle(i.id)}
                >{i.title}</a>
                &nbsp;
                <button
                  href={`#${i.id}`}
                  title="Remove"
                  onClick={() => onClickRemove(i.id)}
                >
                  &#10007;
                </button>
                <p style={{ display: i.display }}>{i.summary}</p>
              </li>
            ))
          }
        </ul>
      </article>
    </section>
  )
}
