// ==UserScript==
// @name         YouTube 剧院模式清爽界面
// @name:en      YouTube Theater Clean
// @namespace    https://violentmonkey.github.io/
// @version      0.1
// @description  在 YouTube 剧院模式下隐藏除聊天室外的其他界面元素
// @description:en  Hide all UI elements except chat in YouTube theater mode
// @author       zeer
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// @license      MIT
// @compatible   chrome
// @compatible   firefox
// @compatible   edge
// @run-at       document-end
// @connect      youtube.com
// @connect      googleapis.com
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @encoding     utf-8
// @noframes     
// @downloadURL  https://github.com/ZEERDEER/youtube-theather-clean/raw/main/youtube-theather-clean.js
// @updateURL    https://github.com/ZEERDEER/youtube-theather-clean/raw/main/youtube-theather-clean.js
// ==/UserScript==

(function() {
    'use strict';

    const style = document.createElement('style');
    style.textContent = `
        ytd-watch-flexy[theater] {
            margin-top: 62px !important;
        }

        ytd-watch-flexy[theater] #below {
            display: none !important;
        }

        ytd-watch-flexy[theater] #player-container-outer {
            margin-top: 0 !important;
        }

        ytd-watch-flexy[theater] #secondary {
            display: flex !important;
            width: 400px !important;
        }

        ytd-watch-flexy[theater] #columns {
            display: flex !important;
            max-width: none !important;
        }

        ytd-watch-flexy[theater] #meta,
        ytd-watch-flexy[theater] #info-contents,
        ytd-watch-flexy[theater] #related,
        ytd-watch-flexy[theater] ytd-merch-shelf-renderer,
        ytd-watch-flexy[theater] ytd-video-secondary-info-renderer {
            display: none !important;
        }
    `;

    document.head.appendChild(style);
})();
