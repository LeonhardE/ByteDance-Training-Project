import { githubHot } from "./data/githubHot"

export default function GithubCard() {

  return (
    <div className="cardBox githubBox">
      <button>🏆 GitHub热门</button>
      {
        githubHot.map((e, idx) => {
          return (
            <div key={idx} className="github">
              <a className="infoBox" href={e.addr}>
                <div>{e.owner}</div>
                <div>{e.name}</div>
                <div>{e.desc}</div>
                <div>
                  <span>{e.lang}</span>
                  <span>🌟{e.stars}</span>
                  <span>🌙{e.forks}</span>
                </div>
                <div>
                  Built by {e.builder.map((e, idx) => <span key={idx}>{e}</span>)}
                </div>
              </a>
              <div idx={idx}>
                <span>1</span>
              </div>
              <div className="btnBox">
                <button>👈🏿</button>
                <button>👉🏿</button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}