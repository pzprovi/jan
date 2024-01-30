"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7566],{82857:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(85893),s=n(11151),i=n(52991);const a={title:"Using the Local Server",slug:"/guides/using-server/",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model","using-server"]},o=void 0,c={id:"guides/using-server/README",title:"Using the Local Server",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",source:"@site/docs/guides/05-using-server/README.mdx",sourceDirName:"guides/05-using-server",slug:"/guides/using-server/",permalink:"/guides/using-server/",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/guides/05-using-server/README.mdx",tags:[],version:"current",lastUpdatedBy:"Hieu",lastUpdatedAt:1706582348,formattedLastUpdatedAt:"Jan 30, 2024",frontMatter:{title:"Using the Local Server",slug:"/guides/using-server/",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model","using-server"]},sidebar:"guidesSidebar",previous:{title:"Customize Engine Settings",permalink:"/guides/using-models/customize-engine-settings"},next:{title:"Connect to Server",permalink:"/guides/using-server/server"}},l={},u=[];function d(e){return(0,r.jsx)(i.Z,{})}function g(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d()}},52991:(e,t,n)=>{n.d(t,{Z:()=>v});n(67294);var r=n(36905),s=n(53438),i=n(33692),a=n(13919),o=n(95999),c=n(92503);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(85893);function d(e){let{href:t,children:n}=e;return(0,u.jsx)(i.Z,{href:t,className:(0,r.Z)("card padding--lg",l.cardContainer),children:n})}function g(e){let{href:t,icon:n,title:s,description:i}=e;return(0,u.jsxs)(d,{href:t,children:[(0,u.jsxs)(c.Z,{as:"h2",className:(0,r.Z)("text--truncate",l.cardTitle),title:s,children:[n," ",s]}),i&&(0,u.jsx)("p",{className:(0,r.Z)("text--truncate",l.cardDescription),title:i,children:i})]})}function m(e){let{item:t}=e;const n=(0,s.LM)(t);return n?(0,u.jsx)(g,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const n=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.xz)(t.docId??void 0);return(0,u.jsx)(g,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(p,{item:t});case"category":return(0,u.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const n=(0,s.jA)();return(0,u.jsx)(v,{items:n.items,className:t})}function v(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(f,{...e});const i=(0,s.MN)(t);return(0,u.jsx)("section",{className:(0,r.Z)("row",n),children:i.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(h,{item:e})},t)))})}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var r=n(67294);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);