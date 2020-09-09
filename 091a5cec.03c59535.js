(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{55:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var i=n(2),r=n(6),o=(n(0),n(99)),s={id:"SchedulingGuidance",title:"Scheduling Guidance"},a={unversionedId:"Session/SchedulingGuidance",id:"Session/SchedulingGuidance",isDocsHomePage:!1,title:"Scheduling Guidance",description:"You can only create sessions for the dates, students, services, and hours assigned to you. This ensures that your sessions are eligible for reimbursement.",source:"@site/docs/Session/SchedulignGuidance.md",permalink:"/Note-Documentation/docs/Session/SchedulingGuidance",editUrl:"https://github.com/Chorus/Note-Documentation/edit/master/website/docs/Session/SchedulignGuidance.md",sidebar:"someSidebar",previous:{title:"Create Session",permalink:"/Note-Documentation/docs/Session/SessionCreate"},next:{title:"Edit a Session",permalink:"/Note-Documentation/docs/Session/EditSession"}},c=[{value:"Date",id:"date",children:[]},{value:"Student",id:"student",children:[]},{value:"Service",id:"service",children:[]},{value:"Location",id:"location",children:[]},{value:"Start and End time",id:"start-and-end-time",children:[]},{value:"Session Validation",id:"session-validation",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can only create sessions for the dates, students, services, and hours assigned to you. This ensures that your sessions are eligible for reimbursement."),Object(o.b)("h3",{id:"date"},"Date"),Object(o.b)("p",null,"The date is automatically populated based on the calendar view you are coming from."),Object(o.b)("h3",{id:"student"},"Student"),Object(o.b)("p",null,"Clicking on the student field will open a list of your active students. Only students for which you still have unscheduled assignments on the selected date will be enabled. If all students are disabled, then you have no assignments that need to be scheduled for the selected date."),Object(o.b)("p",null,"Once you select the student, the service field will be unlocked. You can select from a list of services based on your assignments for the selected student. If you go back and change the student after selecting the service, location, and/or timing then subsequent fields will be reset."),Object(o.b)("h3",{id:"service"},"Service"),Object(o.b)("p",null,"Once you select the student, the service field will be unlocked. You can select from a list of services based on your assignments for the selected student."),Object(o.b)("p",null,"If you change the student after selecting the service, location, and/or timing then subsequent fields will be reset."),Object(o.b)("h3",{id:"location"},"Location"),Object(o.b)("p",null,"Once you select the service, the location field will be unlocked. You can select the location of the session."),Object(o.b)("p",null,"If you change the service after selecting location, the location field will be reset."),Object(o.b)("h3",{id:"start-and-end-time"},"Start and End time"),Object(o.b)("p",null,"Select the start time and end time for the session. The session duration will be calculated and displayed. Keep in mind not to go over your assigned hours."),Object(o.b)("p",null,"If there's an error in your duration, adjust your start time or end time accordingly and the duration will be recalculated."),Object(o.b)("h2",{id:"session-validation"},"Session Validation"),Object(o.b)("p",null,"Every session that you create is validated by the agency to ensure it will be reimbursable. Your session will be in the pending validation status when you first save it until the app syncs, and in the validating status while it's being validated. You can trigger a sync (link) to speed up session validation."),Object(o.b)("p",null,"Once validated, a future session will be in the scheduled status."),Object(o.b)("p",null,"If your session is declined, you can edit the session (link) to correct the error."))}u.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var i=n(0),r=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,p=d["".concat(s,".").concat(h)]||d[h]||b[h]||o;return n?r.a.createElement(p,a(a({ref:t},l),{},{components:n})):r.a.createElement(p,a({ref:t},l))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=h;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var l=2;l<o;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);