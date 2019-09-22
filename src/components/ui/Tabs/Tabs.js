import React from 'react';
import styled, { withTheme } from 'styled-components';
import { TabProvider, TabConsumer } from './TabsContext';
import TabItem from './Tab';

const TabsListStyled = styled.ul`
  padding-left: 0;
  list-style: none;
  margin: 0;
  text-align: center;
  font-size: 18px;
`;

const TabItemSyled = styled.li`
  display: inline-block;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: ${data => (data.theme.tabs.bgColor)};

  @media (max-width: 750px)  {
    width: 100%;
  }
`;

const ActiveTabBorderStyled = styled.div`
  position: absolute;
  bottom: 0;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  width: ${data => (data.size.width)}px;
  left: ${data => (data.size.left)}px;
  will-change: left, width;
  
`;

const TabLinkStyled = styled.a`
  text-transform: capitalize;
  color: ${data => (data.theme.tabs.tabItemColor)};
  padding: 16px 30px;
  cursor: ${data => (data.style.transition ? data.style.cursor : 'pointer')};
  opacity: ${data => (data.style.transition ? data.style.opacity : '0,4')};
  display: block;
  text-decoration: none;
  transition: ${data => (data.style.transition)};
    &:hover: {
      opacity: 1
    }
  background-color: ${data => (data.style.backgroundColor)};
`;

const TabsContainerStyled = styled.div`
    position: relative;
`;

const ListTabs = ({ children }) => (
  <TabsListStyled>
    { children }
  </TabsListStyled>
);

const TabTitleItem = ({ children, innerRef, ...restProps }) => (
  <TabItemSyled
    ref={innerRef}
    {...restProps}
  >
    { children }
  </TabItemSyled>
);

const ActiveTabBorder = ({
  activeTabElement,
  theme,
  children,
  ...restProps
}) => {
  const size = {};
  if (activeTabElement) {
    size.width = activeTabElement.offsetWidth;
    size.left = activeTabElement.offsetLeft;
    size.backgroundColor = theme.tabs.activeTabBg;
  }

  return (
    <ActiveTabBorderStyled size={size} {...restProps}>
      { children }
    </ActiveTabBorderStyled>
  );
};

const TabAnchorItem = ({
  isActiveTab,
  children,
  theme,
  ...restProps
}) => {
  const style = {};

  if (isActiveTab) {
    style.transition = 'all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms';
    style.cursor = 'default';
    style.opacity = 1;
    style.backgroundColor = theme.tabs.activeTabBg;
    style.color = theme.tabs.activeTabColor;
  }

  return (
    <TabLinkStyled
      isActiveTab={isActiveTab}
      style={style}
      {...restProps}
    >
      { children }
    </TabLinkStyled>
  );
};


const TabsContainer = ({ children, ...restProps }) => (
  <TabsContainerStyled {...restProps}>
    { children }
  </TabsContainerStyled>
);

const ReactTabs = ({ children, ...restProps }) => (
  <TabsContainerStyled {...restProps}>
    { children }
  </TabsContainerStyled>
);

class Tabs extends React.Component {
  static Tab = TabItem;

  state = {
    tabsElements: [],
  };

  render() {
    const { theme, activeTab, children } = this.props;
    const { tabsElements } = this.state;
    return (
      <TabProvider activeTab={activeTab}>
        <TabConsumer>
          {value => (
            <ReactTabs>
              <TabsContainer>
                <ListTabs>
                  {value.context.tabs.map((tab, index) => (
                    <TabTitleItem
                      isActiveTab={value.context.activeTab.id === tab.id}
                      key={index}
                      id={tab.id}
                      innerRef={(tabElement) => {
                        if (!tabsElements[tab.id]) {
                          this.setState((prevState, props) => {
                            const tabsElements = prevState.tabsElements;
                            tabsElements[tab.id] = tabElement;

                            return {
                              tabsElements,
                            };
                          });
                        }
                      }}
                    >
                      <TabAnchorItem
                        theme={theme}
                        isActiveTab={value.context.activeTab.id === tab.id}
                        href="javascript:void(0)"
                        onClick={value.context.onClick(tab)}
                        onKeyPress={(event) => {
                          const code = event.keyCode || event.which;

                          if (code === 13) {
                            this.onClick(tab)(event);
                          }
                        }}
                      >
                        {tab.title}
                      </TabAnchorItem>
                    </TabTitleItem>
                  ))}
                </ListTabs>

                <ActiveTabBorder
                  theme={theme}
                  activeTabElement={
                    tabsElements[value.context.activeTab.id]
                  }
                />
              </TabsContainer>
              {children}
            </ReactTabs>
          )}
        </TabConsumer>
      </TabProvider>
    );
  }
}

export default withTheme(Tabs);
