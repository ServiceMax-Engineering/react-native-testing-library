(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(1),i=n(9),r=(n(0),n(158)),o={id:"migration-v2",title:"Migration to 2.0"},l={id:"migration-v2",title:"Migration to 2.0",description:"This guide describes steps necessary to migrate from React Native Testing Library `v1.x` to `v2.0`.",source:"@site/docs/MigrationV2.md",permalink:"/react-native-testing-library/docs/migration-v2",editUrl:"https://github.com/callstack/react-native-testing-library/blob/master/docs/MigrationV2.md",sidebar:"docs",previous:{title:"Queries",permalink:"/react-native-testing-library/docs/api-queries"},next:{title:"React Navigation",permalink:"/react-native-testing-library/docs/react-navigation"}},b=[{value:"Dropping Node 8",id:"dropping-node-8",children:[]},{value:"Auto Cleanup",id:"auto-cleanup",children:[]},{value:"WaitFor API changes",id:"waitfor-api-changes",children:[]},{value:"Removed global <code>debug</code> function",id:"removed-global-debug-function",children:[]},{value:"Removed global <code>shallow</code> function",id:"removed-global-shallow-function",children:[]},{value:"Removed functions",id:"removed-functions",children:[]},{value:"Some <code>ByTestId</code> queries behavior changes",id:"some-bytestid-queries-behavior-changes",children:[]},{value:"Deprecated <code>flushMicrotasksQueue</code>",id:"deprecated-flushmicrotasksqueue",children:[]}],c={rightToc:b};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This guide describes steps necessary to migrate from React Native Testing Library ",Object(r.b)("inlineCode",{parentName:"p"},"v1.x")," to ",Object(r.b)("inlineCode",{parentName:"p"},"v2.0"),"."),Object(r.b)("h2",{id:"dropping-node-8"},"Dropping Node 8"),Object(r.b)("p",null,"Node 8 reached its EOL more than 5 months ago, so it's about time to target the library to Node 10. If you used lower version, you'll have to upgrade to v10, but we recommend using the latest LTS version."),Object(r.b)("h2",{id:"auto-cleanup"},"Auto Cleanup"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"cleanup()")," function is now called automatically after every test if your testing framework supports ",Object(r.b)("inlineCode",{parentName:"p"},"afterEach")," hook (like Jest, Mocha, and Jasmine)."),Object(r.b)("p",null,"You should be able to remove all ",Object(r.b)("inlineCode",{parentName:"p"},"afterEach(cleanup)")," calls in your code."),Object(r.b)("p",null,"This change might break your code, if you tests are not isolated, i.e. you call ",Object(r.b)("inlineCode",{parentName:"p"},"render")," outside ",Object(r.b)("inlineCode",{parentName:"p"},"test")," block. Generally, you should ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://kentcdodds.com/blog/test-isolation-with-react"}),"keep your tests isolated"),". But if you can't or don't want to do this right away you can prevent this behavior using any of the following ways:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"by importing ",Object(r.b)("inlineCode",{parentName:"p"},"'react-native-testing-library/pure'")," instead of ",Object(r.b)("inlineCode",{parentName:"p"},"'react-native-testing-library'"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"by importing ",Object(r.b)("inlineCode",{parentName:"p"},"'react-native-testing-library/dont-cleanup-after-each'")," before importing ",Object(r.b)("inlineCode",{parentName:"p"},"'react-native-testing-library'"),". You can do it in a global way by using Jest's ",Object(r.b)("inlineCode",{parentName:"p"},"setupFiles")," like this:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "setupFiles": ["react-native-testing-library/dont-cleanup-after-each"];\n}\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"by setting ",Object(r.b)("inlineCode",{parentName:"p"},"RTNL_SKIP_AUTO_CLEANUP")," env variable to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),". You can do this with ",Object(r.b)("inlineCode",{parentName:"p"},"cross-evn")," like this:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"cross-env RNTL_SKIP_AUTO_CLEANUP=true jest\n")))),Object(r.b)("h2",{id:"waitfor-api-changes"},"WaitFor API changes"),Object(r.b)("p",null,"We renamed ",Object(r.b)("inlineCode",{parentName:"p"},"waitForElement")," function to ",Object(r.b)("inlineCode",{parentName:"p"},"waitFor")," for consistency with React Testing Library. Additionally, the signature has slightly changed from:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"export default function waitForElement<T>(\n  expectation: () => T,\n  timeout?: number,\n  interval?: number\n): Promise<T> {}\n")),Object(r.b)("p",null,"to:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"export default function waitFor<T>(\n  expectation: () => T,\n  options: {\n    timeout?: number,\n    interval?: number,\n  }\n): Promise<T> {}\n")),Object(r.b)("p",null,"Both changes should improve code readibility."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"waitFor")," calls (and hence also ",Object(r.b)("inlineCode",{parentName:"p"},"findBy")," queries) are now wrapped in ",Object(r.b)("inlineCode",{parentName:"p"},"act")," by default, so that you should no longer need to use ",Object(r.b)("inlineCode",{parentName:"p"},"act")," directly in your tests."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You can usually avoid ",Object(r.b)("inlineCode",{parentName:"p"},"waitFor")," by a proper use of ",Object(r.b)("inlineCode",{parentName:"p"},"findBy")," asynchronous queries. It will result in more streamlined testing experience."))),Object(r.b)("h2",{id:"removed-global-debug-function"},"Removed global ",Object(r.b)("inlineCode",{parentName:"h2"},"debug")," function"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"debug()")," method returned from ",Object(r.b)("inlineCode",{parentName:"p"},"render()")," function is all you need. We removed the global export to avoid confusion."),Object(r.b)("h2",{id:"removed-global-shallow-function"},"Removed global ",Object(r.b)("inlineCode",{parentName:"h2"},"shallow")," function"),Object(r.b)("p",null,"Shallow rendering React component is usually not a good idea, so we decided to remove the API. But, if you find it useful or need to support legacy tests, feel free to use this implementation:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import ShallowRenderer from 'react-test-renderer/shallow';\n\nexport function shallow(instance: ReactTestInstance | React.Element<any>) {\n  const renderer = new ShallowRenderer();\n  renderer.render(React.createElement(instance.type, instance.props));\n\n  return { output: renderer.getRenderOutput() };\n}\n")),Object(r.b)("h2",{id:"removed-functions"},"Removed functions"),Object(r.b)("p",null,"Following query functions have been removed after being deprecated for more than a year now:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"getByName")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"getAllByName")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"queryByName")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"queryAllByName"))),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"*ByType")," and ",Object(r.b)("inlineCode",{parentName:"p"},"*ByProps")," queries has been prefixed with ",Object(r.b)("inlineCode",{parentName:"p"},"UNSAFE_"),". You can rename them using global search/replace in your project:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"getByType")," -> ",Object(r.b)("inlineCode",{parentName:"li"},"UNSAFE_getByType")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"getAllByType")," -> ",Object(r.b)("inlineCode",{parentName:"li"},"UNSAFE_getAllByType")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"queryByType")," -> ",Object(r.b)("inlineCode",{parentName:"li"},"UNSAFE_queryByType")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"queryAllByType")," -> ",Object(r.b)("inlineCode",{parentName:"li"},"UNSAFE_queryAllByType")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"getByProps")," -> ",Object(r.b)("inlineCode",{parentName:"li"},"UNSAFE_getByProps")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"getAllByProps")," -> ",Object(r.b)("inlineCode",{parentName:"li"},"UNSAFE_getAllByProps")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"queryByProps")," -> ",Object(r.b)("inlineCode",{parentName:"li"},"UNSAFE_queryByProps")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"queryAllByProps")," -> ",Object(r.b)("inlineCode",{parentName:"li"},"UNSAFE_queryAllByProps"))),Object(r.b)("h2",{id:"some-bytestid-queries-behavior-changes"},"Some ",Object(r.b)("inlineCode",{parentName:"h2"},"ByTestId")," queries behavior changes"),Object(r.b)("p",null,"In version ",Object(r.b)("inlineCode",{parentName:"p"},"1.x")," the ",Object(r.b)("inlineCode",{parentName:"p"},"getByTestId")," and ",Object(r.b)("inlineCode",{parentName:"p"},"queryByTestId")," queries could return non-native tinstances. This was a serious bug. Other query functions like ",Object(r.b)("inlineCode",{parentName:"p"},"getAllByTestId"),", ",Object(r.b)("inlineCode",{parentName:"p"},"queryAllByTestId"),", ",Object(r.b)("inlineCode",{parentName:"p"},"findByTestId")," and ",Object(r.b)("inlineCode",{parentName:"p"},"findAllByTestId")," didn't have this issue. These correctly returned only native components instances (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"View"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Text"),", etc) that got the ",Object(r.b)("inlineCode",{parentName:"p"},"testID"),"."),Object(r.b)("p",null,"In v2 we fixed this inconsistency, which may result in failing tests, if you relied on this behavior. There are few ways to handle these failures:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"pass the ",Object(r.b)("inlineCode",{parentName:"li"},"testID")," prop down so it can reach a native component, like ",Object(r.b)("inlineCode",{parentName:"li"},"View")," or ",Object(r.b)("inlineCode",{parentName:"li"},"Text")),Object(r.b)("li",{parentName:"ul"},"replace ",Object(r.b)("inlineCode",{parentName:"li"},"testID")," with proper ",Object(r.b)("inlineCode",{parentName:"li"},"accessibilityHint")," or ",Object(r.b)("inlineCode",{parentName:"li"},"accessibilityLabel")," if it benefits the user"),Object(r.b)("li",{parentName:"ul"},"use safe queries like ",Object(r.b)("inlineCode",{parentName:"li"},"*ByText")," or ",Object(r.b)("inlineCode",{parentName:"li"},"*ByA11yHint"))),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"In general, you should avoid ",Object(r.b)("inlineCode",{parentName:"p"},"*byTestId")," queries when possible. Use queries that check things that the user can interact with. Like ",Object(r.b)("inlineCode",{parentName:"p"},"*ByText")," or ",Object(r.b)("inlineCode",{parentName:"p"},"*ByPlaceholder")," or accessibility queries (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"*ByA11yHint"),", ",Object(r.b)("inlineCode",{parentName:"p"},"*ByA11yLabel"),")."))),Object(r.b)("h2",{id:"deprecated-flushmicrotasksqueue"},"Deprecated ",Object(r.b)("inlineCode",{parentName:"h2"},"flushMicrotasksQueue")),Object(r.b)("p",null,"We have deprecated ",Object(r.b)("inlineCode",{parentName:"p"},"flushMicrotasksQueue")," and plan to remove it in the next major. We have better alternatives available for helping you write async tests \u2013 ",Object(r.b)("inlineCode",{parentName:"p"},"findBy")," async queries and ",Object(r.b)("inlineCode",{parentName:"p"},"waitFor")," helper."),Object(r.b)("p",null,"If you can't or don't want to migrate your tests, don't worry. You can use the same implementation we have today:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function flushMicrotasksQueue() {\n  return new Promise((resolve) => setImmediate(resolve));\n}\n")))}s.isMDXComponent=!0}}]);