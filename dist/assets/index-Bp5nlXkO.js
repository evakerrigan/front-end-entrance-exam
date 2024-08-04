(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(e){if(e.ep)return;e.ep=!0;const i=a(e);fetch(e.href,i)}})();document.querySelector("#app").innerHTML=`  
  <div class="resume">

    <div class="wrapper">

      <img src="/avatar.jpg" class="avatar small-block" alt="avatar" />

      <div class="greeting block small-block bg-grey">
        <div class="greeting-text">Hello, 👋🏻 I'm</div>
        <h1 class="greeting-name">Kseniia Liubasova</h1>
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
              <div class="experience-date">Jun. 2023 - Present</div>
              <span class="experience-description">most recent</span>
            </div>
            <div class="experience-item-wrapper">
              <div class="left-block">
                <h3>Marketing Manager</h3>
                <div>Pankayam</div>
              </div>
              <div class="right-block">
                <ul class="experience-duties">
                  <li>Strategy development and planning of campaigns that promote
                    the business and generate genuine traffic
                  </li>
                  <li>SEO Content Creation for Blogs, Website, Social media</li>
                </ul>
              </div>
            </div>
          </li>

          <li class="experience-item  inner-block">
            <div class="experience-date">Jun. 2023 - Present</div>
            <div class="experience-item-wrapper">
              <div class="left-block">
                <h3>Marketing Manager</h3>
                <div>Pankayam</div>
              </div>
              <div class="right-block">
                <ul class="experience-duties">
                  <li>Strategy development and planning of campaigns that promote
                    the business and generate genuine traffic
                  </li>
                  <li>SEO Content Creation for Blogs, Website, Social media</li>
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
            <li class="tool-item"><img class="tool-item-img" src="/icon/icon-photoshop.png" alt="photoshop" /></li>
            <li class="tool-item"><img class="tool-item-img" src="/icon/logo-figma.png" alt="figma" /></li>
          </ul>
        </div>
        <div class="tool-list-wrapper">
          <div class="tool-list-title">framework & libs</div>
          <ul>
            <li class="tool-item"><img class="tool-item-img" src="/photoshop.png" alt="photoshop" /></li>
            <li class="tool-item"><img class="tool-item-img" src="/figma.png" alt="figma" /></li>
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
              <div class="education-date">2022 - 2023</div>
              <img src="/icon/icon-like.png" alt="like" class="education-last-time">
            </div>
            <h3>Front-End Developer</h3>
            <div class="education-tags">#frontend #webdev #html #css #js #react</div>
          </li>
          <li class="education-item  inner-block">
            <div class="education-date">2022 - 2023</div>
            <h3>Front-End Developer</h3>
            <div class="education-tags">#frontend #webdev #html #css #js #react</div>
          </li>
          <li class="education-item  inner-block">
            <div class="education-date">2022 - 2023</div>
            <h3>Front-End Developer</h3>
            <div class="education-tags">#frontend #webdev #html #css #js #react</div>
          </li>
        </ul>
      </div>

      <div class="middle-block " style="padding: 0 20px; margin-left: -20px; margin-right: -20px;">

        <div class="interests block bg-grey">
          <h2>Interests</h2>
          <ul class="interests-list">
            <li class="interests-item">Music</li>
            <li class="interests-item">Cooking</li>
            <li class="interests-item">Travel</li>
          </ul>
        </div>

        <div class="action block middle-block">
          <div class="action-title">Let´s chat! I´m ready to work on excinting projects</div>
          <a href="mailto:evakerrigan@gmail.com">evakerrigan@gmail.com</a>
        </div>

      </div>

    </div>

  </div>

  <a class="export-button" href="/KseniiaLiubasova.pdf" target="_blank"><em>Export to PDF</em></a>
`;setupCounter(document.querySelector("#counter"));