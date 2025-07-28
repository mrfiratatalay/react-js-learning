import ReactDOM from "react-dom/client";
import AddArticle from "./components/AddArticle";
import ArticleList from "./components/ArticleList";
import MyFeature from "./components/MyFeature";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <MyFeature
        addArticle={({
            title,
            summary,
            onChangeTitle,
            onChangeSummary,
            onClickAdd
        }) => (
            <AddArticle
                name="Articles"
                title={title}
                summary={summary}
                onChangeTitle={onChangeTitle}
                onChangeSummary={onChangeSummary}
                onClickAdd={onClickAdd}
            />
        )}

        articleList={({ articles, onClickRemove }) => (
            <ArticleList
                articles={articles}
                onClickRemove={onClickRemove}
            />
        )}
    />
);
