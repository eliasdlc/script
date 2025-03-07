import HomeIcon from "../assets/icons/home-icon.tsx";
import Page from "./Page.tsx";
import Tab from "./Tab.tsx";
import FolderIcon from "../assets/icons/folder-icon.tsx";
import PageIcon from "../assets/icons/page-icon.tsx";
import {useState} from "react";


export default function MainStage(){

    const [selectedTab, setSelectedTab] = useState<number>(0);

    const pageData = [
        {id: 0, title: "The Jovian Fighter", subtitle: "A story about a fighter in the Jovian system", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget metus mollis, varius turpis quis, lobortis enim. Quisque mollis libero ac porttitor lobortis. Nulla facilisi. Nunc maximus cursus pharetra. Mauris egestas eu orci sed porttitor. Aliquam et mollis urna. Ut sed malesuada quam.\n" +
                "\n" +
                "Fusce sodales magna vitae venenatis efficitur. Fusce porta sem nec iaculis cursus. Aliquam sit amet finibus neque. Fusce sed efficitur nisi. Curabitur sed sapien non nulla placerat rhoncus et ut est. Phasellus rutrum felis id magna rhoncus, sit amet eleifend ante congue. Aliquam erat volutpat. Cras quis fringilla enim. Maecenas mi nunc, interdum eget vestibulum sit amet, dapibus sed mi. Vestibulum lorem lorem, tempor a est ut, sollicitudin tempor ex. Donec pretium turpis iaculis, porttitor mi at, pharetra ante. Maecenas vestibulum mollis dignissim. Aenean quis nisl ultricies, ultricies ante quis, bibendum turpis. Nulla lacinia sem id faucibus posuere. Quisque cursus lobortis nisl non dapibus. Pellentesque sit amet purus a tortor bibendum venenatis ac nec ipsum.\n" +
                "\n" +
                "Mauris eu suscipit quam, eget varius felis. Quisque turpis est, porta in nibh non, posuere varius ligula. Proin eget tortor ut sapien aliquet blandit. Donec a egestas ligula. Aliquam aliquam, tortor sed feugiat rutrum, neque dui iaculis libero, in pulvinar dolor purus vitae lorem. Nam nec nunc sed nulla dignissim volutpat. Quisque eget aliquet tellus. Sed ullamcorper sem neque, nec laoreet dolor semper et. Phasellus sed orci fringilla, elementum elit sit amet, tincidunt lacus. Pellentesque eu mauris molestie, volutpat arcu non, cursus est. Donec id lectus erat. Integer dictum dui blandit magna ultrices, dignissim placerat lectus tincidunt. Nunc pellentesque eros turpis, eu hendrerit lacus ultrices ac.\n" +
                "\n" +
                "Suspendisse congue posuere justo, et lobortis lorem dictum auctor. Proin ac ornare turpis. Proin ultricies lacinia risus, in vehicula dui facilisis vel. Ut pulvinar turpis sed lectus posuere sagittis. Duis consequat odio et mi mollis, nec semper lacus commodo. Vestibulum aliquet mauris ut purus vestibulum pretium. In hac habitasse platea dictumst. Morbi et porttitor augue, pharetra ultrices ligula. Quisque vel sagittis arcu. Donec volutpat bibendum quam, scelerisque cursus elit porttitor quis. Suspendisse pretium augue dictum odio viverra, euismod molestie lorem dapibus. Aliquam maximus libero sit amet nisl varius, ac aliquam lorem sagittis. Maecenas ac nunc mi. Sed quis vehicula nisl, eget pharetra ligula. Morbi pulvinar et lacus id iaculis. Nam at eros nec neque sodales posuere.\n" +
                "\n" +
                "Suspendisse imperdiet vehicula pellentesque. Integer ultrices augue augue, id condimentum nulla iaculis ut. Integer pretium ante imperdiet sodales dignissim. Sed sit amet dapibus mi. Nunc commodo lorem quis lectus molestie porta. Suspendisse potenti. Mauris eu risus quis sapien molestie laoreet sed auctor lectus. Nunc pulvinar maximus lacinia. Proin sed auctor diam. Donec ut placerat ipsum. Ut id ultricies risus. Morbi vestibulum sapien quis pulvinar hendrerit. Morbi a eleifend tortor. Nam tristique purus at pellentesque porta.", maxLength: 100_000, showCounter: true, Icon: FolderIcon},
        {id: 1, title: "Character Idea", subtitle: "A superman-like character", text: "Un super heroe que vuela", maxLength: 100_000, showCounter: true, Icon: PageIcon},
        {id: 2, title: "Calculus", subtitle: "A math class.", text: "Me gusta...", maxLength: 100_000, showCounter: true, Icon: FolderIcon},
        {id: 3, title: "Homework #1", subtitle: "Math assignment", text: "Me gusta...", maxLength: 100_000, showCounter: true, Icon: PageIcon},
        {id: 4, title: "The Jovian Fighter", subtitle: "A story about a fighter in the Jovian system", text: "Me gusta el cheesecake.", maxLength: 100_000, showCounter: true, Icon: FolderIcon},
        {id: 5, title: "Character Idea", subtitle: "A superman-like character", text: "Un super heroe que vuela", maxLength: 100_000, showCounter: true, Icon: PageIcon},
        {id: 6, title: "Homework #2", subtitle: "Math assignment", text: "Me gusta...", maxLength: 100_000, showCounter: true, Icon: PageIcon},
    ];

    const currentPageData = pageData.find(p => p.id === pageData[selectedTab].id);

    return (
        <div className={"flex flex-col flex-start self-stretch rounded-2xl overflow-hidden w-full h-full"}>
            <div className={"flex flex-row w-full h-[3.125rem] rounded-2xl gap-1 pl-3 pr-3"}>
                <button
                    className={"min-w-[55px]  h-[50px] rounded-t-2xl border-l-2 border-r-2 border-t-2 border-accent bg-tab-active flex p-2 justify-center items-center"}>
                    <HomeIcon color={"var(--special-accent)"}></HomeIcon>
                </button>

                <div className={"flex flex-start rounded-t-2xl w-full h-[3.125rem] pl-3 pr-3 gap-2.5 overflow-auto example ease-in-out duration-100"}>
                    {pageData.map((page) => (
                        <Tab
                            key={page.id}
                            name={page.title}
                            Icon={page.Icon}
                            isSelected={selectedTab === page.id}
                            onClick={() => setSelectedTab(page.id)}
                        />
                    ))}
                </div>
            </div>

            {currentPageData && (
                <Page
                    key={selectedTab}
                    {...currentPageData}
                />
            )}
        </div>
    )
}