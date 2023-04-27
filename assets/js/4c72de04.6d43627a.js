"use strict";(self.webpackChunkrh_ocp=self.webpackChunkrh_ocp||[]).push([[4324],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(a),d=n,u=c["".concat(o,".").concat(d)]||c[d]||k[d]||i;return a?r.createElement(u,l(l({ref:t},m),{},{components:a})):r.createElement(u,l({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:n,l[1]=p;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1372:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const i={title:"PC Deployment",lastupdate:"git",lastupdateauthor:"git"},l="Prism Central Deployment",p={unversionedId:"pcdeploy/pcdeploy",id:"pcdeploy/pcdeploy",title:"PC Deployment",description:"Overview",source:"@site/docs/pcdeploy/pcdeploy.md",sourceDirName:"pcdeploy",slug:"/pcdeploy/",permalink:"/rh-ocp/pcdeploy/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/pcdeploy/pcdeploy.md",tags:[],version:"current",lastUpdatedBy:"Nutanix Japan",lastUpdatedAt:1682600550,formattedLastUpdatedAt:"Apr 27, 2023",frontMatter:{title:"PC Deployment",lastupdate:"git",lastupdateauthor:"git"},sidebar:"tutorialSidebar",previous:{title:"Foundation",permalink:"/rh-ocp/diyfoundation/"},next:{title:"Deploy Nutanix CSI for OCP",permalink:"/rh-ocp/ocp_ntnx_hci/ocp_csi"}},o={},s=[{value:"Overview",id:"overview",level:2},{value:"Create Primary Network",id:"create-primary-network",level:2},{value:"Prism Central Deploy",id:"prism-central-deploy",level:2},{value:"Prism Central Registration",id:"prism-central-registration",level:2}],m={toc:s};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"prism-central-deployment"},"Prism Central Deployment"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Estimated time to complete: ",(0,n.kt)("strong",{parentName:"p"},"30 Minutes"))),(0,n.kt)("p",null,"This lab will introduce Prism Central's(PC) One-Click deploy process"),(0,n.kt)("h2",{id:"create-primary-network"},"Create Primary Network"),(0,n.kt)("p",null,"In this sectio we will create a AHV network called Primary to host our Prism Central and other workloads."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open ",(0,n.kt)("inlineCode",{parentName:"p"},"https://Cluster Virtual IP:9440")," (",(0,n.kt)("a",{parentName:"p",href:"https://10.42.xx.37:9440"},"https://10.42.xx.37:9440"),") in your browser and log in with the following credentials:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Username")," - admin"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Password")," - check password you set up during Foundation"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the Prism Element UI click :fontawesome-solid-gear: > ",(0,n.kt)("strong",{parentName:"p"},"Network Configuration > Networks > Create Network"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Fill out the following fields:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Name")," - Primary"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Virtual Switch")," - vs0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"VLAN ID")," - 0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Enable IP address management")," - leave it unselected"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Save")))),(0,n.kt)("h2",{id:"prism-central-deploy"},"Prism Central Deploy"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to ",(0,n.kt)("strong",{parentName:"p"},"Home")," page and click ",(0,n.kt)("strong",{parentName:"p"},"Register or create new")," in\nPrism Central widget."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(7964).Z,width:"470",height:"152"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Choose the first ",(0,n.kt)("strong",{parentName:"p"},"Deploy")," option."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(5333).Z,width:"470",height:"468"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Download the latest version and click ",(0,n.kt)("strong",{parentName:"p"},"Deploy 1-VM PC")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(674).Z,width:"468",height:"470"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Fill out the following fields:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"VM Name")," - PC"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Select A Container")," - SelfServiceContainer"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"VM Sizing")," - SMALL - (UP TO 2500 VMs)")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(6740).Z,width:"486",height:"517"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In Network config, fill our the following details (XX here is your POC number)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"AHV Network")," - Primary"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"IP Address")," - 10.42.XX.39"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Subnet Mask")," - 255.255.255.128"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Default Gateway")," - 10.42.XX.1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"DNS Address(Es)")," - 10.42.196.10")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(7657).Z,width:"474",height:"465"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Deploy"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"When the deployment finishes, browse to your Prism Central IP address (e.g. 10.42.XX.39) with the following details:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Username")," - admin"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Password")," - default with capital N"),(0,n.kt)("li",{parentName:"ul"},"change password to - check password in RX"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Test if you can login Prism Central with the new password")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Accept EULA if displayed"))),(0,n.kt)("h2",{id:"prism-central-registration"},"Prism Central Registration"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Log back in to POCXXX Prism Element Cluster (",(0,n.kt)("a",{parentName:"p",href:"https://10.42.xx.37:9440"},"https://10.42.xx.37:9440"),")")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to ",(0,n.kt)("strong",{parentName:"p"},"Home")," page and click cluster name ",(0,n.kt)("strong",{parentName:"p"},"POCXXX")," and provide a cluster data service ip ",(0,n.kt)("strong",{parentName:"p"},"10.42.xx.38")," "),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(5180).Z,width:"440",height:"597"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Register or create new")," in Prism Central widget. "),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(7964).Z,width:"470",height:"152"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Choose the second ",(0,n.kt)("strong",{parentName:"p"},"Connect")," option. "),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(5333).Z,width:"470",height:"468"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Next")," "),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(3774).Z,width:"497",height:"402"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Fill out the following fields, leave others as default and click ",(0,n.kt)("strong",{parentName:"p"},"Connect"),":"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Prism Central IP")," - 10.42.xx.39"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Port")," - 9440"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Username")," - admin"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Password")," - use the same password as your cluster")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(7217).Z,width:"490",height:"461"})),(0,n.kt)("p",{parentName:"li"},"You will see an ",(0,n.kt)("strong",{parentName:"p"},"OK")," with PC's IP in Prism Central widget."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(9332).Z,width:"339",height:"195"})))),(0,n.kt)("p",null,"You have successfully registered Prism Element to be managed by your Prism Central."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Once the Prism Element registration is complete, several management features on Prism Element will be ",(0,n.kt)("strong",{parentName:"p"},"Read-Only")," mode but fully available in Prism Central.")),(0,n.kt)("p",null,"In the next section we will use this Prism Central functionality to deploy a OCP cluster."))}c.isMDXComponent=!0},7964:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/1-60c41715f74a0781f0c4f2b237be60df.png"},5333:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/2-fd5780ac653e360a6f4b012e09c2b66c.png"},674:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/3-783fc47e61aa095dfa19f20b45028abb.png"},6740:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/4-a134d342537ec7e2dcb52cdcc14b476e.png"},7657:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/5-ce56b98d7224dcdbe7e353175112508c.png"},3774:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/6-972e3af273c96fdbbd85be433d95ffa1.png"},7217:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/7-a6b0fee57977249e7f06d189cb3eec73.png"},9332:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/8-c0235a6e536aa77f8fc000b58ce67165.png"},5180:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/9-fd16acc3c2b1de372f236067321e58df.png"}}]);