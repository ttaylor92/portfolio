import React from 'react';
import './mardown.scss';

let placeholder =`# Test
## test 2
*   This is the first list item.
*   Here's the second list item.

    > A blockquote would look great below the second list item.

*   And here's the third list item.
[this is a link](https://www.thisisalink.com)
![react](https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png)
I just love **bold text**.

The following code block:

        <html>
          <head>
            <title>Test</title>
          </head>
this is some \`<div></div>\` code`

let marked = require('marked');

const markdownRenderer = new marked.Renderer();
markdownRenderer.link = function(href, title, text) {
  return `<a target='_blank' href="${href}">${text}</a>`;
};
const MarkPreview = (props) => {
  return (
    <div id='preview' dangerouslySetInnerHTML={{ __html: marked(props.markdown, {
        renderer: markdownRenderer,
        gfm: true,
        tables: true,
        breaks: true,
        smartLists: false
      })}}></div>
        )
}

export default class Markdown extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      input: placeholder
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({ input: event.target.value })
  }

  render() {
    return (
      <div className="markdown">
        <div style={{ textAlign:'center', borderBottom: '2px solid #E4E4E4' }}>
            <h2 style={{ margin: '5px' }}>FCC Markdown</h2>
        </div>
        <form>
          <div style={{ textAlign: 'center'}}>
            <div >
              <label for='editor'><h3>Editor</h3></label>
              <textarea id='editor' placeholder='Enter Markdown' onChange={this.handleChange} value={this.state.input}/>
            </div>
            <div>
             <h3>Preview</h3>
             <MarkPreview markdown={this.state.input}/>
            </div>
           </div>
         </form>
      </div>
    );
  }
}
