import React, { useState } from 'react';
import heart_col from '../image/heart_col.png';
import heart from '../image/heart.png';
import './Post.css'

function HeartButton() {
    // 아이콘 상태를 관리하기 위한 useState 훅
    const [isClicked, setIsClicked] = useState(false);

    // 버튼 클릭 핸들러 함수
    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <div>
            <img className="heartIcon" src={isClicked ? heart_col : heart} alt="heart" onClick={handleClick} style={{cursor: 'pointer'}} />
        </div>
    );
}

export default HeartButton;