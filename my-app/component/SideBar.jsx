import React from 'react'
import { VscTwitter } from 'react-icons/vsc'
import { FiBell, FiMoreHorizontal } from 'react-icons/fi'

const SideBar = () => {
  return (
    <div className={""}>
        <div className={``}>
            <VscTwitter />
        </div>
        <div >
            <div >Home</div>
            <div>Profile</div>
            <div>Notifications</div>
            <div>Message</div>
            <div >Bookmarks</div>
            <div>More</div>
            <div className={style.tweetButton}>Mint</div>
            
            <div className={style.profileButton}>
            <div className={style.profileLeft}></div>
              <div className={style.profileRight}>
                <div className={style.details}>
                  <div className={style.name}>Lavesh Saluja</div>
                  <div className={style.handle}>@0x22dF...5xf2df</div>
                  <div className={style.moreContainer}>
                    <FiMoreHorizontal />
                  </div>
                </div>

              </div>
            </div>
        </div>
    </div>
  )
}

export default SideBar
const style = {
     wrapper: `flex-[0.7] px-8 flex flex-col`,
     twitterIconContainer: `text-3xl m-4`,
    tweetButton: ` bg-blue-500 hover:bg-[#1b8cd8] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer`,
    navContainer: `flex-1`,
    profileButton: `flex items-center mb-6 cursor-pointer hover:bg-[#333c45] rounded-[100px] p-2`,
    profileLeft: `flex item-center justify-center mr-4`,
    profileImage: `height-12 w-12 rounded-full`,
    profileRight: `flex-1 flex`,
    details: `flex-1`,
    name: `text-lg`,
    handle: `text-[#8899a6]`,
    moreContainer: `flex items-center mr-2`,
  }