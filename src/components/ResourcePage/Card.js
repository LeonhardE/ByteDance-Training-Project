import { dotColors } from "./data/dotColors";

export default function Bookmarks({ cardTitle, list }) {

  const renderList = (list) => {
    return list.map((item, idx) => {
      return (
        <li key={idx} style={{ color: dotColors[idx % dotColors.length] }}>
          <a href={item.addr}>{item.title}</a>
        </li>
      )
    })
  }

  return (
    <div className={cardTitle === "🔖 个人书签栏" ? "cardBox bookmarkBox" : "cardBox"}>
      <button>{cardTitle}</button>
      <ul>
        {renderList(list)}
      </ul>
    </div>
  )
}