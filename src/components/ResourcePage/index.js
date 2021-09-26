import './index.css';
import GithubCard from './GithubCard';
import { documents } from "./data/documents";
import { knowledge } from './data/knowledge';
import { websites } from './data/websites';
import { dotColors } from "./data/dotColors";
import { useState } from 'react';
import { bookmarks } from './data/bookmarks';
import { Tabs } from 'antd';
import { StickyContainer, Sticky } from 'react-sticky';

const { TabPane } = Tabs;

const renderTabBar = (props, DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar {...props} className="site-custom-tab-bar" style={{ ...style }} />
    )}
  </Sticky>
);

export default function ResourcePage() {

  const [activeCards, setActiveCards] = useState(["card2", "card4"]);

  const handleClick = (e) => {
    return () => {
      if ((e === "card1" || e === "card2") && activeCards[0] !== e) {
        setActiveCards([e, activeCards[1]])
      } else if ((e === "card3" || e === "card4") && activeCards[1] !== e) {
        setActiveCards([activeCards[0], e])
      }
    }
  }

  const renderList = (list) => {
    return (
      // <div>
        <ul>
          {list.map((item, idx) =>
            <li key={idx} style={{ color: dotColors[idx % dotColors.length] }}>
              <a href={item.addr}>{item.title}</a>
            </li>
          )}
        </ul>
      // </div>
    )
  }

  const renderCard = (title, cla, list) => {
    const isActive = activeCards.indexOf(cla) !== -1 ? true : false;
    return (
      <div className={isActive ? "cardBox " + cla + " activeBox" : "cardBox " + cla}>
        <button onClick={handleClick(cla)}>{title}</button>
        <StickyContainer>
          <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
            <TabPane tab="Tab 1" key="1">
              {renderList(list.filter(e => e.folder === '前端'))}
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              {renderList(list.filter(e => e.folder === '1'))}
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              {renderList(list.filter(e => e.folder === '1'))}
            </TabPane>
          </Tabs>
        </StickyContainer>
      </div>
    )
  }

  return (
    <div id="left">
      <div className="colBox">
        <GithubCard handleClick={handleClick} isActive={activeCards.indexOf("card1") !== -1} />
        {renderCard("👑 官方文档库", "card2", documents)}
      </div>
      <div className="colBox">
        {renderCard("📚 知识库", "card3", knowledge)}
        {renderCard("🏳️‍🌈 好用的网站", "card4", websites)}
      </div>
      <div className="colBox">
        {renderCard("🔖 个人书签栏", "card5", bookmarks)}
      </div>
    </div>
  )
}