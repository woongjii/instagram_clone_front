import React, { useState, useEffect } from "react";
import Comment from "./Comment.js";
import './Post.css';
import heart from '../image/heart.png';
import comments from '../image/comments.png';
import share from '../image/share.png';
import save from '../image/save.png';
import options from '../image/options.png';
import HeartButton from "./HeartButton.js";

function Post(props) {


    return(
        <>
            <div className="postbackground">
            </div>
            <div className="postElement">
                <div className="postprofile"></div>
                <div className="postname">doong_yi_nuna</div>
                <div className="postpic"></div>
                <img className='options' src={options}/>
                <div className="posticon">
                    <HeartButton/>
                    <img className='comments' src={comments}/>
                    <img className='share' src={share}/>
                    <img className='save' src={save}/>
                </div>
                <div className="posttext">
                    <div className="textname">doong_yi_nuna</div>
                    <div className="text">hello my friends!</div>
                </div>
                <div className="commentcount">댓글 5개 모두 보기</div>
                <Comment />
            </div>
        </>
    );
};

export default Post;