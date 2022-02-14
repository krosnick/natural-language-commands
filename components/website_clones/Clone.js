import InnerHTML from 'dangerously-set-html-content';

/*function createHTML(websiteHTML) {
    return { __html: websiteHTML };
}*/


export default function Clone(props) {
    return <div clone = "">
        <InnerHTML
            html={props.websiteHTML}
            //key={Math.random()} // to force InnerHTML to re-render each time we render <Clone>
            key={props.triggerWebsiteReload} // each time NaturalLanguage state.triggerWebsiteReload is updated, it'll cause this InnerHTML to re-render
        />
    </div>;
    /*return <div clone = ""
    dangerouslySetInnerHTML = { createHTML(props.websiteHTML) }
    />;*/
}