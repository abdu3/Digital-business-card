import React from "react";

function MainContent(){
    return (
        // <div >
        //       <h1>Reasons I'm excited to learn React</h1>
        //       <ol>
        //           <li>It's a popular library, so I'll be 
        //           able to fit in with the cool kids!</li>
        //           <li>I'm more likely to get a job as a developer
        //           if I know React</li>
        //       </ol>
        //   </div>
        <main>
        <h1 className="main--title">Fun facts about React</h1>
        <ul className="main--facts">
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </main>
    )
  }

  export default MainContent;