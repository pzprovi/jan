"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3306],{3500:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var a=l(85893),r=l(11151),s=l(74866),t=l(85162);const o={title:"Import Models Manually",slug:"/guides/using-models/import-manually",description:"Guide to manually import a local model into Jan.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model","import-models-manually","local model"]},i=void 0,d={id:"guides/using-models/import-manually",title:"Import Models Manually",description:"Guide to manually import a local model into Jan.",source:"@site/docs/guides/04-using-models/02-import-manually.mdx",sourceDirName:"guides/04-using-models",slug:"/guides/using-models/import-manually",permalink:"/guides/using-models/import-manually",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/guides/04-using-models/02-import-manually.mdx",tags:[],version:"current",lastUpdatedBy:"Hieu",lastUpdatedAt:1704853237,formattedLastUpdatedAt:"Jan 10, 2024",sidebarPosition:2,frontMatter:{title:"Import Models Manually",slug:"/guides/using-models/import-manually",description:"Guide to manually import a local model into Jan.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model","import-models-manually","local model"]},sidebar:"guidesSidebar",previous:{title:"Install Models from the Hub",permalink:"/guides/using-models/install-from-hub"},next:{title:"Integrate With a Remote Server",permalink:"/guides/using-models/integrate-with-remote-server"}},c={},u=[{value:"Manually Importing a Downloaded Model (nightly versions and v0.4.4+)",id:"manually-importing-a-downloaded-model-nightly-versions-and-v044",level:2},{value:"1. Create a Model Folder",id:"1-create-a-model-folder",level:3},{value:"2. Drag &amp; Drop the Model",id:"2-drag--drop-the-model",level:4},{value:"3. Voila",id:"3-voila",level:4},{value:"Manually Importing a Downloaded Model (older versions)",id:"manually-importing-a-downloaded-model-older-versions",level:2},{value:"1. Create a Model Folder",id:"1-create-a-model-folder-1",level:3},{value:"2. Create a Model JSON",id:"2-create-a-model-json",level:3},{value:"3. Download the Model",id:"3-download-the-model",level:3},{value:"Assistance and Support",id:"assistance-and-support",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"This is currently under development."})}),"\n","\n","\n","\n",(0,a.jsxs)(n.p,{children:["In this section, we will show you how to import a GGUF model from ",(0,a.jsx)(n.a,{href:"https://huggingface.co/",children:"HuggingFace"}),", using our latest model, ",(0,a.jsx)(n.a,{href:"https://huggingface.co/janhq/trinity-v1-GGUF",children:"Trinity"}),", as an example."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"We are fast shipping a UI to make this easier, but it's a bit manual for now. Apologies."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"manually-importing-a-downloaded-model-nightly-versions-and-v044",children:"Manually Importing a Downloaded Model (nightly versions and v0.4.4+)"}),"\n",(0,a.jsx)(n.h3,{id:"1-create-a-model-folder",children:"1. Create a Model Folder"}),"\n",(0,a.jsxs)(n.p,{children:["Navigate to the ",(0,a.jsx)(n.code,{children:"~/jan/models"})," folder. You can find this folder by going to ",(0,a.jsx)(n.code,{children:"App Settings"})," > ",(0,a.jsx)(n.code,{children:"Advanced"})," > ",(0,a.jsx)(n.code,{children:"Open App Directory"}),"."]}),"\n",(0,a.jsxs)(s.Z,{groupId:"operating-systems",children:[(0,a.jsx)(t.Z,{value:"mac",label:"macOS",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"cd ~/jan/models\n"})})}),(0,a.jsx)(t.Z,{value:"win",label:"Windows",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"C:/Users/<your_user_name>/jan/models\n"})})}),(0,a.jsx)(t.Z,{value:"linux",label:"Linux",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"cd ~/jan/models\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["In the ",(0,a.jsx)(n.code,{children:"models"})," folder, create a folder with the name of the model."]}),"\n",(0,a.jsxs)(s.Z,{groupId:"operating-systems",children:[(0,a.jsx)(t.Z,{value:"mac",label:"macOS",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"mkdir trinity-v1-7b\n"})})}),(0,a.jsx)(t.Z,{value:"win",label:"Windows",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"mkdir trinity-v1-7b\n"})})}),(0,a.jsx)(t.Z,{value:"linux",label:"Linux",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"mkdir trinity-v1-7b\n"})})})]}),"\n",(0,a.jsx)(n.h4,{id:"2-drag--drop-the-model",children:"2. Drag & Drop the Model"}),"\n",(0,a.jsxs)(n.p,{children:["Drag and drop your model binary into this folder, ensuring the ",(0,a.jsx)(n.code,{children:"modelname.gguf"})," is the same name as the folder name, e.g. ",(0,a.jsx)(n.code,{children:"models/modelname"})]}),"\n",(0,a.jsx)(n.h4,{id:"3-voila",children:"3. Voila"}),"\n",(0,a.jsx)(n.p,{children:"If your model doesn't show up in the Model Selector in conversations, please restart the app."}),"\n",(0,a.jsxs)(n.p,{children:["If that doesn't work, please feel free to join our ",(0,a.jsx)(n.a,{href:"https://discord.gg/Dt7MxDyNNZ",children:"Discord community"})," for support, updates, and discussions."]}),"\n",(0,a.jsx)(n.h2,{id:"manually-importing-a-downloaded-model-older-versions",children:"Manually Importing a Downloaded Model (older versions)"}),"\n",(0,a.jsx)(n.h3,{id:"1-create-a-model-folder-1",children:"1. Create a Model Folder"}),"\n",(0,a.jsxs)(n.p,{children:["Navigate to the ",(0,a.jsx)(n.code,{children:"~/jan/models"})," folder. You can find this folder by going to ",(0,a.jsx)(n.code,{children:"App Settings"})," > ",(0,a.jsx)(n.code,{children:"Advanced"})," > ",(0,a.jsx)(n.code,{children:"Open App Directory"}),"."]}),"\n",(0,a.jsxs)(s.Z,{groupId:"operating-systems",children:[(0,a.jsx)(t.Z,{value:"mac",label:"macOS",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"cd ~/jan/models\n"})})}),(0,a.jsx)(t.Z,{value:"win",label:"Windows",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"C:/Users/<your_user_name>/jan/models\n"})})}),(0,a.jsx)(t.Z,{value:"linux",label:"Linux",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"cd ~/jan/models\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["In the ",(0,a.jsx)(n.code,{children:"models"})," folder, create a folder with the name of the model."]}),"\n",(0,a.jsxs)(s.Z,{groupId:"operating-systems",children:[(0,a.jsx)(t.Z,{value:"mac",label:"macOS",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"mkdir trinity-v1-7b\n"})})}),(0,a.jsx)(t.Z,{value:"win",label:"Windows",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"mkdir trinity-v1-7b\n"})})}),(0,a.jsx)(t.Z,{value:"linux",label:"Linux",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"mkdir trinity-v1-7b\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"2-create-a-model-json",children:"2. Create a Model JSON"}),"\n",(0,a.jsxs)(n.p,{children:["Jan follows a folder-based, ",(0,a.jsx)(n.a,{href:"/docs/engineering/models",children:"standard model template"})," called a ",(0,a.jsx)(n.code,{children:"model.json"})," to persist the model configurations on your local filesystem."]}),"\n",(0,a.jsx)(n.p,{children:"This means that you can easily reconfigure your models, export them, and share your preferences transparently."}),"\n",(0,a.jsxs)(s.Z,{groupId:"operating-systems",children:[(0,a.jsx)(t.Z,{value:"mac",label:"macOS",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"cd trinity-v1-7b\ntouch model.json\n"})})}),(0,a.jsx)(t.Z,{value:"win",label:"Windows",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"cd trinity-v1-7b\necho {} > model.json\n"})})}),(0,a.jsx)(t.Z,{value:"linux",label:"Linux",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"cd trinity-v1-7b\ntouch model.json\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Edit ",(0,a.jsx)(n.code,{children:"model.json"})," and include the following configurations:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Ensure the filename must be ",(0,a.jsx)(n.code,{children:"model.json"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Ensure the ",(0,a.jsx)(n.code,{children:"id"})," property matches the folder name you created."]}),"\n",(0,a.jsxs)(n.li,{children:["Ensure the GGUF filename should match the ",(0,a.jsx)(n.code,{children:"id"})," property exactly."]}),"\n",(0,a.jsxs)(n.li,{children:["Ensure the ",(0,a.jsx)(n.code,{children:"source_url"})," property is the direct binary download link ending in ",(0,a.jsx)(n.code,{children:".gguf"}),". In HuggingFace, you can find the direct links in the ",(0,a.jsx)(n.code,{children:"Files and versions"})," tab."]}),"\n",(0,a.jsxs)(n.li,{children:["Ensure you are using the correct ",(0,a.jsx)(n.code,{children:"prompt_template"}),". This is usually provided in the HuggingFace model's description page."]}),"\n",(0,a.jsxs)(n.li,{children:["Ensure the ",(0,a.jsx)(n.code,{children:"state"})," property is set to ",(0,a.jsx)(n.code,{children:"ready"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",metastring:'title="model.json"',children:'{\n  // highlight-start\n  "source_url": "https://huggingface.co/janhq/trinity-v1-GGUF/resolve/main/trinity-v1.Q4_K_M.gguf",\n  "id": "trinity-v1-7b",\n  // highlight-end\n  "object": "model",\n  "name": "Trinity-v1 7B Q4",\n  "version": "1.0",\n  "description": "Trinity is an experimental model merge of GreenNodeLM & LeoScorpius using the Slerp method. Recommended for daily assistance purposes.",\n  "format": "gguf",\n  "settings": {\n    "ctx_len": 4096,\n    // highlight-next-line\n    "prompt_template": "{system_message}\\n### Instruction:\\n{prompt}\\n### Response:"\n  },\n  "parameters": {\n    "max_tokens": 4096\n  },\n  "metadata": {\n    "author": "Jan",\n    "tags": ["7B", "Merged"],\n    "size": 4370000000\n  },\n  "engine": "nitro",\n  // highlight-next-line\n  "state": "ready"\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"3-download-the-model",children:"3. Download the Model"}),"\n",(0,a.jsxs)(n.p,{children:["Restart Jan and navigate to the Hub. Locate your model and click the ",(0,a.jsx)(n.code,{children:"Download"})," button to download the model binary."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"image-01",src:l(69213).Z+"",width:"3456",height:"2234"})}),"\n",(0,a.jsx)(n.p,{children:"Your model is now ready to use in Jan."}),"\n",(0,a.jsx)(n.h2,{id:"assistance-and-support",children:"Assistance and Support"}),"\n",(0,a.jsxs)(n.p,{children:["If you have questions or are looking for more preconfigured GGUF models, please feel free to join our ",(0,a.jsx)(n.a,{href:"https://discord.gg/Dt7MxDyNNZ",children:"Discord community"})," for support, updates, and discussions."]})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,n,l)=>{l.d(n,{Z:()=>t});l(67294);var a=l(36905);const r={tabItem:"tabItem_Ymn6"};var s=l(85893);function t(e){let{children:n,hidden:l,className:t}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,t),hidden:l,children:n})}},74866:(e,n,l)=>{l.d(n,{Z:()=>w});var a=l(67294),r=l(36905),s=l(12466),t=l(16550),o=l(20469),i=l(91980),d=l(67392),c=l(50012);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:l}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:l,attributes:a,default:r}}=e;return{value:n,label:l,attributes:a,default:r}}))}(l);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,l])}function m(e){let{value:n,tabValues:l}=e;return l.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:l}=e;const r=(0,t.k6)(),s=function(e){let{queryString:n=!1,groupId:l}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:n,groupId:l});return[(0,i._X)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function g(e){const{defaultValue:n,queryString:l=!1,groupId:r}=e,s=h(e),[t,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=l.find((e=>e.default))??l[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[d,u]=p({queryString:l,groupId:r}),[g,x]=function(e){let{groupId:n}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,c.Nk)(l);return[r,(0,a.useCallback)((e=>{l&&s.set(e)}),[l,s])]}({groupId:r}),j=(()=>{const e=d??g;return m({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{j&&i(j)}),[j]);return{selectedValue:t,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=l(72389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=l(85893);function v(e){let{className:n,block:l,selectedValue:a,selectValue:t,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),c=e=>{const n=e.currentTarget,l=i.indexOf(n),r=o[l].value;r!==a&&(d(n),t(r))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const l=i.indexOf(e.currentTarget)+1;n=i[l]??i[0];break}case"ArrowLeft":{const l=i.indexOf(e.currentTarget)-1;n=i[l]??i[i.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},n),children:o.map((e=>{let{value:n,label:l,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:u,onClick:c,...s,className:(0,r.Z)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":a===n}),children:l??n},n)}))})}function y(e){let{lazy:n,children:l,selectedValue:r}=e;const s=(Array.isArray(l)?l:[l]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function b(e){const n=g(e);return(0,f.jsxs)("div",{className:(0,r.Z)("tabs-container",j.tabList),children:[(0,f.jsx)(v,{...e,...n}),(0,f.jsx)(y,{...e,...n})]})}function w(e){const n=(0,x.Z)();return(0,f.jsx)(b,{...e,children:u(e.children)},String(n))}},69213:(e,n,l)=>{l.d(n,{Z:()=>a});const a=l.p+"assets/images/02-manually-import-local-model-05b03efea213c6cba1cb9e50b049b6fa.png"},11151:(e,n,l)=>{l.d(n,{Z:()=>o,a:()=>t});var a=l(67294);const r={},s=a.createContext(r);function t(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);