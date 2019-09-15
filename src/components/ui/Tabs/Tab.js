import React from 'react';
import { TabsContext } from './TabsContext';

class Tab extends React.Component {
  componentDidMount() {
    const { id, title } = this.props;
    const { context } = this.context;
    context.addTab({
      id,
      title,
    });
  }

  render() {
    const { context: { activeTab: { id: activeTabId } } } = this.context;
    const { children, id: tabId } = this.props;
    return activeTabId === tabId && children;
  }
}

Tab.contextType = TabsContext;

export default Tab;
