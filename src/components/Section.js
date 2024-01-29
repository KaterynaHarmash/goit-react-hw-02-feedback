import { Children } from "react"

export const Section = ({ title,children }) => {
    const mappedChildren = Children.map(children, child =>
    <div className="Row">
        {child}
    </div>
    );
    return <section>
        <h2>{title}</h2>
        {mappedChildren}
    </section>
}