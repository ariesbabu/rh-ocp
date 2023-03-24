"use strict";(self.webpackChunkrh_ocp=self.webpackChunkrh_ocp||[]).push([[7339],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(7294),n=r(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>d});var a=r(7462),n=r(7294),o=r(6010),l=r(2389),i=r(7392),s=r(7094),u=r(2466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){const{lazy:t,block:r,defaultValue:l,values:m,groupId:d,className:f}=e,b=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??b.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),h=(0,i.l)(y,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===l?l:l??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:k}=(0,s.U)(),[N,w]=(0,n.useState)(v),O=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=d){const e=g[d];null!=e&&e!==N&&y.some((t=>t.value===e))&&w(e)}const E=e=>{const t=e.currentTarget,r=O.indexOf(t),a=y[r].value;a!==N&&(T(t),w(a),null!=d&&k(d,String(a)))},P=e=>{let t=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const r=O.indexOf(e.currentTarget)+1;t=O[r]??O[0];break}case"ArrowLeft":{const r=O.indexOf(e.currentTarget)-1;t=O[r]??O[O.length-1];break}}t?.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},f)},y.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>O.push(e),onKeyDown:P,onClick:E},l,{className:(0,o.Z)("tabs__item",p,l?.className,{"tabs__item--active":N===t})}),r??t)}))),t?(0,n.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,l.Z)();return n.createElement(m,(0,a.Z)({key:String(t)},e))}},2623:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=r(7462),n=(r(7294),r(3905)),o=r(5488),l=r(5162);const i={title:"Preparation for Instructor",lastupdate:"git",lastupdateauthor:"git"},s=void 0,u={unversionedId:"instructor/instructor",id:"instructor/instructor",title:"Preparation for Instructor",description:"Bootcamp Instructor Preparation",source:"@site/docs/instructor/instructor.md",sourceDirName:"instructor",slug:"/instructor/",permalink:"/rh-ocp/instructor/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/instructor/instructor.md",tags:[],version:"current",lastUpdatedBy:"Nutanix Japan",lastUpdatedAt:1679649584,formattedLastUpdatedAt:"Mar 24, 2023",frontMatter:{title:"Preparation for Instructor",lastupdate:"git",lastupdateauthor:"git"},sidebar:"tutorialSidebar",previous:{title:"Windows Tools VM",permalink:"/rh-ocp/toolsvms/windows_tools_vm"}},c={},p=[{value:"Bootcamp Instructor Preparation",id:"bootcamp-instructor-preparation",level:2},{value:"Deploy Foundation VMs",id:"deploy-foundation-vms",level:2}],m={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"bootcamp-instructor-preparation"},"Bootcamp Instructor Preparation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Get the number of participants"),(0,n.kt)("li",{parentName:"ul"},"Book a 4 node HPOC (one for each participant or a participant group)"),(0,n.kt)("li",{parentName:"ul"},"Book a Single node HPOC (same datacenter as the 4 node HPOC)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Deploy as many number of Foundation VMs on SPOC using Terraform"),(0,n.kt)("li",{parentName:"ul"},"Collect details of Foundation VMs and pass it on to participants")))),(0,n.kt)("h2",{id:"deploy-foundation-vms"},"Deploy Foundation VMs"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On your workstation install Terraform"),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Mac",label:"Mac",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-text"},"brew tap hashicorp/tap\nbrew install hashicorp/tap/terraform\n"))),(0,n.kt)(l.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-PowerShell"},"choco install terraform\n"))),(0,n.kt)(l.Z,{value:"CentOS",label:"CentOS",mdxType:"TabItem"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum update -y \nyum install -y yum-utils\nyum-config-manager --add-repo https://rpm.releases.hashicorp.com/RHEL/hashicorp.repo\nyum -y install terraform\nyum -y install git\n"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a terraform working directory and initialise terraform "),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir terraform\ncd terraform\nalias tf=terraform\ntf version\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Download the following files in terraform directory"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -OL \n")))))}d.isMDXComponent=!0}}]);