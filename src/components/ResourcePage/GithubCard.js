import { githubHot } from "./data/githubHot"
import { Carousel, Divider } from "antd"
import { dotColors } from "./data/dotColors"
import { StarOutlined, GithubOutlined, ForkOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import './github.css'


export default function GithubCard({ handleClick, isActive }) {
  return (
    <div className={isActive ? "cardBox card1 activeBox" : "cardBox card1"}>
      <button onClick={handleClick("card1")}><GithubOutlined /> GitHub热门</button>
      <div className="github">
        <Carousel autoplay dotPosition="bottom">
          {
            githubHot.map((e, idx) => {
              return (
                <a className="infoBox" href={e.addr} key={idx}>
                  <div>
                    <div style={{ color: dotColors[idx % dotColors.length] }}>{e.owner}</div>
                    <div style={{ color: dotColors[idx % dotColors.length] }}>{e.name}</div>
                    <div style={{ color: dotColors[idx % dotColors.length] }}>{e.desc}</div>
                    <div style={{ color: dotColors[idx % dotColors.length] }}>
                      <span>{e.lang}</span>
                      <span> &nbsp; &nbsp;<StarOutlined style={{color: '#444'}} />&nbsp;{e.stars}</span>
                      <span> &nbsp; &nbsp;<ForkOutlined style={{color: '#444'}} />&nbsp;{e.forks}</span>
                    </div>
                    <div style={{ color: dotColors[idx % dotColors.length] }}>
                      <span>{e.builder}</span>
                    </div>
                    <div style={{ color: dotColors[idx % dotColors.length] }}>
                      <span>{e.rankDesc}</span>
                    </div>
                  </div>
                </a>
              )
            })
          }
        </Carousel>
      </div>
    </div>
  )
}