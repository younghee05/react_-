/** @jsxImportSource @emotion/react */
import { useRecoilState } from 'recoil';
import MainSiderbarBody from './MainSidebarBody/MainSiderbarBody';
import MainSidebarHeader from './MainSidebarHeader/MainSidebarHeader';
import * as s from './style';
import { mainSidebarShowAtom } from '../../atoms/mainSidebarShowAtom';

function MainSidebar() {
    const [ mainSidebarShow ] = useRecoilState(mainSidebarShowAtom);

    return (
        <div css={s.layout(mainSidebarShow)}>
            <MainSidebarHeader />
            <MainSiderbarBody />

        </div>
    );
}

export default MainSidebar;