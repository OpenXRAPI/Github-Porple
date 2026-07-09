// ==UserScript==
// @name         Github Porple
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  porple
// @author       Maxwell
// @match        https://github.com/*
// @run-at       document-start
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    'use strict';

    GM_addStyle(`
        :root {
            --bgColor-default: #100016 !important;
            --bgColor-muted: #1b0028 !important;
            --bgColor-inset: #08000c !important;

            --fgColor-default: #f4dcff !important;
            --fgColor-muted: #d7a6ff !important;
            --fgColor-accent: #ff9cff !important;

            --borderColor-default: #a855f7 !important;
            --borderColor-muted: #7e22ce !important;

            --button-default-bgColor-rest: #28003a !important;
            --button-default-fgColor-rest: #ffffff !important;
            --button-primary-bgColor-rest: #8b2cff !important;
            --button-primary-fgColor-rest: #ffffff !important;
        }

        html,
        body {
            background:
                radial-gradient(circle at top left, rgba(138, 43, 226, 0.35), transparent 35%),
                radial-gradient(circle at top right, rgba(255, 128, 255, 0.18), transparent 30%),
                linear-gradient(135deg, #08000c 0%, #160020 45%, #050008 100%) !important;
            color: #f4dcff !important;
            font-family: "Courier New", monospace !important;
        }

        * {
            border-color: #8b2cff !important;
        }

        header,
        .Header,
        .AppHeader,
        .js-header-wrapper {
            background: rgba(12, 0, 18, 0.96) !important;
            border-bottom: 2px solid #b06eff !important;
            box-shadow: 0 0 22px rgba(176, 110, 255, 0.42) !important;
            backdrop-filter: blur(12px) !important;
        }

        main,
        .application-main,
        .Layout-main,
        .repository-content,
        .feed-background,
        .dashboard,
        .color-bg-default,
        .color-bg-subtle,
        .color-bg-muted {
            background: transparent !important;
            color: #f4dcff !important;
        }

        .Box,
        .Box-row,
        .file,
        .BorderGrid-cell,
        .TimelineItem-body,
        .discussion-timeline-actions,
        .js-navigation-container,
        .feed-item-content,
        .dashboard-sidebar,
        .markdown-body,
        .blob-wrapper,
        .Layout-sidebar,
        aside {
            background: rgba(30, 0, 45, 0.72) !important;
            color: #f4dcff !important;
            border: 1px solid #a855f7 !important;
            border-radius: 14px !important;
            box-shadow:
                0 0 14px rgba(168, 85, 247, 0.38),
                inset 0 0 18px rgba(126, 34, 206, 0.20) !important;
        }

        .Box:hover,
        .file:hover,
        .feed-item-content:hover,
        .repo-list-item:hover {
            transform: translateY(-2px);
            box-shadow:
                0 0 20px rgba(255, 156, 255, 0.45),
                inset 0 0 22px rgba(176, 110, 255, 0.22) !important;
            transition: all 0.22s ease !important;
        }

        a,
        .Link,
        .Link--primary,
        .markdown-body a {
            color: #ffb3ff !important;
            text-shadow: 0 0 6px rgba(255, 128, 255, 0.45) !important;
        }

        a:hover,
        .Link:hover {
            color: #ffffff !important;
            text-shadow: 0 0 10px #ff80ff !important;
        }

        .btn,
        button,
        .Button,
        .btn-sm,
        .btn-primary,
        [type="button"],
        [type="submit"] {
            background: linear-gradient(135deg, #35004d, #8b2cff) !important;
            color: #ffffff !important;
            border: 1px solid #ff9cff !important;
            border-radius: 10px !important;
            box-shadow: 0 0 10px rgba(176, 110, 255, 0.55) !important;
            transition: transform 0.18s ease, filter 0.18s ease !important;
        }

        .btn:hover,
        button:hover,
        .Button:hover {
            transform: scale(1.035);
            filter: brightness(1.2);
        }

        input,
        textarea,
        select,
        .form-control,
        .FormControl-input,
        .CodeMirror,
        .cm-editor {
            background: #12001b !important;
            color: #f8dfff !important;
            border: 1px solid #b06eff !important;
            border-radius: 10px !important;
            box-shadow: inset 0 0 8px rgba(176, 110, 255, 0.28) !important;
        }

        input::placeholder,
        textarea::placeholder {
            color: #c58cff !important;
        }

        pre,
        code,
        .blob-code,
        .blob-code-inner,
        .highlight {
            background: #0d0014 !important;
            color: #ffddff !important;
            font-family: "Courier New", monospace !important;
        }

        .blob-num {
            background: #170022 !important;
            color: #c084fc !important;
        }

        .Label,
        .IssueLabel,
        .State,
        .Counter {
            background: #3b0058 !important;
            color: #ffffff !important;
            border: 1px solid #ff80ff !important;
            box-shadow: 0 0 8px rgba(255, 128, 255, 0.35) !important;
        }

        .avatar {
            border: 2px solid #ff80ff !important;
            box-shadow: 0 0 12px rgba(255, 128, 255, 0.65) !important;
        }

        svg.octicon {
            color: #ffb3ff !important;
            filter: drop-shadow(0 0 4px rgba(255, 128, 255, 0.55)) !important;
        }

        .UnderlineNav {
            background: rgba(18, 0, 27, 0.78) !important;
            border-bottom: 1px solid #9d4edd !important;
            border-radius: 0 0 12px 12px !important;
        }

        .UnderlineNav-item {
            color: #e9c6ff !important;
            border-radius: 10px 10px 0 0 !important;
        }

        .UnderlineNav-item.selected,
        .UnderlineNav-item[aria-current="page"] {
            color: #ffffff !important;
            border-bottom-color: #ff80ff !important;
            background: rgba(176, 110, 255, 0.25) !important;
            box-shadow: 0 0 12px rgba(255, 128, 255, 0.35) !important;
        }

        table,
        .TableObject,
        .react-directory-row {
            background: rgba(20, 0, 32, 0.55) !important;
            color: #f4dcff !important;
        }

        tr,
        td,
        th {
            border-color: #7e22ce !important;
        }

        ::selection {
            background: #ff80ff !important;
            color: #120018 !important;
        }

        ::-webkit-scrollbar {
            width: 12px;
            height: 12px;
        }

        ::-webkit-scrollbar-track {
            background: #0b0010;
        }

        ::-webkit-scrollbar-thumb {
            background: linear-gradient(#b06eff, #6d00a8);
            border-radius: 999px;
            border: 2px solid #0b0010;
        }
    `);
})();
