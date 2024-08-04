(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const n="/svg/photoshop.svg",c="/svg/figma.svg",o="/svg/javascript.svg",r="/svg/ts.svg",d="/svg/nodejs.svg";document.querySelector("#app").innerHTML=`  
  <div class="resume">

    <div class="wrapper">

      <img src="/avatar.jpg" class="avatar small-block" alt="avatar" />

      <div class="greeting block small-block bg-grey">
        <div class="greeting-text">Hello, 👋🏻 I'm</div>
        <h1 class="greeting-name" contenteditable="true">Kseniia Liubasova</h1>
        <div class="greeting-profession" contenteditable="true">Front-End Developer</div>
      </div>

      <div class="languages block middle-block bg-grey">
        <h2>Languages</h2>
        <ul>
          <li class="languages-item">
            <div class="languages-title">English</div>
            <div class="languages-level">
              <div class="languages-level-bar en"></div>
            </div>
          </li>
          <li class="languages-item">
            <div class="languages-title">Russian</div>
            <div class="languages-level">
              <div class="languages-level-bar ru"></div>
            </div>
          </li>
        </ul>
      </div>

    </div>

    <div class="wrapper">

      <div class="experience block big-block bg-grey">
        <h2>Experience</h2>

        <ul class="experience-list">

          <li class="experience-item inner-block last-time">
            <div class="experience-title-wrapper">
              <div class="experience-date" contenteditable="true">Jun. 2023 - Present</div>
              <span class="experience-description">most recent</span>
            </div>
            <div class="experience-item-wrapper">
              <div class="left-block">
                <h3 contenteditable="true">Marketing Manager</h3>
                <div contenteditable="true">Pankayam</div>
              </div>
              <div class="right-block">
                <ul class="experience-duties">
                  <li contenteditable="true">Strategy development and planning of campaigns that promote
                    the business and generate genuine traffic
                  </li>
                  <li contenteditable="true">SEO Content Creation for Blogs, Website, Social media</li>
                </ul>
              </div>
            </div>
          </li>

          <li class="experience-item  inner-block">
            <div class="experience-date" contenteditable="true">Jun. 2023 - Present</div>
            <div class="experience-item-wrapper">
              <div class="left-block">
                <h3 contenteditable="true">Marketing Manager</h3>
                <div contenteditable="true">Pankayam</div>
              </div>
              <div class="right-block">
                <ul class="experience-duties">
                  <li contenteditable="true">Strategy development and planning of campaigns that promote
                    the business and generate genuine traffic
                  </li>
                  <li contenteditable="true">SEO Content Creation for Blogs, Website, Social media</li>
                </ul>
              </div>
            </div>
          </li>

        </ul>

      </div>

      <div class="tool block small-block bg-grey">
        <h2>Tools</h2>
        <div class="tool-list-wrapper">
          <div class="tool-list-title">design</div>
          <ul class="tool-list">
            <li class="tool-item"><img class="tool-item-img" src=${n} alt="photoshop" /></li>
            <li class="tool-item"><img class="tool-item-img" src=${c} alt="figma" /></li>
          </ul>
        </div>
        <div class="tool-list-wrapper">
          <div class="tool-list-title">framework & libs</div>
          <ul class="tool-list">
            <li class="tool-item"><img class="tool-item-img" src=${o} alt="javascript" /></li>
            <li class="tool-item"><img class="tool-item-img" src=${r} alt="typescript" /></li>
            <li class="tool-item"><img class="tool-item-img" src=${d} alt="nodejs" /></li>
          </ul>
        </div>
      </div>

    </div>

    <div class="wrapper">

      <div class="education block middle-block bg-grey">
        <h2>Education</h2>
        <ul class="education-list">
          <li class="education-item inner-block last-time">
            <div class="education-date-wrapper">
              <div class="education-date" contenteditable="true">2022 - 2023</div>
              <img src="/icon/icon-like.png" alt="like" class="education-last-time">
            </div>
            <h3 contenteditable="true">Front-End Developer</h3>
            <div class="education-tags" contenteditable="true">#frontend #webdev #html #css #js #react</div>
          </li>
          <li class="education-item  inner-block">
            <div class="education-date" contenteditable="true">2022 - 2023</div>
            <h3 contenteditable="true">Front-End Developer</h3>
            <div class="education-tags" contenteditable="true">#frontend #webdev #html #css #js #react</div>
          </li>
          <li class="education-item  inner-block">
            <div class="education-date" contenteditable="true">2022 - 2023</div>
            <h3 contenteditable="true">Front-End Developer</h3>
            <div class="education-tags" contenteditable="true">#frontend #webdev #html #css #js #react</div>
          </li>
        </ul>
      </div>

      <div class="middle-block " style="padding: 0 20px; margin-left: -20px; margin-right: -20px;">

        <div class="interests block bg-grey">
          <h2>Interests</h2>
          <ul class="interests-list">
            <li class="interests-item" contenteditable="true">Music</li>
            <li class="interests-item" contenteditable="true">Cooking</li>
            <li class="interests-item" contenteditable="true">Travel</li>
          </ul>
        </div>

        <div class="action block middle-block">
          <div class="action-title" contenteditable="true">Let´s chat! I´m ready to work on excinting projects</div>
          <a href="mailto:evakerrigan@gmail.com" contenteditable="true">evakerrigan@gmail.com</a>
        </div>

      </div>

    </div>

  </div>

  <a class="export-button" href="/KseniiaLiubasova.pdf" target="_blank"><em>Export to PDF</em></a>
`;setupCounter(document.querySelector("#counter"));
