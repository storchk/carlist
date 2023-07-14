import { css } from 'styled-components'

export const styledCssReset = css`
  /***
    The new CSS reset - version 1.4.9 (last updated 11.2.2022)
    GitHub page: https://github.com/elad2412/the-new-css-reset
  ***/

  /*
      Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property
      - The "symbol *" part is to solve Firefox SVG sprite bug
   */
  *:where(:not(iframe, canvas, img, svg, video):not(svg *, symbol *)) {
    all: unset;
    display: revert;
  }

  /* Preferred box-sizing value */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Reapply the pointer cursor for anchor tags */
  a,
  button {
    cursor: revert;
  }

  /* Remove list styles (bullets/numbers) */
  ol,
  ul,
  menu {
    list-style: none;
  }

  /* For images to not be able to exceed their container */
  img {
    max-width: 100%;
  }

  /* removes spacing between cells in tables */
  table {
    border-collapse: collapse;
  }

  /* revert the 'white-space' property for textarea elements on Safari */
  textarea {
    white-space: revert;
  }

  /* minimum style to allow to style meter element */
  meter {
    -webkit-appearance: revert;
    appearance: revert;
  }

  /* reset default text opacity of input placeholder */
  ::placeholder {
    all: unset;
  }

  /* fix the feature of 'hidden' attribute.
     display:revert; revert to element instead of attribute */
  :where([hidden]) {
    display: none;
  }

  /* revert for bug in Chromium browsers
     - fix for the content editable attribute will work properly. */
  :where([contenteditable]) {
    -moz-user-modify: read-write;
    -webkit-user-modify: read-write;
    overflow-wrap: break-word;
    -webkit-line-break: after-white-space;
  }

  /* apply back the draggable feature - exist only in Chromium and Safari */
  :where([draggable='true']) {
    -webkit-user-drag: element;
  }

  // Custom reset styles

  html {
    ${
      /* 
  @see https://kilianvalkhof.com/2022/css-html/your-css-reset-needs-text-size-adjust-probably/ 
  and https://jira.media-saturn.com/browse/OSINSPIRE-1754 */ ''
    }
    -webkit-text-size-adjust: none;
    -moz-text-size-adjust: none;
    -ms-text-size-adjust: none;
    text-size-adjust: none;
    font-family: NotoSansDisplay, 'NotoSansDisplay-fallback', Arial, sans-serif;
  }

  ${
    /* 
  @see https://www.joshwcomeau.com/css/custom-css-reset/ 
  further explanation https://stackoverflow.com/questions/6654958/make-body-have-100-of-the-browser-height/38908284#38908284 */ ''
  }
  html, body {
    height: 100%;
  }

  body {
    ${
      /* 
  @see https://www.joshwcomeau.com/css/custom-css-reset/
  and https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth */ ''
    }
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${
    /* 
   this is to support styling from the Contentful Rich Text Editor */ ''
  }

  b, strong {
    font-weight: 700;
  }

  u {
    text-decoration: underline;
  }

  ${
    /* 
  @see https://jira.media-saturn.com/browse/OHWI-735
  and https://learn.microsoft.com/en-us/microsoft-edge/web-platform/password-reveal */ ''
  }
  ::-ms-reveal {
    display: none;
  }
`
