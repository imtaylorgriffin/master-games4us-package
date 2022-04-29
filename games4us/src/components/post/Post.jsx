import "./post.css"
import { Link } from "react-router-dom"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" 
        src="https://dkofva0t6jnyn.cloudfront.net/sites/default/files/styles/amp_blog_image_large/public/consumer/blog/parentsultimateguide-minecraft-blog.jpeg" alt="" />
        <div className="postInfo">
            <div className="postCats">
            
            <a href="/minecraft">
            <span className="postTitle">
               MINECRAFT
            </span> 
            </a>
                           
            </div>
            <span className="postCat">
                    SANDBOX
                </span>
            <hr/>

        </div>
        <p className="postDesc">
        Minecraft is a sandbox video game developed by Mojang Studios. The game was created by Markus "Notch" Persson in the Java programming language. 
        Following several early private testing versions, it was first made public in May 2009 before fully releasing in November 2011, with Notch stepping 
        down and Jens "Jeb" Bergensten taking over development.
        </p>
    
    </div>
  )
}
