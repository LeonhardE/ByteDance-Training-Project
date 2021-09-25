import './index.css';
import GithubCard from './GithubCard';
import Card from './Card.js';
import { bookmarks } from "./data/bookmarks";
import { documents } from "./data/documents";
import { knowledge } from './data/knowledge';
import { websites } from './data/websites';

export default function ResourcePage() {
  return (
    <div id="left">
      <div className="colBox">
        <GithubCard />
        <Card cardTitle="👑 官方文档库" list={documents} />
      </div>
      <div className="colBox">
        <Card cardTitle="📚 知识库" list={knowledge} />
        <Card cardTitle="🏳️‍🌈 好用的网站" list={websites} />
      </div>
      <div className="colBox">
        <Card cardTitle="🔖 个人书签栏" list={bookmarks} />
      </div>
    </div>
  )
}