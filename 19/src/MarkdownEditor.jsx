import React from 'react';
import Editor from '@toast-ui/editor';

// BEGIN (write your solution here)
export default class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.editorContainer = React.createRef();
    this.editorInstance = null;
  }

  componentDidMount() {
    const { onContentChange } = this.props;

    this.editorInstance = new Editor({
      el: this.editorContainer.current,
      hideModeSwitch: true,
    });

    this.editorInstance.addHook('change', () => {
      const content = this.editorInstance.getMarkdown();
      onContentChange(content);
    });
  }

  render() {
    return <div ref={this.editorContainer} />;
  }
}
// END
