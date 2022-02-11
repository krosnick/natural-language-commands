import InnerHTML from 'dangerously-set-html-content';

/*function createHTML(websiteHTML) {
    return { __html: websiteHTML };
}*/


export default function Clone(props) {
    return <div clone = "">
        <InnerHTML html={props.websiteHTML} />
    </div>;
    /*return <div clone = ""
    dangerouslySetInnerHTML = { createHTML(props.websiteHTML) }
    />;*/
}