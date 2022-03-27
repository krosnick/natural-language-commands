import InnerHTML from 'dangerously-set-html-content';

function createHTML() {
    return (
        `<html>

        <head>
            <!--<script type="text/javascript" async="" src="https://gum.criteo.com/sync?r=2&amp;c=321&amp;j=window.advBidxc.crt&amp;gdpr=0&amp;gdpr_consent=&amp;us_privacy=&amp;gdpr_pd=0"></script>
            <script type="text/javascript" async="" src="https://gum.criteo.com/sync?r=2&amp;c=321&amp;j=window.advBidxc.crt&amp;gdpr=0&amp;gdpr_consent=&amp;us_privacy=&amp;gdpr_pd=0"></script>
            <script type="text/javascript" async="" src="https://contextual.media.net/litype.php?&amp;cid=8CUX956JU&amp;lid=1187775742&amp;callback=window.advBidxc.autoRefreshResponseParser"></script>
            <script type="text/javascript" async="" src="https://gum.criteo.com/sync?r=2&amp;c=321&amp;j=window.advBidxc.crt&amp;gdpr=0&amp;gdpr_consent=&amp;us_privacy=&amp;gdpr_pd=0"></script>
            <script type="text/javascript" async="" src="https://gum.criteo.com/sync?r=2&amp;c=321&amp;j=window.advBidxc.crt&amp;gdpr=0&amp;gdpr_consent=&amp;us_privacy=&amp;gdpr_pd=0"></script>
            <script type="text/javascript" async="" src="https://contextual.media.net/rtbsmcpubs.php?&amp;prvReqId=19043960328740081646710699877&amp;gdpr=0&amp;gdprconsent=0&amp;cid=8CUX956JU&amp;itype=HB&amp;ptrid=8PRL4E7N3&amp;sd=4&amp;requestString=528273667*4%7C970x250%7C8CUQ33R4V%7C587371326%7C%7C%7C1&amp;hlt=1&amp;rt=5&amp;tscode=1&amp;ugd=4&amp;ismac=1&amp;dn=https%3A%2F%2Fwww.forbes.com&amp;https=1&amp;kwrf=https%3A%2F%2Fwww.google.com%2F%3F%26&amp;requrl=https%3A%2F%2Fwww.forbes.com%2Fbillionaires%2F&amp;channel=billionaires&amp;prid=8PRVCXX19&amp;act=akamai&amp;source=akamai&amp;usp_enf=1&amp;usp_status=0&amp;callback=window.advBidxc.akmscript6512"></script>
            <script type="text/javascript" async="" src="https://cdn.cxense.com/cx.js"></script>
            <script async="" type="text/javascript" src="https://cdn.cxense.com/cx.cce.js"></script>
            <script type="text/javascript" async="" src="https://contextual.media.net/litype.php?&amp;cid=8CUX956JU&amp;lid=33549742&amp;callback=window.advBidxc.autoRefreshResponseParser"></script>
            <script src="https://auth.forbes.com/id/api/v1/identity/token/verify?callback=jsonp9949&amp;client_id=Yj2fRrCPpu&amp;site=https%3A%2F%2Fwww.forbes.com"></script>
            <script src="https://buy.tinypass.com/api/v3/anon/captcha/get.js?callback=jsonpCallback&amp;aid=Yj2fRrCPpu"></script>
            <script type="text/javascript" async="" src="//munchkin.marketo.net/161/munchkin.js"></script>-->
            <meta charset="utf-8">
            <meta http-equiv="x-ua-compatible" content="ie=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <style data-href="/billionaires/styles.c4644adb872ba574ca6c.css" id="gatsby-global-css">
            @font-face {
                font-display: swap;
                font-family: Merriweather;
                font-style: italic;
                font-weight: 700;
                src: local("Merriweather Bold Italic"), local("Merriweather-BoldItalic"), url(https://i.forbesimg.com/assets/fonts/merriweather/merriweather-bolditalic-webfont.woff2) format("woff2"), url(https://i.forbesimg.com/assets/fonts/merriweather/merriweather-bolditalic-webfont.woff) format("woff")
            }
            
            @font-face {
                font-display: swap;
                font-family: Merriweather;
                font-style: normal;
                font-weight: 700;
                src: local("Merriweather Bold"), local("Merriweather-Bold"), url(https://i.forbesimg.com/assets/fonts/merriweather/merriweather-bold-webfont.woff2) format("woff2"), url(https://i.forbesimg.com/assets/fonts/merriweather/merriweather-bold-webfont.woff) format("woff")
            }
            
            @font-face {
                font-display: swap;
                font-family: Merriweather;
                font-style: italic;
                font-weight: 400;
                src: local("Merriweather Italic"), local("Merriweather-Italic"), url(https://i.forbesimg.com/assets/fonts/merriweather/merriweather-italic-webfont.woff2) format("woff2"), url(https://i.forbesimg.com/assets/fonts/merriweather/merriweather-italic-webfont.woff) format("woff")
            }
            
            @font-face {
                font-display: swap;
                font-family: Merriweather;
                font-style: normal;
                font-weight: 400;
                src: local("Merriweather"), url(https://i.forbesimg.com/assets/fonts/merriweather/merriweather-regular-webfont.woff2) format("woff2"), url(https://i.forbesimg.com/assets/fonts/merriweather/merriweather-regular-webfont.woff) format("woff")
            }
            
            @font-face {
                font-display: swap;
                font-family: Work Sans;
                font-style: normal;
                font-weight: 600;
                src: local("Work Sans SemiBold"), local("WorkSans-SemiBold"), url(https://i.forbesimg.com/assets/fonts/work-sans/work_sans_600_latin_ext.woff2) format("woff2")
            }
            
            @font-face {
                font-display: swap;
                font-family: Work Sans;
                font-style: normal;
                font-weight: 600;
                src: local("Work Sans SemiBold"), local("WorkSans-SemiBold"), url(https://i.forbesimg.com/assets/fonts/work-sans/work_sans_600_latin.woff2) format("woff2")
            }
            
            @font-face {
                font-display: swap;
                font-family: Work Sans;
                font-style: normal;
                font-weight: 400;
                src: local("Work Sans"), local("WorkSans-Regular"), url(https://i.forbesimg.com/assets/fonts/work-sans/work_sans_400_latin_ext.woff2) format("woff2")
            }
            
            @font-face {
                font-display: swap;
                font-family: Work Sans;
                font-style: normal;
                font-weight: 400;
                src: local("Work Sans"), local("WorkSans-Regular"), url(https://i.forbesimg.com/assets/fonts/work-sans/work_sans_400_latin.woff2) format("woff2")
            }
            /*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */
            
            [clone] {
                font-family: sans-serif;
                line-height: 1.15;
                -ms-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%
            }
            
            [clone] {
                margin: 0
            }
            
            [clone] article,
            [clone] aside,
            [clone] footer,
            [clone] header,
            [clone] nav,
            [clone] section {
                display: block
            }
            
            [clone] h1 {
                font-size: 2em;
                margin: .67em 0
            }
            
            [clone] figcaption,
            [clone] figure,
            [clone] main {
                display: block
            }
            
            [clone] figure {
                margin: 1em 40px
            }
            
            [clone] hr {
                box-sizing: content-box;
                height: 0;
                overflow: visible
            }
            
            [clone] pre {
                font-family: monospace, monospace;
                font-size: 1em
            }
            
            [clone] a {
                background-color: transparent;
                -webkit-text-decoration-skip: objects
            }
            
            [clone] a:active,
            [clone] a:hover {
                outline-width: 0
            }
            
            [clone] abbr[title] {
                border-bottom: none;
                text-decoration: underline;
                -webkit-text-decoration: underline dotted;
                text-decoration: underline dotted
            }
            
            [clone] b,
            [clone] strong {
                font-weight: inherit;
                font-weight: bolder
            }
            
            [clone] code,
            [clone] kbd,
            [clone] samp {
                font-family: monospace, monospace;
                font-size: 1em
            }
            
            [clone] dfn {
                font-style: italic
            }
            
            [clone] mark {
                background-color: #ff0;
                color: #000
            }
            
            [clone] small {
                font-size: 80%
            }
            
            [clone] sub,
            [clone] sup {
                font-size: 75%;
                line-height: 0;
                position: relative;
                vertical-align: baseline
            }
            
            [clone] sub {
                bottom: -.25em
            }
            
            [clone] sup {
                top: -.5em
            }
            
            [clone] audio,
            [clone] video {
                display: inline-block
            }
            
            [clone] audio:not([controls]) {
                display: none;
                height: 0
            }
            
            [clone] img {
                border-style: none
            }
            
            [clone] svg:not(:root) {
                overflow: hidden
            }
            
            [clone] button,
            [clone] input,
            [clone] optgroup,
            [clone] select,
            [clone] textarea {
                font-family: sans-serif;
                font-size: 100%;
                line-height: 1.15;
                margin: 0
            }
            
            [clone] button,
            [clone] input {
                overflow: visible
            }
            
            [clone] button,
            [clone] select {
                text-transform: none
            }
            
            [clone] [type=reset],
            [clone] [type=submit],
            [clone] button,
            [clone] [type=button] {
                -webkit-appearance: button
            }
            
            [clone] [type=button]::-moz-focus-inner,
            [clone] [type=reset]::-moz-focus-inner,
            [clone] [type=submit]::-moz-focus-inner,
            [clone] button::-moz-focus-inner {
                border-style: none;
                padding: 0
            }
            
            [clone] [type=button]:-moz-focusring,
            [clone] [type=reset]:-moz-focusring,
            [clone] [type=submit]:-moz-focusring,
            [clone] button:-moz-focusring {
                outline: 1px dotted ButtonText
            }
            
            [clone] fieldset {
                border: 1px solid silver;
                margin: 0 2px;
                padding: .35em .625em .75em
            }
            
            [clone] legend {
                box-sizing: border-box;
                color: inherit;
                display: table;
                max-width: 100%;
                padding: 0;
                white-space: normal
            }
            
            [clone] progress {
                display: inline-block;
                vertical-align: baseline
            }
            
            [clone] textarea {
                overflow: auto
            }
            
            [clone] [type=checkbox],
            [clone] [type=radio] {
                box-sizing: border-box;
                padding: 0
            }
            
            [clone] [type=number]::-webkit-inner-spin-button,
            [clone] [type=number]::-webkit-outer-spin-button {
                height: auto
            }
            
            [clone] [type=search] {
                -webkit-appearance: textfield;
                outline-offset: -2px
            }
            
            [clone] [type=search]::-webkit-search-cancel-button,
            [clone] [type=search]::-webkit-search-decoration {
                -webkit-appearance: none
            }
            
            [clone] ::-webkit-file-upload-button {
                -webkit-appearance: button;
                font: inherit
            }
            
            [clone] details,
            [clone] menu {
                display: block
            }
            
            [clone] summary {
                display: list-item
            }
            
            [clone] canvas {
                display: inline-block
            }
            
            [clone] [hidden],
            [clone] template {
                display: none
            }
            
            [clone] *,
            [clone] :after,
            [clone] :before {
                box-sizing: border-box
            }
            
            [clone] {
                width: 100%;
                height: 100%;
                font-family: Work Sans, sans-serif;
                text-rendering: optimizeLegibility;
                font-feature-settings: "kern";
                -webkit-font-kerning: normal;
                -moz-font-kerning: normal;
                font-kerning: normal;
                font-variant-ligatures: common-ligatures
            }
            
            [clone] img {
                width: auto;
                max-width: 100%;
                height: auto!important;
                display: block
            }
            
            [clone] figure {
                margin: 0
            }
            
            [clone] figure img {
                display: block;
                max-width: 100%
            }
            
            [clone] a {
                color: inherit
            }
            
            [clone] a,
            [clone] button {
                cursor: pointer
            }
            
            [clone] button {
                border: none;
                outline: none;
                padding: 0;
                background: none
            }
            
            [clone] em,
            [clone] i {
                font-style: italic
            }
            
            [clone] b,
            [clone] strong {
                font-weight: 700
            }
            
            [clone] table {
                border-collapse: collapse;
                border-spacing: 0
            }
            
            [clone] p a {
                color: #003891
            }
            
            [clone] p a:hover {
                text-decoration: underline
            }
            
            [clone] @font-face {
                font-family: EuclidCircular;
                font-weight: 400;
                src: url(https://i.forbesimg.com/assets/fonts/EuclidCircular/EuclidCircularB-Regular.otf) format("opentype")
            }
            
            [clone] @font-face {
                font-family: EuclidCircular;
                font-weight: 600;
                src: url(https://i.forbesimg.com/assets/fonts/EuclidCircular/EuclidCircularB-Medium.otf) format("opentype")
            }
            
            [clone] @font-face {
                font-family: EuclidCircular;
                font-weight: 700;
                src: url(https://i.forbesimg.com/assets/fonts/EuclidCircular/EuclidCircularB-Bold.otf) format("opentype")
            }
            
            [clone] @font-face {
                font-family: EuclidTriangle;
                font-weight: 400;
                src: url(https://i.forbesimg.com/assets/fonts/EuclidTriangle/EuclidTriangle-Regular.otf) format("opentype")
            }
            
            [clone] @font-face {
                font-family: EuclidTriangle;
                font-weight: 700;
                src: url(https://i.forbesimg.com/assets/fonts/EuclidTriangle/EuclidTriangle-Bold.otf) format("opentype")
            }
            
            [clone] @font-face {
                font-family: GraphikXX;
                font-weight: 400;
                src: url(https://i.forbesimg.com/assets/fonts/GraphikXX/GraphikXXCondensed-Regular.otf) format("opentype")
            }
            
            [clone] @font-face {
                font-family: GraphikXX;
                font-weight: 600;
                src: url(https://i.forbesimg.com/assets/fonts/GraphikXX/GraphikXXCondensed-Medium.otf) format("opentype")
            }
            
            [clone] @font-face {
                font-family: GraphikXX;
                font-weight: 700;
                src: url(https://i.forbesimg.com/assets/fonts/GraphikXX/GraphikXXCondensed-Bold.otf) format("opentype")
            }
            
            [clone] @font-face {
                font-family: Schnyder;
                font-weight: 400;
                src: url(https://i.forbesimg.com/assets/fonts/Schnyder/SchnyderCondL-Light.otf) format("opentype")
            }
            
            [clone] @font-face {
                font-family: Schnyder;
                font-weight: 700;
                src: url(https://i.forbesimg.com/assets/fonts/Schnyder/SchnyderCondL-Bold.otf) format("opentype")
            }
            
            .header {
                /*position: fixed;*/
                position: absolute;
                width: 100%;
                top: 0;
                left: 0;
                background: #181716;
                color: #fcfcfc;
                z-index: 3
            }
            
            .header__content {
                display: flex;
                height: 56px;
                line-height: 56px;
                position: relative;
                margin: 0 auto;
                max-width: 1600px;
                align-items: center;
                justify-content: center
            }
            
            .header__logo,
            .header__search {
                color: #fff;
                display: flex;
                bottom: 0;
                position: absolute;
                top: 0
            }
            
            .header__logo .fs-icon--forbes-logo {
                fill: currentColor;
                width: 86px
            }
            
            @media (max-width:768px) {
                .header__logo {
                    left: 1rem
                }
            }
            
            .header__search {
                right: 1rem
            }
            
            .header__search .fs-icon--search {
                fill: currentColor;
                width: 18px
            }
            
            .header__search .fs-icon--search circle {
                stroke: currentColor
            }
            
            .footer {
                background: #e6e6e6;
                bottom: 0;
                color: #000;
                left: 0;
                min-height: 235px;
                overflow: hidden;
                position: relative;
                text-align: center;
                margin: 0 -16px
            }
            
            .footer__logo {
                border-bottom: 1px solid #ccc;
                padding-bottom: 12px;
                padding-top: 26px
            }
            
            .footer__logo--icon {
                text-decoration: none
            }
            
            .footer__logo--icon .fs-icon--forbes-logo {
                width: 118px
            }
            
            .footer__copyright {
                display: block;
                font: 10px Work Sans, Sans-Serif;
                padding-top: 16px
            }
            
            .footer__links {
                -webkit-padding-start: 0;
                margin: 20px 10px
            }
            
            .footer__links a,
            .footer__links li {
                align-items: center;
                color: #000;
                display: inline-block;
                flex-flow: row wrap;
                font: 14px Work Sans, Sans-Serif;
                justify-content: space-between;
                list-style: none;
                padding: 0 5px;
                text-decoration: none
            }
            
            .footer__links a .mob,
            .footer__links li .mob {
                display: none
            }
            
            @media (max-width:480px) {
                .footer {
                    padding-bottom: 50px
                }
            }
            
            .page-wrapper {
                background-color: #fff
            }
            
            .has-left-rail {
                display: flex
            }
            
            [clone] header,
            [clone] header h2 {
                font-size: 60px;
                font-weight: 300;
                font-family: Schnyder;
                font-style: normal;
                line-height: normal;
                text-align: center
            }
            
            .fbs-container {
                margin: 0 auto;
                max-width: 1440px;
                width: 100%;
                padding-left: 20px;
                padding-right: 20px
            }
            
            .fbs-container--bleed {
                max-width: 100%;
                padding-left: 0;
                padding-right: 0
            }
            
            .fbs-container--xl {
                max-width: 1600px
            }
            
            .fbs-container--small {
                max-width: 900px
            }
            
            [position=mobile],
            [position=mobilerec],
            [position=mobilex],
            [position=top],
            [position=topx] {
                text-align: center;
                width: 100%;
                z-index: 1
            }
            
            [position=top]>div,
            [position=topx]>div {
                min-height: 90px;
                padding: 30px 0
            }
            
            [position=top]>div>div,
            [position=topx]>div>div {
                margin: 0 auto;
                overflow-x: auto
            }
            
            [position=mobile] {
                bottom: 0;
                left: 0;
                /*position: fixed;*/
                position: absolute;
                background: #e6e6e6;
                box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, .3), inset 0 -1px 2px 0 rgba(0, 0, 0, .3);
                display: flex;
                justify-content: center;
                align-items: center
            }
            
            [position=mobilerec]>div {
                padding: 30px auto
            }
            
            .initial-ad {
                min-height: 200px
            }
            
            .ad-row {
                background-color: #fafafa;
                position: relative
            }
            
            .ad-row.table-ad {
                min-height: 175px
            }
            
            .ad-row fbs-ad {
                display: flex;
                justify-content: center
            }
            
            .ad-row fbs-ad>div {
                width: 100%;
                padding: 40px 0;
                overflow-x: auto
            }
            
            .ad-row fbs-ad:before {
                content: "ADVERTISEMENT";
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                font-size: 10px;
                font-weight: 500;
                font-stretch: normal;
                font-style: normal;
                line-height: 2.71;
                letter-spacing: 4px;
                text-align: center;
                color: #a5a5a5;
                font-family: Arial
            }
            
            @media (max-width:768px) {
                .ad-row fbs-ad:before {
                    font-size: 7px
                }
            }
            
            .fbs-ad--mobile-sticky {
                align-items: center;
                bottom: 0;
                display: flex;
                height: 80px;
                justify-content: center;
                left: 0;
                /*position: fixed;*/
                position: absolute;
                width: 100%;
                z-index: 2
            }
            
            .fbs-ad--mobile-sticky fbs-ad {
                background: rgba(24, 23, 22, .8)
            }
            
            .fbs-ad--mobile-sticky fbs-ad>div {
                padding: 0
            }
            
            .fbs-ad--mobile-sticky fbs-ad>div>div {
                width: 100%!important;
                max-width: none!important
            }
            
            .fbs-ad--mobile-sticky fbs-ad:before {
                display: none
            }
            
            .fbs-ad--mobile-close {
                align-items: center;
                background-color: #b3b3b3;
                border-radius: 50%;
                bottom: 81px;
                display: flex;
                flex-direction: column;
                height: 38px;
                /*position: fixed;*/
                position: absolute;
                right: 5px;
                text-align: center;
                width: 38px
            }
            
            .fbs-ad--mobile-close .fs-icon {
                fill: #fff;
                height: 18px;
                padding-top: 2px;
                width: 18px
            }
            
            .fbs-ad--mobile-wrapper--hidden {
                display: none
            }
            
            .fbs-ad--mobilex-wrapper {
                margin-top: 40px;
                margin-bottom: 50px
            }
            
            .fakie.fbs-ad--top-wrapper {
                background: #ccc;
                height: 90px;
                width: 728px
            }
            
            .fakie.fbs-ad--mobilex-wrapper {
                height: 50px;
                width: 300px
            }
            
            .fakie.fbs-ad--mobile-wrapper {
                background: #ccc;
                height: 50px;
                width: 100%;
                z-index: 11111;
                /*position: fixed;*/
                position: absolute;
                bottom: 0;
                left: 0
            }
            
            .credits {
                background-color: #000;
                padding: 3rem 3rem 3rem 6rem
            }
            
            .credits-container {
                margin: 0 auto;
                max-width: 1200px;
                width: 100%
            }
            
            .credits-item {
                display: flex;
                margin-bottom: 1.5rem;
                position: relative
            }
            
            .credits-item .credits-text {
                color: #fff;
                font-family: EuclidTriangle;
                line-height: normal;
                letter-spacing: normal;
                margin-left: 1rem
            }
            
            .credits-item .credits-text .credits-dek {
                font-size: 17px;
                font-weight: 300;
                line-height: 1.53
            }
            
            .credits-item .credits-text .credits-dek a {
                color: #b9314f
            }
            
            .credits-item .credits-text .credits-dek .bold {
                font-weight: 700
            }
            
            .credits-item__title {
                color: #fff;
                font-family: inherit;
                font-size: 28px;
                font-weight: 700;
                text-align: left;
                text-transform: uppercase
            }
            
            .credits-arrow {
                position: absolute;
                color: #b9314f;
                height: 30px;
                width: 50px;
                margin-right: 1rem;
                top: 0;
                left: -20px;
                transform: translate(-100%);
                vertical-align: middle
            }
            
            .credits-arrow>svg {
                width: 100%;
                transform: rotate(-90deg) translate(-15%)
            }
            
            @media (max-width:768px) {
                .credits {
                    padding: 2rem
                }
                .credits-item .credits-arrow {
                    height: 30px;
                    margin-left: 20px;
                    margin-right: 0;
                    top: -5px
                }
                .credits-item .credits-text {
                    position: relative
                }
                .credits-item .credits-text .credits-dek {
                    font: 300 13px/1.38 EuclidTriangle;
                    margin-top: 10px
                }
                .credits-item .credits-text .credits-dek>div:first-child {
                    margin-top: 1rem
                }
                .credits-item__title {
                    font: 600 15px EuclidTriangle
                }
                .credits-arrow {
                    width: 21px;
                    height: 14px
                }
                .credits-arrow>svg {
                    transform: rotate(-90deg) translate(5%)
                }
            }
            
            .left-rail {
                background-color: #0f302a;
                flex: 0 0 400px
            }
            
            .left-rail+div {
                flex: auto
            }
            
            .headers .left-rail,
            .table-row-group .left-rail {
                position: absolute;
                bottom: 0;
                top: 0;
                width: 400px
            }
            
            .left-rail .featured__article-mag {
                width: 100%
            }
            
            @media (max-width:1280px) {
                .left-rail {
                    flex: 0 0 300px
                }
                .headers .left-rail,
                .table-row-group .left-rail {
                    width: 300px
                }
            }
            
            @media (max-width:1100px) {
                .left-rail {
                    flex: 0 0 250px
                }
                .headers .left-rail,
                .table-row-group .left-rail {
                    width: 250px
                }
            }
            
            @media (max-width:768px) {
                .left-rail {
                    flex: 0 0 100%
                }
            }
            
            .caption-credit {
                color: #848484;
                font: 10px EuclidCircular;
                margin-right: 10px;
                margin-top: 7px;
                justify-content: flex-end;
                text-transform: uppercase
            }
            
            .caption-credit__desktop {
                display: flex;
                margin-bottom: 70px;
                margin-right: -45%;
                text-align: left
            }
            
            .caption-credit__mobile {
                display: none
            }
            
            .caption-credit__label {
                font-weight: 600
            }
            
            .desktop-header-content {
                min-height: 100vh
            }
            
            .hero-image {
                width: 100%
            }
            
            .title {
                text-align: center
            }
            
            .title+.ad-row {
                padding: 0
            }
            
            .title .editors-block {
                font-size: 14px;
                line-height: 1.29
            }
            
            .title .intro-heading {
                margin: 30% 10% 0;
                text-transform: uppercase
            }
            
            .title .left-rail {
                color: #fff;
                font-family: EuclidCircular
            }
            
            .title .left-rail .img-container {
                position: relative;
                right: -2px
            }
            
            .title .left-rail .intro-subheading h2 {
                font-size: 24px;
                font-weight: 600;
                line-height: 1.25;
                margin: 2rem 0
            }
            
            .title .left-rail .sidebar-description {
                font-weight: 400;
                margin-top: 2rem;
                text-transform: uppercase
            }
            
            .title .left-rail .heading-dot {
                margin: 2rem 0
            }
            
            .title .left-rail .sponsor {
                font-size: 18px
            }
            
            .title .down-arrow {
                display: flex;
                justify-content: center;
                margin: 4rem 20% 4rem 0
            }
            
            .title .down-arrow svg {
                width: 60px
            }
            
            .sponsored-logo {
                display: inline-flex;
                max-height: 95px;
                transform: translateY(-30px)
            }
            
            .sponsored-text {
                font: 500 14px/1.29 EuclidCircular;
                text-transform: uppercase
            }
            
            .title__heading {
                font-family: Work Sans, Sans-Serif;
                font-size: 24px;
                letter-spacing: 3.3px;
                color: #737373;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center
            }
            
            .title__subheading {
                font-size: 40px;
                font-family: Schnyder;
                font-weight: 700;
                text-align: center;
                color: #fff;
                letter-spacing: 4px;
                text-transform: uppercase
            }
            
            .heading-content {
                display: flex;
                font: 18px/1.78 Georgia;
                max-width: 950px;
                margin: 0 auto;
                text-align: left;
                width: 80%
            }
            
            .heading-content .intro-text {
                margin-right: 3rem
            }
            
            .heading-content .intro-text a {
                color: #b9314f
            }
            
            .heading-content .pullquote {
                flex: 0 0 35%;
                font: 600 16px/1.31 EuclidCircular;
                text-transform: uppercase
            }
            
            .heading-content .pullquote:first-line {
                color: #b9314f
            }
            
            .heading-content .bold {
                font-weight: 700
            }
            
            .heading-content .dropcap {
                color: #b9314f;
                display: block;
                float: left;
                font: 600 190px EuclidCircular;
                height: 190px;
                margin: -100px 30px 0 0;
                text-align: center;
                width: 120px
            }
            
            .down-red-arrow {
                height: 150px;
                display: flex;
                justify-content: center;
                align-items: center;
                padding-top: 50px
            }
            
            .down-red-arrow div {
                width: 48px
            }
            
            @media (max-width:1024px) {
                .title__subheading {
                    font-size: 50px
                }
            }
            
            @media (max-width:768px) {
                .title__subheading {
                    padding: 0 110px
                }
                .heading-content {
                    width: 70%
                }
            }
            
            @media (max-width:768px) {
                .caption-credit__desktop {
                    display: none
                }
                .caption-credit__mobile {
                    display: inline-block
                }
                .desktop-header-content {
                    min-height: 0
                }
                .title+.ad-row {
                    margin: 0
                }
                .title .editors-block {
                    font-size: 11px
                }
                .title.has-left-rail {
                    flex-direction: column
                }
                .title .intro-heading {
                    margin: 25px 38px 30px
                }
                .title .left-rail {
                    flex: 0 0 100%;
                    padding-bottom: 2rem
                }
                .title .left-rail>div:last-of-type {
                    position: relative;
                    z-index: 1;
                    margin-bottom: -2rem
                }
                .title .left-rail .sidebar-headline {
                    font-size: 24px;
                    width: 80%;
                    margin: 2rem auto 0
                }
                .title .left-rail .sidebar-description {
                    font-size: 11px
                }
                .title .left-rail .sponsor {
                    font-size: 14px
                }
                .title .img-container {
                    position: relative;
                    z-index: 2
                }
                .title .down-arrow {
                    margin: 48px 0
                }
                .title__subheading {
                    padding: 0 10px;
                    font-size: 20px
                }
                .heading-content {
                    width: 80%;
                    font-size: 18px;
                    line-height: 1.5;
                    flex-direction: column
                }
                .heading-content .intro-text {
                    margin-right: 0;
                    margin-top: 2rem
                }
                .heading-content .dropcap {
                    font-size: 172px;
                    height: 172px;
                    margin-top: -112px
                }
                .heading-content .pullquote {
                    display: none
                }
                .sponsored-text {
                    font: 500 11px/1.64 EuclidCircular
                }
                .sub-heading-content {
                    font-size: 17px;
                    line-height: 1.53
                }
            }
            
            .social {
                padding-bottom: 74px;
                text-align: center;
                transform: translateY(-40px)
            }
            
            .social__text {
                font-family: Merriweather, serif;
                font-size: 40px;
                margin-bottom: 29px
            }
            
            .social__icons {
                display: flex;
                justify-content: space-between;
                margin: 0 auto;
                width: 70%
            }
            
            .social__icon {
                display: flex;
                cursor: pointer
            }
            
            .social__icon-link {
                border-radius: 50%;
                width: 35px;
                height: 35px;
                background-color: #fff;
                fill: #000;
                display: flex;
                justify-content: center;
                align-items: center
            }
            
            .social__icon-link:hover {
                background-color: #b9314f
            }
            
            .social__icon-link>div {
                display: flex
            }
            
            .social__icon-link .fs-icon {
                width: 27px
            }
            
            .social__press {
                display: flex;
                justify-content: center;
                flex-shrink: 0
            }
            
            .social__press-releases {
                font-family: Work Sans, Sans-Serif;
                font-size: 20px;
                color: #737373;
                text-decoration: none;
                background-color: #fff;
                border: 1px solid #737373;
                border-radius: 8px;
                width: 205px;
                height: 46px;
                padding: 10px
            }
            
            @media (max-width:768px) {
                .social__icon {
                    justify-content: center
                }
                .social__icon-link {
                    height: 40px;
                    width: 40px
                }
                .social__icon-link .fs-icon {
                    width: 32px
                }
                .social__icon-link:hover {
                    background-color: #fff
                }
                .social__press {
                    margin-top: 30px;
                    width: 100%
                }
            }
            
            @media (max-width:480px) {
                .social {
                    transform: translateY(-20px)
                }
                .social__text {
                    font-size: 30px
                }
                .social__press-releases {
                    font-size: 12px;
                    width: 132px;
                    height: 40px
                }
            }
            
            [clone] * {
                box-sizing: border-box
            }
            
            [clone] {
                height: inherit
            }
            
            [clone] {
                background-color: #fffff6;
                overflow-x: hidden
            }
            
            [clone].no-scroll {
                overflow: hidden
            }
            
            .content-wrapper {
                margin-top: 56px;
                min-height: 100vh;
                position: relative
            }
            
            #gatsby-focus-wrapper {
                overflow-x: hidden
            }
            
            .ratio16x9 {
                background-repeat: no-repeat;
                background-size: contain
            }
            
            .ratio16x9:before {
                content: "";
                display: block;
                padding-bottom: 56.25%
            }
            
            .ratio1x1 {
                background-repeat: no-repeat;
                background-size: contain
            }
            
            .ratio1x1:before {
                content: "";
                display: block;
                padding-bottom: 100%
            }
            
            .screenreader-only {
                -webkit-clip-path: inset(50%);
                clip-path: inset(50%);
                clip: rect(0 0 0 0);
                height: 1px;
                overflow: hidden;
                position: absolute;
                white-space: nowrap;
                width: 1px
            }
            
            .heading-dot {
                display: flex;
                justify-content: center;
                margin: 4rem 0
            }
            
            .heading-dot>div {
                width: 21px;
                height: 21px;
                background-color: #b9314f;
                border-radius: 50%;
                text-align: center
            }
            
            @media (max-width:768px) {
                .heading-dot {
                    margin: 2rem 0
                }
                .heading-dot>div {
                    width: 15px;
                    height: 15px
                }
            }
            
            .no-data {
                min-height: 900px
            }
            
            .table-block .pull-right {
                display: flex;
                flex-direction: column
            }
            
            .table-block-wrapper {
                padding: 0
            }
            
            .table {
                min-height: 900px
            }
            
            .table-header {
                text-transform: uppercase
            }
            
            .table-row-group {
                position: relative;
                min-height: 600px
            }
            
            .table-row-group .left-rail {
                padding: 2rem;
                font-family: EuclidCircular;
                min-height: 600px
            }
            
            .table-row-group .left-rail .img-container {
                position: relative
            }
            
            .table-row-group .left-rail .img-container .tag {
                background-color: #000;
                color: #fff;
                font-size: 18px;
                font-weight: 600;
                left: 0;
                padding: 10px;
                position: absolute;
                top: 0
            }
            
            .table-row-group .left-rail .sidebar-description,
            .table-row-group .left-rail .sidebar-headline {
                color: #fff;
                margin-bottom: 1rem
            }
            
            .table-row-group .left-rail .sidebar-headline h3 {
                font-size: 24px;
                font-weight: 600;
                letter-spacing: normal;
                line-height: 1.33;
                margin-top: 1.5rem;
                margin-bottom: 1rem
            }
            
            .table-row-group .left-rail .sidebar-description {
                font-size: 18px;
                line-height: 1.44
            }
            
            .table-row-group .left-rail .read-more-link {
                color: #b9314f;
                font-size: 15px;
                font-weight: 700
            }
            
            .table-row-group .left-rail .read-more-link a {
                text-decoration: none;
                display: flex;
                flex-direction: row;
                align-items: center;
                text-transform: uppercase
            }
            
            .table-row-group .left-rail .read-more-link span {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-left: .5rem
            }
            
            .table-row-group .left-rail .read-more-link svg {
                width: 18px;
                fill: #b9314f
            }
            
            .total {
                text-align: center;
                font-size: 16px;
                margin: 1rem 0
            }
            
            .filters,
            .total {
                font-family: EuclidCircular;
                font-weight: 400
            }
            
            .filters {
                width: 90%;
                margin: 0 auto;
                align-items: center;
                font-size: 14px;
                line-height: 1.86;
                letter-spacing: -.2px
            }
            
            .filters .wealth-key {
                display: flex;
                font-size: 11px;
                font-weight: 500;
                text-transform: uppercase;
                justify-content: flex-end;
                padding-right: 20px
            }
            
            .filters .wealth-key>div {
                display: flex
            }
            
            .filters>div.filter-heading {
                margin-left: 1rem;
                text-transform: uppercase
            }
            
            .filters>div.filter-wrapper {
                align-items: center;
                display: flex;
                font-size: 11px;
                margin: 0 10px 1rem
            }
            
            .filters>div.filter-wrapper>div {
                align-items: center;
                cursor: pointer;
                display: flex;
                flex: 1 1;
                justify-content: center;
                height: 40px;
                line-height: normal;
                text-align: center;
                text-transform: uppercase;
                white-space: nowrap
            }
            
            .filters>div.filter-wrapper>div:not(:last-child) {
                border-bottom: 6px solid #000;
                margin-right: 20px
            }
            
            .filters>div.filter-wrapper>div.search-box {
                display: flex;
                position: relative;
                flex: 0 0 25%
            }
            
            .filters>div.filter-wrapper>div.search-box input {
                width: 100%;
                font-family: EuclidCircular;
                color: #3a3a3a;
                font-size: 14px;
                border-radius: 5px;
                border: 1px solid #848484;
                padding: 10px 25px 10px 10px
            }
            
            .filters>div.filter-wrapper>div.search-box>div {
                width: 14px;
                opacity: .75;
                position: absolute;
                right: 15px;
                top: 50%;
                transform: translateY(-50%);
                line-height: 0
            }
            
            .filters>div.filter-wrapper>div.search-box>div svg {
                fill: #4d4d4d;
                transform: rotate(90deg)
            }
            
            .filters>div.filter-wrapper>div.search-box>div svg circle {
                stroke: #4d4d4d
            }
            
            .filters>div.filter-wrapper>div.selected {
                color: #b9314f;
                font-weight: 700;
                border-bottom-color: #b9314f
            }
            
            .dropdown-filter>div {
                position: relative
            }
            
            .dropdown-filter .dropdown-filter-title {
                align-items: center;
                display: flex
            }
            
            .dropdown-filter .dropdown-filter-title .caret {
                width: 25px;
                margin-left: 10px;
                fill: #000
            }
            
            .dropdown-filter .dropdown-filter-title .caret>svg {
                display: flex;
                transform: rotate(180deg);
                transition: transform .4s ease-in-out
            }
            
            .dropdown-filter .dropdown-filter-title.selected-dropdown span {
                color: #b9314f;
                font-weight: 700
            }
            
            .dropdown-filter.expanded .dropdown-filter-title>span {
                font-weight: 700
            }
            
            .dropdown-filter.expanded .dropdown-filter-title .caret>svg {
                transform: rotate(0)
            }
            
            .dropdown-filter ul {
                display: none;
                position: absolute;
                left: -2px;
                top: 10px;
                height: 275px;
                width: 250px;
                border-radius: 1px;
                border: 1px solid #d8d8d8;
                background-color: #fff;
                overflow: auto;
                padding: 0;
                list-style-type: none;
                z-index: 20
            }
            
            .dropdown-filter.expanded ul {
                display: block
            }
            
            .dropdown-filter ul li {
                font-family: Work Sans;
                font-size: 14px;
                color: #333;
                padding: 10px;
                cursor: pointer
            }
            
            .dropdown-filter ul li.selected,
            .dropdown-filter ul li:hover {
                background-color: #b9314f;
                color: #fff
            }
            
            .headers {
                position: -webkit-sticky;
                position: sticky;
                top: 0;
                padding: 10px 0
            }
            
            .headers .left-rail+div {
                flex: auto!important
            }
            
            .status {
                width: 12px;
                margin-left: 1rem;
                display: block;
                position: relative
            }
            
            .status img {
                position: absolute;
                top: 50%;
                transform: translateY(-50%)
            }
            
            .header-row {
                padding-left: 410px
            }
            
            .header-row>div {
                padding-right: 10px
            }
            
            .header-row>div.active-sort {
                color: #b9314f;
                font-weight: 700
            }
            
            .header-row>div.active-sort .header-border {
                background-color: #b9314f
            }
            
            .header-row>div>div {
                display: flex;
                align-items: center;
                justify-content: center
            }
            
            .header-row>div>div.header-name {
                font-family: EuclidCircular;
                font-size: 11px;
                text-transform: uppercase;
                height: 25px;
                text-align: center
            }
            
            .header-row>div>div.header-border {
                margin-top: 5px
            }
            
            .header-row>div.age .header-name,
            .header-row>div.rank .header-name {
                position: relative
            }
            
            .header-row>div.age .header-name .indicator,
            .header-row>div.rank .header-name .indicator {
                position: absolute;
                right: -15px
            }
            
            .netWorth {
                flex: 0 0 10%!important
            }
            
            .table-row .netWorth>div {
                display: flex;
                flex: 0 0 100%
            }
            
            .table-row .netWorth>div .status {
                margin-left: auto;
                margin-right: 25%
            }
            
            .rank {
                max-width: 100px
            }
            
            .age {
                flex: 0 0 5%!important
            }
            
            .country {
                flex: 0 0 10%!important
            }
            
            .display {
                position: relative
            }
            
            .indicator {
                display: inline-block
            }
            
            .indicator .caret {
                transition: transform .3s ease-in-out;
                display: flex;
                align-items: center
            }
            
            .indicator .caret svg {
                width: 15px;
                fill: #b9314f
            }
            
            .indicator .caret.ascending {
                transform: rotate(0)
            }
            
            .indicator .caret.descending {
                transform: rotate(180deg)
            }
            
            .header-border {
                height: 6px;
                background-color: #000
            }
            
            .table-body {
                background: #fff;
                position: relative;
                scroll-behavior: smooth;
                min-width: 0!important
            }
            
            .table-row {
                height: 65px;
                padding-left: 400px;
                scroll-margin-top: 100px
            }
            
            .table-row:not(.footnote) {
                border-bottom: 1px solid #848484
            }
            
            .table-row.footnote {
                padding-top: 1rem
            }
            
            .table-row>div {
                display: flex;
                align-items: center;
                font-family: EuclidCircular;
                font-weight: 600;
                font-size: 14px;
                padding: 0 10px
            }
            
            .table-row>div.rank {
                font-size: 20px
            }
            
            .table-row>div.personName {
                font-family: EuclidCircular;
                line-height: 24px;
                letter-spacing: 0
            }
            
            .table-row>div.category>div,
            .table-row>div.source>div {
                display: flex;
                align-items: center
            }
            
            .table-row>div.source>div {
                position: relative
            }
            
            .table-row>div .expand-row__icon {
                display: inline-block;
                margin: 0 10px;
                position: absolute;
                right: 0;
                transform: rotate(180deg);
                transition: transform .3s ease-in-out;
                vertical-align: middle;
                visibility: hidden;
                width: 25px
            }
            
            .table-row>div .expand-row__icon--mobile {
                display: none;
                top: 50%
            }
            
            .table-row>div .expand-row__icon svg {
                fill: #fff
            }
            
            .table-row:hover {
                cursor: pointer
            }
            
            .table-row:hover>div.category div .expand-row__icon {
                visibility: visible
            }
            
            .table-row.expanded,
            .table-row:not(.expanded):not(.no-results):hover {
                background-color: #000;
                color: #fff
            }
            
            .table-row.expanded>div.category div .expand-row__icon,
            .table-row.expanded>div.source div .expand-row__icon {
                transform: rotate(0deg);
                visibility: visible
            }
            
            .table-row.no-results {
                display: flex;
                border-bottom: none
            }
            
            .table-row.no-results>div {
                font-size: 16px
            }
            
            .table-ad.ad-row+div .table-row:nth-child(2) {
                border-top: 1px solid #848484
            }
            
            .selected {
                color: #b9314f;
                font-weight: 700;
                border-bottom-color: #b9314f
            }
            
            .reprints {
                color: #b9314f;
                display: flex;
                font: 600 16px/2.16 EuclidCircular;
                justify-content: center;
                padding-left: 400px;
                padding-top: 26px
            }
            
            @media (max-width:1280px) {
                .reprints {
                    padding-left: 300px
                }
            }
            
            @media (max-width:1100px) {
                .reprints {
                    padding-left: 250px
                }
            }
            
            .reprints a {
                text-decoration: none
            }
            
            .reprints a:first-child {
                margin-right: 2rem
            }
            
            .reprints a:hover {
                text-decoration: underline
            }
            
            .source-column {
                flex: 0 0 100%;
                justify-content: space-between
            }
            
            .spac-key {
                border-bottom: 1px solid #1e1e24;
                display: flex;
                justify-content: flex-end;
                margin-left: 10px;
                margin-right: 32px;
                padding-bottom: 2rem
            }
            
            @media (max-width:1280px) {
                .header-row {
                    padding-left: 310px
                }
                .table-row {
                    padding-left: 300px
                }
            }
            
            @media (max-width:1100px) {
                .header-row {
                    padding-left: 260px
                }
                .table-row {
                    padding-left: 250px
                }
            }
            
            @media (max-width:1024px) {
                .filters {
                    flex-wrap: wrap;
                    font-size: 12px
                }
                .filters>div.search-box {
                    width: 40%;
                    margin-left: 0
                }
                .filters>div.filter-heading {
                    display: none
                }
                .age,
                .category,
                .country {
                    display: none!important
                }
                .spac-key {
                    border-bottom: 0;
                    justify-content: center
                }
            }
            
            @media (max-width:768px) {
                .filters>div.filter-wrapper {
                    flex-wrap: wrap;
                    justify-content: center;
                    padding-bottom: 0;
                    border-bottom: none
                }
                .filters>div.filter-wrapper>div {
                    flex-grow: 1;
                    flex-shrink: 1;
                    flex-basis: calc(50% - 20px);
                    position: relative
                }
                .filters>div.filter-wrapper>div.search-box {
                    flex: 0 0 100%;
                    margin-top: 2rem
                }
                .filters>div.filter-wrapper>div:nth-of-type(2n) {
                    margin-right: 0
                }
                .filters>div.filter-wrapper>div .caret {
                    display: none;
                    position: absolute;
                    right: 25px;
                    top: 50%;
                    transform: translateY(-50%)
                }
                .filters>div.filter-wrapper>div .caret svg {
                    width: 20px;
                    fill: #b9314f;
                    transform: rotate(0);
                    transition: transform .3s ease-in-out
                }
                .filters>div.filter-wrapper>div.selected.desc .caret svg {
                    transform: rotate(180deg)
                }
                .filters>div.filter-wrapper>div.selected .caret {
                    display: block
                }
                .impact-key {
                    padding: 0 10px 10px;
                    text-align: center
                }
                .table-row>div.personName {
                    font-size: 24px;
                    line-height: normal
                }
                .dropdown-filter ul {
                    width: 150px
                }
                .header-row {
                    font-size: 12px;
                    padding-left: 0;
                    flex: 0 0 100%!important;
                    justify-content: center
                }
                .header-row>div>div.header-name {
                    text-align: left
                }
                .header-row>div.rank .header-name .indicator {
                    right: -13px
                }
                .header-row>div.netWorth>div.header-name {
                    width: 75%
                }
            }
            
            @media (max-width:768px) {
                .table-block .has-left-rail {
                    justify-content: center
                }
                .headers.has-left-rail .left-rail,
                .table-block-wrapper>.has-left-rail .left-rail,
                .table-block>.has-left-rail .left-rail,
                .table-body>.table-row-group:first-child .left-rail {
                    display: none
                }
                .headers.has-left-rail .no-results+.left-rail,
                .table-block-wrapper>.has-left-rail .no-results+.left-rail,
                .table-block>.has-left-rail .no-results+.left-rail,
                .table-body>.table-row-group:first-child .no-results+.left-rail {
                    display: block
                }
                .filters-modal {
                    background: #fff;
                    bottom: 0;
                    display: none;
                    font-family: EuclidCircular;
                    left: 0;
                    overflow: auto;
                    padding-top: 50px;
                    /*position: fixed;*/
                    position: absolute;
                    right: 0;
                    top: 55px;
                    z-index: 10
                }
                .filters-modal .modal-close {
                    width: 25px;
                    position: absolute;
                    right: 10px;
                    top: 10px
                }
                .filters-modal.open {
                    display: block
                }
                .filters-modal .filter-reset {
                    width: 80%;
                    margin: 0 auto;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 40px;
                    font-size: 14px;
                    font-family: EuclidCircular;
                    border-radius: 4px;
                    border: 1px solid #e2e2e2;
                    background-color: #fff
                }
                .filters-modal .filters-modal-heading {
                    height: 50px;
                    border-bottom: 1px solid #efefef;
                    display: flex;
                    align-items: center;
                    padding: 0 25px;
                    justify-content: space-between
                }
                .filters-modal .mobile-filter-dropdown {
                    display: none;
                    background-color: #ddeaf7;
                    border-left: 2px solid #8eb9e5
                }
                .filters-modal .mobile-filter-dropdown.open {
                    display: block
                }
                .filters-modal .mobile-filter-dropdown>div {
                    padding: 25px
                }
                .filters-modal .expand-row__icon {
                    transform: rotate(180deg);
                    transition: transform .3s ease-in-out
                }
                .filters-modal .expand-row__icon svg {
                    width: 25px
                }
                .filters-modal .expand-row__icon.up {
                    transform: rotate(0)
                }
                .filters-modal .dropdown-filter .dropdown-filter-title .caret {
                    fill: #000
                }
                .filters-modal .dropdown-filter .dropdown-filter-title.selected-dropdown span {
                    color: #000
                }
                .filters-modal .dropdown-filter.expanded ul {
                    width: 100%;
                    position: relative
                }
                .filters-modal-btn {
                    width: 75px;
                    height: 40px;
                    text-align: center;
                    border-radius: 5px;
                    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .15);
                    border: 1px solid #848484;
                    background-color: #8eb9e5
                }
                .status {
                    display: block
                }
                .filters .wealth-key {
                    flex-wrap: wrap;
                    justify-content: center;
                    line-height: normal;
                    margin: 10px auto;
                    max-width: 300px;
                    padding-right: 0
                }
                .filters .wealth-key>div {
                    margin-bottom: 5px
                }
                .filters>div.search-box {
                    margin-left: 0;
                    width: 75%
                }
                .headers {
                    font-size: 12px;
                    letter-spacing: -.19px;
                    line-height: 1.08;
                    margin: 0 auto;
                    width: 95%
                }
                .rank {
                    flex: 0 0 18%!important;
                    max-width: 100%
                }
                .personName {
                    flex: 0 0 30%!important
                }
                .netWorth {
                    flex: 0 0 22%!important
                }
                .source {
                    padding-right: 0
                }
                .philanthropyScore,
                .source {
                    flex: 0 0 30%!important
                }
                .philanthropyScore>div {
                    align-items: center;
                    display: flex;
                    flex: 0 0 75%
                }
                .philanthropyScore span {
                    margin-left: 5px
                }
                .philanthropyScore .collapse-row {
                    margin-left: auto;
                    display: none
                }
                .philanthropyScore .collapse-row svg {
                    fill: #fff;
                    width: 15px
                }
                .table-row.expanded .philanthropyScore .collapse-row {
                    display: flex
                }
                .header-name .display .indicator {
                    position: absolute
                }
                .table-row-group>div:first-child {
                    border-top: 1px solid #848484
                }
                .table-row-group {
                    min-height: 0
                }
                .table-row-group .left-rail {
                    position: relative;
                    width: 100%;
                    min-height: 0
                }
                .table-row-group .left-rail .img-container {
                    background-size: cover;
                    background-position: 50%
                }
                .table-row-group .left-rail .img-container .tag {
                    font-size: 16px;
                    padding: 5px
                }
                .table-row-group .left-rail .sidebar-headline h3 {
                    font-size: 21px
                }
                .table-row-group .left-rail .sidebar-description {
                    font-size: 16px;
                    line-height: 1.5
                }
                .table-row-group .left-rail .read-more-link a {
                    font-size: 14px
                }
                .table-row-group .left-rail .read-more-link svg {
                    width: 14px
                }
                .table-row-group .table-row {
                    padding-left: 0;
                    margin: 0 auto
                }
                .table-row>div {
                    font-family: EuclidCircular;
                    font-size: 11px
                }
                .table-row>div.rank {
                    font-size: 11px;
                    justify-content: left;
                    padding-left: 15px
                }
                .table-row>div.personName {
                    font-size: 11px;
                    text-transform: none;
                    font-weight: 400;
                    padding-right: 10px;
                    position: relative
                }
                .table-row>div.netWorth>div .status {
                    margin-right: 10%
                }
                .table-row.no-results {
                    margin-bottom: 1rem
                }
                .table-row.no-results>div {
                    font-size: 14px
                }
                .table-row:not(.expanded):not(.no-results):hover {
                    background-color: inherit;
                    color: inherit
                }
                .table-row.expanded>div.source div .expand-row__icon {
                    transform: rotate(0deg) translateX(50%) translateY(-50%);
                    transition: none
                }
                .table-row.expanded>div.source div .expand-row__icon--mobile {
                    display: inline-block
                }
                .reprints {
                    align-items: center;
                    font: 600 11px/2.75 EuclidCircular;
                    padding-left: 0
                }
            }
            
            .pagination {
                align-items: center;
                display: flex;
                justify-content: space-between;
                margin: 38px;
                padding-left: 400px
            }
            
            @media (max-width:1280px) {
                .pagination {
                    padding-left: 300px
                }
            }
            
            @media (max-width:1100px) {
                .pagination {
                    padding-left: 250px
                }
            }
            
            @media (max-width:768px) {
                .pagination {
                    font-size: 11px;
                    margin: 16px 22px;
                    padding-left: 0
                }
            }
            
            .pagination-btn {
                color: #1e1e24;
                font: 600 14px/2.16 EuclidCircular;
                letter-spacing: .26px
            }
            
            .pagination-btn--disabled {
                opacity: .25;
                pointer-events: none
            }
            
            .pagination-btn .next-page,
            .pagination-btn .previous-page {
                display: flex;
                align-items: center
            }
            
            @media (max-width:768px) {
                .pagination-btn {
                    font-size: 11px
                }
            }
            
            .bubble-arrow {
                background: #b9314f;
                border-radius: 50%;
                fill: #fff;
                flex: 0 0 45px;
                height: 45px;
                padding: 8px;
                vertical-align: middle;
                width: 45px
            }
            
            @media (max-width:768px) {
                .bubble-arrow {
                    flex: 0 0 30px;
                    height: 30px;
                    padding: 6px;
                    width: 30px
                }
            }
            
            .bubble-arrow__label {
                margin: 0 10px
            }
            
            @media (max-width:768px) {
                .bubble-arrow__label {
                    margin: 0 6px
                }
            }
            
            .goto-page {
                display: flex;
                justify-content: center
            }
            
            .goto-page__btn {
                background-color: #fff;
                border-radius: 50%;
                border: 1px solid #848484;
                height: 13px;
                margin: 0 6px;
                vertical-align: middle;
                width: 13px
            }
            
            .goto-page__btn[disabled] {
                background-color: #848484
            }
            
            @media (max-width:768px) {
                .goto-page__btn {
                    display: none
                }
            }
            
            .avatar {
                margin: 24px auto;
                width: 190px
            }
            
            .avatar img {
                border-radius: 50%
            }
            
            .billions-amount {
                color: #0f302a;
                font: 600 40px/1.2 EuclidCircular;
                padding-bottom: 10px
            }
            
            .chart-description {
                color: #848484;
                font: 500 12px EuclidCircular;
                margin: 4px 0 20px;
                text-align: center;
                text-transform: uppercase
            }
            
            .chart-heading {
                border-top: 1px solid #b7b7b7;
                font: 600 16px EuclidCircular;
                margin: 30px 16px 0;
                padding-top: 30px;
                text-align: center
            }
            
            .chartjs-render-monitor {
                margin-bottom: 50px
            }
            
            .details-container {
                border-left: 1px solid #b7b7b7;
                flex: 1 1 25%;
                margin: 20px 0;
                padding: 0 14px;
                text-align: center
            }
            
            .expanded-content {
                background-color: #f3f8f5;
                border-bottom: 1px solid #848484;
                display: flex!important;
                padding-left: 400px
            }
            
            .networth-title {
                align-self: center;
                font: 600 16px EuclidCircular;
                text-transform: uppercase
            }
            
            .quote-container {
                margin-bottom: 98px
            }
            
            .quote-heading {
                color: #0f302a;
                letter-spacing: -.42px;
                margin: 0 auto 10px;
                text-align: center;
                width: 20px
            }
            
            .personal-block {
                background-color: #e1ece6;
                flex: 1 1 25%;
                padding: 0 30px
            }
            
            .person-bio {
                flex: 1 1 50%
            }
            
            .person-bio .bio-container {
                flex: 0 0 60%;
                font: 16px/1.63 EuclidCircular;
                letter-spacing: -.34px;
                margin: 18px 16px 0
            }
            
            .person-bio .bio {
                font: 18px/1.4 EuclidCircular;
                letter-spacing: -.34px;
                margin-bottom: 10px;
                margin-top: 0
            }
            
            .person-bio .bio-button {
                align-items: center;
                background-color: #b9314f;
                border-radius: 2px;
                color: #fff;
                display: flex;
                font: 600 15px EuclidCircular;
                height: 30px;
                justify-content: center;
                letter-spacing: .53px;
                margin-bottom: 30px;
                text-decoration: none;
                text-transform: uppercase;
                width: 120px
            }
            
            .person-bio .bio-button>span {
                display: block
            }
            
            .person-bio .bio-button>a {
                align-items: center;
                display: flex;
                justify-content: center;
                text-decoration: none;
                text-transform: uppercase
            }
            
            .person-quote {
                font: 500 16px EuclidCircular;
                letter-spacing: -.42px;
                margin: 0 10px;
                text-align: center
            }
            
            .previous-lists {
                border-top: 1px solid #b7b7b7;
                flex: 0 0 30%;
                font-family: EuclidCircular;
                list-style: none;
                padding-top: 20px
            }
            
            .previous-lists__heading {
                font-size: 16px;
                font-weight: 600;
                margin-bottom: 9px;
                text-transform: uppercase
            }
            
            .previous-lists__ranking {
                padding-right: 15px
            }
            
            .previous-lists__row {
                font-size: 16px;
                font-weight: 500;
                margin-bottom: 8px;
                text-align: center
            }
            
            .quote-credit {
                color: #0f302a;
                font: 600 16px EuclidCircular;
                letter-spacing: -.42px;
                margin-top: 6px;
                text-align: center;
                text-transform: uppercase
            }
            
            .wealth-chart {
                flex: 1 1;
                position: relative
            }
            
            .updated-networth {
                color: #848484;
                font: 500 12px EuclidCircular;
                text-transform: uppercase
            }
            
            @media (max-width:1280px) {
                .expanded-content {
                    padding-left: 300px
                }
            }
            
            @media (max-width:1100px) {
                .expanded-content {
                    margin-right: 0;
                    padding-left: 250px
                }
            }
            
            @media (max-width:768px) {
                .avatar {
                    flex: 1 1;
                    margin: 0 8px 0 12px;
                    max-width: 115px
                }
                .billions-amount {
                    border-bottom: none;
                    font: 600 32px/1.5 EuclidCircular;
                    padding: 0 0 0 12px
                }
                .details-container {
                    border-left: none;
                    border-top: 1px solid #b7b7b7;
                    display: flex;
                    flex-grow: 0;
                    flex-shrink: 0;
                    flex-basis: calc(100% - 42px);
                    justify-content: center;
                    margin: 0 21px;
                    padding: 6px 0 0
                }
                .expanded-content {
                    justify-content: center;
                    flex-wrap: wrap
                }
                .networth-title {
                    font: 600 12px EuclidCircular
                }
                .person-bio {
                    flex: 0 0 100%
                }
                .person-bio .bio {
                    font: 14px/1.43 EuclidCircular;
                    letter-spacing: -.37px;
                    margin: 10px 7px 10px 22px
                }
                .person-bio .bio-button {
                    font: 11px EuclidCircular;
                    height: 25px;
                    margin: 0 20px 14px;
                    width: 115px
                }
                .person-bio .bio-button>span {
                    align-items: center;
                    display: flex
                }
                .person-bio .bio-button-container {
                    margin: 10px 0 12px
                }
                .person-bio .bio-container {
                    margin: 0 5px
                }
                .quote-container {
                    flex: 1 1;
                    margin-bottom: 0
                }
                .personal-block {
                    display: flex;
                    flex: 0 0 100%;
                    justify-content: center;
                    padding: 16px 12px
                }
                .person-quote {
                    font: 500 12px/1.33 EuclidCircular;
                    margin: 0
                }
                .previous-lists {
                    display: none
                }
                .quote-credit {
                    font: 600 12px EuclidCircular;
                    letter-spacing: -.42px
                }
                .table-row-group .expanded-content {
                    padding-left: 0;
                    padding-right: 0
                }
                .updated-networth {
                    font-size: 10px
                }
                .wealth-chart {
                    margin: 0 5px
                }
                .wealth-chart .chart-description {
                    font-size: 10px;
                    margin-bottom: 9px
                }
                .wealth-chart .chart-heading {
                    font-size: 12px;
                    font-weight: 600;
                    margin-top: 14px;
                    text-transform: uppercase
                }
                .wealth-chart .chartjs-render-monitor {
                    margin-bottom: 0;
                    padding-bottom: 6px
                }
            }
            
            .article-block-container {
                display: flex;
                flex-direction: column;
                font: EuclidCircular
            }
            
            .article-block-container .article-header {
                margin-top: 11px;
                text-transform: uppercase
            }
            
            .article-block-container .article-content-container {
                display: inline-block;
                margin: 43px 43px 8px;
                max-width: 308px;
                flex-grow: 1
            }
            
            .article-block-container .article-image {
                display: flex;
                max-width: 100%
            }
            
            .article-block-container .article-title {
                font: 600 24px/1.2 EuclidCircular;
                letter-spacing: .36px;
                margin: 0;
                min-width: 308px
            }
            
            .article-block-container .article-description {
                font: 16px/1.37 EuclidCircular;
                letter-spacing: -.37px;
                max-width: 308px
            }
            
            .article-block-container .article-description p {
                margin: 0
            }
            
            .article-block-wrapper {
                margin: 0 auto;
                display: flex;
                flex-wrap: wrap;
                justify-content: center
            }
            
            .related-article-wrapper {
                margin-top: 30px;
                margin-bottom: 60px
            }
            
            .related-article-wrapper h3:before {
                content: "\\2022";
                color: #b9314f;
                display: inline-block;
                width: 1em;
                margin-left: -1em
            }
            
            .related-article-list {
                list-style: none;
                max-width: 50%;
                margin: 0 auto;
                padding: 0
            }
            
            .related-article-item {
                font: 600 24px/1.75 EuclidCircular;
                margin: 0
            }
            
            [clone] a {
                text-decoration: none
            }
            
            .featured-articles .img-container {
                margin: 32px 40px
            }
            
            @media only screen and (max-width:768px) {
                .featured-articles .left-rail {
                    display: none
                }
                .article-block-container {
                    margin: 0 auto;
                    font-family: EuclidCircular
                }
                .article-block-container .article-content-container {
                    display: block;
                    margin: 45px 10px 0;
                    max-width: 100%
                }
                .article-header h2 {
                    font: 42px/48px Schnyder;
                    letter-spacing: 3px
                }
                h3 {
                    margin: 0
                }
                h3.article-title {
                    padding-top: 5px;
                    font: 600 21px/42px!important
                }
                .article-description {
                    max-width: none!important
                }
                .related-article-wrapper {
                    margin-top: 20px;
                    margin-bottom: 36px
                }
                .related-article-list {
                    max-width: 84%
                }
                .related-article-item,
                li.related-article-item {
                    font-size: 18px;
                    line-height: 28px
                }
                li.related-article-item {
                    padding-bottom: 14px
                }
                .featured__article-mag {
                    height: 22em;
                    min-width: 95%;
                    margin: 0 12px
                }
            }
            
            @media only screen and (max-width:320px) {
                .article-block-container {
                    width: 100%
                }
                .article-block-wrapper {
                    margin: 0
                }
            }
            </style>
            <meta name="generator" content="Gatsby 2.32.9">
            <title>Forbes Billionaires 2021: The Richest People in the World</title>
            <link data-react-helmet="true" rel="shortcut icon" >
            <link data-react-helmet="true" rel="canonical" >
            <meta data-react-helmet="true" charset="utf-8">
            <meta data-react-helmet="true" name="theme-color" content="#000000">
            <meta data-react-helmet="true" name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=yes">
            <meta data-react-helmet="true" name="referrer" content="origin-when-cross-origin">
            <meta data-react-helmet="true" name="description" itemprop="description" content="The definitive list of the World's Billionaires, presented by Forbes.">
            <meta data-react-helmet="true" name="keywords" content="billionaires, the world's billionaires, wealth, Jeff Bezos, Kylie Jenner, Elon Musk, Donald Trump, Kylie, Steward, Bezos, Laurene Powell Jobs, Donald Trump, richest people in the world, world’s billionaires, richest person in the world, richest woman in the world">
            <meta data-react-helmet="true" name="language" content="English">
            <meta data-react-helmet="true" name="apple-itunes-app" content="app-id=588647136">
            <meta data-react-helmet="true" property="og:site_name" content="Forbes">
            <meta data-react-helmet="true" property="og:title" content="Forbes Billionaires 2021: The Richest People in the World">
            <meta data-react-helmet="true" property="og:type" content="article">
            <meta data-react-helmet="true" property="og:url" content="https://www.forbes.com/billionaires/">
            <meta data-react-helmet="true" property="og:image" content="https://images.forbes.com/Billionaires2021-ListHeader-2/Billionaires2021-Lander-Thumbnail-SocialShare-Final-v2.png">
            <meta data-react-helmet="true" property="og:image:type" content="image/jpeg">
            <meta data-react-helmet="true" property="og:description" content="The definitive list of the World's Billionaires, presented by Forbes.">
            <meta data-react-helmet="true" property="fb:app_id" content="123694841080850">
            <meta data-react-helmet="true" name="twitter:card" content="summary_large_image">
            <meta data-react-helmet="true" name="twitter:site" content="@forbes">
            <meta data-react-helmet="true" name="twitter:image" content="https://images.forbes.com/Billionaires2021-ListHeader-2/Billionaires2021-Lander-Thumbnail-SocialShare-Final-v2.png">
            <meta data-react-helmet="true" name="twitter:title" content="Forbes Billionaires 2021: The Richest People in the World">
            <meta data-react-helmet="true" name="twitter:description" content="The definitive list of the World's Billionaires, presented by Forbes.">
            <meta data-react-helmet="true" itemprop="thumbnailURL" content="https://images.forbes.com/Billionaires2021-ListHeader-2/Billionaires2021-Lander-Thumbnail-SocialShare-Final-v2.png">
            <!--<script src="https://rules.quantcount.com/rules-p-3bmCtEkzhulVU.js" async=""></script>
            <script type="text/javascript" async="" src="https://gum.criteo.com/sync?r=2&amp;c=321&amp;j=window.advBidxc.crt&amp;gdpr=0&amp;gdpr_consent=&amp;us_privacy=&amp;gdpr_pd=0"></script>
            <script type="text/javascript" async="" src="https://sb.scorecardresearch.com/c2/6872493/cs.js"></script>
            <script type="text/javascript" async="" src="//www.googletagservices.com/tag/js/gpt.js"></script>
            <script type="text/javascript" async="" src="//cdn.tinypass.com/api/tinypass.min.js"></script>
            <script type="text/javascript" async="" src="https://ml314.com/tag.aspx?722022"></script>
            <script async="" src="https://tags.bkrtx.com/js/bk-coretag.js"></script>
            <script type="text/javascript" async="" src="https://ml314.com/tag.aspx?722022"></script>
            <script type="text/javascript" async="" src="https://cdn.heapanalytics.com/js/heap-657665248.js"></script>
            <script async="" src="//d.email.forbes.com/track.v2.js"></script>
            <script async="" src="//d1fc8wv8zag5ca.cloudfront.net/2.5.1/sp.js"></script>
            <script src="https://secure.quantserve.com/quant.js" async="" type="text/javascript"></script>
            <script async="" type="text/javascript" src="https://z.moatads.com/2be987/moatheader.js"></script>
            <script type="text/javascript" async="" src="https://z.moatads.com/forbes949SzQW17/moatcontent.js"></script>
            <script src="https://connect.facebook.net/signals/config/1494993704116832?v=2.9.55&amp;r=stable" async=""></script>
            <script async="" src="https://connect.facebook.net/en_US/fbevents.js"></script>
            <script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script>
            <script type="text/javascript" async="" src="//c.aaxads.com/aax.js?&amp;pub=AAXQJ1RH7&amp;ver=1.2&amp;hst=www.forbes.com"></script>
            <script type="text/javascript" async="" src="https://hbx.media.net/mcx.js?&amp;callback=window.advBidxc.contextualcallback&amp;cid=8CUX956JU&amp;dn=www.forbes.com&amp;icode=cop&amp;itype=HB&amp;rt=2&amp;url=https%3A%2F%2Fwww.forbes.com%2Fbillionaires%2F&amp;ver=2"></script>
            <script type="text/javascript" async="" src="https://contextual.media.net/tcb.js?&amp;cb=window.advBidxc.nativetemplatefetch&amp;v=1"></script>
            <script type="text/javascript" async="" src="https://gum.criteo.com/sync?r=2&amp;c=321&amp;j=window.advBidxc.crt&amp;gdpr=0&amp;gdpr_consent=&amp;us_privacy=&amp;gdpr_pd=0"></script>
            <script type="text/javascript" async="" src="https://contextual.media.net/rtbsmcpubs.php?&amp;prvReqId=44904086282432191646710665760&amp;gdpr=0&amp;gdprconsent=0&amp;cid=8CUX956JU&amp;itype=HB&amp;ptrid=8PRL4E7N3&amp;sd=4&amp;requestString=867969797*4%7C970x250%7C8CUQ33R4V%7C536835148%7C%7C%7C1&amp;hlt=1&amp;rt=5&amp;tscode=1&amp;ugd=4&amp;ismac=1&amp;dn=https%3A%2F%2Fwww.forbes.com&amp;https=1&amp;kwrf=https%3A%2F%2Fwww.google.com%2F%3F%26&amp;requrl=https%3A%2F%2Fwww.forbes.com%2Fbillionaires%2F&amp;channel=billionaires&amp;prid=8PRVCXX19&amp;act=akamai&amp;source=akamai&amp;usp_enf=1&amp;usp_status=0&amp;callback=window.advBidxc.akmscript5760"></script>
            <script data-react-helmet="true" type="application/ld+json"> { "@context": "http://schema.org", "@type":"WebPage", "name": "Forbes Billionaires 2021: The Richest People in the World", "description": "The definitive list of the World's Billionaires, presented by Forbes.", "url": "https://www.forbes.com/billionaires/", "text": "It’s been a year like no other, and we aren’t talking about the pandemic. There were rapid-fire public offerings, surging cryptocurrencies and skyrocketing stock prices. The number of billionaires on Forbes’ 35th annual list of the world’s wealthiest exploded to an unprecedented 2,755--660 more than a year ago. Of those, a record high 493 were new to the list--roughly one every 17 hours, including 210 from China and Hong Kong. Another 250 who’d fallen off in the past came roaring back. A staggering 86% are richer than a year ago. Jeff Bezos is the world’s richest for the fourth year running, worth $177 billion, while Elon Musk rocketed into the number two spot with $151 billion, as Tesla and Amazon shares surged. Altogether these billionaires are worth $13.1 trillion, up from $8 trillion in 2020. The U.S. still has the most, with 724, followed by China (including Hong Kong and Macao) with 698. We used stock prices and exchange rates from March 5 to calculate net worths. See below for the full list of the world’s billionaires and our methodology. For daily updated net worths of all 2,755 billionaires, check out our real-time billionaires rankings", "image": { "@type": "ImageObject", "url": "https://images.forbes.com/Billionaires2021-ListHeader-2/Billionaires2021-Lander-Thumbnail-SocialShare-Final-v2.png" }, "publisher": { "@type": "Organization", "name": "Forbes" } } </script>-->
            <!--<link as="script" rel="preload" href="/billionaires/styles-c4fa86dfd4ad05097eee.js">
            <link as="script" rel="preload" href="/billionaires/component---src-pages-index-js-8a55d0f26df50103be22.js">
            <link as="script" rel="preload" href="/billionaires/4a3ea9cd-9c752580623b1837d0f7.js">
            <link as="script" rel="preload" href="/billionaires/framework-06f646d936b841f99ebd.js">
            <link as="script" rel="preload" href="/billionaires/app-abfb354fc6a37d194b65.js">
            <link as="script" rel="preload" href="/billionaires/webpack-runtime-fda5a8390504b897348b.js">
            <link as="fetch" rel="preload" href="/billionaires/page-data/index/page-data.json" crossorigin="anonymous">
            <link as="fetch" rel="preload" href="/billionaires/page-data/app-data.json" crossorigin="anonymous">-->
            <!--<script data-loaded="true" async="" defer="" src="https://www.googletagmanager.com/gtm.js?id=GTM-NMQJM4"></script>
            <script data-loaded="true" async="" defer="" src="https://contextual.media.net/bidexchange.js?cid=8CUX956JU&amp;https=1"></script>
            <script data-loaded="true" async="" defer="" src="https://static.criteo.net/js/ld/publishertag.js"></script>
            <script data-loaded="true" async="" defer="" src="//c.amazon-adsystem.com/aax2/apstag.js"></script>
            <script data-loaded="true" async="" defer="" src="//z.moatads.com/forbesprebidheader122641196143/yi.js"></script>
            <script data-loaded="true" async="" defer="" src="//cdn.adsafeprotected.com/iasPET.1.js"></script>
            <script data-loaded="true" async="" defer="" src="//www.googletagservices.com/tag/js/gpt.js"></script>
            <script async="true" src="//www.npttech.com/advertising.js" onerror="setNptTechAdblockerCookie(true);" onload="blockAdBlock.onNotDetected(adBlockOff); blockAdBlock.onDetected(adBlockOn);"></script>
            <script type="text/javascript" async="" src="//munchkin.marketo.net/munchkin.js"></script>-->
            <meta http-equiv="origin-trial" content="AxujKG9INjsZ8/gUq8+dTruNvk7RjZQ1oFhhgQbcTJKDnZfbzSTE81wvC2Hzaf3TW4avA76LTZEMdiedF1vIbA4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=">
            <meta http-equiv="origin-trial" content="Azuce85ORtSnWe1MZDTv68qpaW3iHyfL9YbLRy0cwcCZwVnePnOmkUJlG8HGikmOwhZU22dElCcfrfX2HhrBPAkAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9">
            <meta http-equiv="origin-trial" content="A16nvcdeoOAqrJcmjLRpl1I6f3McDD8EfofAYTt/P/H4/AWwB99nxiPp6kA0fXoiZav908Z8etuL16laFPUdfQsAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9">
            <meta http-equiv="origin-trial" content="AxBHdr0J44vFBQtZUqX9sjiqf5yWZ/OcHRcRMN3H9TH+t90V/j3ENW6C8+igBZFXMJ7G3Pr8Dd13632aLng42wgAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9">
            <meta http-equiv="origin-trial" content="A88BWHFjcawUfKU3lIejLoryXoyjooBXLgWmGh+hNcqMK44cugvsI5YZbNarYvi3roc1fYbHA1AVbhAtuHZflgEAAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjUyNzc0NDAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==">
            <meta http-equiv="origin-trial" content="A8FHS1NmdCwGqD9DwOicnHHY+y27kdWfxKa0YHSGDfv0CSpDKRHTQdQmZVPDUdaFWUsxdgVxlwAd6o+dhJykPA0AAACWeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9">
            <meta http-equiv="origin-trial" content="A8zdXi6dr1hwXEUjQrYiyYQGlU3557y5QWDnN0Lwgj9ePt66XMEvNkVWOEOWPd7TP9sBQ25X0Q15Lr1Nn4oGFQkAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9">
            <meta http-equiv="origin-trial" content="A4/Htern2udN9w3yJK9QgWQxQFruxOXsXL7cW60DyCl0EZFGCSme/J33Q/WzF7bBkVvhEWDlcBiUyZaim5CpFQwAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9">
            <!--<script src="https://securepubads.g.doubleclick.net/gpt/pubads_impl_2022030301.js" async=""></script>-->
            <style type="text/css">
            /* Chart.js */
            /*
         * DOM element rendering detection
         * https://davidwalsh.name/detect-node-insertion
         */
            
            @keyframes chartjs-render-animation {
                from {
                    opacity: 0.99;
                }
                to {
                    opacity: 1;
                }
            }
            
            .chartjs-render-monitor {
                animation: chartjs-render-animation 0.001s;
            }
            /*
         * DOM element resizing detection
         * https://github.com/marcj/css-element-queries
         */
            
            .chartjs-size-monitor,
            .chartjs-size-monitor-expand,
            .chartjs-size-monitor-shrink {
                position: absolute;
                direction: ltr;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                overflow: hidden;
                pointer-events: none;
                visibility: hidden;
                z-index: -1;
            }
            
            .chartjs-size-monitor-expand > div {
                position: absolute;
                width: 1000000px;
                height: 1000000px;
                left: 0;
                top: 0;
            }
            
            .chartjs-size-monitor-shrink > div {
                position: absolute;
                width: 200%;
                height: 200%;
                left: 0;
                top: 0;
            }
            </style>
            <style type="text/css">
            .tp-backdrop {
                display: none;
                /*position: fixed;*/
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: #121214;
                z-index: 300000;
                opacity: 0;
                transition: opacity .25s linear;
            }
            
            .tp-backdrop.tp-active {
                opacity: .9;
            }
            
            .tp-modal .tp-close.tp-square {
                background: #ccc;
                border-radius: 0;
                border: 0;
                top: 0;
                right: -40px;
            }
            
            .tp-modal .tp-close {
                display: none;
                position: absolute;
                top: -20px;
                right: -20px;
                width: 40px;
                height: 40px;
                background: #fff url("data:image/svg+xml,%3Csvg width='11' height='11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11 1.368L9.632 0 5.5 4.142 1.368 0 0 1.368 4.142 5.5 0 9.632 1.368 11 5.5 6.858 9.632 11 11 9.632 6.858 5.5 11 1.368z' fill='%23959595'/%3E%3C/svg%3E") center center no-repeat;
                border: none;
                box-shadow: 0 0 10px 0 rgba(28, 37, 68, 0.15);
                outline: none;
                z-index: 300100;
                border-radius: 40px;
                opacity: 0;
                cursor: pointer;
                transform: scale(.25, .25);
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
            }
            
            .tp-modal .tp-close:hover,
            .tp-modal .tp-close:focus {
                box-shadow: 0 0 10px 2px rgba(28, 37, 68, 0.15);
            }
            
            .tp-modal .tp-close:focus {
                border: 1px solid;
            }
            
            .tp-modal .tp-close.tp-active {
                display: block;
                opacity: 1;
                transform: scale(1, 1);
            }
            
            .tp-modal .tp-iframe-wrapper[dir="rtl"] .tp-close {
                right: initial;
                left: -20px;
            }
            
            .tp-modal .tp-iframe-wrapper.piano-id-modal-ver-2 .tp-close {
                top: 0;
                right: 0;
                width: 64px;
                height: 64px;
                box-shadow: none;
                outline: none;
                border-radius: 0;
                border-left: 1px solid rgba(15, 15, 21, 0.2);
                background: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg %3E%3Cpath d='M3 3L13 13M13 3L3 13' stroke='%230F0F15' stroke-width='2'/%3E%3C/g%3E%3C/svg%3E%0A") center center no-repeat;
                opacity: 0.3;
            }
            
            .tp-modal .tp-iframe-wrapper.piano-id-modal-ver-2 .tp-close.tp-active {
                opacity: 0.3;
            }
            
            .tp-modal .tp-iframe-wrapper.piano-id-modal-ver-2 .tp-close:hover,
            .tp-modal .tp-iframe-wrapper.piano-id-modal-ver-2 .tp-close:focus {
                box-shadow: none;
                border: none;
                border-left: 1px solid rgba(15, 15, 21, 0.06);
                opacity: 1;
            }
            
            .tp-modal .tp-iframe-wrapper.piano-id-modal-ver-2[dir="rtl"] .tp-close {
                right: auto;
                left: 0;
                border-left: none;
                border-right: 1px solid rgba(15, 15, 21, 0.2);
            }
            
            .tp-modal .tp-iframe-wrapper.piano-id-modal-ver-2[dir="rtl"] .tp-close:hover,
            .tp-modal .tp-iframe-wrapper.piano-id-modal-ver-2[dir="rtl"] .tp-close:focus {
                border-left: none;
                border-right: 1px solid rgba(15, 15, 21, 0.06);
            }
            
            .tp-modal {
                z-index: 300050;
            }
            
            @media screen and (max-width: 650px) {
                .tp-modal .tp-close {
                    right: 0;
                }
                .tp-modal .tp-iframe-wrapper[dir="rtl"] .tp-close {
                    right: initial;
                    left: 0;
                }
            }
            
            .tp-modal .tp-iframe-wrapper.tp-curtain {
                width: 600px;
                height: 480px;
            }
            
            .tp-modal-open {
                overflow: hidden !important;
                height: 100vh;
                -webkit-overflow-scrolling: touch;
            }
            
            .tp-modal-open.tp-modal-resizing {
                -webkit-overflow-scrolling: auto;
            }
            /*Bug fix of firefox v57*/
            
            .tp-modal-close {
                overflow: auto;
            }
            
            .tp-iframe-wrapper {
                position: relative;
                margin: 50px auto;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.21);
            }
            
            .tp-iframe-wrapper.no-shadow {
                box-shadow: unset;
            }
            
            .tp-modal {
                overflow-x: hidden;
                overflow-y: scroll !important;
                display: none;
                /*position: fixed;*/
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                transform: translate3d(0, 0, 0);
            }
            
            .tp-modal .tp-message {
                font-family: "Graphik Web Regular", Helvetica, Arial, sans-serif;
                padding: 10px;
            }
            
            .tp-modal .tp-btn-container {
                padding-left: 10px;
                padding-bottom: 10px;
            }
            
            .tp-cxense-placeholder-modal {
                width: 100%;
                background-color: #fff;
                max-width: 912px;
                display: block;
                overflow: hidden;
                height: auto;
                opacity: 1;
            }
            
            .tp-widget-placeholder > div::after {
                display: block;
                content: "";
                clear: both;
            }
            
            .tp-btn {
                text-decoration: none;
                cursor: pointer;
                padding: 0 18px;
                line-height: 40px;
                border-collapse: separate;
                border-radius: 4px;
                text-align: center;
                vertical-align: middle;
                display: inline-block;
                color: #fff;
                border: none;
                box-shadow: inset 0 -1px 0 rgba(216, 218, 221, 0.0);
                background: #3878D8;
                background-position: bottom;
                text-shadow: none;
                font-family: "Graphik Web Regular", Helvetica, Arial, sans-serif;
                white-space: nowrap;
                outline: 0;
            }
            
            .tp-please-wait.tp-active {
                display: block;
                opacity: .9;
                transition: opacity .25s linear;
            }
            
            .tp-please-wait {
                position: absolute;
                top: 0;
                left: 0;
                background-color: #999;
                opacity: 0;
                width: 100%;
                height: 100%;
                display: none;
                text-align: center;
                color: #fff;
                font-weight: lighter;
                font-family: "Open Sans", sans-serif;
                font-size: 15px;
            }
            
            .tp-please-wait.tp-overlap {
                /*position: fixed;*/
                position: absolute;
                z-index: 300150;
            }
            
            .tp-please-wait.tp-local-overlap {
                position: absolute;
            }
            
            .tp-please-wait > .tp-icon {
                width: 80px;
                height: 80px;
                margin: 100px auto 20px auto;
            }
            
            .pn-spinner {
                color: grey;
                display: inline-block;
                position: relative;
                width: 80px;
                height: 80px;
            }
            
            .pn-spinner div {
                transform-origin: 40px 40px;
                animation: pn-spinner 1.2s linear infinite;
            }
            
            .pn-spinner div:after {
                content: " ";
                display: block;
                position: absolute;
                top: 3px;
                left: 37px;
                width: 6px;
                height: 18px;
                border-radius: 20%;
                background: #fff;
            }
            
            .pn-spinner div:nth-child(1) {
                transform: rotate(0deg);
                animation-delay: -1.1s;
            }
            
            .pn-spinner div:nth-child(2) {
                transform: rotate(30deg);
                animation-delay: -1s;
            }
            
            .pn-spinner div:nth-child(3) {
                transform: rotate(60deg);
                animation-delay: -0.9s;
            }
            
            .pn-spinner div:nth-child(4) {
                transform: rotate(90deg);
                animation-delay: -0.8s;
            }
            
            .pn-spinner div:nth-child(5) {
                transform: rotate(120deg);
                animation-delay: -0.7s;
            }
            
            .pn-spinner div:nth-child(6) {
                transform: rotate(150deg);
                animation-delay: -0.6s;
            }
            
            .pn-spinner div:nth-child(7) {
                transform: rotate(180deg);
                animation-delay: -0.5s;
            }
            
            .pn-spinner div:nth-child(8) {
                transform: rotate(210deg);
                animation-delay: -0.4s;
            }
            
            .pn-spinner div:nth-child(9) {
                transform: rotate(240deg);
                animation-delay: -0.3s;
            }
            
            .pn-spinner div:nth-child(10) {
                transform: rotate(270deg);
                animation-delay: -0.2s;
            }
            
            .pn-spinner div:nth-child(11) {
                transform: rotate(300deg);
                animation-delay: -0.1s;
            }
            
            .pn-spinner div:nth-child(12) {
                transform: rotate(330deg);
                animation-delay: 0s;
            }
            
            @keyframes pn-spinner {
                0% {
                    opacity: 1;
                }
                100% {
                    opacity: 0;
                }
            }
            
            .tp-please-wait > .tp-icon.tp-centered {
                margin: 0;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            
            .tp-iframe-wrapper.no-width .tp-close,
            .tp-iframe-wrapper.no-height .tp-close,
            .tp-modal.no-width .tp-close,
            .tp-modal.no-height .tp-close {
                display: none;
            }
            
            .tp-banner {
                /*position: fixed;*/
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
            }
            
            .tp-banner > .tp-container-inner,
            .tp-banner > .tp-container-inner > iframe {
                width: inherit !important;
            }
            
            .frozen-mobile-body {
                width: 100%;
                margin: 0;
                /*position: fixed;*/
                position: absolute;
                max-height: -webkit-fill-available;
                max-height: -moz-available;
            }
            </style>
            <!--<link rel="preload" href="https://adservice.google.com/adsid/integrator.js?domain=www.forbes.com" as="script">-->
            <!--<script type="text/javascript" src="https://adservice.google.com/adsid/integrator.js?domain=www.forbes.com"></script>-->
            <!--<link rel="preload" href="https://adservice.google.com/adsid/integrator.js?domain=www.forbes.com" as="script">-->
            <!--<script type="text/javascript" src="https://adservice.google.com/adsid/integrator.js?domain=www.forbes.com"></script>-->
            <!--<link rel="preload" href="https://adservice.google.com/adsid/integrator.js?domain=www.forbes.com" as="script">-->
            <!--<script type="text/javascript" src="https://adservice.google.com/adsid/integrator.js?domain=www.forbes.com"></script>-->
            <script src="/website_clones/forbes/custom.js"></script>
        </head>
        
        <body>
            <iframe marginwidth="0" marginheight="0" scrolling="no" frameborder="0" height="0" width="0" id="mnet" src="https://hbx.media.net/checksync.php?cid=8CUX956JU&amp;cs=1&amp;cv=37&amp;hb=1&amp;prvid=3012%2C3016%2C2026%2C70%2C51%2C38%2C172%2C273%2C132%2C159%2C108%2C214%2C229%2C203%2C2027%2C97%2C3%2C246%2C29%2C178%2C262%2C145%2C201%2C23%2C2030%2C251%2C43%2C117%2C126%2C236%2C239%2C59%2C226%2C228&amp;vsSync=1&amp;refUrl=https%3A%2F%2Fwww.google.com%2F&amp;gdpr=0&amp;gdprconsent=0&amp;gdprstring=&amp;usp_status=0&amp;usp_consent=1&amp;coppa=0" style="display: none !important;"></iframe>
            <div id="___gatsby">
                <div style="outline:none" tabindex="-1" id="gatsby-focus-wrapper">
                    <div class="page-wrapper">
                        <header class="header">
                            <div class="header__content">
                                <a class="header__logo"  aria-label="Forbes Logo">
                                    <svg class="fs-icon fs-icon--forbes-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 54">
                                        <path d="M113.3 18.2c0-5.8.1-11.2.4-16.2L98.4 4.9v1.4l1.5.2c1.1.1 1.8.5 2.2 1.1.4.7.7 1.7.9 3.2.2 2.9.4 9.5.3 19.9 0 10.3-.1 16.8-.3 19.3 5.5 1.2 9.8 1.7 13 1.7 6 0 10.7-1.7 14.1-5.2 3.4-3.4 5.2-8.2 5.2-14.1 0-4.7-1.3-8.6-3.9-11.7-2.6-3.1-5.9-4.6-9.8-4.6-2.6 0-5.3.7-8.3 2.1zm.3 30.8c-.2-3.2-.4-12.8-.4-28.5.9-.3 2.1-.5 3.6-.5 2.4 0 4.3 1.2 5.7 3.7 1.4 2.5 2.1 5.5 2.1 9.3 0 4.7-.8 8.5-2.4 11.7-1.6 3.1-3.6 4.7-6.1 4.7-.8-.2-1.6-.3-2.5-.4zM41 3H1v2l2.1.2c1.6.3 2.7.9 3.4 1.8.7 1 1.1 2.6 1.2 4.8.8 10.8.8 20.9 0 30.2-.2 2.2-.6 3.8-1.2 4.8-.7 1-1.8 1.6-3.4 1.8l-2.1.3v2h25.8v-2l-2.7-.2c-1.6-.2-2.7-.9-3.4-1.8-.7-1-1.1-2.6-1.2-4.8-.3-4-.5-8.6-.5-13.7l5.4.1c2.9.1 4.9 2.3 5.9 6.7h2V18.9h-2c-1 4.3-2.9 6.5-5.9 6.6l-5.4.1c0-9 .2-15.4.5-19.3h7.9c5.6 0 9.4 3.6 11.6 10.8l2.4-.7L41 3zm-4.7 30.8c0 5.2 1.5 9.5 4.4 12.9 2.9 3.4 7.2 5 12.6 5s9.8-1.7 13-5.2c3.2-3.4 4.7-7.7 4.7-12.9s-1.5-9.5-4.4-12.9c-2.9-3.4-7.2-5-12.6-5s-9.8 1.7-13 5.2c-3.2 3.4-4.7 7.7-4.7 12.9zm22.3-11.4c1.2 2.9 1.7 6.7 1.7 11.3 0 10.6-2.2 15.8-6.5 15.8-2.2 0-3.9-1.5-5.1-4.5-1.2-3-1.7-6.8-1.7-11.3C47 23.2 49.2 18 53.5 18c2.2-.1 3.9 1.4 5.1 4.4zm84.5 24.3c3.3 3.3 7.5 5 12.5 5 3.1 0 5.8-.6 8.2-1.9 2.4-1.2 4.3-2.7 5.6-4.5l-1-1.2c-2.2 1.7-4.7 2.5-7.6 2.5-4 0-7.1-1.3-9.2-4-2.2-2.7-3.2-6.1-3-10.5H170c0-4.8-1.2-8.7-3.7-11.8-2.5-3-6-4.5-10.5-4.5-5.6 0-9.9 1.8-13 5.3-3.1 3.5-4.6 7.8-4.6 12.9 0 5.2 1.6 9.4 4.9 12.7zm7.4-25.1c1.1-2.4 2.5-3.6 4.4-3.6 3 0 4.5 3.8 4.5 11.5l-10.6.2c.1-3 .6-5.7 1.7-8.1zm46.4-4c-2.7-1.2-6.1-1.9-10.2-1.9-4.2 0-7.5 1.1-10 3.2s-3.8 4.7-3.8 7.8c0 2.7.8 4.8 2.3 6.3 1.5 1.5 3.9 2.8 7 3.9 2.8 1 4.8 2 5.8 2.9 1 1 1.6 2.1 1.6 3.6 0 1.4-.5 2.7-1.6 3.7-1 1.1-2.4 1.6-4.2 1.6-4.4 0-7.7-3.2-10-9.6l-1.7.5.4 10c3.6 1.4 7.6 2.1 12 2.1 4.6 0 8.1-1 10.7-3.1 2.6-2 3.9-4.9 3.9-8.5 0-2.4-.6-4.4-1.9-5.9-1.3-1.5-3.4-2.8-6.4-4-3.3-1.2-5.6-2.3-6.8-3.3-1.2-1-1.8-2.2-1.8-3.7s.4-2.7 1.3-3.7 2-1.4 3.4-1.4c4 0 6.9 2.9 8.7 8.6l1.7-.5-.4-8.6zm-96.2-.9c-1.4-.7-2.9-1-4.6-1-1.7 0-3.4.7-5.3 2.1-1.9 1.4-3.3 3.3-4.4 5.9l.1-8-15.2 3v1.4l1.5.1c1.9.2 3 1.7 3.2 4.4.6 6.2.6 12.8 0 19.8-.2 2.7-1.3 4.1-3.2 4.4l-1.5.2v1.9h21.2V49l-2.7-.2c-1.9-.2-3-1.7-3.2-4.4-.6-5.8-.7-12-.2-18.4.6-1 1.9-1.6 3.9-1.8 2-.2 4.3.4 6.7 1.8l3.7-9.3z"></path>
                                    </svg>
                                </a>
                                <a class="header__search"  aria-label="Search">
                                    <svg class="fs-icon fs-icon--search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <circle fill="none" stroke="#000" stroke-width="2" cx="8.5" cy="9" r="6"></circle>
                                        <path transform="rotate(45.001 14.922 15.421)" d="M12 14.4h5.9v2H12z"></path>
                                    </svg>
                                </a>
                            </div>
                        </header>
                        <div class="content-wrapper">
                            <div class="title has-left-rail">
                                <div class="left-rail">
                                    <div class="img-container"></div>
                                    <h1><img class="intro-heading" src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEwODAgNTY5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDgwIDU2OSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlPi5zdDB7ZmlsbDojZmZmfTwvc3R5bGU+PHBhdGggY2xhc3M9InN0MCIgZD0iTTE3MiAxNDQuNGgyN2wxOC4zIDU1LjMgMjYuNS01Ni42IDI2LjUgNTYuNiAxOC4zLTU1LjNoMjdsLTQwLjggMTE5LjEtMzEtNjgtMzEgNjhMMTcyIDE0NC40ek0zMTguNSAyMDMuM2MwLTMzLjIgMjctNjAuMiA2MC4yLTYwLjJzNjAuMiAyNyA2MC4yIDYwLjItMjcgNjAuMi02MC4yIDYwLjItNjAuMi0yNy02MC4yLTYwLjJ6bTkzLjcgMGMwLTE4LjktMTQuNC0zNC43LTMzLjUtMzQuN3MtMzMuNSAxNS44LTMzLjUgMzQuNyAxNC40IDM0LjcgMzMuNSAzNC43IDMzLjUtMTUuOCAzMy41LTM0Ljd6TTQ1Ny43IDE0NC40aDQ0LjVjMTkuMiAwIDM1IDE1LjggMzUgMzUgMCAxNC45LTkuNSAyNy45LTIyLjcgMzIuOWwzOC4zIDQ5LjloLTMxLjdsLTM2LjUtNDcuOGgtLjN2NDcuOGgtMjYuNVYxNDQuNHptNDEuNSA0Ny42YzcuMSAwIDEyLjMtNS4xIDEyLjMtMTEuNnMtNS4xLTExLjgtMTIuMy0xMS44aC0xNC45VjE5MmgxNC45ek01NjQuNCAxNDQuNEg1OTF2OTEuNGg0NS44djI2LjRoLTcyLjNWMTQ0LjR6TTY1Mi45IDE0NC40aDQxLjNjMzMuMiAwIDU5LjkgMjYuNCA1OS45IDU4LjlzLTI2LjcgNTguOS01OS45IDU4LjloLTQxLjNWMTQ0LjR6bTQxLjMgOTMuNmMxOS43IDAgMzMuMi0xNS44IDMzLjItMzQuN3MtMTMuNC0zNC43LTMzLjItMzQuN2gtMTQuOFYyMzhoMTQuOHpNNzc5LjMgMTczLjNoLTExLjF2LTI4LjloMjguOXYyOC45bC0xMC42IDI1LjZINzcybDcuMy0yNS42ek04MDguNSAyNDAuNWwyMC4xLTE2LjRjNS4xIDguMSAxMy42IDE0LjYgMjEuNyAxNC42IDcuOCAwIDExLjMtMyAxMS4zLTguNSAwLTUuMy0zLjgtOC42LTEzLjgtMTMuMWwtNi42LTNjLTE3LjctOC0yNy41LTIxLjEtMjcuNS0zNyAwLTIwLjYgMTcuMS0zNCAzNS44LTM0IDEzLjEgMCAyMy4xIDMuMiAzMyAxNC44bC0xNy45IDE4LjljLTYtNy4zLTkuNi04LjgtMTUuMS04LjgtNC41IDAtOS4xIDIuOC05LjEgOC4xIDAgNi4xIDUuMSA5LjUgMTUuOSAxNC4zbDYuMyAyLjhjMTYuMyA3LjMgMjUuNyAxOS4xIDI1LjcgMzUuMyAwIDIxLjItMTUuNiAzNS0zNy41IDM1LTE4LjkgMC0zNC4xLTcuOC00Mi4zLTIzek0wIDI5M2g0NC4zYzE5LjIgMCAzNSAxNS44IDM1IDM1IDAgOC4zLTMuMiAxNS4xLTguMyAyMC4yIDEwIDUuMyAxNi42IDE0LjkgMTYuNiAyNy41IDAgMTkuNC0xNS44IDM1LTM1LjcgMzVIMFYyOTN6bTQxLjMgNDcuNmM3LjEgMCAxMi4zLTUuMSAxMi4zLTExLjZzLTUuMS0xMS44LTEyLjMtMTEuOEgyNi41djIzLjRoMTQuOHptOC4xIDQ1LjhjNy4xIDAgMTIuMy01LjEgMTIuMy0xMS42UzU2LjYgMzYzIDQ5LjQgMzYzSDI2LjV2MjMuNGgyMi45ek0xMDUuNyAyOTNoMjYuNXYxMTcuOGgtMjYuNVYyOTN6TTE1Ny41IDI5M0gxODR2OTEuNGg0NS44djI2LjRoLTcyLjNWMjkzek0yNDUuOSAyOTNoMjYuNXY5MS40aDQ1Ljh2MjYuNGgtNzIuM1YyOTN6TTMzNC40IDI5M2gyNi41djExNy44aC0yNi41VjI5M3pNMzc5LjcgMzUxLjljMC0zMy4yIDI3LTYwLjIgNjAuMi02MC4yczYwLjIgMjcgNjAuMiA2MC4yLTI3IDYwLjItNjAuMiA2MC4yLTYwLjItMjctNjAuMi02MC4yem05My43IDBjMC0xOC45LTE0LjQtMzQuNy0zMy41LTM0LjdzLTMzLjUgMTUuOC0zMy41IDM0LjdjMCAxOC45IDE0LjQgMzQuNyAzMy41IDM0LjdzMzMuNS0xNS44IDMzLjUtMzQuN3pNNTQ1LjUgMzQ5LjJ2NjEuNkg1MTlWMjkxLjdsNzQuMyA2Mi45VjI5M2gyNi41djExOS4xbC03NC4zLTYyLjl6TTY4OCAyOTEuN2w1OC4xIDExOS4xaC0yNy45bC04LjYtMTguM2gtNDMuMWwtOC42IDE4LjNINjMwbDU4LTExOS4xem0xMS41IDc5LjNMNjg4IDM0Ni42IDY3Ni42IDM3MWgyMi45ek03NTYuMiAyOTNoMjYuNXYxMTcuOGgtMjYuNVYyOTN6TTgwOCAyOTNoNDQuNWMxOS4yIDAgMzUgMTUuOCAzNSAzNSAwIDE0LjktOS41IDI3LjktMjIuNyAzMi45bDM4LjMgNDkuOWgtMzEuN0w4MzQuOSAzNjNoLS4zdjQ3LjhIODA4VjI5M3ptNDEuNSA0Ny42YzcuMSAwIDEyLjMtNS4xIDEyLjMtMTEuNnMtNS4xLTExLjgtMTIuMy0xMS44aC0xNC45djIzLjRoMTQuOXpNOTE0LjcgMjkzaDczdjI2LjJoLTQ2LjV2MTkuOWgzNi41djI1LjZoLTM2LjV2MTkuOWg0Ni41djI2LjJoLTczVjI5M3pNMTAwMC4yIDM4OS4xbDIwLjEtMTYuNGM1LjEgOC4xIDEzLjYgMTQuNiAyMS43IDE0LjYgNy44IDAgMTEuMy0zIDExLjMtOC41IDAtNS4zLTMuOC04LjYtMTMuOC0xMy4xbC02LjYtM2MtMTcuNy04LTI3LjUtMjEuMS0yNy41LTM3IDAtMjAuNiAxNy4xLTM0IDM1LjgtMzQgMTMuMSAwIDIzLjEgMy4yIDMzIDE0LjhsLTE3LjkgMTguOWMtNi03LjMtOS42LTguOC0xNS4xLTguOC00LjUgMC05LjEgMi44LTkuMSA4LjEgMCA2LjEgNS4xIDkuNSAxNS45IDE0LjNsNi4zIDIuOGMxNi4zIDcuMyAyNS43IDE5LjEgMjUuNyAzNS4zIDAgMjEuMi0xNS42IDM1LTM3LjUgMzUtMTguOSAwLTM0LjItNy44LTQyLjMtMjN6TTM4Ni41IDQ0OS44SDQxM3Y5MS40aDQ1Ljh2MjYuNGgtNzIuM1Y0NDkuOHpNNDc1IDQ0OS44aDI2LjV2MTE3LjhINDc1VjQ0OS44ek01MTguNiA1NDUuOWwyMC4xLTE2LjRjNS4xIDguMSAxMy42IDE0LjYgMjEuNyAxNC42IDcuOCAwIDExLjMtMyAxMS4zLTguNSAwLTUuMy0zLjgtOC42LTEzLjgtMTMuMWwtNi42LTNjLTE3LjctOC0yNy41LTIxLjEtMjcuNS0zNyAwLTIwLjYgMTcuMS0zNCAzNS44LTM0IDEzLjEgMCAyMy4xIDMuMiAzMyAxNC44bC0xNy45IDE4LjljLTYtNy4zLTkuNi04LjgtMTUuMS04LjgtNC41IDAtOS4xIDIuOC05LjEgOC4xIDAgNi4xIDUuMSA5LjUgMTUuOSAxNC4zbDYuMyAyLjhjMTYuMyA3LjMgMjUuNyAxOS4xIDI1LjcgMzUuMyAwIDIxLjItMTUuNiAzNS0zNy41IDM1LTE4LjkgMC0zNC4xLTcuOC00Mi4zLTIzek02MzMuMyA0NzZoLTI4LjJ2LTI2LjJoODMuMVY0NzZoLTI4LjR2OTEuNmgtMjYuNVY0NzZ6TTU3Mi43IDI5LjJjLTYuNSAwLTExLjYgMS43LTE3IDQuNCAwLTE1LjMuMi0yOC42LjYtMzMuNkw1MjUgNi4xdjIuOGwzLjEuNGM0LjQuNiA2LjEgMy4yIDYuNiA5IDEgMTEuMi44IDcxLjIgMCA4MC44IDguNCAxLjkgMTcuNiAzLjQgMjYuNyAzLjQgMjQuOSAwIDM5LjktMTUuNCAzOS45LTM5LjctLjEtMTkuNi0xMi4zLTMzLjYtMjguNi0zMy42em0tMTAuOSA2OC4zYy0xLjggMC00LjEtLjMtNS4zLS41LS41LTYuNy0uOC0zNC41LS44LTU4LjggMi45LTEgNC44LTEuMiA3LjMtMS4yIDEwLjMgMCAxNi4xIDExLjkgMTYuMSAyNi45LjEgMTkuMS03LjEgMzMuNi0xNy4zIDMzLjZ6TTQwNy4xIDI5LjlsLTQuOSAxLjRDMzk3LjkgMTcgMzkxLjIgOSAzNzguNSA5aC0xNi4zYy0uOCA5LjEtMSAyNC4yLTEgNDBsMTEtLjNjNy4zLS4yIDEwLjMtNS42IDEyLjEtMTMuNmg0LjF2MzMuNGgtNC4xYy0xLjgtOC00LjgtMTMuNC0xMi4xLTEzLjdsLTEwLjktLjNjLjEgMTIgLjQgMjIuMi45IDI4LjIuNyA4LjkgMy4yIDEyLjggOS41IDEzLjdsNS42LjZ2NGgtNTN2LTRsNC40LS42YzYuMy0uOSA4LjctNC44IDkuNC0xMy43IDEuMi0xNC42IDEuNC00NS4xIDAtNjIuMS0uNy04LjktMy4yLTEyLjgtOS40LTEzLjdsLTQuNC0uNnYtNGg4Mi41bC4zIDI3LjZ6bTI2LjQtMS41YzIzLjQgMCAzNS4xIDE1LjkgMzUuMSAzNi44IDAgMjAuNS0xMy4xIDM3LjItMzYuNiAzNy4yLTIzLjQgMC0zNS4xLTE1LjktMzUuMS0zNi44IDAtMjAuNCAxMy4xLTM3LjIgMzYuNi0zNy4yem0tMS4zIDQuNkM0MjEuOSAzMyA0MTkgNDcgNDE5IDY1LjRjMCAxOCA0LjYgMzIuNSAxNC4yIDMyLjUgMTAuNCAwIDEzLjMtMTQgMTMuMy0zMi41LS4xLTE3LjktNC43LTMyLjQtMTQuMy0zMi40em0xNzQuNyAzMy4xYzAtMTkuNCAxMi4yLTM3LjYgMzYuNC0zNy42IDE5LjcgMCAyOSAxNC42IDI5LjEgMzMuNmgtNDMuOWMtLjUgMTcuMyA4LjMgMzAgMjUgMzAgNy40IDAgMTEuNC0xLjggMTUuOC01LjJsMi4xIDIuNWMtNC45IDYuNy0xNSAxMy4xLTI4LjUgMTMuMS0yMSAwLTM1LjktMTUtMzYtMzYuNHptMjEuOS04LjkgMjItLjVjLjEtOS43LTEuNC0yMy42LTkuNC0yMy42UzYyOSA0Ni4yIDYyOC44IDU3LjJ6bTEwMC03LTMuNi45Yy0zLjgtMTIuNC05LjYtMTcuNy0xOC4xLTE3LjctNS43IDAtOS43IDQuMi05LjcgMTAuNCAwIDYuMSA0LjYgOS40IDE3LjggMTQuNSAxMi4yIDQuNyAxNy4xIDEwLjIgMTcuMSAyMC4xIDAgMTQuOC0xMS4zIDIzLjktMzAgMjMuOS05IDAtMTguOS0yLTI0LjgtNC40bC0uNi0yMC41IDMuNi0uOWM1LjEgMTQuMyAxMS44IDE5LjYgMjAuNyAxOS42IDcuNSAwIDExLjctNS4zIDExLjctMTEgMC01LjUtMy4yLTguOS0xNS4xLTEzLjEtMTEuMS00LTE5LjItOC44LTE5LjItMjEuMyAwLTEyLjEgMTAuNy0yMi40IDI4LjMtMjIuNCA4LjIgMCAxNiAxLjQgMjEuMiAzLjhsLjcgMTguMXptLTIwNi43LS41Yy05LjUtNi40LTE5LjctMy42LTIxLjgtLjEtLjcgMTEuNS0uNiAyOS4xLjIgMzcuOS41IDUuOCAyLjIgOC40IDYuNiA5bDUuNy40djRoLTQzLjV2LTRsMy0uNGM0LjQtLjYgNi4xLTMuMiA2LjYtOSAuOS05LjYgMS0yOS42IDAtNDAuOC0uNS01LjgtMi4yLTguNC02LjYtOWwtMy0uNHYtMi44bDMxLjItNi4xLS40IDE2LjNjNy4zLTE2LjggMjEuNy0xOSAyOS42LTE0LjNsLTcuNiAxOS4zeiIvPjwvc3ZnPgo=" alt="Forbes World's Billionaires List 2021"><span class="page-titles screenreader-only">Forbes World's Billionaires List</span></h1>
                                    <div>
                                        <div class="intro-subheading">
                                            <h2>The Richest in 2021</h2></div>
                                        <div class="editors-block">
                                            <div>Edited by Kerry A. Dolan</div>
                                            <div>And Jennifer Wang and Chase Peterson-Withorn</div>
                                        </div>
                                        <div class="heading-dot">
                                            <div></div>
                                        </div>
                                        <div class="sponsored-block">
                                            <div class="sponsored-text">Presented By</div><img class="sponsored-logo" alt="Macallan" src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAADICAYAAADGFbfiAAAdpklEQVR4nO3de7xlc/3H8dc5Z26YcR/kknErxiVNokFyGWFExQyDlDL4dVV+pPpRfuSnkFRyFyq5psilEN2kqKHconKLSY0wgzHGzHx+f3zW+q111vmuvdfaa629j1/v5+OxH+fsvdde67u+6/Jd3zuIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiAD0mVm3tzkS2AyYBKwHvA4YC4yJvnsZeA54CngUeAi4F3i+i2F8HbAqcE8Xt/ladTqwCDiy1wEB+oCVgeXxMD0LzO1RWL4a/f1Uj7Yv+ZYFfoQfm1k9DktX9PX1NbPeLiUgbwRmANOBjTv4/St4IjIL+B3wa+D+2kI32J7AD4DPAie3WO5Q4C3AP/EbVx+e+L0QfR9/thSeCH6/ofACbA9MxuNpSfTZEjxhHpv6bFT0OgVPoOvwL8DwG3cvTAD2BbYDJgJr4/Eeexx/EPgVcC3wcGAdWwA7AV+uMVxzgBHACjWuc09gG2A20I/v50LgJfwYpPd7CTAaWDpa1vAHtFHA2cAzHYbhXcDbawjDufi10wt74OfCF4Dja1rnysBn8H18hSQe5gILgAE8Hu4Gbuhg/VsAh+DX25Jo/Uui9S+MlhmFJ44DJMdiVeBbfX19v+5gm+2ZWVOvATP7uJnNscRsM7vCzE40s0+Y2cFmdpiZHWlmJ5vZZWZ2t5ktsPaeMrMrzewoM9vWzJauGN5pZvbXaN2HF1j+2AJhTDu6YvjyXvuWDMd9Vj2u4teOqfW+s6H9y3ttZWY/KbnvZma/NLOdMuv6rpn9vcawbZ/a3m41rndmB/ub9QczG1EhDAfXEIb7zWxMhTBUfX0rFRd1rXPAzO4suP9HdrD+jcxsbsH1p71iZm9pJPFoKAEZZWanp3bgV2Y2w8zGlVjHcuYX4VHmicSTBSLqRTO73cy+YZ4o7WBma5vZ6My6+8xsWTN7s3kCd4P5gVliZhdH35U5acZE+4yZbWhm/8wJ35Op5ep83dEiTt5nyTFJh7Ou15mpbV3QwL6FXiuY2dWBfZ0ThWd/M3ubmW1sZlua2QHmCUT2oeQ2M1s1WudVZvZIjWH8Rmo7F9a8/0ub2Urm18hSZrapmT0UiA8zs+PMj/u4KN5WMD9n6wzD0ma2mZk9mBOGEwJhqJKAVX0tZ2bPp8K3Y83rj6+1eB9PzomXd3Sw7j7z+9koM+uPPjsjtc74GuxPhaPfrMFSppoj71OpnTnRzJapcd0bmdkHzS/O22xwzqadRWY238xeMj95XjKzl81v6j8xv9GOrCmc17QIx341xgdmNrnNfm9S8/bSrzFm9o/UtuaZ2YoNbg8z29X82KXNN7NPml9crX67vJmdn/ntQjNb18xONbNHawrjaPPcTOxFM1u54Xj5ug31qvkDVJPbTb9OCYRhkZlN6GIYirw+lAnjOQ1vb1IgXszM/mT1lAQckFrnzLzlmjKipvWsDdwOrAGcCBxT03rTHoxeF0bvRwLrAxsArwfG4fUPrwcOAsYDrwJ/xMta5wP/AJ4AHsDLIp9sIJwDLb7bF7i0xm3t1+b7pWrcVtZewCqp9+PwOq5zGtreR4BvZj67F5hCsbL054GZwFV4HVfcaOMOvJ7ozprC+R5gtdT7ZfB4Oaum9YeMDnw2IufzboZhAC+XH072zryfDhwFzGtoe/MYWjcEXi98DnBgxfX3p/7veouoOhKQQ/GIuAfYFG9B1Q2vkiQqse3wCrI7gSvwm8X8LoUn1t/iuz2AdYFHatjOaPzk75W9Ap/NoJkE5MMMTTx+g1coLxm6eEs/xhsc/BpPYONE8OUqAUzJi5cmE5C8c67Vufj/MQztrAvsmvlsBfw6uqChbQ4wNPGIvQ+4CfhOhfX35fzfFVUP7jfwG8bngDfTvcQja2c8ofg5cD3eUuTbdD/xaKcfz4XUYTqDn3S7aQ08MczaHti85m3tCpyZ+exJ4N2UTzxi9+A5hbqtnrPe7fBm69JbexO+581ocJvtbupn47mR16QqCcj3gI8BU4GT2iy7FHAYniv4MXAr8FP8Zl/lhroCcDOeit8RbefrFdbXDe2KnYqK4+124LKa1lnUNPKLJvavcTurAxcHPv8w1ZuA3gR8qeI6svamO/Eincm710wBNulmQFKWxps0vyZ1moCch98ItwZubLHcMnjW/c/AB/C28Vfjnc8uBB7DczB34GXSZczAO4pNAY7A2/EvKLmOJj1A+MTYFA9zFRvguSyAM4DrKq6vrGktvptO63qgMr7G4HoW8Pb7de3vf+PnYF3axUtddY5S3tvwflt56nqwa+UlvOg9azvgi13Yfu06SUBmRq/d8Bt/nnfhRQ0bA7vjic1H8ZvqtcB3o/fL4wnNrSXCcA5JZfTuJL1+O7EiQ29SdVgKvwHOCXxXNcuc/v0VeJFSt7wJ2BbvvHQq8GLm+wl48VJVUwjfkL9Ww7pjC/AiBKhefrwpfiNYBJxG0qE09nqaKTaTYuL6whvxe0/WPjRfh3AGXuwf8l9Uf7DsurIJyCZ47uOzeFFUK9sCR+MX1R8KLLsqXobeyji88vNQ/ELdhs56dY4G/hNviXUOzfSiXg7PhVwe+G461Xoox09LP8TrAZavsK6y4mKAWXjrlVDP7n1q2M4Rgc9mUe5Bo4j4+IytuJ54n+/Gz62HAsvUVf8l5YwgSUAuItz7fH2SXH1TFuPnRl4jmvPo7rVcWdkE5GJ8CJEiZcefoXjZ3jy8VU2rIoA18Ca5k6P3O+CJSRkDwHH4k+epeGXqTPxGX7eR0d9QC4tl6bwF1S7ARtH/8ZNUN5trxsfo+szftL2ANStsYxKew826usI68zyGDw9RVwJyXeZv2nvwnIh01+7AWtH/t+FF6o8Flms6gY9LOg7J+X4Cnoi8ZpRJQLbHL+wPNxMUFuEVSiHrAHfhEQw+JtCvSq5/O3z8ni9EfzcGPkizg+314U2KQ4MydlqMFf/uUZq5obayC17/AnBl9DeUwxpJtSbGeQ8SP6uwzlb+gBejdmoK8Ibo/zherggsN4LWD0nSjLhp9fUkRcpXBpabhg+k2rRb8QfYkGl4CctrQpkEJM6W/7LBsIQ69q0F/ILkwH4EH0mzjOPxJr6r4H1D1qKZXEdW/FR7UeC7HSjf5HVlkhvz9+h+x6H4QryJpIjmfrxFXVaVVkehOpR/4cVDTXiaaglI3DntFpJ+SQ9G77MOqLAdKW8lkpxFekDTUMvF0XQvgT8KL3UJORMfsXzYK5qAjMLb41/UUDiWxotlstn+5fBmunFxyGmU65A1AFwDHBu9Pw6/AXfaf6BTlxNuIVb2Jjud5EZ3SaUQlTeW5EK8KvNd6GluC7yOqqw34KPqZj1Ic/16LqXzll1Lkx8voVzIJHw0W+mOvfGE4QUGJyCz8CbwWd1ojRX7MOGHwAFeI017iyYg6+E7GnqiqsP78HqQ7HAS15F0srkZzwUVtSJ+kuwZvf8A3myzF54mPIRJ2SavcfHVjxjcA78b9sIT9AUMvVFexdDWWNBZMV3ezbWp4fvBz7PDOvzte/EGEQsJx0toiIwmO67JYHHu8HKGHotQ8etkYKtGQ5S4B/h4zndbAV/pUjg6VjQBWT36O7uBMPThkZhNcc/HW2eBz11RZsyYDfAbzmZ43coUvGd6L4WaDk6geNPOSXg9DnQ/9wFJ8dVlDB1x4F+E5zvZh/Ljca2X83kT514d0vHyr8x3zxGOl+nk1/dJfTYA3hn9HzoOV+Fzd2R1MxfyTfJzv0fgHbWHraIJyFySCYrqdiN+c0iXSX4EODj1/gP4QIhFTMYrRVfDnzi2JFxG3223Ep79rGiT17js/DGGPuk27fUk9RJ5FfehYqxVKF+mPCHn82dLrqcb1iRJQMrEy3h6O47Zv4s4jv8C/CTw/d8JH7fpdHcQyEPwUoqQC+jdkEVtFU1A/oKXI27bbsGSzsFbQ6UHONuKwQPnHU/xBGAqySB5s/FK6qYqXjsRygXtRdLEME+6HfuleHvybooTgcfJ73dzA36eZJUtrsm7WHo1NW0rcbw8Sbg5M/gD0p8Dn6sYq3nxw9kV5Dc4CT2MrU53W8s9jXcnCFmN5gZ6rKxoAvI8XuF0cLsFS7gcf6rdnOTgZiuPfoY3uy1iX5KL+BG8EvfRyqGsV6gyPZ045EknMlVG7uxUupI4L/Eywk/bUyk3WNy4nM9DRQ29lr5BLWqxXKgyfVeS/jxSv7fjoyZAOP5j1+JTPGR1u9Pn9eT3Up9KuGNtz5VpxnscPhzJzhW3uT5eDLMuXt6dLjf+KknztVfJr2DKOpCkCOwhvNjq7xXD2YSnCTcfbNe0Mz6Zr6f7ledb4fEJ4UrHtLxBHcuUKed1iuz6XAdtbEHSqbXVDQrqiRcpJ07cf0nrkTAWEc6F7IHfq7rpE8Dvc777Ct2r3C+sTAJyC547uImkM1kZy+C9LP+M92F4Kz64WGwnBicYnwLuK7DemSRFQw/gg6ZlKzOHk1AFeLqCPGsCSTl7qCK+afGF+Fu8M2crfyTc2a/MjTIvh1PXAI11iRP1u/C4aeU+wkOwzKAHczj8GxhNct6GcsVZoQS+j94MPdOqo/a5DLProOxQJofhN/+HyS+zy5qMH6DH8Tb+G+Hzh2Sdkvr/ZoZOIBQyk6Tr//3Rtp4vGK5euYVwvUxemXhcvPU3ul95PoLBxTRFhC7YN+DDSRTxUs7neUVbvTBAPfGSHlVZ6vNevAGHUeyauYtwp75eDMF/F/7wHLIZPiDjsNHJaLwHAB/Ci5sewm/0BwI74rmIGcAJ+AVzD/7EPQJvTvcO4E+BdR6HT0gFnqXMi8C0A0kSjwfxCv64nfeKwJF4JX2Zgf3G450ObwY+TXOzqYUq0/ch3MotLt66lNbl7E3YA29p9CLFx+g5H292nVW00jg0ejH4sRkudsdbps3H97eICwiPtKABFusX9/04j+JF2aHjOBEfvqfbTie/scp/MIxGde50foIL8YEV349XhB+EN3tbjHeomo+X938bj4hWrYYmMbii/NO07zQ2neQm/CBeNvgC/qR7DF55dgOelb0cb+nVqjJ+fTwHFB+YI/Bio3VoZuyvK/ABKdPl/Svh+3Vh6rMdSCoCe1F5Hl+ID+B1VsvR+pxZDDyDF1Nmh5ifhg/fkNdcMZY3UulwasqYjpcJeO5oZO7SHi9z8Jx7dpDJeE7u4Vhn91qUblr9NF7POoH8OrQ+vMj7BbyrQvahcQbhJsBNOwQvqQhNNXEunlMJPah1VZUJbpbgQ5tcVDEM6aKr22g/t8euJMUG9+LZuqXwYrJJ+MHeGZ+x7jPRcnk3nzF4ah/3Qr4Dv2m/gvdFCQ2CWIfZeML2/szn+zI4AYnrDm6kWH1QnVYhuRC3pHpcjMFvlnktTWKP5Xy+acXt12VlkgRkC6o3Ex+Fx8twn0nztWIaSSLw+ehVRZzAP1NxPWXNxhORawLfjcdzV1Pp8SR6vZ4h7ZN40Rd4RHy0zfJbkjTVvTt6fyg+m9f38Qs6Lsb6OMlUu6FhRLaPfrNi9P7zeNEbeEXwKsDhhfaiM5cwNAHZBc82P4DPCxAXX/Wi8nwanjAvxluG9FGsAs/wXOgmDK232J/2CUjeYJ2b4r23mxgPaxw+d835tJ+hcBreIKTTeNkYH84/bX+UgNQlLrJ+Aj+W42jfgq8Pf2hcmqGDGC4TrfPM+oJY2LX42H+hUpDd8GGaejtCg5n16rWZmS22xAfaLL+umT0TLfuwmR1uZrdFr3Uyyx6VWu85gXUdY4O9J/XdXdFnEzvcrxui388zs3Ftlr3Hhjoh+u7Q6P1sMxvZZj1fCazHzOytHe4D5vFqZnZBh78/LSdMb2vzu34z+0vOb7evsD+tXrtF659aYNlbomW/1eG2Ts3Zt60rhP+8nHVu2FB8hV5nNByGvgLLvCW13U7OlTFm9lRgH35ZIdwbptZzXge/7zezu3Pi9hEzuyT1fmbeeprSVCVxEWeltn8eXqeSZxye81gpej+AD29yHl7klO4weDxwcvT/nQwdJO87JDmNv+Nl+z/E+7gYXjm6Gt0Z7j1Umb5n5u8lhOdRbtImJLNDhsYQKiIv19SuZcsS/HiENFWhGTehbldMuBHeUATqj5fh2CdkAC8azmti3g19URh2arcgSUONB+hs7pgFhFvVbYt3O+iFJeTXw65Db1qK/Z9eJSCn4Dds8OZz7SZQuRrYMPX+dryn6fcyy51JMnT7kyRl+LHr8JF/wetI3oFnXS+LtnEsPrVu0XG3qrqCoYnDRng9SDw/ci8GgYxbBj1K+6mL88wiPOnXPnh9SCt5bfen0Uy/iT3w5sOhHslpcbw8Rufxcg8+v03WPgy/ARYn4fvcy06cb4rC0O64D5AMP1Kk70eevM6yvZzH5Td4Pcyw04sEZC+8iS14+V27MWe+weDJ5g/C6w6y/QWuIEmpn49+k26lcA1JX4QX8NzLTsD/4B3B1sPrUrrpSYY+8YzE93E0fpO6t8thgqQc+SqqzZ0SeppblfZNq39L+Aa9foHflrUhXi/Rrpc9DI6XKuORheJlFYZfk964Jd3CYRCGdkPZ7E4yEGeVBOQ3DJ1WAro/wGLWqfSmNVhL3U5AJpI0R12CN5tt1RTtQ8DHov9fwicoChV13UjS4W4enjt5KPX9uSRFQs/hT1bH4JXrB+Etv+IEqR/vj9GtHsKtKsh7MWz7bgydnrVTV9L5cNkn5XxepI9QGXFDiVBDi7T02FVV4+Uq6plgrGnx+Gvd7n/USRji4qufU33umNDDxOrU//BS1qEMs1Gpu5mAjMXLjeNs+lRaD40xiaRzzzy8r8evA8vdQjKa7wt4eWW6LPuTJJPYv4rnOuJRY0MjvH4eb/7brWx7Xi7jKYo9FdctvkjupP3QJe08TbiuYFf8qb+VXzC4SXNsK+pLRNbDO2b9ifaTpcW5g98TfkIt4x+Ee0hPIen3MxysE/3tdh1c2roFwrAGyXnbad1U2pU52+t1PdUTDLP50ruZgFxHUo/xHtpnx84nyQW8k/BTRbpybS4+lEn6Zrw1g/uV7EPrdvsn4E/gp7UJW91CnQQvp/sXbtyZEeobNiVvPUXKlD9BeCj000gGeKwiblJ8bMulvO9HnIAUHbqknbxcTJmJ05q2Y/tFGrdDgWWm4XUgi6gnAfkb3oQ2ayq9H0H5+xQf/aBx/fh0nE27Gq+wBu+5Huock/Y1kqFN9iU8WN1xJBf1XDyxSCcyIxg8ntax5LfuATgbLyLbju5nEy9naBa9F5Xn6TnX8yZIKutH+DhoWTNo33/ixWi5UPHFD/AWc506Fn9YuIX2iWV6ZsW64uV6wtMN7EPrXu3dMone54behPftaicu+ruW+vpF5CXw78v5vJs+SrNTPBfWT/MdmK7GBzdbiCcioZQ9bQr+5Al+kYee+HYkGZrkRbzOI93sdn18iJPNo/c3k19BPgrPHa0crbfqvBOdFH09weAT9iZaD0HdlDiLfgvw15rWmTdc9joMbSUXMovBE47FVgd+R7EbTNYJeHPv5/B6tnbS8RKaNKsTiwnHy1p0dzKjPP9Vcvm8875KUfAxBZbZhiQ32u7BtIwfEE6M9qPciLiW838VC/Gi157rx1vF1F0xCX5j/jmeePwNL74KNV/Mioc2+SH5N/3057swuNhqP/zpbtXUZ0cSth5+g3qY+i7aToudLsn5v4iXcz4vM8zBViTt/atWEmflNRQo+jT3Uzx88zKfj8frab5EsRYym+L1aPGNaSp+brayBclMnHWPhpw3vlnZyvTQ8V9M58NcHE2xxD0ttK3FdP5AdiTFrsk4cX+a+ooXwW/SoeOzDslQNkW8QtJir85J0X5FeFTz7jKzHc17eE+o0Nsy+9og1aPz2qiHZ5HffTr6zeNmtnzOMnGvYTOzAzPfnWtm95nZG83s1miZk3PWM9PM/mZm769xvzGz30TbfdXM1ir526fNe+ePLvm7dG/UtN06WMdi817/dcYJFu51b2Y2ucQ6VrLkuGbNM7OzzGwvM9vUfHSCiWY2xcyOMLPbU8vOteK99L8b/WaJma3fQLzMytmfMj3Tf5CzjjJxi5mtaWaXB9azeYHfXpkThm1KhuF1Zva9wHq2Ciy7rpm9HH1/dcntFHntnLNPt5VYx+TU777fQBhvTq3/0LzlmtIXrfxMvG5iTapnsw7HBygEb4JbZF4P8BzD43j/h53JbxVzAv4EeR5Ji4TJ+D7cT/JUOwcvltqQwU16J+LFdmPw/iR5o7+2szOezV+AF9P04c1f07OYzcEr7eMy/OXx3EXeuDpfxZ+q857MJ+K97MfgTzP9eC4qb4KvhXiroefx47ocXgl3A3Bi9H5eFO5NUr/7M14EOBCF+SLKV9x9ES8SfCHapzfnLGd4UdQcfIyoS2k/7tB0vCI9O7JtET/BK/BDk45thMfvUni92gYMHsTxL3hRaZV4OR4vpi0bL2dE70+Pwvcyfl5tQH6Ltrn48X8JPz+zTdMt+mxstI6Vc9bzZpLBNDcjyfHFYViXoWNIxeZFYXixQBgmkj9s/0T8XP8sXkfZh08eF49OsQhvHTcnWtd8fGTv0PQReSZG+zYOL0mYyNBRpWPPRPs1gB/Lz+LHdX+8aBT8OE3Cz5XYfSR1gqPx3Mnn8JKQTqyDF3ePw++9wSqJvr5meiXEgyl+BD8R50YB6mRGv23wyuA18GKCvWk/dHfa1niEnkHrJpVx2J7AT6iT8BvgSQxu9noZnoDtgPc63wOfvGd9vC/J10qELWR3vE7nKZKLYD4+onCcoKyGX5hxojweP2HOIpxQH0nr8tUdou3OJungtwAvGnwl89tF+ECRa5K0pR+HX/Tj8ZM9vrHMx4sb43WsjhfdLME7uC2g3I1ybbzyezx+A3kVHyRxQSaMi/FEbDXgdSQ3j7Np3YHxSrw46d3AwdG+tOvdfgueqP28xTLb4+fIbDxeXqZ1vLxCuXhZCy9yWYVy8bIi3nJxAt7q8Fn8/OlPhXFhah0WhXE8yXz0rYYzX4Sfx/fjN/r482Xxh4mHU8vvhDc+iM/7fsLnYByGlUn6FbULw2w8gX6J5JoahxdRPw58GXgLfvPuxzvizoqWHYuf6xOida6OPyiVSUB2wu8T8b49hz9IpRO+eMj3+NqO4+lBPKHdhMFFrY+RzHEzOgpj3DihD79f/pTOE5BH8eLGL1KsiqBWfZnszbfxZoRHk4wn1coo/II4Hm8R84/o9zd3EJa340/F72JoWXfWRSSTU/0UT3SyZbB9+AkX18E8iw+Bcg7VR3SNT6hOemnHJ2LZnF6Vbab1R68yncPKhrk/WraT3Gwn8TMWryPZBL/hjsVvws/iF/Zt5E9Uld5u2fjtZrz0R9ur0gO+qrrOwU63DeXirsxvqu7bSPzYdPL7KudFIU3lQLIJCHjxwMV4ZF6Dtwh6BH+6WBZP2TfHn4bj7P2deKLzsyphwSOy6AUygB+sdpE+Mlp3L4djEBHpmW4mILGD8JFsJ+DZyLijzkI8h3Av3tTtasI9ukVEZBhoKgEREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREXH/C2Dy0E95jOC5AAAAAElFTkSuQmCC"></div>
                                        <div class="social">
                                            <div class="social__icons">
                                                <div class="social__icon">
                                                    <div class="social__icon-link social__icon-link--facebook" data-ga-track="forbes-social-facebook">
                                                        <div>
                                                            <svg class="fs-icon fs-icon--facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
                                                                <path d="M32.9 49H25V30h-3.9v-6.6H25v-3.9c0-5.4 2.2-8.5 8.5-8.5h5.2v6.6h-3.3c-2.5 0-2.6.9-2.6 2.6v3.3h5.9l-.5 6.5H33v19h-.1z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="social__icon">
                                                    <div class="social__icon-link social__icon-link--twitter" data-ga-track="forbes-social-twitter">
                                                        <div>
                                                            <svg class="fs-icon fs-icon--twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
                                                                <path d="M22.2 38.9c-3.4-.3-6.1-1.7-7.5-5.1h3.6c-3.9-1.4-5.6-4.3-5.9-8.4 1.2.6 2.3.7 3.5.7-2.1-1.6-3.6-3.4-3.7-6.1-.1-1.5.5-2.8 1.3-4 4.4 5 9.7 8.3 16.5 8.9v-2.7c.1-1.9.6-3.6 1.9-5.1 2.5-2.8 6.9-3.1 9.8-.7.2.2.5.4.7.6.2.2.4.2.7.2 1.1-.3 2-.9 3-1.4.5-.3 1.1-.6 1.7-1-.4 1.1-.9 2-1.5 2.8-.6.8-1.3 1.6-2.2 2.2 1.6-.2 3.2-.6 4.8-1.1-.3.4-.6.8-.9 1.1l-2.7 2.4c-.1.1-.2.3-.2.4.1 3.3-.6 6.5-1.9 9.6-1.9 4.2-4.7 7.5-8.6 9.9-2.5 1.5-5.2 2.4-8.1 2.9-5.5.8-10.5-.5-15.1-3.3-.1 0-.1-.1-.2-.1h.2c1.1.5 2.2.4 3.3.3 2.3-.2 4.5-.9 6.6-2.1l.9-.6v-.3z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="social__icon">
                                                    <div class="social__icon-link social__icon-link--linkedin" data-ga-track="forbes-social-linkedin">
                                                        <div>
                                                            <svg class="fs-icon fs-icon--linkedin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
                                                                <path d="M44.9 33.2v11h-6.4V34c0-2.6-.9-4.3-3.2-4.3-1.8 0-2.8 1.2-3.3 2.3-.2.4-.2 1-.2 1.6v10.7h-6.4s.1-17.4 0-19.2h6.4V27.9v-.1c.8-1.3 2.4-3.2 5.8-3.2 4.1 0 7.3 2.7 7.3 8.6zM18.7 15.8c-2.2 0-3.6 1.4-3.6 3.3 0 1.8 1.4 3.3 3.5 3.3 2.2 0 3.6-1.5 3.6-3.3 0-1.9-1.3-3.3-3.5-3.3zm-3.2 28.4h6.4V25h-6.4v19.2z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="social__icon">
                                                    <div class="social__icon-link social__icon-link--email" data-ga-track="forbes-social-email">
                                                        <div>
                                                            <svg class="fs-icon fs-icon--email" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                                <path class="fs-icon fs-icon--_xF106_" d="M17 15.2H3.2l5.2-4.3.6.4c.3.3.7.4 1.1.4s.8-.1 1.1-.4l.6-.5 5.2 4.4zm.6-9.2v8l-4.8-4 4.8-4zm-15 8V6l4.8 4-4.8 4zm7.8-3.6c-.2.2-.4.2-.6 0L3.6 5.2h13l-6.2 5.2z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="desktop-header-content"><img class="hero-image ratio16x9" src="https://thumbor.forbes.com/thumbor/1500x0/smart/filters:format(jpeg)/https%3A%2F%2Fimages.forbes.com%2FBillionaires2021-ListHeader-2%2FBillionaires2021-Desktop-LanderHeader-v2.png" alt="The World's Billionaires 2021: A record 2,755 people make this year's Forbes list, including Kate Wang, Sergio Stevanato, Elon Musk, Jeff Bezos, Kim Kardashian West, Tyler Perry, Susanne Klatten, David Velez, Whitney Wolfe Herd and Jack Ma.">
                                    <div class="heading-content">
                                        <div class="intro-text">
                                            <div><span class="bold"><span class="dropcap">I</span>t’s been a year like no other</span>, and we aren’t talking about the pandemic. There were rapid-fire public offerings, surging cryptocurrencies and skyrocketing stock prices. The number of billionaires on Forbes’ 35th annual list of the world’s wealthiest exploded to an unprecedented 2,755--660 more than a year ago. Of those, a record high 493 were new to the list--roughly one every 17 hours, including 210 from China and Hong Kong. Another 250 who’d fallen off in the past came roaring back. A staggering 86% are richer than a year ago.
                                                <br>Jeff Bezos is the world’s richest for the fourth year running, worth $177 billion, while Elon Musk rocketed into the number two spot with $151 billion, as Tesla and Amazon shares surged.
                                                <br>Altogether these billionaires are worth $13.1 trillion, up from $8 trillion in 2020. The U.S. still has the most, with 724, followed by China (including Hong Kong and Macao) with 698. We used stock prices and exchange rates from March 5 to calculate net worths. See below for the full list of the world’s billionaires and our methodology.
                                                <br>For daily updated net worths of all 2,755 billionaires, check out our <a  >real-time billionaires rankings</a>.</div>
                                        </div>
                                        <div class="caption-credit caption-credit__mobile"><span class="caption-credit caption-credit__label">Header Image: </span>Back (left to right): Kate Wang, Sergio Stevanato, Elon Musk, Jeff Bezos, Kim Kardashian West, Tyler Perry, Susanne Klatten. Front: David Vélez, Whitney Wolfe Herd, Jack Ma. Illustration by Neil Jamieson for Forbes.</div>
                                        <div>
                                            <p class="caption-credit caption-credit__desktop">Back (left to right): Kate Wang, Sergio Stevanato, Elon Musk, Jeff Bezos, Kim Kardashian West, Tyler Perry, Susanne Klatten. Front: David Vélez, Whitney Wolfe Herd, Jack Ma. Illustration by Neil Jamieson for Forbes.</p>
                                            <div class="pullquote">WEALTH SURGE
                                                <br> A new billionaire was minted every 17 hours on average over the past year. Altogether, the world’s wealthiest are $5 trillion richer than a year ago.</div>
                                        </div>
                                    </div>
                                    <div class="down-arrow">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.8 414.6">
                                            <path fill="currentColor" d="M137.4 0v313.2c20.4-35.4 55.2-66 129.6-85.2l1.8 4.8c-62.4 30-119.4 131.4-131.4 181.8h-6C119.4 364.2 63 262.8 0 232.8l1.8-4.8c74.4 19.2 109.2 49.8 129.6 85.2V0z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="initial-ad">
                                <div class="ad-row">
                                    <fbs-ad position="top" progressive="false" display-called="">
                                        <div id="top-1" aria-hidden="true" data-google-query-id="CJCazKPLtfYCFU-rAAAdXW4CQA" class="show-label">
                                            <div id="google_ads_iframe_/7175/fdc.forbes/csf_0__container__" style="border: 0pt none; display: inline-block; width: 970px; height: 250px;">
                                                <iframe frameborder="0" src="https://dd11418e022d5ebaab7747a40e2e80c1.safeframe.googlesyndication.com/safeframe/1-0-38/html/container.html" id="google_ads_iframe_/7175/fdc.forbes/csf_0" title="Ad content" name="" scrolling="no" marginwidth="0" marginheight="0" width="970" height="250" data-is-safeframe="true" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" role="region" aria-label="Advertisement" tabindex="-1" data-google-container-id="1" aria-hidden="true" style="border: 0px; vertical-align: bottom;" data-load-complete="true"></iframe>
                                            </div>
                                        </div>
                                    </fbs-ad>
                                </div>
                            </div>
                            <div class="table-block">
                                <div class="has-left-rail">
                                    <div class="left-rail">
                                        <div class="img-container"></div>
                                    </div>
                                    <div class="pull-right">
                                        <header>
                                            <h2 class="table-header">The Richest People In The World</h2></header>
                                    </div>
                                </div>
                                <div class="table-block-wrapper">
                                    <div class="has-left-rail">
                                        <div class="left-rail">
                                            <div class="img-container"></div>
                                        </div>
                                        <div class="filters">
                                            <div class="wealth-key"><span>Change in wealth key: </span>
                                                <div>
                                                    <div class="status"><img src="https://images.forbes.com/assets/list-landers/forbes-400-2020/Forbes400-UpArrow1.svg" alt="up arrow"></div>&nbsp;:&nbsp;Up</div>
                                                <div>
                                                    <div class="status"><img src="https://images.forbes.com/assets/list-landers/forbes-400-2020/Forbes400-DownArrow1.svg" alt="down arrow"></div>&nbsp;:&nbsp;Down</div>
                                                <div>
                                                    <div class="status"><img src="https://images.forbes.com/assets/list-landers/forbes-400-2020/Forbes400-Unchanged1.svg" alt="unchanged"></div>&nbsp;:&nbsp;Unchanged</div>
                                                <div>
                                                    <div class="status"><img src="https://images.forbes.com/assets/list-landers/forbes-400-2020/Forbes400-NewToList1.svg" alt="new to list"></div>&nbsp;:&nbsp;New To List</div>
                                                <div>
                                                    <div class="status"><img src="https://images.forbes.com/assets/list-landers/forbes-400-2020/Forbes400-Returnee1.svg" alt="list returnee"></div>&nbsp;:&nbsp;Returnee</div>
                                            </div>
                                            <div class="filter-heading">Filter list by: </div>
                                            <div class="filter-wrapper">
                                                <div class="filter-reset selected">Overall</div>
                                                <div class="">Age </div>
                                                <div class="">Women</div>
                                                <div class="">New To List</div>
                                                <div class=" dropdown-filter">
                                                    <div>
                                                        <div class="dropdown-filter-title "><span>Industry</span>
                                                            <div class="caret">
                                                                <svg class="fs-icon fs-icon--chevron-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 19.8">
                                                                    <path transform="rotate(45.001 12.615 10.187)" d="M7.9 9h9.5v2.4H7.9z"></path>
                                                                    <path transform="rotate(134.999 7.586 10.187)" d="M2.8 9h9.5v2.4H2.8z"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <ul>
                                                            <li>All</li>
                                                            <li class="" value="Automotive">Automotive</li>
                                                            <li class="" value="Construction &amp; Engineering">Construction &amp; Engineering</li>
                                                            <li class="" value="Diversified">Diversified</li>
                                                            <li class="" value="Energy">Energy</li>
                                                            <li class="" value="Fashion &amp; Retail">Fashion &amp; Retail</li>
                                                            <li class="" value="Finance &amp; Investments">Finance &amp; Investments</li>
                                                            <li class="" value="Food &amp; Beverage">Food &amp; Beverage</li>
                                                            <li class="" value="Gambling &amp; Casinos">Gambling &amp; Casinos</li>
                                                            <li class="" value="Healthcare">Healthcare</li>
                                                            <li class="" value="Logistics">Logistics</li>
                                                            <li class="" value="Manufacturing">Manufacturing</li>
                                                            <li class="" value="Media &amp; Entertainment">Media &amp; Entertainment</li>
                                                            <li class="" value="Metals &amp; Mining">Metals &amp; Mining</li>
                                                            <li class="" value="Real Estate">Real Estate</li>
                                                            <li class="" value="Service">Service</li>
                                                            <li class="" value="Sports">Sports</li>
                                                            <li class="" value="Technology">Technology</li>
                                                            <li class="" value="Telecom">Telecom</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class=" dropdown-filter">
                                                    <div>
                                                        <div class="dropdown-filter-title "><span>Country / Territory</span>
                                                            <div class="caret">
                                                                <svg class="fs-icon fs-icon--chevron-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 19.8">
                                                                    <path transform="rotate(45.001 12.615 10.187)" d="M7.9 9h9.5v2.4H7.9z"></path>
                                                                    <path transform="rotate(134.999 7.586 10.187)" d="M2.8 9h9.5v2.4H2.8z"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <ul>
                                                            <li>All</li>
                                                            <li class="" value="Algeria">Algeria</li>
                                                            <li class="" value="Argentina">Argentina</li>
                                                            <li class="" value="Australia">Australia</li>
                                                            <li class="" value="Austria">Austria</li>
                                                            <li class="" value="Belgium">Belgium</li>
                                                            <li class="" value="Brazil">Brazil</li>
                                                            <li class="" value="Canada">Canada</li>
                                                            <li class="" value="Chile">Chile</li>
                                                            <li class="" value="China">China</li>
                                                            <li class="" value="Colombia">Colombia</li>
                                                            <li class="" value="Cyprus">Cyprus</li>
                                                            <li class="" value="Czechia">Czechia</li>
                                                            <li class="" value="Denmark">Denmark</li>
                                                            <li class="" value="Egypt">Egypt</li>
                                                            <li class="" value="Eswatini (Swaziland)">Eswatini (Swaziland)</li>
                                                            <li class="" value="Finland">Finland</li>
                                                            <li class="" value="France">France</li>
                                                            <li class="" value="Georgia">Georgia</li>
                                                            <li class="" value="Germany">Germany</li>
                                                            <li class="" value="Greece">Greece</li>
                                                            <li class="" value="Guernsey">Guernsey</li>
                                                            <li class="" value="Hong Kong">Hong Kong</li>
                                                            <li class="" value="Hungary">Hungary</li>
                                                            <li class="" value="Iceland">Iceland</li>
                                                            <li class="" value="India">India</li>
                                                            <li class="" value="Indonesia">Indonesia</li>
                                                            <li class="" value="Ireland">Ireland</li>
                                                            <li class="" value="Israel">Israel</li>
                                                            <li class="" value="Italy">Italy</li>
                                                            <li class="" value="Japan">Japan</li>
                                                            <li class="" value="Kazakhstan">Kazakhstan</li>
                                                            <li class="" value="Lebanon">Lebanon</li>
                                                            <li class="" value="Liechtenstein">Liechtenstein</li>
                                                            <li class="" value="Macao">Macao</li>
                                                            <li class="" value="Malaysia">Malaysia</li>
                                                            <li class="" value="Mexico">Mexico</li>
                                                            <li class="" value="Monaco">Monaco</li>
                                                            <li class="" value="Morocco">Morocco</li>
                                                            <li class="" value="Nepal">Nepal</li>
                                                            <li class="" value="Netherlands">Netherlands</li>
                                                            <li class="" value="New Zealand">New Zealand</li>
                                                            <li class="" value="Nigeria">Nigeria</li>
                                                            <li class="" value="Norway">Norway</li>
                                                            <li class="" value="Oman">Oman</li>
                                                            <li class="" value="Peru">Peru</li>
                                                            <li class="" value="Philippines">Philippines</li>
                                                            <li class="" value="Poland">Poland</li>
                                                            <li class="" value="Portugal">Portugal</li>
                                                            <li class="" value="Qatar">Qatar</li>
                                                            <li class="" value="Romania">Romania</li>
                                                            <li class="" value="Russia">Russia</li>
                                                            <li class="" value="Singapore">Singapore</li>
                                                            <li class="" value="Slovakia">Slovakia</li>
                                                            <li class="" value="South Africa">South Africa</li>
                                                            <li class="" value="South Korea">South Korea</li>
                                                            <li class="" value="Spain">Spain</li>
                                                            <li class="" value="St. Kitts and Nevis">St. Kitts and Nevis</li>
                                                            <li class="" value="Sweden">Sweden</li>
                                                            <li class="" value="Switzerland">Switzerland</li>
                                                            <li class="" value="Taiwan">Taiwan</li>
                                                            <li class="" value="Tanzania">Tanzania</li>
                                                            <li class="" value="Thailand">Thailand</li>
                                                            <li class="" value="Turkey">Turkey</li>
                                                            <li class="" value="Ukraine">Ukraine</li>
                                                            <li class="" value="United Arab Emirates">United Arab Emirates</li>
                                                            <li class="" value="United Kingdom">United Kingdom</li>
                                                            <li class="" value="United States">United States</li>
                                                            <li class="" value="Venezuela">Venezuela</li>
                                                            <li class="" value="Vietnam">Vietnam</li>
                                                            <li class="" value="Zimbabwe">Zimbabwe</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="search-box">
                                                    <input placeholder="Search name" value="">
                                                    <div>
                                                        <svg class="fs-icon fs-icon--search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                            <circle fill="none" stroke="#000" stroke-width="2" cx="8.5" cy="9" r="6"></circle>
                                                            <path transform="rotate(45.001 14.922 15.421)" d="M12 14.4h5.9v2H12z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="spac-key">★ :SPAC</div>
                                        </div>
                                    </div>
                                    <div class="table" role="table" style="min-width: 0px;">
                                        <div>
                                            <div class="headers has-left-rail">
                                                <div class="left-rail">
                                                    <div class="img-container"></div>
                                                </div>
                                                <div class="header-row" role="row" style="display: flex; flex: 1 0 auto; min-width: 0px;">
                                                    <div class="rank active-sort" colspan="1" role="columnheader" title="Toggle SortBy" style="box-sizing: border-box; flex: 150 0 auto; min-width: 0px; width: 150px; cursor: pointer;">
                                                        <div class="header-name">
                                                            <div class="display">Rank
                                                                <div class="indicator">
                                                                    <div class="caret ascending">
                                                                        <svg class="fs-icon fs-icon--chevron-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 19.8">
                                                                            <path transform="rotate(45.001 12.615 10.187)" d="M7.9 9h9.5v2.4H7.9z"></path>
                                                                            <path transform="rotate(134.999 7.586 10.187)" d="M2.8 9h9.5v2.4H2.8z"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="header-border"></div>
                                                    </div>
                                                    <div class="personName " colspan="1" role="columnheader" title="Toggle SortBy" style="box-sizing: border-box; flex: 150 0 auto; min-width: 0px; width: 150px; cursor: pointer;">
                                                        <div class="header-name">
                                                            <div class="display">Name</div>
                                                        </div>
                                                        <div class="header-border"></div>
                                                    </div>
                                                    <div class="netWorth " colspan="1" role="columnheader" title="Toggle SortBy" style="box-sizing: border-box; flex: 150 0 auto; min-width: 0px; width: 150px; cursor: pointer;">
                                                        <div class="header-name">
                                                            <div class="display">Net Worth</div>
                                                        </div>
                                                        <div class="header-border"></div>
                                                    </div>
                                                    <div class="age " colspan="1" role="columnheader" title="Toggle SortBy" style="box-sizing: border-box; flex: 150 0 auto; min-width: 0px; width: 150px; cursor: pointer;">
                                                        <div class="header-name">
                                                            <div class="display">Age</div>
                                                        </div>
                                                        <div class="header-border"></div>
                                                    </div>
                                                    <div class="countryOfCitizenship " colspan="1" role="columnheader" title="Toggle SortBy" style="box-sizing: border-box; flex: 150 0 auto; min-width: 0px; width: 150px; cursor: pointer;">
                                                        <div class="header-name">
                                                            <div class="display">Country / Territory</div>
                                                        </div>
                                                        <div class="header-border"></div>
                                                    </div>
                                                    <div class="source " colspan="1" role="columnheader" title="Toggle SortBy" style="box-sizing: border-box; flex: 150 0 auto; min-width: 0px; width: 150px; cursor: pointer;">
                                                        <div class="header-name">
                                                            <div class="display">Source</div>
                                                        </div>
                                                        <div class="header-border"></div>
                                                    </div>
                                                    <div class="category " colspan="1" role="columnheader" title="Toggle SortBy" style="box-sizing: border-box; flex: 150 0 auto; min-width: 0px; width: 150px; cursor: pointer;">
                                                        <div class="header-name">
                                                            <div class="display">Industry</div>
                                                        </div>
                                                        <div class="header-border"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="table-body" role="rowgroup">
                                            <div class="table-row-group">
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="lander-ad">
                                <div class="ad-row">
                                    <fbs-ad position="topx" progressive="true">
                                        <div id="topx-14"></div>
                                    </fbs-ad>
                                </div>
                            </div>
                            <div class="featured-articles has-left-rail">
                                <div class="left-rail">
                                    <div class="img-container"><img src="https://images.forbes.com/Billionaires2021-GIF-v1/Billionaires2021-GIFCovers-v3.gif" alt="Forbes Magazine Billionaires Covers"></div>
                                </div>
                                <div class="article-block-container">
                                    <header class="article-header">
                                        <h2>Featured Articles</h2></header>
                                    <div class="article-block-wrapper">
                                        <div class="article-content-container">
                                            <a >
                                                <div class="article-image ratio16x9" style="background-image: url(&quot;https://thumbor.forbes.com/thumbor/746x0/smart/filters:format(jpeg)/https%3A%2F%2Fimages.forbes.com%2FBillionaires2021-Sm-ThumbnailsForLander3%2FDCS-AustinRussell-Thumbnail-SocialShare-v1.png&quot;);"></div>
                                                <h3 class="article-title">How Austin Russell Became The Youngest Self-Made Billionaire</h3>
                                                <div class="article-description">
                                                    <p>After dropping out of Stanford and getting a $100,000 fellowship from Peter Thiel, Austin Russell got to work on his passion project–and now, in the blink of an eye, he is the world's youngest self-made billionaire at just 26.</p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="article-content-container">
                                            <a >
                                                <div class="article-image ratio16x9" style="background-image: url(&quot;https://thumbor.forbes.com/thumbor/746x0/smart/filters:format(jpeg)/https%3A%2F%2Fimages.forbes.com%2FBillionaires2021-Sm-ThumbnailsForLander1%2FSPAC_Billionaires-Billionaires2021-16X9-001.png&quot;);"></div>
                                                <h3 class="article-title">Chamath Palihapitiya And Nine Other New Billionaires Minted By SPAC Frenzy</h3>
                                                <div class="article-description">
                                                    <p>SPAC IPOs have raised $180 billion since the beginning of 2020, helping both sponsors and founders get rich quickly, but the boom has yielded relatively few new billionaires.</p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="article-content-container">
                                            <a >
                                                <div class="article-image ratio16x9" style="background-image: url(&quot;https://thumbor.forbes.com/thumbor/746x0/smart/filters:format(jpeg)/https%3A%2F%2Fimages.forbes.com%2FBillionaires2021-Sm-ThumbnailsForLander2%2FRichestInEurope-Billionaires2021-16X9-001.png&quot;);"></div>
                                                <h3 class="article-title">Europe’s Billionaires Are $1 Trillion Richer Than A Year Ago</h3>
                                                <div class="article-description">
                                                    <p>Bernard Arnault remains Europe’s richest person, but when it comes to billionaires per country in Europe, Germany is way out in front.</p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="article-content-container">
                                            <a >
                                                <div class="article-image ratio16x9" style="background-image: url(&quot;https://thumbor.forbes.com/thumbor/746x0/smart/filters:format(jpeg)/https%3A%2F%2Fimages.forbes.com%2FBillionaires2021-Sm-ThumbnailsForLander1%2FCryptoBillionaires-Billionaires2021-16X9-001.png&quot;);"></div>
                                                <h3 class="article-title">The Cryptocurrency Tycoons On Forbes’ 2021 Billionaires List</h3>
                                                <div class="article-description">
                                                    <p>It’s a digital gold rush. The surge in value of Bitcoin and other cryptocurrencies pushed eight new crypto billionaires onto the Forbes list.</p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="article-content-container">
                                            <a >
                                                <div class="article-image ratio16x9" style="background-image: url(&quot;https://thumbor.forbes.com/thumbor/746x0/smart/filters:format(jpeg)/https%3A%2F%2Fimages.forbes.com%2FBillionaires2021-Sm-ThumbnailsForLander1%2FBillionaires2021-PremiumArticle-RichestCities-Horiz-v1.png&quot;);"></div>
                                                <h3 class="article-title">World’s Richest Cities: The Top 10 Cities Billionaires Call Home</h3>
                                                <div class="article-description">
                                                    <p>From Beijing to Hangzhou, China’s wealthiest cities led the 2020 billionaire boom.</p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="article-content-container">
                                            <a >
                                                <div class="article-image ratio16x9" style="background-image: url(&quot;https://thumbor.forbes.com/thumbor/746x0/smart/filters:format(jpeg)/https%3A%2F%2Fimages.forbes.com%2FBillionaires2021-Sm-ThumbnailsForLander3%2FBillionaires2021-CollegesWithMostBillionaires-Horiz-v1.png&quot;);"></div>
                                                <h3 class="article-title">These 10 Colleges Have Produced The Most Billionaire Alumni</h3>
                                                <div class="article-description">
                                                    <p>American universities dominate, but it’s not all Ivy Leaguers on the 2021 World’s Billionaires list.</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="related-article-wrapper">
                                        <ul class="related-article-list"><a ><h3 class="related-article-item">The World’s Youngest Billionaires Include A Teenager From Germany, A Crypto Magnate And Stanford Dropout</h3></a><a ><h3 class="related-article-item">Nearly 500 People Have Become Billionaires During The Pandemic Year</h3></a><a ><h3 class="related-article-item">The Top Richest Women In The World In 2021</h3></a><a ><h3 class="related-article-item">The 10 Richest Chinese Billionaires In 2021</h3></a><a ><h3 class="related-article-item">Richest Billionaires In Technology 2021: China's Footprint Continues To Grow</h3></a><a ><h3 class="related-article-item">The 10 Richest Russian Billionaires 2021</h3></a></ul>
                                    </div>
                                </div>
                            </div>
                            <div class="lander-ad">
                                <div class="ad-row">
                                    <fbs-ad position="topx" progressive="true">
                                        <div id="topx-15"></div>
                                    </fbs-ad>
                                </div>
                            </div>
                            <div class="credits">
                                <div class="credits-container">
                                    <div class="credits-item">
                                        <div class="credits-arrow">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.8 414.6">
                                                <path fill="currentColor" d="M137.4 0v313.2c20.4-35.4 55.2-66 129.6-85.2l1.8 4.8c-62.4 30-119.4 131.4-131.4 181.8h-6C119.4 364.2 63 262.8 0 232.8l1.8-4.8c74.4 19.2 109.2 49.8 129.6 85.2V0z"></path>
                                            </svg>
                                        </div>
                                        <div class="credits-text">
                                            <h3 class="credits-item__title">Methodology</h3>
                                            <p class="credits-dek">The Forbes World’s Billionaires list is a snapshot of wealth using stock prices and exchange rates from March 5, 2021. Some people become richer or poorer within days of publication. We list individuals rather than multigenerational families who share fortunes, though we include wealth belonging to a billionaire’s spouse and children if that person is the founder of the fortune. In some cases we list siblings or couples together if the ownership breakdown among them isn’t clear, but here an estimated net worth of $1 billion per person is needed to make the cut. We value a variety of assets, including private companies, real estate, art and more. We don’t pretend to know each billionaire’s private balance sheet (though some provide it). When documentation isn’t supplied or available, we discount fortunes. For daily updates of net worths, go to <a >www.forbes.com/real-time-billionaires</a>.</p>
                                        </div>
                                    </div>
                                    <div class="credits-item">
                                        <div class="credits-arrow">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.8 414.6">
                                                <path fill="currentColor" d="M137.4 0v313.2c20.4-35.4 55.2-66 129.6-85.2l1.8 4.8c-62.4 30-119.4 131.4-131.4 181.8h-6C119.4 364.2 63 262.8 0 232.8l1.8-4.8c74.4 19.2 109.2 49.8 129.6 85.2V0z"></path>
                                            </svg>
                                        </div>
                                        <div class="credits-text">
                                            <h3 class="credits-item__title">Acknowledgements</h3>
                                            <p class="credits-dek">Special thanks to AlphaSense, FactSet Research Systems, LCH Investments, Orbis by Bureau Van Dijk, PitchBook Data, Real Capital Analytics, Reonomy, Sentieo, STR, S&amp;P Capital IQ, VesselsValue and the other experts who helped us with our reporting and valuations, including Amnish Aggarwal, Prabhudas Lilladher; Steve Algermissen, Cushman &amp; Wakefield; Rakesh Arora, Go India Advisors; Hok Yean Chee, HVS; Jasmine Chin, BOCI; Anand Date, HSBC; Mark Godfrey, CBRE; Melinda Hu, Bernstein; Sarah B. Potter, FactSet; Praveen Subramanya, Knight Frank; Tim Swannie, Home Hunts France; Douglas B. Taylor; Daniel Voellm, AP Hospitality Advisors, Joel Paige.</p>
                                        </div>
                                    </div>
                                    <div class="credits-item">
                                        <div class="credits-arrow">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.8 414.6">
                                                <path fill="currentColor" d="M137.4 0v313.2c20.4-35.4 55.2-66 129.6-85.2l1.8 4.8c-62.4 30-119.4 131.4-131.4 181.8h-6C119.4 364.2 63 262.8 0 232.8l1.8-4.8c74.4 19.2 109.2 49.8 129.6 85.2V0z"></path>
                                            </svg>
                                        </div>
                                        <div class="credits-text">
                                            <h3 class="credits-item__title">Credits</h3>
                                            <p class="credits-dek"><b>EDITOR:</b> Kerry A. Dolan
                                                <br> <b>DEPUTY EDITORS:</b> Chase Peterson-Withorn, Jennifer Wang
                                                <br> <b>COUNTRY EDITORS:</b> Graham Button, Grace Chung, Russell Flannery, Naazneen Karmali, Nathan Vardi
                                                <br> <b>WEALTH TEAM:</b> Angel Au-Yeung, Kenrick Cai, Deniz Çam, Maggie Chen, David Dawkins, Anastassia Gliadkovskaya, John Hyatt, Max Jedeur-Palmgren, Momina Khan, Sergei Klebnikov, Elaine Mao, Andrea Murphy, Krisztián Sándor, Ariel Shapiro, Giacomo Tognini, Hank Tucker, Lisette Voytko, Elena Berezanskaya and reporters at Forbes-licensed editions in Austria, the Czech Republic, Hungary, Kazakhstan, Mexico, Poland, Romania, Russia, Slovakia and Ukraine.
                                                <br> <b>REPORTERS:</b> Susan Adams, Dan Alexander, Anderson Antunes, Megha Bahree, Nina Bambysheva, Margherita Beale, Madeline Berg, Justin Birnbaum, Tim Boreham, Igor Bosilkovski, Thomas Brewster, Nilgun Cavdar, Shu-Ching Jean Chen, Muhammad Cohen, Lachlan Colquhoun, Lauren Debter, Michael del Castillo, James Dunn, Steven Ehrlich, Amy Feldman, Antoine Gara, Eliza Haverstock, Christopher Helman, Alvaro Hernandez Zorrilla, Jane Ho, Katie Jennings, Jeff Kauflin, Sean Kilachand, Noah Kirsch, Alex Knapp, Alex Konrad, Nicole Lindsay, Katherine Love, Iain Martin, Anis Shakirah Mohd Muslimin, Suzy Nam, Lan Anh Nguyen, Alan Ohnsman, Robert Olsen, Phisanu Phromchanya, Jonathan Ponciano, Anu Raghunathan, Natalie Robehmed, Leah Rosenbaum, Matt Schifrin, Lucinda Schmidt, Leonard Schoenberger, James Simms, Chloe Sorvino, Deborah Steinborn, Jessica Tan, Michela Tindera, Ozer Turan, Elisa Valenta, Yue Wang, Jennifer Wells, Will Yakowicz, Itai Zehorai.
                                                <br> <b>RESEARCH:</b> Sue Radlauer
                                                <br> <b>DESIGN DIRECTOR:</b> Alicia Hallett-Chan
                                                <br> <b>DIRECTOR OF PHOTOGRAPHY:</b> Robyn Selman
                                                <br> <b>PHOTO RESEARCH:</b> Merrilee Barton, Gail Toivanen
                                                <br> <b>DESIGN:</b> Nicholas DeSantis, Linda Tran Tutovan, Charles Brucaliere and Philip Smith
                                                <br> <b>VIDEO PRODUCERS:</b> Kirsten Taggart, Meg Christensen, Juliet Muir, Jon Palmer, Matt Kang
                                                <br> <b>VIDEO DIRECTORS:</b> Ivan Clow, Greg Andersson, Bernard Osei
                                                <br> <b>PRODUCT:</b> Grant Tunkel, Nina Foroutan
                                                <br> <b>ENGINEERING:</b> Gus Faria, Sarah Calande, Dmitri Slavinsky
                                                <br> <b>QA:</b> Majd Alzoubi, Ronak Ray</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <footer class="footer">
                            <div class="footer__logo">
                                <a class="footer__logo--icon"  target="_self" aria-label="Forbes Logo">
                                    <div>
                                        <svg class="fs-icon fs-icon--forbes-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 54">
                                            <path d="M113.3 18.2c0-5.8.1-11.2.4-16.2L98.4 4.9v1.4l1.5.2c1.1.1 1.8.5 2.2 1.1.4.7.7 1.7.9 3.2.2 2.9.4 9.5.3 19.9 0 10.3-.1 16.8-.3 19.3 5.5 1.2 9.8 1.7 13 1.7 6 0 10.7-1.7 14.1-5.2 3.4-3.4 5.2-8.2 5.2-14.1 0-4.7-1.3-8.6-3.9-11.7-2.6-3.1-5.9-4.6-9.8-4.6-2.6 0-5.3.7-8.3 2.1zm.3 30.8c-.2-3.2-.4-12.8-.4-28.5.9-.3 2.1-.5 3.6-.5 2.4 0 4.3 1.2 5.7 3.7 1.4 2.5 2.1 5.5 2.1 9.3 0 4.7-.8 8.5-2.4 11.7-1.6 3.1-3.6 4.7-6.1 4.7-.8-.2-1.6-.3-2.5-.4zM41 3H1v2l2.1.2c1.6.3 2.7.9 3.4 1.8.7 1 1.1 2.6 1.2 4.8.8 10.8.8 20.9 0 30.2-.2 2.2-.6 3.8-1.2 4.8-.7 1-1.8 1.6-3.4 1.8l-2.1.3v2h25.8v-2l-2.7-.2c-1.6-.2-2.7-.9-3.4-1.8-.7-1-1.1-2.6-1.2-4.8-.3-4-.5-8.6-.5-13.7l5.4.1c2.9.1 4.9 2.3 5.9 6.7h2V18.9h-2c-1 4.3-2.9 6.5-5.9 6.6l-5.4.1c0-9 .2-15.4.5-19.3h7.9c5.6 0 9.4 3.6 11.6 10.8l2.4-.7L41 3zm-4.7 30.8c0 5.2 1.5 9.5 4.4 12.9 2.9 3.4 7.2 5 12.6 5s9.8-1.7 13-5.2c3.2-3.4 4.7-7.7 4.7-12.9s-1.5-9.5-4.4-12.9c-2.9-3.4-7.2-5-12.6-5s-9.8 1.7-13 5.2c-3.2 3.4-4.7 7.7-4.7 12.9zm22.3-11.4c1.2 2.9 1.7 6.7 1.7 11.3 0 10.6-2.2 15.8-6.5 15.8-2.2 0-3.9-1.5-5.1-4.5-1.2-3-1.7-6.8-1.7-11.3C47 23.2 49.2 18 53.5 18c2.2-.1 3.9 1.4 5.1 4.4zm84.5 24.3c3.3 3.3 7.5 5 12.5 5 3.1 0 5.8-.6 8.2-1.9 2.4-1.2 4.3-2.7 5.6-4.5l-1-1.2c-2.2 1.7-4.7 2.5-7.6 2.5-4 0-7.1-1.3-9.2-4-2.2-2.7-3.2-6.1-3-10.5H170c0-4.8-1.2-8.7-3.7-11.8-2.5-3-6-4.5-10.5-4.5-5.6 0-9.9 1.8-13 5.3-3.1 3.5-4.6 7.8-4.6 12.9 0 5.2 1.6 9.4 4.9 12.7zm7.4-25.1c1.1-2.4 2.5-3.6 4.4-3.6 3 0 4.5 3.8 4.5 11.5l-10.6.2c.1-3 .6-5.7 1.7-8.1zm46.4-4c-2.7-1.2-6.1-1.9-10.2-1.9-4.2 0-7.5 1.1-10 3.2s-3.8 4.7-3.8 7.8c0 2.7.8 4.8 2.3 6.3 1.5 1.5 3.9 2.8 7 3.9 2.8 1 4.8 2 5.8 2.9 1 1 1.6 2.1 1.6 3.6 0 1.4-.5 2.7-1.6 3.7-1 1.1-2.4 1.6-4.2 1.6-4.4 0-7.7-3.2-10-9.6l-1.7.5.4 10c3.6 1.4 7.6 2.1 12 2.1 4.6 0 8.1-1 10.7-3.1 2.6-2 3.9-4.9 3.9-8.5 0-2.4-.6-4.4-1.9-5.9-1.3-1.5-3.4-2.8-6.4-4-3.3-1.2-5.6-2.3-6.8-3.3-1.2-1-1.8-2.2-1.8-3.7s.4-2.7 1.3-3.7 2-1.4 3.4-1.4c4 0 6.9 2.9 8.7 8.6l1.7-.5-.4-8.6zm-96.2-.9c-1.4-.7-2.9-1-4.6-1-1.7 0-3.4.7-5.3 2.1-1.9 1.4-3.3 3.3-4.4 5.9l.1-8-15.2 3v1.4l1.5.1c1.9.2 3 1.7 3.2 4.4.6 6.2.6 12.8 0 19.8-.2 2.7-1.3 4.1-3.2 4.4l-1.5.2v1.9h21.2V49l-2.7-.2c-1.9-.2-3-1.7-3.2-4.4-.6-5.8-.7-12-.2-18.4.6-1 1.9-1.6 3.9-1.8 2-.2 4.3.4 6.7 1.8l3.7-9.3z"></path>
                                        </svg>
                                    </div>
                                </a><span class="footer__copyright">© <!-- -->2022<!-- --> Forbes Media LLC. All Rights Reserved.</span></div>
                            <ul class="footer__links">
                                <li><a class="desk"   rel="noopener noreferrer" aria-label="Desktop Version">AdChoices</a></li>
                                <li><a class="mob"   rel="noopener noreferrer" aria-label="Mobile Version">AdChoices</a></li>
                                <li><a  aria-label="Privacy" target="_self">Privacy Statement</a></li>
                                <li><a  aria-label="Contact" target="_self">Contact Us</a></li>
                                <li><a  aria-label="Feedback">Send Us Feedback</a></li>
                                <li><a  target="_self" aria-label="Careers">Jobs At Forbes</a></li>
                                <li><a   rel="noopener noreferrer" aria-label="Reprints">Reprints &amp; Permissions</a></li>
                                <li><a  aria-label="Forbes Press Room" target="_self">Forbes Press Room</a></li>
                                <li><a  aria-label="Forbes Quote of the Day" target="_self">Forbes Quote of the Day</a></li>
                                <li><a   rel="noopener noreferrer" aria-label="Advertise">Advertise</a></li>
                                <li><a   rel="noopener noreferrer" aria-label="Security Issue">Report a Security Issue</a></li>
                            </ul>
                        </footer>
                    </div>
                </div>
                <div id="gatsby-announcer" style="position:absolute;top:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0" aria-live="assertive" aria-atomic="true"></div>
            </div>
            <!--<script id="gatsby-script-loader">
            /*<![CDATA[*/
            window.pagePath = "/"; /*]]>*/
            </script>
            <script id="gatsby-chunk-mapping">
            /*<![CDATA[*/
            window.___chunkMapping = {
                "polyfill": ["/polyfill-c7e713c367b62bf611ed.js"],
                "app": ["/app-abfb354fc6a37d194b65.js"],
                "component---src-pages-index-js": ["/component---src-pages-index-js-8a55d0f26df50103be22.js"]
            }; /*]]>*/
            </script>
            <script src="/billionaires/polyfill-c7e713c367b62bf611ed.js" nomodule=""></script>
            <script src="/billionaires/webpack-runtime-fda5a8390504b897348b.js" async=""></script>
            <script src="/billionaires/app-abfb354fc6a37d194b65.js" async=""></script>
            <script src="/billionaires/framework-06f646d936b841f99ebd.js" async=""></script>
            <script src="/billionaires/4a3ea9cd-9c752580623b1837d0f7.js" async=""></script>
            <script src="/billionaires/component---src-pages-index-js-8a55d0f26df50103be22.js" async=""></script>
            <script src="/billionaires/styles-c4fa86dfd4ad05097eee.js" async=""></script>-->
            <iframe src="https://gum.criteo.com/syncframe?origin=publishertag&amp;topUrl=www.forbes.com#{&quot;uid&quot;:{&quot;origin&quot;:0},&quot;lwid&quot;:{&quot;origin&quot;:0},&quot;bundle&quot;:{&quot;value&quot;:&quot;JNl6Kl9ybmE1c05GN252Wm1LUldkeHgyZyUyRnNSR1B2UW5zVW9MMFdENmdWREl2NiUyRklKdFZycXdGdG94MyUyQjczVVBWYUNzYnJiVWNlUkI1cDF3UkVkJTJGVFNUOUJWeE4yN2p1MVlhNnAlMkJpWFUyNVV3MjU4OEFxJTJCRmh3aDlodk9DS0xkR0pvTUhsa2RrdWtBSFNvVjlnOUpEVWtmbWlmZDNidVh3NDJ4eXY0TkVGNiUyQlRZRSUzRA&quot;,&quot;origin&quot;:3},&quot;optout&quot;:{&quot;value&quot;:false,&quot;origin&quot;:0},&quot;sid&quot;:{&quot;origin&quot;:0},&quot;tld&quot;:&quot;forbes.com&quot;,&quot;topUrl&quot;:&quot;www.forbes.com&quot;,&quot;version&quot;:120,&quot;cw&quot;:true,&quot;lsw&quot;:true,&quot;origin&quot;:&quot;publishertag&quot;,&quot;requestId&quot;:&quot;0.9417829066521277&quot;}" width="0" height="0" frameborder="0" title="Criteo GUM iframe" style="border-width: 0px; margin: 0px; display: none;"></iframe>
            <!--<script type="text/javascript" id="">
            try {
                (window.advBidxc || {}).misc = (window.advBidxc || {}).misc || {}, ((window.advBidxc || {}).misc || {}).aref = !0
            } catch(a) {
                console.error("Global Variables - Page View: ", a.message)
            };
            </script>
            <script type="text/javascript" id="">
            window.dataLayer = window.dataLayer || [];
        
            function gtag() {
                dataLayer.push(arguments)
            }
            gtag("js", new Date);
            0 === google_tag_manager["GTM-NMQJM4"].macro(8).indexOf("/sites/awsmediaandentertainment") ? gtag("config", "DC-9476342") : 0 === google_tag_manager["GTM-NMQJM4"].macro(9).indexOf("/sites/tableau/") || 0 === google_tag_manager["GTM-NMQJM4"].macro(10).indexOf("/sites/tableauapac/") ? gtag("config", "AW-996391663") : 0 === google_tag_manager["GTM-NMQJM4"].macro(11).indexOf("/sites/mitsubishiheavyindustries/") ? (gtag("config", "UA-79430567-13"), gtag("config", "UA-79430567-4")) : 0 === google_tag_manager["GTM-NMQJM4"].macro(12).indexOf("/sites/newyorklifeinvestments/") ? gtag("config", "UA-87918805-4") : 0 === google_tag_manager["GTM-NMQJM4"].macro(13).indexOf("/sites/pastebywetransfer/") ? gtag("config", "DC-8444178") : 0 === google_tag_manager["GTM-NMQJM4"].macro(14).indexOf("/sites/forbes-finds/") || 0 === google_tag_manager["GTM-NMQJM4"].macro(15).indexOf("/sites/forbes-personal-shopper/") ? gtag("config", "AW-580937149") : 0 === google_tag_manager["GTM-NMQJM4"].macro(16).indexOf("/sites/tdbank/") ? gtag("config", "DC-6056764") : 0 === google_tag_manager["GTM-NMQJM4"].macro(17).indexOf("/sites/gapinternational/") && gtag("config", "UA-4881327-8");
            </script>
            <script type="text/javascript" id="" src="https://www.googletagmanager.com/gtag/js?id=DC-9476342"></script>
            <script type="text/javascript" id="">
            ! function(f, b, e, v, n, t, s) {
                if(f.fbq) return;
                n = f.fbq = function() {
                    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                };
                if(!f._fbq) f._fbq = n;
                n.push = n;
                n.loaded = !0;
                n.version = "2.0";
                n.queue = [];
                t = b.createElement(e);
                t.async = !0;
                t.src = v;
                s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s)
            }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
            fbq("set", "autoConfig", false, "1494993704116832");
            fbq("init", "1494993704116832");
            fbq("track", "PageView", {
                "channelNames": "none".toLowerCase().replace(/[\s'"]+/g, ""),
                "sectionNames": "none".toLowerCase().replace(/[\s'"]+/g, ""),
                "categories": "none".toLowerCase().replace(/[\s'"]+/g, "")
            });
            </script>-->
            <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1494993704116832&amp;ev=PageView&amp;noscript=1"></noscript>
            <!--<script type="text/javascript" id="">
            (function() {
                var a = new Date((new Date).getTime() + 18E5),
                    b = location.pathname;
                b.match(/\/forbes\/welcome\//) || google_tag_manager["GTM-NMQJM4"].macro(35) || (document.cookie = "gaWelcomPageTracked\x3dtrue;path\x3d/;domain\x3d.forbes.com;expires\x3d" + a.toUTCString())
            })();
            </script>
            <script type="text/javascript" id="">
            analyticsEvent = function(b, a, c, d, e) {
                var f = window.dataLayer || [];
                f.push({
                    event: "analyticsEvent",
                    "event category": b,
                    "event action": a,
                    "event label": c,
                    "event value": d,
                    "non-interaction": e
                })
            };
            analyticsSocial = function(b, a, c, d) {
                var e = window.dataLayer || [];
                e.push({
                    event: "social",
                    "social network": b,
                    "Social action": a,
                    "social target": c,
                    "social page path": d
                })
            };
            analyticsVPV = function(b) {
                var a = window.dataLayer || [];
                a.push({
                    event: "analyticsVPV",
                    "vpv name": b
                })
            };
            analyticsClearVPV = function() {
                var b = window.dataLayer || [];
                b.push({
                    event: "analyticsVPV",
                    "vpv name": void 0
                })
            };
            analyticsForm = function(b, a) {
                var c = b,
                    d = a.name || a.id || a.type;
                b = "interaction";
                c = "form: " + c;
                a = d + ":" + a.type;
                analyticsEvent(b, c, a)
            };
            </script>-->
            <div style="display: none; visibility: hidden;">
                <!--<script>
                (function() {
                    var a = document,
                        b = a.createElement("script");
                    a = a.getElementsByTagName("script")[0];
                    b.type = "text/javascript";
                    b.async = !0;
                    b.src = "https://z.moatads.com/forbes949SzQW17/moatcontent.js";
                    a.parentNode.insertBefore(b, a)
                })();
                </script>-->
            </div>
            <div style="display: none; visibility: hidden;">
                <!--<script>
                (function() {
                    var a = document.createElement("script");
                    a.async = !0;
                    a.type = "text/javascript";
                    a.src = "https://z.moatads.com/2be987/moatheader.js";
                    var b = document.getElementsByTagName("script")[0];
                    b.parentNode.insertBefore(a, b)
                })();
                </script>-->
            </div>
            <!--<script type="text/javascript" id="">
            (function() {
                if(window.sessionStorage) {
                    var b = window.external_services || {},
                        c = "fbsPath",
                        a = sessionStorage.getItem(c) || "";
                    a = a ? a.split(",") : [];
                    b.refresh = -1 < a.indexOf(google_tag_manager["GTM-NMQJM4"].macro(36));
                    window.external_services = b;
                    a.push(google_tag_manager["GTM-NMQJM4"].macro(37));
                    a = a.toString();
                    sessionStorage.setItem(c, a)
                }
            })();
            </script>
            <script type="text/javascript" id="">
            var _qevents = _qevents || [];
            (function() {
                var a = document.createElement("script");
                a.src = ("https:" == document.location.protocol ? "https://secure" : "http://edge") + ".quantserve.com/quant.js";
                a.async = !0;
                a.type = "text/javascript";
                var b = document.getElementsByTagName("script")[0];
                b.parentNode.insertBefore(a, b)
            })();
        
            function qEncode(a) {
                return a ? a.replace(/,/g, "").replace(/\./g, "").replace("none", "") : ""
            }
        
            function qEncodeChannelSection(a, b) {
                if(!b || "none" === b) return a + ".";
                var c = "";
                b.split(",").filter(function(b) {
                    c += a + "." + b.trim().replace(/\./g, "") + ","
                });
                return c.slice(0, -1)
            };
            </script>
            <script type="text/javascript" id="">
            window.addEventListener("message", function(a) {
                "https://tpc.googlesyndication.com" === a.origin ? "analyticsEvent" === a.data.eventType && a.data.eventLabel && dataLayer.push({
                    event: a.data.eventType,
                    "event category": "Template Area Interaction",
                    "event action": "Click",
                    "event label": a.data.eventLabel
                }) : "https://players.brightcove.net" === a.origin && a.data.eventCategory && window.analyticsEvent(a.data.eventCategory, a.data.eventAction, a.data.eventLabel)
            }, !1);
            </script>
            <script type="text/javascript" id="">
            window._sf_startpt = (new Date).getTime();
            window._sf_async_config = {
                uid: google_tag_manager["GTM-NMQJM4"].macro(38),
                domain: google_tag_manager["GTM-NMQJM4"].macro(39),
                authors: google_tag_manager["GTM-NMQJM4"].macro(40),
                useCanonical: google_tag_manager["GTM-NMQJM4"].macro(41),
                sections: google_tag_manager["GTM-NMQJM4"].macro(42),
                path: google_tag_manager["GTM-NMQJM4"].macro(43)
            };
            </script>
            <script type="text/javascript" id="">
            (function() {
                function e(a) {
                    return a ? a.split("/")[-1 != a.indexOf("://") ? 2 : 0].split(":")[0] : null
                }
        
                function h(a, c, d) {
                    var b = localStorage.getItem("trl") || "";
                    if(0 <= d.indexOf(".forbes.com") || -1 === ["blog", "slide", "blogslide", "magazine"].indexOf(a) || sessionStorage.getItem("fbsId") === c || 0 <= (sessionStorage.getItem("fbsRef") || "").indexOf(".forbes.com")) return b;
                    sessionStorage.setItem("fbsRef", d);
                    sessionStorage.setItem("fbsId", c);
                    a = (new Date).getTime();
                    var k = a - 2592E6,
                        e = c ? c.split("/").pop() : "",
                        f, g = "";
                    b = b ? b.split(";") : [];
                    9 < b.length && b.splice(0, b.length - 9);
                    b = b.filter(function(a) {
                        g = a.split("/").pop();
                        return g !== e
                    }).filter(function(a) {
                        f = 1E3 * parseInt(a.substring(0, a.match(/(post|slide|galleryId|www)/).index), 16);
                        return f > k
                    });
                    b.push(l(a, c));
                    b = b.join(";");
                    localStorage.setItem("trl", b);
                    return b
                }
        
                function l(a, c) {
                    return Math.floor(a / 1E3).toString(16) + c.substring(c.match(/(post|slide|galleryId|www)/).index, c.length)
                }
        
                function m(a) {
                    var c = "https://fast.forbes.com/fps/cookie_backup.php",
                        d = !0;
                    for(key in a) a.hasOwnProperty(key) && a[key] && (c += (d ? "?" : "\x26") + key + "\x3d" + encodeURIComponent(a[key]), d = !1);
                    return c
                }
                if(google_tag_manager["GTM-NMQJM4"].macro(44) && !google_tag_manager["GTM-NMQJM4"].macro(45).startsWith("/preview")) {
                    var d = {
                        op: "user_msg",
                        su: google_tag_manager["GTM-NMQJM4"].macro(46),
                        pt: google_tag_manager["GTM-NMQJM4"].macro(47),
                        i: google_tag_manager["GTM-NMQJM4"].macro(48),
                        mb: google_tag_manager["GTM-NMQJM4"].macro(49) ? "t" : "f",
                        rn: Math.round(9 * Math.random() * Math.pow(10, 12) + Math.pow(10, 12)),
                        ts: +new Date,
                        sw: screen.width,
                        sh: screen.height,
                        ci: google_tag_manager["GTM-NMQJM4"].macro(50),
                        re: e(google_tag_manager["GTM-NMQJM4"].macro(51)),
                        trl: h(google_tag_manager["GTM-NMQJM4"].macro(52), google_tag_manager["GTM-NMQJM4"].macro(53), google_tag_manager["GTM-NMQJM4"].macro(54) || ""),
                        n: google_tag_manager["GTM-NMQJM4"].macro(55)
                    };
                    google_tag_manager["GTM-NMQJM4"].macro(56) || (d.ch = google_tag_manager["GTM-NMQJM4"].macro(57), d.se = google_tag_manager["GTM-NMQJM4"].macro(58), d.au = google_tag_manager["GTM-NMQJM4"].macro(59), d.at = google_tag_manager["GTM-NMQJM4"].macro(60));
                    var n = document.createElement("img");
                    n.src = m(d)
                }
            })();
            </script>
            <script type="text/javascript" id="">
            (function() {
                var g = function(d, h, f, g) {
                    this.get = function(a) {
                        a += "\x3d";
                        for(var b = document.cookie.split(";"), c = 0, d = b.length; c < d; c++) {
                            for(var e = b[c];
                                " " == e.charAt(0);) e = e.substring(1, e.length);
                            if(0 == e.indexOf(a)) return e.substring(a.length, e.length)
                        }
                        return null
                    };
                    this.set = function(a, b) {
                        var c = new Date;
                        c.setTime(c.getTime() + 6048E5);
                        c = "; expires\x3d" + c.toGMTString();
                        document.cookie = a + "\x3d" + b + c + "; path\x3d/; "
                    };
                    this.check = function() {
                        var a = this.get(f);
                        if(a) a = a.split(":");
                        else if(100 != d) "v" == h && (d = Math.random() >= d / 100 ? 0 : 100), a = [h, d, 0], this.set(f, a.join(":"));
                        else return !0;
                        var b = a[1];
                        if(100 == b) return !0;
                        switch(a[0]) {
                            case "v":
                                return !1;
                            case "r":
                                return b = a[2] % Math.floor(100 / b), a[2]++, this.set(f, a.join(":")), !b
                        }
                        return !0
                    };
                    this.go = function() {
                        if(this.check()) {
                            var a = document.createElement("script");
                            a.type = "text/javascript";
                            a.src = g + "\x26t\x3d" + (new Date).getTime();
                            document.body && document.body.appendChild(a)
                        }
                    };
                    this.start = function() {
                        var a = this;
                        window.addEventListener ? window.addEventListener("load", function() {
                            a.go()
                        }, !1) : window.attachEvent && window.attachEvent("onload", function() {
                            a.go()
                        })
                    }
                };
                try {
                    (new g(100, "r", "QSI_S_ZN_dpq7uw2elR2st9z", "https://zndpq7uw2elr2st9z-forbesbi.siteintercept.qualtrics.com/WRSiteInterceptEngine/?Q_ZID\x3dZN_dpq7uw2elR2st9z\x26Q_LOC\x3d" + encodeURIComponent(window.location.href))).start()
                } catch(d) {}
            })();
            </script>-->
            <div id="ZN_dpq7uw2elR2st9z"></div>
            <!--<script type="text/javascript" id="">
            (function() {
                function c(b) {
                    var a = window.QSI;
                    a && a.API && (a.API.unload(), setTimeout(function() {
                        a.API.load().done(a.API.run)
                    }, 2E4))
                }
                window.addEventListener("qsi_js_loaded", c, !1);
                var b = window.addEventListener ? "addEventListener" : "attachEvent",
                    d = window[b];
                b = "attachEvent" == b ? "onmessage" : "message";
                d(b, function(b) {
                    try {
                        var a = JSON.parse(b.data);
                        if(a.QSI_AID) {
                            var c = a.QSI_AID;
                            localStorage.setItem(c, "Exposed")
                        }
                    } catch(e) {}
                }, !1)
            })();
            </script>
            <script type="text/javascript" id="">
            (function(a, e, f, g, b, c, d) {
                a[b] || (a.GlobalSnowplowNamespace = a.GlobalSnowplowNamespace || [], a.GlobalSnowplowNamespace.push(b), a[b] = function() {
                    (a[b].q = a[b].q || []).push(arguments)
                }, a[b].q = a[b].q || [], c = e.createElement(f), d = e.getElementsByTagName(f)[0], c.async = 1, c.src = g, d.parentNode.insertBefore(c, d))
            })(window, document, "script", "//d1fc8wv8zag5ca.cloudfront.net/2.5.1/sp.js", "snowplow");
            window.snowplow("newTracker", "cf", "forbes.zenplow.zds.zenabidata.com", {
                appId: "forbes",
                cookieDomain: "forbes.com",
                respectDoNotTrack: "true"
            });
            window.snowplow("trackPageView");
            </script>
            <script type="text/javascript" id="">
            window.cordialInitialized || (function(a, e, f, g, b, c, d) {
                a.CordialObject = b;
                a[b] = a[b] || function() {
                    (a[b].q = a[b].q || []).push(arguments)
                };
                a[b].l = 1 * new Date;
                a[b].q = [];
                c = e.createElement(f);
                d = e.getElementsByTagName(f)[0];
                c.async = 1;
                c.src = g;
                d.parentNode.insertBefore(c, d)
            }(window, document, "script", "//d.email.forbes.com/track.v2.js", "crdl"), crdl("connect", "true" === google_tag_manager["GTM-NMQJM4"].macro(61) ? "forbes-live" : "forbes", {
                trackUrl: "se.email.forbes.com",
                connectUrl: "d.email.forbes.com",
                cookieDomain: "email.forbes.com",
                cookieLife: 365
            })); - 1 !== google_tag_manager["GTM-NMQJM4"].macro(62).indexOf("article-") ? crdl("event", "browseArticle", {
                author: google_tag_manager["GTM-NMQJM4"].macro(63),
                pubDate: google_tag_manager["GTM-NMQJM4"].macro(64),
                section: google_tag_manager["GTM-NMQJM4"].macro(65),
                source: google_tag_manager["GTM-NMQJM4"].macro(66),
                title: google_tag_manager["GTM-NMQJM4"].macro(67)
            }) : -1 !== google_tag_manager["GTM-NMQJM4"].macro(68).indexOf("video") ? crdl("event", "browseVideo", {
                pubDate: google_tag_manager["GTM-NMQJM4"].macro(69),
                section: google_tag_manager["GTM-NMQJM4"].macro(70),
                source: google_tag_manager["GTM-NMQJM4"].macro(71),
                title: google_tag_manager["GTM-NMQJM4"].macro(72)
            }) : -1 !== google_tag_manager["GTM-NMQJM4"].macro(73).indexOf("contrib") && window.forbes["simple-site"].showFollowButton ? crdl("event", "browseCHPS", {
                author: google_tag_manager["GTM-NMQJM4"].macro(74),
                section: google_tag_manager["GTM-NMQJM4"].macro(75)
            }) : crdl("event", "browseLanding", {
                section: google_tag_manager["GTM-NMQJM4"].macro(76),
                source: google_tag_manager["GTM-NMQJM4"].macro(77)
            });
            </script>
            <script type="text/javascript" id="" src="/c3650cdf-216a-4ba2-80b0-9d6c540b105e58d2670b-ea0f-484e-b88c-0e2c1499e
        c9bd71e4b42-8570-44e3-89b6-845326fa43b6"></script>
            <script type="text/javascript" id="">
            (function() {
                function c(d, a) {
                    a = a || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: null
                    };
                    var b = document.createEvent("CustomEvent");
                    b.initCustomEvent(d, a.bubbles, a.cancelable, a.detail);
                    return b
                }
                if("function" === typeof window.CustomEvent) return !1;
                window.CustomEvent = c
            })();
            </script>
            <script type="text/javascript" id="">
            document.cookie = "__adblocker\x3d; expires\x3dThu, 01 Jan 1970 00:00:00 GMT; path\x3d/";
            var adBlockOn = function() {
                    window.dataLayer.push({
                        adBlockerDetection: "Detected"
                    });
                    window.dataLayer.push({
                        event: "analyticsEvent",
                        "event category": "Piano",
                        "event action": "AdBlockDetection",
                        "event label": "Detected"
                    });
                    document.dispatchEvent(new CustomEvent("fbs-ad-block-init"))
                },
                adBlockOff = function() {
                    window.dataLayer.push({
                        adBlockerDetection: "Not Detected"
                    });
                    window.dataLayer.push({
                        event: "analyticsEvent",
                        "event category": "Piano",
                        "event action": "AdBlockDetection",
                        "event label": "NotDetected"
                    });
                    document.dispatchEvent(new CustomEvent("fbs-ad-block-init"))
                },
                userAgent = window.navigator.userAgent.toLowerCase(),
                setNptTechAdblockerCookie = function(b) {
                    var a = new Date;
                    a.setTime(a.getTime() + 3E5);
                    document.cookie = "__adblocker\x3d" + (b ? "true" : "false") + "; expires\x3d" + a.toUTCString() + "; path\x3d/";
                    b ? adBlockOn() : adblockOff()
                },
                script = document.createElement("script");
            script.setAttribute("async", !0); - 1 != userAgent.indexOf("googlebot") ? setNptTechAdblockerCookie(!1) : (script.setAttribute("src", "//www.npttech.com/advertising.js"), script.setAttribute("onerror", "setNptTechAdblockerCookie(true);"));
            script.setAttribute("onload", "blockAdBlock.onNotDetected(adBlockOff); blockAdBlock.onDetected(adBlockOn);");
            document.getElementsByTagName("head")[0].appendChild(script);
            </script>
            <script type="text/javascript" id="">
            window.heap = window.heap || [];
            heap.load = function(b, a) {
                window.heap.appid = b;
                window.heap.config = a = a || {};
                a = document.createElement("script");
                a.type = "text/javascript";
                a.async = !0;
                a.src = "https://cdn.heapanalytics.com/js/heap-" + b + ".js";
                b = document.getElementsByTagName("script")[0];
                b.parentNode.insertBefore(a, b);
                b = function(d) {
                    return function() {
                        heap.push([d].concat(Array.prototype.slice.call(arguments, 0)))
                    }
                };
                a = "addEventProperties addUserProperties clearEventProperties identify resetIdentity removeEventProperty setEventProperties track unsetEventProperty".split(" ");
                for(var c = 0; c < a.length; c++) heap[a[c]] = b(a[c])
            };
            heap.load("657665248");
            </script>
            <script type="text/javascript" id="">
            _qevents.push({
                qacct: "p-3bmCtEkzhulVU",
                event: "refresh",
                labels: qEncodeChannelSection("Channel", google_tag_manager["GTM-NMQJM4"].macro(78)) + "," + qEncodeChannelSection("Section", google_tag_manager["GTM-NMQJM4"].macro(79)) + ",Specialslot." + qEncode(google_tag_manager["GTM-NMQJM4"].macro(80)) + ",Editslot." + qEncode(google_tag_manager["GTM-NMQJM4"].macro(81)) + ",Brandvoice ProgramType." + ("none" === google_tag_manager["GTM-NMQJM4"].macro(82) || "csf" === google_tag_manager["GTM-NMQJM4"].macro(83) ? "" : qEncode(google_tag_manager["GTM-NMQJM4"].macro(84)) + "." + qEncode(google_tag_manager["GTM-NMQJM4"].macro(85))) + ",Hashtag." + qEncode(google_tag_manager["GTM-NMQJM4"].macro(86)) + ",Brandvoice." + ("none" === google_tag_manager["GTM-NMQJM4"].macro(87) || "csf" === google_tag_manager["GTM-NMQJM4"].macro(88) ? "" : qEncode(google_tag_manager["GTM-NMQJM4"].macro(89)) + "." + qEncode(google_tag_manager["GTM-NMQJM4"].macro(90))) + ",Author." + qEncode(google_tag_manager["GTM-NMQJM4"].macro(91)) + "." + qEncode(google_tag_manager["GTM-NMQJM4"].macro(92)) + ",Insights." + (google_tag_manager["GTM-NMQJM4"].macro(93) && "none" !== google_tag_manager["GTM-NMQJM4"].macro(94) ? qEncode(google_tag_manager["GTM-NMQJM4"].macro(95)) + "." + qEncode(google_tag_manager["GTM-NMQJM4"].macro(96)) + "." + qEncode(google_tag_manager["GTM-NMQJM4"].macro(97)) : "") + ",Device Type." + (google_tag_manager["GTM-NMQJM4"].macro(98) ? "MOBILE" : "DESKTOP") + ",Branded Content." + ("none" === (google_tag_manager["GTM-NMQJM4"].macro(99) || "none") ? "" : google_tag_manager["GTM-NMQJM4"].macro(100) + "." + google_tag_manager["GTM-NMQJM4"].macro(101) + "." + google_tag_manager["GTM-NMQJM4"].macro(102))
            });
            </script>
            <script type="text/javascript" id="">
            (function(c, a, d) {
                var b = decodeURIComponent;
                var e = "||";
                var g = ";;",
                    f = "split",
                    h = "length",
                    m = "indexOf",
                    k = "localStorage",
                    l = "_ccmdt";
                c[d] = c[d] || {};
                c[d].us = {};
                a = c[k] ? c[k][l] || "" : (a = a.cookie.match(l + "\x3d([^;]*)")) && a[1] || "";
                b = b(a)[f](e);
                a = b[h];
                if(0 < a)
                    for(; a--;) e = b[a][f]("\x3d"), 1 < e[h] && (-1 < e[1][m](g) ? (c[d].us[e[0]] = e[1][f](g), c[d].us[e[0]].pop()) : c[d].us[e[0]] = e[1])
            })(window, document, "_ml");
            (function() {
                _ml = window._ml || {};
                _ml.eid = "50061";
                _ml.forbesUpdateCid = function() {
                    _ml.cid = "";
                    var b = google_tag_manager["GTM-NMQJM4"].macro(107);
                    "undefined" != typeof google_tag_manager && google_tag_manager[b] && (_ml.cid = [], _ml.cid.push(google_tag_manager[b].dataLayer.get("channelNames") || ""), _ml.cid.push(google_tag_manager[b].dataLayer.get("sectionNames") || ""), _ml.cid.push(google_tag_manager[b].dataLayer.get("slot") || ""), _ml.cid.push(google_tag_manager[b].dataLayer.get("edit") || ""), _ml.cid.push(google_tag_manager[b].dataLayer.get("hashtags") || ""), _ml.cid.push(google_tag_manager[b].dataLayer.get("brandVoice") || ""), _ml.cid.push(google_tag_manager[b].dataLayer.get("author") || ""), _ml.fp = google_tag_manager[b].dataLayer.get("fastCi"));
                    "" != _ml.cid && (_ml.cid = _ml.cid.join("||"))
                };
                _ml.forbesUpdateCid();
                _ml.informer = {
                    enable: !0
                };
                var c = document.getElementsByTagName("script")[0],
                    a = new Date,
                    d = document.createElement("script");
                d.type = "text/javascript";
                d.async = !0;
                d.src = "https://ml314.com/tag.aspx?" + a.getDate() + a.getMonth() + a.getFullYear();
                c.parentNode.insertBefore(d, c)
            })();
            </script>
            <script type="text/javascript" id="">
            if(window.uabfunc && window.uabfunc.detected) {
                var dataLayer = window.dataLayer || [];
                dataLayer.push({
                    event: "analyticsEvent",
                    "event category": "Adblock",
                    "event action": "Reclaimed",
                    "event label": "Untouchable"
                })
            };
            </script>
            <script type="text/javascript" id="">
            window.bk_async = function() {
                bk_suppress_statid_payload = bk_use_multiple_iframes = bk_allow_multiple_calls = !0;
                "oracle" === google_tag_manager["GTM-NMQJM4"].macro(108) && (-1 < google_tag_manager["GTM-NMQJM4"].macro(109).indexOf("article-d") ? ((google_tag_manager["GTM-NMQJM4"].macro(110) || []).forEach(function(a) {
                    bk_addPageCtx("pgname", a)
                }), bk_doJSTag(google_tag_manager["GTM-NMQJM4"].macro(111), 10)) : "none" !== google_tag_manager["GTM-NMQJM4"].macro(112) && (bk_addPageCtx("pgname", google_tag_manager["GTM-NMQJM4"].macro(113)), bk_doJSTag(google_tag_manager["GTM-NMQJM4"].macro(114), 10)));
                google_tag_manager["GTM-NMQJM4"].macro(115) ? bk_addPageCtx("bkChnl", google_tag_manager["GTM-NMQJM4"].macro(116)) : null;
                google_tag_manager["GTM-NMQJM4"].macro(117) ? bk_addPageCtx("bkSection", google_tag_manager["GTM-NMQJM4"].macro(118)) : null;
                google_tag_manager["GTM-NMQJM4"].macro(119) ? bk_addPageCtx("bkSite", google_tag_manager["GTM-NMQJM4"].macro(120)) : null;
                google_tag_manager["GTM-NMQJM4"].macro(121) ? bk_addPageCtx("bkZn", google_tag_manager["GTM-NMQJM4"].macro(122)) : null;
                google_tag_manager["GTM-NMQJM4"].macro(123) ? bk_addPageCtx("bkSplSlot", google_tag_manager["GTM-NMQJM4"].macro(124)) : null;
                google_tag_manager["GTM-NMQJM4"].macro(125) ? bk_addPageCtx("bkHashTg", google_tag_manager["GTM-NMQJM4"].macro(126)) : null;
                google_tag_manager["GTM-NMQJM4"].macro(127) ? bk_addPageCtx("bkType", google_tag_manager["GTM-NMQJM4"].macro(128)) : null;
                google_tag_manager["GTM-NMQJM4"].macro(129) ? bk_addPageCtx("bkAuthor", google_tag_manager["GTM-NMQJM4"].macro(130)) : null;
                google_tag_manager["GTM-NMQJM4"].macro(131) ? bk_addPageCtx("bkBrndVc", google_tag_manager["GTM-NMQJM4"].macro(132)) : null;
                google_tag_manager["GTM-NMQJM4"].macro(133) ? bk_addPageCtx("bkEdtSlot", google_tag_manager["GTM-NMQJM4"].macro(134)) : null;
                google_tag_manager["GTM-NMQJM4"].macro(135) ? bk_addPageCtx("bkSwln", google_tag_manager["GTM-NMQJM4"].macro(136)) : null;
                google_tag_manager["GTM-NMQJM4"].macro(137) ? bk_addPageCtx("id", google_tag_manager["GTM-NMQJM4"].macro(138)) : null;
                BKTAG.doTag(google_tag_manager["GTM-NMQJM4"].macro(139), 10)
            };
            (function() {
                var a = document.getElementsByTagName("script")[0],
                    b = document.createElement("script");
                b.async = !0;
                b.src = "https://tags.bkrtx.com/js/bk-coretag.js";
                a.parentNode.insertBefore(b, a)
            })();
            </script>-->
            <style>
            #consent_blackbar {
                width: 100%;
                z-index: 9999;
            }
            
            #consent_blackbar #truste-consent-track {
                border: none;
                box-shadow: inset 0 2px 0 0 #333333;
                color: #333333;
                padding: 20px 70px;
            }
            
            #truste-consent-content {
                display: flex;
                justify-content: center;
            }
            
            #truste-consent-content #truste-consent-text {
                font-family: "Work Sans";
                font-size: 12px;
                line-height: 1.67;
                margin: 0;
                max-width: 857px;
            }
            
            #truste-consent-text a {
                color: #333333;
                text-decoration: underline;
            }
            
            #truste-consent-buttons {
                display: flex;
                margin: 0 0 0 20px;
            }
            
            #truste-consent-buttons button {
                border-radius: 0;
                font: 16px/1.25 "Work Sans";
                height: 40px;
                outline: 0;
                padding: 0;
                width: 160px;
            }
            
            #truste-consent-buttons #truste-consent-button {
                background-color: #333333;
                border: none;
                font-weight: 500;
                margin-right: 24px;
                transition: ease-in-out 0.1s;
            }
            
            #truste-consent-buttons #truste-consent-button:hover {
                background-color: #888888;
            }
            
            #truste-consent-buttons #sliderButton {
                border: solid 1px #bbbbbb;
                color: #333333;
                height: 40px;
            }
            
            @media all and (max-width: 1024px) {
                #truste-consent-track {
                    padding: 24px 32px;
                }
                #truste-consent-content {
                    flex-wrap: wrap;
                }
                #truste-consent-buttons {
                    margin-left: 0;
                    margin-top: 24px;
                }
            }
            
            @media all and (max-width: 425px) {
                #truste-consent-buttons {
                    display: flex;
                    width: 100%;
                }
                #truste-consent-button,
                #sliderButton {
                    width: 50%;
                }
            }
            
            .notices {
                /*position: fixed;*/
                position: absolute;
                bottom: 0;
                width: 100%;
                z-index: 9999;
            }
            </style>
            <!--<script type="text/javascript" id="">
            "true" !== google_tag_manager["GTM-NMQJM4"].macro(140) || window.trustarcStubPreloaded || function() {
                var r = function() {
                    function h() {
                        var a = b.document,
                            c = !!b.frames[g];
                        if(!c)
                            if(a.body) {
                                var d = a.createElement("iframe");
                                d.name = g;
                                d.style.display = "none";
                                d.id = m;
                                d.src = "https://trustarc.mgr.consensu.org/asset/cmpcookie.v2.html";
                                a.body.appendChild(d)
                            } else setTimeout(h, 5);
                        return !c
                    }
        
                    function n() {
                        var a = arguments;
                        if(a.length)
                            if("setGdprApplies" === a[0]) {
                                if(3 < a.length && 2 === parseInt(a[1], 10) && "boolean" === typeof a[3] && "function" === typeof a[2]) a[2]("set", !0)
                            } else if("ping" === a[0]) {
                            var c = {
                                gdprApplies: c,
                                cmpLoaded: !1,
                                cmpStatus: "stubCMP",
                                apiVersion: "2.0"
                            };
                            if("function" === typeof a[2]) a[2](c, !0)
                        } else k.push(a);
                        else return k
                    }
        
                    function p(a) {
                        var c = "string" === typeof a.data,
                            d = {};
                        try {
                            d = c ? JSON.parse(a.data) : a.data
                        } catch(e) {}
                        var f = d.__tcfapiCall;
                        f && window.__tcfapi(f.command, f.version, function(e, q) {
                            e = {
                                __tcfapiReturn: {
                                    returnValue: e,
                                    success: q,
                                    callId: f.callId
                                }
                            };
                            c && (e = JSON.stringify(e));
                            a.source.postMessage(e, "*")
                        }, f.parameter)
                    }
                    for(var g = "__tcfapiLocator", m = "__tcfapiTrustarc",
                            b = window, k = [], l; b;) {
                        try {
                            if(b.frames[g]) {
                                l = b;
                                break
                            }
                        } catch(a) {}
                        if(b === window.top) break;
                        b = b.parent
                    }
                    l || (h(), b.__tcfapi = n, b.addEventListener("message", p, !1))
                };
                r()
            }();
            </script>
            <script type="text/javascript" id="">
            var script = "true" === google_tag_manager["GTM-NMQJM4"].macro(141) ? "//consent.trustarc.com/notice?domain\x3dforbes_iab2.com\x26c\x3dteconsent\x26js\x3dnj\x26noticeType\x3dbb\x26text\x3dtrue\x26gtm\x3d1" : "//consent.trustarc.com/notice?domain\x3dforbes.com\x26js\x3dnj\x26noticeType\x3dbb\x26text\x3dtrue\x26c\x3dteconsent",
                trustarcScript = document.createElement("script");
            trustarcScript.src = script;
            document.body.appendChild(trustarcScript);
            </script>
            <script src="//consent.trustarc.com/notice?domain=forbes.com&amp;js=nj&amp;noticeType=bb&amp;text=true&amp;c=teconsent"></script>
            <script type="text/javascript" id="">
            (function() {
                function b(c, e) {
                    window.dataLayer.push({
                        event: "analyticsEvent",
                        "event category": e || "Template Area Interaction",
                        "event label": "CCPA",
                        "event action": c
                    })
                }
                var f = document.createElement("a");
                f.id = "borderTab";
                var h = document.createElement("div");
                h.id = "teconsent";
                f.appendChild(h);
                document.body.appendChild(f);
                var d = document.querySelector(".notices");
                if(!d) {
                    document.body.insertAdjacentHTML("beforeend", "\x3cdiv class\x3d'notices'\x3e\x3c/div\x3e");
                    d = document.querySelector(".notices");
                    var a = document.querySelector("[position\x3dmobile]");
                    a || (a = document.querySelector(".sticky-fbs-ad-container"));
                    a || (a = document.querySelector(".search-sticky-ad-container"));
                    a || (a = document.getElementById("mobile"));
                    a && setInterval(function() {
                        var c = window.getComputedStyle(a).getPropertyValue("position");
                        d.style.bottom = "fixed" === c ? a.offsetHeight ? a.offsetHeight + "px" : "50px" : "0"
                    }, 100)
                }
                d.insertAdjacentHTML("beforeend", "\x3cdiv id\x3d'consent_blackbar'\x3e\x3c/div\x3e");
                var m = setInterval(function() {
                    var c = document.querySelector("#truste-consent-content");
                    if(c) {
                        b("ViewBanner", "View");
                        c = document.querySelectorAll("#truste-consent-content a")[0];
                        var e = document.querySelectorAll("#truste-consent-content a")[1],
                            k = document.querySelector("#truste-consent-content #truste-consent-button"),
                            l = document.querySelector("#truste-consent-content #sliderButton");
                        c.addEventListener("click", function() {
                            b("DoNotSell")
                        });
                        e.addEventListener("click", function() {
                            b("PrivacyStatement")
                        });
                        k.addEventListener("click", function() {
                            b("Accept")
                        });
                        l.addEventListener("click", function() {
                            b("MoreInfo");
                            window.addEventListener("message", function(g) {
                                "https://consent-pref.trustarc.com" === g.origin && (g.data.includes("submit_preferences") ? b("SubmitPreferences") : g.data.includes("disclosurepanel") && b("CancelMoreInfo"))
                            })
                        });
                        clearInterval(m)
                    }
                }, 500)
            })();
            </script>-->
            <a id="borderTab">
                <div id="teconsent"></div>
            </a>
            <div class="notices">
                <div id="consent_blackbar"></div>
            </div>
            <!--<script type="text/javascript" id="">
            (function(c, b, d) {
                var a = decodeURIComponent;
                var e = "||";
                var f = ";;",
                    g = "split",
                    h = "length",
                    m = "indexOf",
                    k = "localStorage",
                    l = "_ccmdt";
                c[d] = c[d] || {};
                c[d].us = {};
                b = c[k] ? c[k][l] || "" : (b = b.cookie.match(l + "\x3d([^;]*)")) && b[1] || "";
                a = a(b)[g](e);
                b = a[h];
                if(0 < b)
                    for(; b--;) e = a[b][g]("\x3d"), 1 < e[h] && (-1 < e[1][m](f) ? (c[d].us[e[0]] = e[1][g](f), c[d].us[e[0]].pop()) : c[d].us[e[0]] = e[1])
            })(window, document, "_ml");
            (function() {
                _ml = window._ml || {};
                _ml.eid = "50061";
                _ml.forbesUpdateCid = function() {
                    _ml.cid = "";
                    var a = google_tag_manager["GTM-NMQJM4"].macro(142);
                    "undefined" != typeof google_tag_manager && google_tag_manager[a] && (_ml.cid = [], _ml.cid.push(google_tag_manager[a].dataLayer.get("channelNames") || ""), _ml.cid.push(google_tag_manager[a].dataLayer.get("sectionNames") || ""), _ml.cid.push(google_tag_manager[a].dataLayer.get("slot") || ""), _ml.cid.push(google_tag_manager[a].dataLayer.get("edit") || ""), _ml.cid.push(google_tag_manager[a].dataLayer.get("hashtags") || ""), _ml.cid.push(google_tag_manager[a].dataLayer.get("brandVoice") || ""), _ml.cid.push(google_tag_manager[a].dataLayer.get("author") || ""), _ml.fp = google_tag_manager[a].dataLayer.get("fastCi"));
                    "" != _ml.cid && (_ml.cid = _ml.cid.join("||"))
                };
                _ml.forbesUpdateCid();
                _ml.informer = {
                    callback: function(a, e) {
                        "undefined" == typeof dataLayer || _ml.isEmptyObj(_ml.us) || dataLayer.push({
                            event: "Bombora_Informer",
                            Bombora_Topic: _ml.us.tp && 0 < _ml.us.tp.length ? _ml.us.tp.join() : "",
                            Bombora_Industry: _ml.us.ind,
                            Bombora_Company_Revenue: _ml.us.cr,
                            Bombora_Company_Size: _ml.us.cs,
                            Bombora_Domain: _ml.us.dm,
                            Bombora_Seniority: _ml.us.sn,
                            Bombora_Predictive_Category: _ml.us.pc && 0 < _ml.us.pc.length ? _ml.us.pc[0] : "",
                            Bombora_Decision_Maker: _ml.us.dcm,
                            Bombora_Functional_Area: _ml.us.fa && 0 < _ml.us.fa.length ? _ml.us.fa[0] : "",
                            Bombora_Install_Data: _ml.us.ins && 0 < _ml.us.ins.length ? _ml.us.ins[0] : "",
                            Bombora_Professional_Group: _ml.us.pg && 0 < _ml.us.pg.length ? _ml.us.pg[0] : "",
                            Bombora_Education: _ml.us.edu
                        });
                        try {
                            window.localStorage.setItem("_ml", JSON.stringify(_ml) || "")
                        } catch(f) {
                            console.error(f)
                        }
                    },
                    enable: !0
                };
                var c = document.getElementsByTagName("script")[0],
                    b = new Date,
                    d = document.createElement("script");
                d.type = "text/javascript";
                d.async = !0;
                d.src = "https://ml314.com/tag.aspx?" + b.getDate() + b.getMonth() + b.getFullYear();
                c.parentNode.insertBefore(d, c)
            })();
            </script>
            <script type="text/javascript" id="">
            (function() {
                function c(d, a) {
                    a = a || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: null
                    };
                    var b = document.createEvent("CustomEvent");
                    b.initCustomEvent(d, a.bubbles, a.cancelable, a.detail);
                    return b
                }
                if("function" === typeof window.CustomEvent) return !1;
                window.CustomEvent = c
            })();
            </script>-->
            <style type="text/css">
            .tp-backdrop.tp-active {
                background-color: #333333;
                opacity: 0.9;
            }
            /* A hack to get around styles added by amp-runtime that would permit scrolling. */
            
            .amp-plus.tp-modal-open {
                height: 100vh !important;
                overflow: hidden !important;
            }
            </style>
            <!--<script type="text/javascript" id="">
            window.pianoInitialized || function(h) {
                var f = document.createElement("script");
                f.type = "text/javascript";
                f.async = !0;
                f.src = h;
                f.addEventListener("load", function() {
                    tp = window.tp || [];
                    tp.push(["setAid", "true" === google_tag_manager["GTM-NMQJM4"].macro(143) ? "Yj2fRrCPpu" : "WieGSULCVE"]);
                    "true" === google_tag_manager["GTM-NMQJM4"].macro(144) && tp.push(["setPianoIdUrl", "https://auth.forbes.com"]);
                    tp.push(["setUseTinypassAccounts", !1]);
                    tp.push(["setUsePianoIdUserProvider", !0]);
                    tp.push(["setEndpoint", "true" === google_tag_manager["GTM-NMQJM4"].macro(145) ? "https://buy.tinypass.com/api/v3" : "https://sandbox.tinypass.com/api/v3"]);
                    tp.push(["setSandbox", "true" !== google_tag_manager["GTM-NMQJM4"].macro(146)]);
                    tp.push(["setDebug", "true" !== google_tag_manager["GTM-NMQJM4"].macro(147)]);
                    tp.push(["setCxenseSiteId", "1141970743239503459"]);
                    tp.push(["init", function() {
                        function g(a) {
                            if(tp.pianoId.isUserValid()) {
                                var b = new Date;
                                b.setTime(b.getTime() + 2592E6);
                                var c = function(d) {
                                    d = d.data.map(function(e) {
                                        return e.resource.rid
                                    }).join(",");
                                    document.cookie = "__fbs_tac\x3d" + encodeURIComponent(d) + "; expires\x3d" + (google_tag_manager["GTM-NMQJM4"].macro(148) || b.toUTCString()) + "; path\x3d/; domain\x3dforbes.com;";
                                    0 < d.length && (document.cookie = "_pc_meter_expiration\x3d; expires\x3dThu, 01 Jan 1970 00:00:00 GMT; path\x3d/; domain\x3dforbes.com");
                                    a && a()
                                };
                                tp.api.callApi("/access/list", {}, c)
                            }
                        }
        
                        function k(a) {
                            a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                            a = new RegExp("[\\?\x26]" + a + "\x3d([^\x26#]*)");
                            a = a.exec(location.search);
                            return null === a ? "" : decodeURIComponent(a[1].replace(/\+/g, " "))
                        }
        
                        function p(a, b) {
                            fetch("true" === google_tag_manager["GTM-NMQJM4"].macro(149) ? "https://account.forbes.com/api-data/newsletter-trial-" + a : "https://staging-account.forbes.com/api-data/newsletter-trial-" + a, {
                                method: "POST",
                                credentials: "include",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(b)
                            }).then(function(c) {
                                c.json().then(function(d) {
                                    console.log("Success: ", d)
                                })
                            })["catch"](function(c) {
                                console.error("Failed: ", c)
                            })
                        }
        
                        function l(a, b) {
                            try {
                                localStorage.setItem(a, b)
                            } catch(c) {
                                console.error(c)
                            }
                        }
        
                        function u(a, b) {
                            (a || b) && fetch("https://" + ("true" === google_tag_manager["GTM-NMQJM4"].macro(150) ? "" : "staging-") + "account.forbes.com/api-data/get-cordial-data?email\x3d" + a, {
                                credentials: "include"
                            }).then(function(c) {
                                c.json().then(function(d) {
                                    if(d.cID) {
                                        l("cID", d.cID);
                                        d = [];
                                        var e = localStorage.getItem("newslettersList") || "";
                                        e && !e.includes(b) ? (d.push(b), l("newslettersList", d)) : e || (d.push(b), l("newslettersList", d))
                                    }
                                })
                            })["catch"](function(c) {
                                console.error("Error getting cordial data: ", c)
                            })
                        }
                        tp.push(["setContentAuthor", google_tag_manager["GTM-NMQJM4"].macro(151)]);
                        tp.push(["setContentCreated", google_tag_manager["GTM-NMQJM4"].macro(152)]);
                        tp.push(["setContentSection", google_tag_manager["GTM-NMQJM4"].macro(153)]);
                        tp.push(["setTags", google_tag_manager["GTM-NMQJM4"].macro(177)]);
                        var q = google_tag_manager["GTM-NMQJM4"].macro(184);
                        Object.keys(q).forEach(function(a) {
                            tp.push(["setCustomVariable", a, q[a]])
                        });
                        tp.pianoId.init({
                            width: Math.min(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, 660)
                        });
                        tp.pianoId && tp.pianoId.isUserValid() ? g() : document.cookie = "__fbs_tac\x3d; expires\x3dThu, 01 Jan 1970 00:00:00 GMT; path\x3d/; domain\x3dforbes.com";
                        tp.push(["addHandler", "customEvent", function(a) {
                            if("echo-geolocation" === a.eventName) {
                                var b = JSON.parse(a.params.params);
                                (a = document.querySelector("#" + b.name)) && a.contentWindow.postMessage({
                                    type: "geolocation-response",
                                    site: google_tag_manager["GTM-NMQJM4"].macro(185),
                                    isEurope: (window.forbes || {}).isEurope || ((window.forbes || {}).preferences || {}).isEurope
                                }, "*")
                            } else if("ad-block-disabled-reload" === a.eventName) tp.offer.close(), location.reload(!0);
                            else if("close" === a.eventName) a = document.querySelector(".video-container"), b = document.querySelector(".video-player"), a && a.classList.remove("paywall-banner-experience"), b && b.classList.remove("paywall-banner-experience");
                            else if("student-offer-inquiry" === a.eventName) {
                                b = JSON.parse(a.params.params);
                                var c = b.iframeId;
                                fetch("https://account.forbes.com/api-data/submit-student-form", {
                                    method: "POST",
                                    cache: "no-store",
                                    headers: {
                                        "Content-Type": "application/json",
                                        "Cache-Control": "no-cache, no-store, no-transform",
                                        Pragma: "no-cache"
                                    },
                                    body: JSON.stringify({
                                        email: a.params.email
                                    })
                                }).then(function(m) {
                                    return m.json()
                                }).then(function(m) {
                                    var r = document.querySelector("#" + c);
                                    r && r.contentWindow.postMessage({
                                        type: "student-subscription-response",
                                        success: !m.error
                                    }, "*")
                                })
                            } else if("newsletter-sign-up" === a.eventName) {
                                b = {
                                    "channels.email.subscribeStatus": "subscribed"
                                };
                                b[a.params.newsletter] = !0;
                                a.params.additionalFieldKey && (b[a.params.additionalFieldKey] = a.params.additionalFieldValue);
                                "US" === a.params.geolocation && (b.Announcements = !0);
                                if(a.params.lander) {
                                    var d = k("utm_source"),
                                        e = k("utm_medium"),
                                        v = k("utm_campaign");
                                    b.sourcearray = ["{" + d + "}-{" + e + "}-{" + v + "}"]
                                }
                                crdl("contact", {
                                    email: a.params.oneclick ? tp.pianoId.getUser().email : a.params.email
                                }, b, {
                                    forceSubscribe: {
                                        email: !0
                                    },
                                    upsert: !0
                                });
                                window.dataLayer.push({
                                    event: "analyticsEvent",
                                    "event category": a.params.lander ? "Piano" : "Newsletter",
                                    "event action": a.params.lander ? "Successful Sign up" : "Successful Submit",
                                    "event label": a.params.newsletter
                                });
                                b = {
                                    email: a.params.oneclick ? tp.pianoId.getUser().email : a.params.email,
                                    resourceId: a.params.resourceid
                                };
                                b.resourceId || (d = {
                                    "alphaalarm-free": "je-alphaalarm-paid",
                                    "appleunboxed-free": "je-appleunboxed-paid",
                                    "sportsmoneypremium-free": "je-sportsmoneypremium-paid",
                                    "midastouch-free": "je-midastouch-paid",
                                    "releasenotes-free": "je-releasenotes-paid",
                                    "nittigrittytax-free": "je-nittigrittytax-paid",
                                    "dealflow-free": "je-dealflow-paid",
                                    "checksimbalances-free": "je-checksimbalances-paid",
                                    "freshtake-free": "je-freshtake-paid"
                                }, d[a.params.newsletter] && (b.resourceId = d[a.params.newsletter]));
                                p("subscribe", b);
                                u(a.params.email, a.params.newsletter)
                            } else "newsletter-unsubscribe" === a.eventName && (a = new URLSearchParams(window.location.search), b = {
                                email: a.get("email"),
                                resourceId: a.get("utm_rid"),
                                cID: a.get("cdlcid")
                            }, p("unsubscribe", b))
                        }]);
                        tp.push(["addHandler", "checkoutComplete", function(a) {
                            if("je-" === a.rid.substring(0, 3)) {
                                var b = {
                                    "channels.email.subscribeStatus": "subscribed"
                                };
                                b[a.rid.substring(3)] = !0;
                                crdl("contact", {
                                    email: a.email
                                }, b, {
                                    forceSubscribe: {
                                        email: !0
                                    },
                                    upsert: !0
                                })
                            }
                            b = window.dataLayer || [];
                            if("true" === google_tag_manager["GTM-NMQJM4"].macro(186)) {
                                var c = /eventSource=([^&]*)/.exec(google_tag_manager["GTM-NMQJM4"].macro(187));
                                c ? (c = c[1], c = "wall" === c ? 5 : "adblock" === c ? "ab" : c.substring(c.length - 1), b.push({
                                    event: "analyticsEvent",
                                    "event category": "Piano",
                                    "event action": "SubscribeSuccess",
                                    "event label": a.rid + "-" + c
                                })) : "/amp-subscribe" === google_tag_manager["GTM-NMQJM4"].macro(188) ? b.push({
                                    event: "analyticsEvent",
                                    "event category": "Piano",
                                    "event action": "SubscribeSuccess",
                                    "event label": a.rid + "-5"
                                }) : b.push({
                                    event: "analyticsEvent",
                                    "event category": "Piano",
                                    "event action": "SubscribeSuccess",
                                    "event label": a.rid
                                })
                            } else window.google_tag_manager[google_tag_manager["GTM-NMQJM4"].macro(189)].dataLayer.get("adblockwall") ? b.push({
                                event: "analyticsEvent",
                                "event category": "Piano",
                                "event action": "SubscribeSuccess",
                                "event label": a.rid + "-ab"
                            }) : window.google_tag_manager[google_tag_manager["GTM-NMQJM4"].macro(190)].dataLayer.get("subscribeWall") ? b.push({
                                event: "analyticsEvent",
                                "event category": "Piano",
                                "event action": "SubscribeSuccess",
                                "event label": a.rid + "-5"
                            }) : google_tag_manager["GTM-NMQJM4"].macro(193) || b.push({
                                event: "analyticsEvent",
                                "event category": "Piano",
                                "event action": "SubscribeSuccess",
                                "event label": a.rid
                            })
                        }]);
                        tp.push(["addHandler", "checkoutClose", function(a) {
                            if("checkoutCompleted" === a.state || "alreadyHasAccess" === a.state) "true" === google_tag_manager["GTM-NMQJM4"].macro(194) ? g(function() {
                                if("/subscribe" === google_tag_manager["GTM-NMQJM4"].macro(195)) {
                                    var b = /redirect=([^&]*)/.exec(google_tag_manager["GTM-NMQJM4"].macro(196));
                                    window.location.href = b ? b[1] : "https://www.forbes.com/"
                                }
                            }) : g(function() {
                                location.reload(!0)
                            })
                        }]);
                        var t;
                        tp.push(["addHandler", "checkoutSelectTerm", function(a) {
                            t = a.termName
                        }]);
                        tp.push(["addHandler", "checkoutClose", function(a) {
                            "close" === a.state && dataLayer.push({
                                event: "analyticsEvent",
                                "event category": "piano",
                                "event action": "click",
                                "event label": t + " close"
                            })
                        }]);
                        tp.push(["addHandler", "submitPayment", function(a) {
                            dataLayer.push({
                                event: "analyticsEvent",
                                "event category": "piano",
                                "event action": "click",
                                "event label": "complete purchase"
                            })
                        }]);
                        tp.push(["addHandler", "checkoutCustomEvent", function(a) {
                            switch(a.eventName) {
                                case "promo code apply":
                                case "add a card":
                                case "set cc as default":
                                    dataLayer.push({
                                        event: "analyticsEvent",
                                        "event category": "piano",
                                        "event action": "click",
                                        "event label": a.eventName
                                    });
                                    break;
                                case "credit":
                                    dataLayer.push({
                                        event: "analyticsEvent",
                                        "event category": "piano",
                                        "event action": "click",
                                        "event label": "credit card payment method"
                                    });
                                    break;
                                case "paypalbt":
                                    dataLayer.push({
                                        event: "analyticsEvent",
                                        "event category": "piano",
                                        "event action": "click",
                                        "event label": "paypal payment method"
                                    })
                            }
                        }]);
                        document.dispatchEvent(new CustomEvent("fbs-piano-init"));
                        var w = "/password-reset /sign-in /sign-out /amp-sign-in /amp-sign-out /amp-subscribe /subscribe".split(" ");
                        if("true" === google_tag_manager["GTM-NMQJM4"].macro(197) && -1 !== w.indexOf(google_tag_manager["GTM-NMQJM4"].macro(198)) || google_tag_manager["GTM-NMQJM4"].macro(201)) tp.push(["addHandler", "loginSuccess", function(a) {
                            !0 === a.registration ? dataLayer.push({
                                event: "analyticsEvent",
                                "event category": "Piano",
                                "event action": "Register",
                                "event label": "general"
                            }) : dataLayer.push({
                                event: "analyticsEvent",
                                "event category": "Piano",
                                "event action": "Sign In",
                                "event label": "general"
                            });
                            "true" === google_tag_manager["GTM-NMQJM4"].macro(202) && /eventSource=banner/.exec(google_tag_manager["GTM-NMQJM4"].macro(203)) && (!0 === a.registration ? dataLayer.push({
                                event: "analyticsEvent",
                                "event category": "Template Area Interaction",
                                "event action": "RegisterSource",
                                "event label": "PayWallWarning"
                            }) : !1 === a.registration && dataLayer.push({
                                event: "analyticsEvent",
                                "event category": "Template Area Interaction",
                                "event action": "RegisterSource",
                                "event label": "PayWallWarningExisting"
                            }));
                            g()
                        }]), ("true" === google_tag_manager["GTM-NMQJM4"].macro(204) && -1 < ["/sign-in", "/subscribe", "/amp-subscribe"].indexOf(google_tag_manager["GTM-NMQJM4"].macro(205)) || google_tag_manager["GTM-NMQJM4"].macro(208)) && tp.experience.init();
                        else if(tp.push(["addHandler", "meterExpired", function(a) {
                                var b = window.dataLayer || [];
                                b.push({
                                    event: "analyticsEvent",
                                    "event category": "Piano",
                                    "event action": "PayWallPrompt",
                                    "event label": "Required-" + a.totalViews
                                })
                            }]), tp.push(["addHandler", "loginSuccess", function(a) {
                                var b = window.dataLayer || [];
                                ((window.fbsCordial || {}).beforeLoginReloadQueue || []).forEach(function(c) {
                                    c(a)
                                });
                                window.fbsCordial && (window.fbsCordial.beforeLoginReloadQueue = []);
                                !0 === a.registration ? b.push({
                                    event: "analyticsEvent",
                                    "event category": "Piano",
                                    "event action": "Register",
                                    "event label": "general"
                                }) : b.push({
                                    event: "analyticsEvent",
                                    "event category": "Piano",
                                    "event action": "Sign In",
                                    "event label": "general"
                                });
                                window.google_tag_manager[google_tag_manager["GTM-NMQJM4"].macro(209)].dataLayer.get("adblockwall") ? !0 === a.registration ? b.push({
                                    event: "analyticsEvent",
                                    "event category": "Template Area Interaction",
                                    "event action": "RegisterSource",
                                    "event label": "AdBlock"
                                }) : !1 === a.registration && b.push({
                                    event: "analyticsEvent",
                                    "event category": "Template Area Interaction",
                                    "event action": "RegisterSource",
                                    "event label": "AdBlockExisting"
                                }) : window.google_tag_manager[google_tag_manager["GTM-NMQJM4"].macro(210)].dataLayer.get("subscribeWall") && (!0 === a.registration ? b.push({
                                    event: "analyticsEvent",
                                    "event category": "Template Area Interaction",
                                    "event action": "RegisterSource",
                                    "event label": "PayWallRequired"
                                }) : !1 === a.registration && b.push({
                                    event: "analyticsEvent",
                                    "event category": "Template Area Interaction",
                                    "event action": "RegisterSource",
                                    "event label": "PayWallRequiredExisting"
                                }));
                                b = new Date;
                                b.setTime(b.getTime() + 7E3);
                                document.cookie = "lastPagePath\x3d" + google_tag_manager["GTM-NMQJM4"].macro(211) + "; expires\x3d" + b.toUTCString() + "; path\x3d/";
                                g(function() {
                                    "PIANOID" === a.source && (tp.offer.close(), setTimeout(function() {
                                        location.reload(!0)
                                    }, 3E3))
                                })
                            }]), "true" === google_tag_manager["GTM-NMQJM4"].macro(212) || "unknown" === google_tag_manager["GTM-NMQJM4"].macro(213)) tp.experience.init();
                        else if(document.cookie.match(/__adblocker=(true|false)/)) tp.experience.init();
                        else {
                            var n = function() {
                                    tp.experience.init();
                                    clearTimeout(x);
                                    document.removeEventListener("fbs-ad-block-init", n)
                                },
                                x = setTimeout(function() {
                                    tp.experience.init();
                                    document.removeEventListener("fbs-ad-block-init", n)
                                }, 3E3);
                            document.addEventListener("fbs-ad-block-init", n)
                        }
                    }])
                });
                h = document.getElementsByTagName("script")[0];
                h.parentNode.insertBefore(f, h)
            }("true" === google_tag_manager["GTM-NMQJM4"].macro(214) ? "//cdn.tinypass.com/api/tinypass.min.js" : "//sandbox.tinypass.com/api/tinypass.min.js");
            </script>
            <script type="text/javascript" id="">
            document.addEventListener("fbs-piano-init", function() {
                var d = window.tp;
                d.push(["addHandler", "checkoutCustomEvent", function(c) {
                    if("jeNewsletter" === c.eventName) {
                        c = document.querySelector("head");
                        var e = document.querySelector("body"),
                            a = document.createElement("script"),
                            f = "!function(f,b,e,v,n,t,s){if(f.fbq)return;n\x3df.fbq\x3dfunction(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq\x3dn;n.push\x3dn;n.loaded\x3d!0;n.version\x3d'2.0';n.queue\x3d[];t\x3db.createElement(e);t.async\x3d!0;t.src\x3dv;s\x3db.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '1494993704116832');fbq('track', 'PageView');";
                        a.innerHTML = f;
                        c.insertAdjacentElement("beforeend", a);
                        a = document.createElement("script");
                        a.type = "text/javascript";
                        a.src = "//platform.twitter.com/oct.js";
                        a.onload = function() {
                            window.twttr.conversion.trackPid("o689z", {
                                tw_sale_amount: 0,
                                tw_order_quantity: 0
                            })
                        };
                        d.push(["addHandler", "checkoutComplete", function(b) {
                            window.fbq("track", "Purchase", {
                                currency: "USD",
                                value: b.chargeAmount
                            });
                            window.twttr.conversion.trackPid("o68a2", {
                                tw_sale_amount: 0,
                                tw_order_quantity: 0
                            });
                            e.insertAdjacentHTML("beforeend", '\x3cimg height\x3d"1" width\x3d"1" style\x3d"display:none;" alt\x3d"" src\x3d"https://px.ads.linkedin.com/collect/?pid\x3d445106\x26conversionId\x3d5243401\x26fmt\x3dgif"/\x3e')
                        }]);
                        d.push(["addHandler", "customEvent", function(b) {
                            "newsletter-sign-up" !== b.eventName || (b.params || {}).lander || (window.fbq("track", "Lead", {
                                content_name: b.params.newsletter
                            }), window.twttr.conversion.trackPid("o68a0", {
                                tw_sale_amount: 0,
                                tw_order_quantity: 0
                            }), e.insertAdjacentHTML("beforeend", '\x3cimg height\x3d"1" width\x3d"1" style\x3d"display:none;" alt\x3d"" src\x3d"https://px.ads.linkedin.com/collect/?pid\x3d445106\x26conversionId\x3d5243385\x26fmt\x3dgif"/\x3e'))
                        }]);
                        window.fbq("track", "ViewContent");
                        c.insertAdjacentElement("beforeend", a);
                        e.insertAdjacentHTML("beforeend", '\x3cimg height\x3d"1" width\x3d"1" style\x3d"display:none;" alt\x3d"" src\x3d"https://px.ads.linkedin.com/collect/?pid\x3d445106\x26conversionId\x3d5243377\x26fmt\x3dgif"/\x3e')
                    }
                }])
            });
            </script>
            <script type="text/javascript" id="">
            var dataLayer = window.dataLayer || [];
            dataLayer.push({
                event: "analyticsEvent",
                "event category": "Template Area Interaction",
                "event action": "Page Loaded",
                "event label": void 0
            });
            </script>-->
            <div style="display: none; visibility: hidden;">
                <!--<script type="text/javascript">
                (function() {
                    function b() {
                        !1 === c && (c = !0, Munchkin.init("790-SNV-353", {
                            cookieAnon: !1
                        }))
                    }
                    var c = !1,
                        a = document.createElement("script");
                    a.type = "text/javascript";
                    a.async = !0;
                    a.src = "//munchkin.marketo.net/munchkin.js";
                    a.onreadystatechange = function() {
                        "complete" != this.readyState && "loaded" != this.readyState || b()
                    };
                    a.onload = b;
                    document.getElementsByTagName("head")[0].appendChild(a)
                })();
                </script>-->
            </div>
            <!--<script type="text/javascript" id="">
            (function() {
                window._sf_endpt = (new Date).getTime();
                var a = document.createElement("script");
                a.setAttribute("language", "javascript");
                a.setAttribute("type", "text/javascript");
                a.setAttribute("src", "//static.chartbeat.com/js/chartbeat.js");
                document.body.appendChild(a)
            })();
            </script>
            <script type="text/javascript" src="https://mb.moatads.com/yi/v2?ol=0&amp;qn=%604%7BZEYwoqI%24%5BK%2BdLLU)%2CMm~tW%2490vv9L%24%2FoDb%2FDXwJN%5EpBKUYBgDzb%23Ls1(u0EnUa%3Fwb%26k!C%24%26J%3BuFdSh%3F%24b%40o~%2Fj%24Co%3DN_Q%247NCLm%3C6Hu_SOy7jhLs1%7B)%3Ee3wW0uC%2BA5%3Deu!LfBB2%2B%7BLT7%25%40qwMoI3%2B%3BggqhB3U4(%5B*rUo8rY2baurIz!zm!jPE7I_%3CTZ%3BRN%3BatASYUby%3D(tN%23V.x%3Bm_Qrw5.W%2F84VKp%40i6AKx!f%3EUYoo813_xB%2CN22Ib%40aFB&amp;tf=1_nMzjG---CSa7H-1SJH-bW7qhB-LRwqH-nMzjG-&amp;vi=111111&amp;rc=1%2C1%2C0%2C5%2C747835005%2C1%2C2%2C0%2Cprobably%2Cprobably&amp;rb=1-9gXoISVmV3kntWlJc0eSG1yyh6GCg89RvnZMBb6MgPbjt6bn%2BvSmix1wV0AK2nh7uzk%3D&amp;rs=1-6sfEEAhWe0wLgg%3D%3D&amp;sc=1&amp;os=1-7Q%3D%3D&amp;qp=10000&amp;is=BBBBB2BBEYBvGl2BBCkqtUTE1RmsqbKW8BsrBu0rCFE48CRBeeBS2hWTMBBQeQBBn2soYggyUig0CBlWZ0uBBCCCCCCOgRBBiOfnE6Bkg7Oxib8MxOtJYHCBdm5kBhIcC9Y8oBXckXBR76iUUsJBCBBBBBBBBBWBBBj3BBBZeGV2BBBCMciUBBBjgEBBBBBB94UMgTdJMtEcpMBBBQBBBniOccBBBBBB47kNwxBbBBBBBBBBBhcjG6BBJM2L4Bk8BwCBQmIoRBBCzBz1BBCTClBBrbGBC4ehueB57NG9aJeRzBqEKiuwBBBB&amp;iv=8&amp;qt=0&amp;gz=0&amp;hh=0&amp;hn=0&amp;tw=&amp;qc=0&amp;qd=0&amp;qf=1680&amp;qe=884&amp;qh=1680&amp;qg=5035&amp;qm=300&amp;qa=1680&amp;qb=1050&amp;qi=1680&amp;qj=963&amp;to=000&amp;po=1-0020002000002120&amp;vy=ot%24b%5Bh%40%22oDgO%3DLlE6%3AvyiA%24%3AFAx2d%5E%2FNrUd%3FWxj%5Du!x2%3D%40PyqIY79%22bR9%2F%24b%3CDL53U*x%258bJmtTy5R0CjK9_2C4qn%3AXD5pDz2%25v%5E98RH%2C%3EFh%2B%7BE%24RS%22_%3Bm_Qrw5.W%2F84VKp%40i6AKx!ehV%7DGG%60xEC5*vV.%2FDydjdB%26zCoK%2BdrhB&amp;qr=0&amp;url=https%3A%2F%2Fwww.forbes.com%2Fbillionaires%2F&amp;pcode=forbesprebidheader122641196143&amp;rx=157365246537&amp;callback=MoatNadoAllJsonpRequest_44532346"></script>
            <script language="javascript" type="text/javascript" src="//static.chartbeat.com/js/chartbeat.js"></script>-->
            <iframe src="https://dd11418e022d5ebaab7747a40e2e80c1.safeframe.googlesyndication.com/safeframe/1-0-38/html/container.html" style="visibility: hidden; display: none;"></iframe> <img src="https://c.aaxads.com/pxusr.gif" style="display: none !important;"><img src="https://www.aaxdetect.com/pxext.gif" style="display: none !important;">
            <iframe src="https://s.amazon-adsystem.com/iu3?cm3ppd=1&amp;d=dtb-pub&amp;csif=t&amp;dl=n-index_pm-db5_rbd_n-vmg_an-db5" style="display: none;"></iframe><img width="4" height="4" id="moat4609441000000" style="display: none;">
            <iframe src="https://d.email.forbes.com/connect.html?connectUrl=https%3A%2F%2Fd.email.forbes.com&amp;cookieDomain=email.forbes.com&amp;cookieLife=365&amp;sameSiteDisable=false&amp;trackKey=forbes-live" style="display: none;"></iframe>
            <iframe name="__bkframe" id="__bkframe" title="bk" src="about:blank" style="border: 0px; width: 0px; height: 0px; display: none; position: absolute; clip: rect(0px, 0px, 0px, 0px);"></iframe>
            <iframe name="__bkframe_52847_1646710667463" id="__bkframe_52847_1646710667463" title="bk" src="https://stags.bluekai.com/site/52847?ret=html&amp;phint=bkChnl%3Dnone&amp;phint=bkSection%3Dnone&amp;phint=bkSite%3Dfdc.forbes&amp;phint=bkZn%3Dcsf&amp;phint=bkSplSlot%3Dbillionaires&amp;phint=bkHashTg%3Dnone&amp;phint=bkType%3Dnone&amp;phint=bkAuthor%3Dnone&amp;phint=bkBrndVc%3Dnone&amp;phint=bkEdtSlot%3Dlist-billionaires-2021&amp;phint=id%3D2884e65a978e1467214001598bd4f0aa4d0&amp;phint=__bk_t%3DForbes%20Billionaires%202021%3A%20The%20Richest%20People%20in%20the%20World&amp;phint=__bk_k%3Dbillionaires%2C%20the%20world's%20billionaires%2C%20wealth%2C%20Jeff%20Bezos%2C%20Kylie%20Jenner%2C%20Elon%20Musk%2C%20Donald%20Trump%2C%20Kylie%2C%20Steward%2C%20Bezos%2C%20Laurene%20Powell%20Jobs%2C%20Donald%20Trump%2C%20richest%20people%20in%20the%20world%2C%20world%E2%80%99s%20billionaires%2C%20richest%20person%20in%20the%20world%2C%20richest%20woman%20in%20the%20world&amp;phint=__bk_pr%3Dhttps%3A%2F%2Fwww.google.com%2F&amp;phint=__bk_l%3Dhttps%3A%2F%2Fwww.forbes.com%2Fbillionaires%2F&amp;phint=__bk_v%3D3.1.10&amp;limit=10&amp;r=48313508" class="__bkframe_site_52847" style="border: 0px; width: 0px; height: 0px; display: none; position: absolute; clip: rect(0px, 0px, 0px, 0px);"></iframe>
            <iframe src="https://www.google.com/recaptcha/api2/aframe" width="0" height="0" style="display: none;"></iframe>
            <!--<script type="text/javascript" id="">
            (function() {
                google_tag_manager["GTM-NMQJM4"].macro(261) && google_tag_manager["GTM-NMQJM4"].macro(262) ? (window.__bomboraAndPts = !0, dataLayer.push({
                    event: "Bombora_And_PtS"
                })) : setTimeout(function() {
                    window.__bomboraAndPts || dataLayer.push({
                        event: "Bombora_And_PtS"
                    })
                }, 2E3)
            })();
            </script>-->
        </body>
        
        </html>`
    );
}

export default function ForbesClone(props) {
    return <div clone = "">
        <InnerHTML
            html={createHTML()}
            key={props.triggerWebsiteReload} // each time NaturalLanguage state.triggerWebsiteReload is updated, it'll cause this InnerHTML to re-render
        />
    </div>;
}