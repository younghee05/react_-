/** @jsxImportSource @emotion/react */
import MainSiderbarBody from './MainSidebarBody/MainSiderbarBody';
import MainSidebarHeader from './MainSidebarHeader/MainSidebarHeader';
import * as s from './style';

function MainSidebar({isMainSidebarShow, setMainSidebarShow}) {
    return (
        <div css={s.layout(isMainSidebarShow)}>
            <MainSidebarHeader setMainSidebarShow={setMainSidebarShow}/>

            <MainSiderbarBody />

        </div>
    );
}

export default MainSidebar;