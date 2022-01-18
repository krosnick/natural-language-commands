function createHTML(websiteHTML) {
    return { __html: websiteHTML };
}


export default function ChipotleClone(props) {
    return <div clone = ""
    dangerouslySetInnerHTML = { createHTML(props.websiteHTML) }
    />;
}