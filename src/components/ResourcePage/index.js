import './index.css';
import GithubCard from './GithubCard';
import Card from './Card.js';
import { bookmarks } from "./data/bookmarks";
import { documents } from "./data/documents";

export default function ResourcePage() {
  return (
    <div id="left">
      <div className="colBox">
        <GithubCard />
        <Card cardTitle="👑 官方文档库" list={documents} />
      </div>
      <div className="colBox">
        <Card cardTitle="📚 知识库" list={bookmarks} />
        <Card cardTitle="🏳️‍🌈 好用的网站" list={bookmarks} />
      </div>
      <div className="colBox">
        <Card cardTitle="🔖 个人书签栏" list={bookmarks} />
      </div>
    </div>
  )
}