import Head from 'next/head'
import { ExperienceBar } from "../components/ExperienceBar";
import { UserInfo } from "../components/UserInfo";


export default function Home() {
  return (
    <div className="container">


      <ExperienceBar />
      <div style={{ marginTop: '8rem' }}>
        <UserInfo />
      </div>
    </div>
  )
}
