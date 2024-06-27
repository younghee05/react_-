import React, { useState } from 'react';
import { useInput } from '../../hooks/useInput';

function CustomHookPage(props) {
    const usernameInput = useInput("test", 20); // username은 기본으로 test가 들어가게 해놓고 20자까지만 들어오게 함 
    const passwordInput = useInput("", 10); // password를 10자까지만 들어오게 함

    return (
        <div>
            <input type="text" onChange={usernameInput.onChange} value={usernameInput.value} />
            <input type="password" onChange={passwordInput.onChange} value={passwordInput.value} />
        </div>
    );
}

export default CustomHookPage;