import React from "react";
import './Post.css';

function Post() {
    return(
        <>
            <div className="postbackground">
            </div>
            <div className="postElement">
                <div className="postprofile"></div>
                <div className="postname"></div>
                <div className="postpic"></div>
                <div className="posticon">
                    <div className="postlike"></div>
                    <div className="postcomm"></div>
                    <div className="postshare"></div>
                    <div className="postsave"></div>
                </div>
            </div>
        </>
    );
};

export default Post;