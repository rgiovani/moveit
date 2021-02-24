import { BsShiftFill } from "react-icons/bs";

export function UserInfo() {
    return (

        <div style={{ justifyContent: "flex-start", display: "flex" }}>
            <img
                src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
                alt="user"
                className="avatar"
            />
            <div style={{ flexDirection: 'column', marginLeft: 22 }}>
                <h2 style={{ color: '#2E384D' }}>Ronaldo Giovani</h2>
                <div style={{ flexDirection: 'row', marginTop: 6 }}>
                    <BsShiftFill style={{ color: '#4CD62B', marginRight: 8 }} />
                    <span>Level 1</span>
                </div>
            </div>
        </div>



    )
}