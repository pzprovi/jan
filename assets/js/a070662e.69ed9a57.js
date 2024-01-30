"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8719],{52113:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var r=s(85893),i=s(11151);const t={title:"Installation and Prerequisites",slug:"/developer/prereq",description:"Guide to install and setup Jan for development.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model","installation","prerequisites","developer setup"]},l=void 0,o={id:"developer/overview/install-and-prerequisites",title:"Installation and Prerequisites",description:"Guide to install and setup Jan for development.",source:"@site/docs/developer/01-overview/04-install-and-prerequisites.md",sourceDirName:"developer/01-overview",slug:"/developer/prereq",permalink:"/developer/prereq",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/developer/01-overview/04-install-and-prerequisites.md",tags:[],version:"current",lastUpdatedBy:"Hieu",lastUpdatedAt:1706582348,formattedLastUpdatedAt:"Jan 30, 2024",sidebarPosition:4,frontMatter:{title:"Installation and Prerequisites",slug:"/developer/prereq",description:"Guide to install and setup Jan for development.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model","installation","prerequisites","developer setup"]},sidebar:"developerSidebar",previous:{title:"User Interface",permalink:"/developer/ui"},next:{title:"Build an Assistant",permalink:"/developer/build-assistant"}},a={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Hardware Requirements",id:"hardware-requirements",level:3},{value:"System Requirements",id:"system-requirements",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Instructions",id:"instructions",level:2},{value:"For Production Build",id:"for-production-build",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsx)(n.h3,{id:"hardware-requirements",children:"Hardware Requirements"}),"\n",(0,r.jsx)(n.p,{children:"Ensure your system meets the following specifications to guarantee a smooth development experience:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/guides/install/hardware",children:"Hardware Requirements"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"system-requirements",children:"System Requirements"}),"\n",(0,r.jsx)(n.p,{children:"Make sure your operating system meets the specific requirements for Jan development:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../../install/windows/#system-requirements",children:"Windows"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../../install/mac/#system-requirements",children:"MacOS"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../../install/linux/#system-requirements",children:"Linux"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://nodejs.org/en/",children:"Node.js"})," (version 20.0.0 or higher)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://yarnpkg.com/",children:"yarn"})," (version 1.22.0 or higher)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://www.gnu.org/software/make/",children:"make"})," (version 3.81 or higher)"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"instructions",children:"Instructions"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Clone the Repository:"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/janhq/jan\ncd jan\ngit checkout -b DESIRED_BRANCH\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Install Dependencies"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn install\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Run Development and Use Jan Desktop"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"make dev\n"})}),"\n",(0,r.jsx)(n.p,{children:"This command starts the development server and opens the Jan Desktop app."}),"\n",(0,r.jsx)(n.h2,{id:"for-production-build",children:"For Production Build"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Do steps 1 and 2 in the previous section\n# Build the app\nmake build\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This will build the app MacOS (M1/M2/M3) for production (with code signing already done) and place the result in ",(0,r.jsx)(n.code,{children:"/electron/dist"})," folder."]}),"\n",(0,r.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsxs)(n.p,{children:["If you run into any issues due to a broken build, please check the ",(0,r.jsx)(n.a,{href:"../../troubleshooting/stuck-on-broken-build",children:"Stuck on a Broken Build"})," guide."]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>l});var r=s(67294);const i={},t=r.createContext(i);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);