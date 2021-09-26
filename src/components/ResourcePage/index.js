import './index.css';
import GithubCard from './GithubCard';
import { documents } from "./data/documents";
import { knowledge } from './data/knowledge';
import { websites } from './data/websites';
import { bookmarks } from './data/bookmarks';
import { dotColors } from "./data/dotColors";
import { StickyContainer, Sticky } from 'react-sticky';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { CaretRightOutlined } from '@ant-design/icons'
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const renderTabBar = (props, DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar {...props} className="site-custom-tab-bar" style={{ ...style }} />
    )}
  </Sticky>
);

export default function ResourcePage() {

  const [activeCards, setActiveCards] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    const links = document.querySelectorAll("#left .linkBox")
    if (links) {
      links.forEach(link => {
        link.addEventListener("mouseenter", () => {
          link.setAttribute("class", "linkBox activeLink")
        })
        link.addEventListener("mouseleave", () => {
          link.setAttribute("class", "linkBox")
        })
      })
    }
  }, [activeCards, count])

  if (!activeCards.length) {
    setTimeout(() => {
      setActiveCards(["card2", "card4", "card5"]);
    }, 500)
  }

  const handleClick = (e) => {
    return () => {
      if ((e === "card1" || e === "card2") && activeCards[0] !== e) {
        setActiveCards([e, activeCards[1], "card5"])
      } else if ((e === "card3" || e === "card4") && activeCards[1] !== e) {
        setActiveCards([activeCards[0], e, "card5"])
      }
    }
  }

  const renderList = (obj) => {
    if (!obj.childFolder) {
      return (
        <ul>
          {obj.children.map((item, idx) =>
            <a key={idx} href={item.addr}>
              <li style={{ color: dotColors[idx % dotColors.length] }} className="linkBox">
                {item.title}
              </li>
            </a>
          )
          }
        </ul>
      )
    } else {
      return (
        <Tabs defaultActiveKey="0" renderTabBar={renderTabBar} onTabClick={() => { setCount(count + 1) }}>
          {
            obj.childFolder.map((e, idx) =>
              <TabPane tab={e.folder} key={idx}>
                {renderList(e)}
              </TabPane>
            )
          }
        </Tabs>
      )
    }
  }

  const renderListBox = (data) => {
    return (
      <Tabs defaultActiveKey="0" renderTabBar={renderTabBar} onTabClick={() => { setCount(count + 1) }}>
        {
          data.map((e, idx) =>
            <TabPane tab={e.folder} key={idx}>
              {renderList(e)}
            </TabPane>
          )
        }
      </Tabs>
    )
  }

  const renderCard = (title, cla, data) => {
    const isActive = activeCards.indexOf(cla) !== -1 ? true : false;
    return (
      <div className={isActive ? "cardBox " + cla + " activeBox" : "cardBox " + cla}>
        <button onClick={handleClick(cla)}>{title}</button>
        <StickyContainer>
          {renderListBox(data)}
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
        <div className="cardBox">
          <button>
            <Link to="/">
              Back To Homepage <CaretRightOutlined />
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}