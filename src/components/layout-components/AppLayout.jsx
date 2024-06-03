import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
    const [openMenu, setOpenMenu] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);

    const OpenMenu = () => {
        setOpenMenu(!openMenu);
    }

    const OpenProfile = () => {
        setOpenProfile(!openProfile);
    }

    return (
        <>
            <div className="bg-[#f6f8fd]">
                <div className="flex h-screen overflow-hidden">
                    <Sidebar setmenu={OpenMenu} menu={openMenu} />

                    <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
                        <Topbar setmenu={OpenMenu} setprofile={OpenProfile} profile={openProfile} />
                        <main>
                            <div className="flex flex-col p-4 mx-auto max-w-screen-2xl md:p-6 2xl:p-10 gap-y-8 md:gap-y-16">
                                <Content />
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}

function Content() {
    return (
        <Outlet />
    )
}
