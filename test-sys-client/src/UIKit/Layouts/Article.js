import "./Article.css";

const Article = (props) => {
    return (
        <div className="Article">
            <h1>{props.header}</h1>
            <h2>{props.info}</h2>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}

export default Article;